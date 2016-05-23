System.Gadget.onSettingsClosing = Cj;

var Cp = new ActiveXObject("WScript.Shell");
var Cq;

function Ci(Cv)
{
	regkey = 'HKLM\\SYSTEM\\CurrentControlSet\\Services\\WinRing0_1_2_0\\';
	try
	{
		return Cp.RegRead(regkey + Cv);
	}
	catch(err)
	{
		return "";
	}
}
	
function AV()
{
	Ck();
}

function AW() { }

function Cj(Cw)
{
	clearInterval(Cq);
	if(Cw.closeAction == Cw.Action.commit)
		Cm();
	Cw.cancel=false;
}

function Ck()
{
	Ap();
	Cl();
	Cq = setInterval("Cl()", 1000);
}

function Cl()
{
	var Cr = (Ci("DisplayName") == "WinRing0_1_2_0");
	var Cs = (Ci("Start") == "2");
	var Ct = Ci("ImagePath");
	DJ.innerText = Cr ? "Yes" : "No";
	DI.innerText = Cs ? "Yes" : "No";
	DM.disabled = !Cs;
	DL.disabled = Cr;
	var Cu = new Array();
	Cu = Ct.split("\\");
	DK.innerText = (Cu.length > 1) ? "\\" + Cu[Cu.length - 2] : "Not Installed";
	DK.title = Ct;
}

function Ap()
{
	Cy.value = System.Gadget.Settings.read("s_drawstyle");
	CY.value = System.Gadget.Settings.read("s_background");
	
	if(System.Gadget.Settings.readString("s_tjmax") == "")
		DF.value = 100;
	else
		DF.value = System.Gadget.Settings.read("s_tjmax");
	
	if(System.Gadget.Settings.readString("b_clock") == "")
		Cz.checked = false;
	else
		Cz.checked = System.Gadget.Settings.read("b_clock");
	
	if(System.Gadget.Settings.readString("b_decay") == "")
		DD.checked = false;
	else
		DD.checked = System.Gadget.Settings.read("b_decay");
	
	if(System.Gadget.Settings.readString("b_fahrenheit") == "")
		DE.checked = false;
	else
		DE.checked = System.Gadget.Settings.read("b_fahrenheit");
	
	if(System.Gadget.Settings.readString("b_detect_max_clock") == "")
		DA.checked = false;
	else
		DA.checked = System.Gadget.Settings.read("b_detect_max_clock");
	
	if(System.Gadget.Settings.readString("b_realtime_clock") == "")
		DB.checked = false;
	else
		DB.checked = System.Gadget.Settings.read("b_realtime_clock");
	
	if(System.Gadget.Settings.readString("b_mem_usage") == "")
		DC.checked = false;
	else
		DC.checked = System.Gadget.Settings.read("b_mem_usage");
	
	if(System.Gadget.Settings.readString("b_startup_delay") == "")
		DG.checked = false;
	else DG.checked = System.Gadget.Settings.read("b_startup_delay");
}

function Cm()
{
	System.Gadget.Settings.write("s_drawstyle", Cy.value);
	System.Gadget.Settings.write("s_background", CY.value);
	System.Gadget.Settings.write("s_tjmax", DF.value);
	System.Gadget.Settings.write("b_clock", Cz.checked);
	System.Gadget.Settings.write("b_decay", DD.checked);
	System.Gadget.Settings.write("b_fahrenheit", DE.checked);
	System.Gadget.Settings.write("b_detect_max_clock", DA.checked);
	System.Gadget.Settings.write("b_realtime_clock", DB.checked);
	System.Gadget.Settings.write("b_mem_usage", DC.checked);
	System.Gadget.Settings.write("b_startup_delay", DG.checked);
}

function Cn()
{
	System.Shell.execute(System.Gadget.path + "\\InstallDriver.exe", "-installonly", System.Gadget.path, "open");
}

function unCn()
{
	System.Gadget.document.parentWindow.$DeInitLib();
	System.Shell.execute(System.Gadget.path + "\\InstallDriver.exe", "-uninstallonly", System.Gadget.path, "open");
}