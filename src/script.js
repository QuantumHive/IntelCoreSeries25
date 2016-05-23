var AF = "{07474513-7B58-45c7-B3E6-13A3669B1AFD}";
var AG = "IntelDTSReader.IntelDTS";
var AH = "file:///" + System.Gadget.path.replace(new RegExp("\\\\","g"), "/") + "/IntelDTSReader.dll";
var AI = "IntelDTSReader";
var AJ = new ActiveXObject("WScript.Shell");
var AK;
var AL = new ActiveXObject("Scripting.FileSystemObject");
var AM = AL.FileExists(System.Gadget.path + "\\debug.txt");

function AA(AT)
{
	try
	{
		if(AM)
		{
			var AN = new ActiveXObject("Scripting.FileSystemObject");
			var AO = 2;
			if(AT != "")
				AO=8;
			var AP = AN.OpenTextFile(System.Gadget.path + "\\debug.txt", AO);
			AP.WriteLine(new Date().toLocaleString() + ": " + AT);
			AP.Close();
			AP=null;
		}
	}
	catch (err) { }
}

function AB()
{
	var AQ = AK + "\\Software\\Classes\\" + AG + "\\";
	var AR = AK + "\\Software\\Classes\\CLSID\\" + AF + "\\";
	try
	{
		AJ.RegWrite(AQ, AG, "REG_SZ");
		AJ.RegWrite(AQ + "CLSID\\", AF, "REG_SZ");
		AJ.RegWrite(AR, AG, "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\", "mscoree.dll", "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\ThreadingModel", "Both", "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\Class", AG, "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\Assembly", AI + ", Version=1.0.2588.9125, Culture=neutral, PublicKeyToken=null", "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\RuntimeVersion","v2.0.50727","REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\CodeBase", AH, "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\1.0.2588.9125\\Class", AG, "REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\1.0.2588.9125\\Assembly", AI + ", Version=1.0.2588.9125, Culture=neutral, PublicKeyToken=null","REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\1.0.2588.9125\\RuntimeVersion","v2.0.50727","REG_SZ");
		AJ.RegWrite(AR + "InprocServer32\\1.0.2588.9125\\CodeBase", AH, "REG_SZ");
		AJ.RegWrite(AR + "ProgId\\", AG, "REG_SZ");
		AJ.RegWrite(AR + "ProgId\\Implemented Categories\\{62C8FE65-4EBB-45E7-B440-6E39B2CDBF29}\\", "", "REG_SZ");
	}
	catch (err) { }
}

function AC(AK)
{
	var AQ = AK + "\\Software\\Classes\\" + AG + "\\";
	var AR = AK + "\\Software\\Classes\\CLSID\\" + AF + "\\";
	
	try
	{
		AJ.RegDelete(AR + "ProgId\\Implemented Categories\\{62C8FE65-4EBB-45E7-B440-6E39B2CDBF29}\\");
		AJ.RegDelete(AR + "ProgId\\Implemented Categories\\");
		AJ.RegDelete(AR + "ProgId\\");
		AJ.RegDelete(AR + "InprocServer32\\1.0.2588.9125\\");
		AJ.RegDelete(AR + "InprocServer32\\");
		AJ.RegDelete(AR);
		AJ.RegDelete(AQ + "CLSID\\");
		AJ.RegDelete(AQ);
	}
	catch (err) { }
}

function AD(AU)
{
	AK = AU;
	try
	{
		AB();
		return new ActiveXObject(AG);
	}
	catch (err)
	{
		AC(AU);
		return null;
	}
}

function AE()
{
	var AS;
	AS = AD("HKCU");
	if(AS == null)
		AS = AD("HKLM");
	return AS;
}