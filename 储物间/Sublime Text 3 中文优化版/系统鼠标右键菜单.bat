@echo Off
:START
CLS
echo *=========================================================================*
echo *         Sublime Text��װ��ɺ�û���Ҽ��򿪷�ʽ�����ļ��ܲ����㡣      *
echo * Ϊ�˷����ݴ��ļ�������ͨ������Aѡ������Ҽ��˵�Sublime Text�򿪷�ʽ *
echo *                                                                         *
echo *            ע��: ��bat�ļ������sublime_text.exe��ͬ��Ŀ¼              *
echo *                            [A]����Ҽ��˵�                              *
echo *                            [D]ɾ���Ҽ��˵�                              *
echo *                            [Q]�˳�                                      *
echo *                                                                         *
echo *                           ��ǰ�ˣ�www.webqianduan.cn                    *
echo *=========================================================================*
Set /P Choice=����������������ѡ��Ҫ���еĲ��� (A/D/Q) ��Ȼ�󰴻س���
If /I "%Choice%"=="A" Goto :ADD
If /I "%Choice%"=="D" Goto :DEL
If /I "%Choice%"=="Q" Exit

START

:ADD
CLS
set str=%cd%
echo Windows Registry Editor Version 5.00> tmp.reg
echo [HKEY_CLASSES_ROOT\*\shell]>> tmp.reg
echo [HKEY_CLASSES_ROOT\*\shell\SublimeText]>> tmp.reg
echo @="��Sublime Text 3�����Ż����">> tmp.reg
echo "Icon"="\"%str:\=\\%\\sublime_text.exe\",0">> tmp.reg
echo [HKEY_CLASSES_ROOT\*\shell\SublimeText\Command]>> tmp.reg
echo @="\"%str:\=\\%\\sublime_text.exe\" \"%%1^\"">> tmp.reg

echo *=========================================================================*
echo *                                                                         *
echo *   ���ڽ����ɵ�ע����Ϣд��ע����������ǡ���ť��                      *
echo *                                                                         *
echo *=========================================================================*
tmp.reg
del tmp.reg
GOTO :START

:DEL
echo Windows Registry Editor Version 5.00> tmp.reg
echo [-HKEY_CLASSES_ROOT\*\shell\SublimeText]>> tmp.reg
echo [-HKEY_CLASSES_ROOT\Directory\shell\sublime]>> tmp.reg
echo [-HKEY_CLASSES_ROOT\Directory\Background\shell\sublime]>> tmp.reg
tmp.reg
del tmp.reg
GOTO :START