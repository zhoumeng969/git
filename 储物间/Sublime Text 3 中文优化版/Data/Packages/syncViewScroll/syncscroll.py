import sublime, sublime_plugin

import _thread as thread
import time

synch_scroll_running = False
synch_scroll_current_view_object = None

def updatePos(view):
	#print 'updatepos'
	view.settings().set('origPos',view.viewport_position()[1])

def initialize(view):
	#print 'initialize'
	if not view.settings().has('syncScroll'):
		view.settings().set('syncScroll',False)
		#the add on change should be here, it's elsewhere for debug reasons
	updatePos(view)
	view.settings().clear_on_change('syncScroll') #for debug reasons
	view.settings().add_on_change('syncScroll', updateStatus) #when syncScroll is toggled, update status bar
def plugin_loaded():
	if not 'running_synch_scroll_loop' in globals():
		global running_synch_scroll_loop
		running_synch_scroll_loop = True
		thread.start_new_thread(synch_scroll_loop, ())
	#on startup initialize every view
	print ("syncScroll starting")
	for window in sublime.windows():
		for view in window.views():
			initialize(view)
def synch_scroll_loop():
	while True:
		global synch_scroll_running
		if not synch_scroll_running:
			synch_scroll_running = True
			sublime.set_timeout(lambda: synch_scroll(), 0)
		time.sleep(0.08)
def synch_scroll():
	global synch_scroll_running
	global synch_scroll_current_view_object
	# print ("one timeout")
	current_view = synch_scroll_current_view_object
	if current_view is None or current_view.is_loading() or not current_view.settings().get('syncScroll'):
		synch_scroll_running = False
		return
	callingViewPos = current_view.viewport_position()[1]
	origCallingViewPos = current_view.settings().get('origPos')
	# print ('modified. origCallingViewPos=', origCallingViewPos, 'callingViewPos= ', callingViewPos)
	if callingViewPos != origCallingViewPos: #and it moved vertically
		# print ("it moved")
		for view in current_view.window().views():
			if view.settings().get('syncScroll') and view.id() != current_view.id(): #if view has syncScroll enabled AND we're not talking about the same view as view
				#we move view
				viewPos = view.viewport_position()[1]
				newViewPos = viewPos+callingViewPos-origCallingViewPos
				# print ("moving. viewPos= ",viewPos," newViewPos= ",newViewPos)
				view.set_viewport_position((view.viewport_position()[0],newViewPos), True) #move the other view
				updatePos(view)
		updatePos(current_view) #update original positions
	synch_scroll_running = False

def updateStatus():
	# print "updateStatus"
	for window in sublime.windows():
		for view in window.views():
			if view.settings().get('syncScroll'):
				view.set_status('syncScroll','[Sync ON]')
			else:
				view.erase_status('syncScroll')

class syncScrollListener(sublime_plugin.EventListener):
	def on_activated(self, view):
		global synch_scroll_current_view_object
		synch_scroll_current_view_object = view
	def on_load(self,view):
		#on load add settings to a view
		# print ("on_load")
		initialize(view)

class ToggleSyncScrollCommand(sublime_plugin.TextCommand):
	def run(self, edit, setting):
		current_state = self.view.settings().get('syncScroll')
		self.view.settings().set('syncScroll',not current_state)
	def is_checked(self, setting):
		if not self.view.settings().has('syncScroll'):
			initialize(self.view)
		# print ("current setting",self.view.settings().get('syncScroll'))
		return self.view.settings().get('syncScroll')