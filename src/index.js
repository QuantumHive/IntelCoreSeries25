System.Gadget.settingsUI = "2fdb1351-e7a7-423e-a911-84a96384aaf5";
System.Gadget.onSettingsClosed = AX;
var Au = GetObject("winmgmts:\\\\.\\root\\CIMV2");
var Av = AE();
var Aw = System.Machine.CPUs.count;
var Ax = 100;
var Ay = false;
var Az = false;
var BA = false;
var BB = false;
var BC = false;
var BD = false;
var BE = false;
var BF = true;
var BG = 0;
var BH = new Array();
var BI = new Array();
var BJ = new Array();
var BK = 110;
var BL;
var BM = 0;
var BN = 0;
var BO;
var BP;
var BQ;
var BR;
var BS;
var BT = new Array();
var BU = new Array();
var BV = new Array();
var BW;
var BX;
var BY;
var BZ = 0;
var Ba = 15;
var Bb = "orb";

function $DeInitLib()
{
    try
    {
        Av.DeInit();
    }
    catch (ex)
    {
        AA("$DeInitLib: " + ex.name + " - " + ex.message);
    }
}

function AV()
{
    try
    {
        AA("");
        AA("Starting IntelCoreSeries Gadget!");
        Aa();
        An();
        Ap();
        AY();
        setInterval("AY()", 1000);
    }
    catch (ex)
    {
        AA("AV: " + ex.name + " - " + ex.message);
    }
}

function AW() { }

function AX()
{
    try
    {
        Ap();
    }
    catch (ex)
    {
        AA("AX: " + ex.name + " - " + ex.message);
    }
}

function AY()
{
    try
    {
        Af();
        Ai();
        Ao();
    }
    catch (ex)
    {
        AA("AY: " + ex.name + " - " + ex.message);
    }
}

function AZ(CQ)
{
    var Bc = 4; var Bd = 2; var Be = 128;
    var Bf = 0; var Bg = 0; var Bh = 0; var Bi = 0; var Bj = 0; var Bk = 0;
    try
    {
        do
        {
            Bf = CQ - Bc;
            Bg = Math.round((CQ / 2) - (Bd / 2));
            Bh = Math.round(Bg - Bc);
            Bi = Math.round(Bc + ((Bh / 2) - (Be / 2)));
            Bj = Math.round(Bf - (Bg + Bd));
            Bk = Math.round((Bg + Bd) + ((Bj / 2) - (Be / 2)));
            if (!((Bh % 2 == 0) && (Bj % 2 == 0)))
                CQ = CQ + 1;
        } while (!((Bh % 2 == 0) && (Bj % 2 == 0)));
        document.body.style.height = CQ;
        CY.style.height = CQ;
        BN = CQ;
        CY.removeObjects();
        BR = CY.addImageObject("images/" + Bb + "_back_high.png", 0, Bi);
        BR.height = Bh;
        BS = CY.addImageObject("images/" + Bb + "_back_low.png", 0, Bk);
        BS.height = Bj;
        BO = CY.addImageObject("images/" + Bb + "_back_top.png", 0, 0);
        BQ = CY.addImageObject("images/" + Bb + "_back_bottom.png", 0, Bf - 1);
        BP = CY.addImageObject("images/" + Bb + "_back_middle.png", 0, Bg - 1);
    }
    catch (ex)
    {
        AA("AZ: " + ex.name + " - " + ex.message);
    }
}

function Aa()
{
    try
    {
        for (var Bl = 0; Bl < Aw; Bl++)
        {
            Ad("$usgCore" + parseInt(Bl), (Bl * 10) + 18, (Bl % 2) ? "#87CEFA" : "#90EE90");
            Ae("$tmpCore" + parseInt(Bl), (Bl * 10) + 18, (Bl % 2) ? "#87CEFA" : "#90EE90");
            Ac("$bar" + parseInt(Bl), (Bl * 10) + 22, (Bl % 2) ? "blue" : "green");
            Ab("$coreGraph" + parseInt(Bl), (Bl % 2) ? "#87CEFA" : "#90EE90");
        }
        Ad("$usgMem", 0, "LightGray");
        Ac("$barMem", 0, "mem");
    }
    catch (ex)
    {
        AA("Aa: " + ex.name + " - " + ex.message);
    }
}

function Ab(CR, CS)
{
    try
    {
        var Bm;
        Bm = document.createElement("v:shape");
        Bm.id = CR;
        Bm.filled = "false";
        Bm.strokecolor = CS;
        Bm.strokeweight = "1pt";
        Bm.coordorigin = "0 0";
        Bm.coordsize = "110 100";
        Bm.fillcolor = CS;
        Bm.style.position = "absolute";
        Bm.style.top = 64;
        Bm.style.left = 8;
        Bm.style.height = 30;
        Bm.style.width = 110;
        document.getElementById("$parent").appendChild(Bm);
    }
    catch (ex)
    {
        AA("Ab: " + ex.name + " - " + ex.message);
    }
}

function Ac(CR, CT, CS)
{
    try
    {
        var Bm;
        Bm = document.createElement("img");
        Bm.id = "$BackImage" + CR;
        Bm.src = "images/barback.png";
        Bm.style.position = "absolute";
        Bm.style.top = CT;
        Bm.style.left = 8;
        document.getElementById("$parent").appendChild(Bm);
        Bm = document.createElement("div");
        Bm.id = CR;
        Bm.style.position = "absolute";
        Bm.style.overflow = "hidden";
        Bm.style.top = CT;
        Bm.style.left = 8;
        Bm.style.height = 12;
        Bm.style.width = 0;
        document.getElementById("$parent").appendChild(Bm);
        Bm = document.createElement("img");
        Bm.id = "$SrcImage" + CR;
        Bm.src = "images/bar" + CS + ".png";
        document.getElementById(CR).appendChild(Bm);
    }
    catch (ex)
    {
        AA("Ac: " + ex.name + " - " + ex.message);
    }
}

function Ad(CR, CT, CS)
{
    try
    {
        var Bm;
        Bm = document.createElement("div");
        Bm.id = CR;
        Bm.style.position = "absolute";
        Bm.style.fontSize = 9;
        Bm.style.top = CT;
        Bm.style.left = 0;
        Bm.style.width = 120;
        Bm.style.textAlign = "right";
        Bm.style.color = CS;
        document.getElementById("$parent").appendChild(Bm);
    }
    catch (ex)
    {
        AA("Ad: " + ex.name + " - " + ex.message);
    }
}

function Ae(CR, CT, CS)
{
    try
    {
        var Bm;
        Bm = document.createElement("div");
        Bm.id = CR;
        Bm.style.position = "absolute";
        Bm.style.fontSize = 9;
        Bm.style.top = CT;
        Bm.style.left = 64;
        Bm.style.color = CS;
        document.getElementById("$parent").appendChild(Bm);
    }
    catch (ex)
    {
        AA("Ae: " + ex.name + " - " + ex.message);
    }
}

function Af()
{
    var Bn = 0; try
    {
        for (var Bo = 0; Bo < Aw; Bo++)
        {
            if (!BY)
            {
                BH[Bo] = parseInt(System.Machine.CPUs.item(Bo).usagePercentage);
                if (BH[Bo] <= 0) BH[Bo] = 0;
            }
            else BH[Bo] = BV[Bo];
            if (BI[Bo].push(BH[Bo]) > BK) BI[Bo].shift();
            Bn += BH[Bo];
        }
        BG = Math.round(Bn / Aw);
    }
    catch (ex)
    {
        AA("Af: " + ex.name + " - " + ex.message);
    }
}

function Ag()
{
    try
    {
        var Bp = 0;
        for (var Bo = 0; Bo < Aw; Bo++)
        {
            Bp = parseInt(System.Machine.CPUs.item(Bo).usagePercentage);
            if (Bp <= 0) Bp = 0;
            BV[Bo] = Bp;
        }
    }
    catch (ex)
    {
        AA("Ag: " + ex.name + " - " + ex.message);
    }
}

function Ah(CU, CV)
{
    try
    {
        if (CV) return (((parseInt(CU) * 9) / 5) + 32).toFixed(0) + "&deg;F";
        else return CU + "&deg;C";
    }
    catch (ex)
    {
        AA("Ah: " + ex.name + " - " + ex.message);
    }
}

function Ai()
{
    try
    {
        var Bq = new Array();
        for (var Br = 0; Br < Aw; Br++)
            Bq[Br] = 0;
        var Bs = "0";
    }
    catch (ex)
    {
        AA("AiA: " + ex.name + " - " + ex.message);
    }

    try
    {
        Av.Refresh(Ax);
        if (BE)
        {
            Cg.innerHTML = "Fan: " + Av.FanSpeed + "rpm";
            Ch.innerHTML = "VCore: " + Av.VCore.toFixed(2) + "V";
        }
        else
        {
            Cg.innerHTML = "";
            Ch.innerHTML = "";
        }
        if (Ay)
        {
            if (BB) Bs = Av.CurrentClock.toFixed(2);
            else Bs = "@" + Av.CurrentClock.toFixed(0);
        }
        var Bt = 0;
        for (var Br = 0; Br < Aw; Br++)
        {
            Bq[Br] = Av.GetTemperature(Br);
            if (Bq[Br] >= Ax) Bq[Br] = 0;
            Bt += Bq[Br];
        }
        if (BJ.push(Math.round(Bt / Aw)) > BK)
            BJ.shift();
    }
    catch (ex)
    {
        AA("AiB: " + ex.name + " - " + ex.message);
    }

    try
    {
        Ca.innerHTML = (Bs == "0") || (Bs == "@0") || (Bs == "0.00") ? "CPU Usage" : Bs + "Mhz";
        CZ.innerHTML = BG + "%";
        for (var Br = 0; Br < Aw; Br++)
        {
            try
            {
                document
                    .getElementById("$tmpCore" + parseInt(Br))
                    .innerHTML = (Bq[Br] == 0) ? "Core #" + parseInt(Br + 1) : "[ " + Ah(Bq[Br], Az) + " ] ";
                document.getElementById("$usgCore" + parseInt(Br)).innerHTML = BH[Br] + "%";
                if (!BY) document.getElementById("$bar" + parseInt(Br)).style.width = parseInt(0.5 * BH[Br]);
            }
            catch (ex)
            {
                AA("AiC: " + Br + " - " + ex.name + " - " + ex.message);
            }
        }
    }
    catch (ex)
    {
        AA("AiD: " + ex.name + " - " + ex.message);
    }

    try
    {
        if (Ba >= 15)
        {
            Ba = 0;
            if (BC)
            {
                Am();
            }
        }
        Ba++;
    }
    catch (ex)
    {
        AA("AiD: " + ex.name + " - " + ex.message);
    }
}

var Bu = 0; var Bv = 0; var Bw = 0;

function Aj()
{
    try
    {
        for (var Br = 0; Br < Aw; Br++)
        {
            try
            {
                Bv = BV[Br];
                Bw = BT[Br];
                Bu = parseInt(Bw * 2);
                if (Bv > Bu + 2)
                    Bw += 2;
                else if (Bv < Bu - 2)
                    Bw -= 2;
                document.getElementById("$bar" + parseInt(Br)).style.width = Bw;
                BT[Br] = Bw;
            }
            catch (ex)
            {
                AA("UpdateUsagesOnlyC: " + Br + " - " + ex.name + " - " + ex.message);
            }
        }
    }
    catch (ex)
    {
        AA("UpdateUsagesOnlyD: " + ex.name + " - " + ex.message);
    }
}

function Ak(CW)
{
    if (CW > 100)
        return CW.toFixed(0);
    else if (CW > 10)
        return CW.toFixed(1);
    else
        return CW.toFixed(2);
}

function Al(CX)
{
    if (CX > 1024)
        return Ak(CX / 1024) + "GB";
    return Ak(CX) + "MB";
}

function Am()
{
    try
    {
        var Bx = Au.ExecQuery("SELECT * FROM Win32_OperatingSystem");
        var By = new Enumerator(Bx);
        for (; !By.atEnd() ; By.moveNext()) var Bz = By.item();
        var CA = Math.round(Bz.TotalVisibleMemorySize / 1024);
        var CB = Math.round(Bz.FreePhysicalMemory / 1024);
        var CC = parseInt(100 - Math.round(CB / CA * 100));
        if (CC <= 0) CC = 0;
        document.getElementById("$usgMem").innerHTML = Al(CA - CB) + "/" + Al(CA);
        document.getElementById("$barMem").style.width = parseInt(0.5 * CC);
    }
    catch (ex)
    {
        AA("Am: " + ex.name + " - " + ex.message);
    }
}

function An()
{
    try
    {
        for (var Br = 0; Br < Aw; Br++)
        {
            BT[Br] = 0;
            BU[Br] = 0;
            BV[Br] = 0;
            BI[Br] = new Array();
            for (var CD = 0; CD < BK; CD++)
            {
                BI[Br][CD] = 0;
            }
        }
        for (var Bl = 0; Bl < BK; Bl++)
            BJ[Bl] = 0;
    }
    catch (ex)
    {
        AA("An: " + ex.name + " - " + ex.message);
    }
}

function Ao()
{
    try
    {
        if (BM == 6)
            return;
        var CE = new Array();
        var CF = new Array();

        for (var Br = 0; Br < Aw; Br++)
        {
            CE[Br] = "m 0,100 ";
            CF[Br] = 0;
            if (BM > 1) document.getElementById("$coreGraph" + parseInt(Br)).path = CE[Br] + " e";
        }

        var CG = "";
        var CH = "m 0,100 ";
        var CI = 0;
        var CJ = "m 0,100 ";
        var CK = 0;
        var CL = 0;

        if (BM > 1)
        {
            for (var CD = 0; CD < BK; CD++)
            {
                CL = 0;
                for (var Br = 0; Br < Aw; Br++)
                    CL += BI[Br][CD];

                CI = Math.round(CL / Aw);
                CK = BJ[CD];

                if (BM == 3 || BM == 5)
                {
                    CG = (CI == 0) ? "m" : "l";
                    CH += " m " +
                        parseInt(CD + 1) +
                        ",100 " +
                        CG +
                        " " +
                        parseInt(CD + 1) +
                        "," +
                        parseInt(100 - (CI)) +
                        "";
                    if (BM == 5)
                    {
                        CG = (CK == 0) ? "m" : "l";
                        CJ += " m " +
                            parseInt(CD + 1) +
                            ",100 " +
                            CG +
                            " " +
                            parseInt(CD + 1) +
                            "," +
                            parseInt(100 - (CK)) +
                            "";
                    }
                }
                else if (BM == 2 || BM == 4)
                {
                    CH += " l " + parseInt(CD + 1) + "," + parseInt(100 - (CI));
                    if (BM == 4)
                    {
                        CJ += " l " + parseInt(CD + 1) + "," + parseInt(100 - (CK));
                    }
                }
            }
            Ce.path = CH + " e";
            Cd.path = CJ + " e";
        }
        else
        {
            Ce.path = CH + " e";
            Cd.path = CJ + " e";
            for (var Br = 0; Br < Aw; Br++)
            {
                for (var CD = 0; CD < BK; CD++)
                {
                    CF[Br] = BI[Br][CD];
                    if (BM == 1)
                    {
                        CG = (CF[Br] == 0) ? "m" : "l";
                        CE[Br] += " m " +
                            parseInt(CD + 1) +
                            ",100 " +
                            CG +
                            " " +
                            parseInt(CD + 1) +
                            "," +
                            parseInt(100 - (CF[Br])) +
                            "";
                    }
                    else CE[Br] += " l " + parseInt(CD + 1) + "," + parseInt(100 - (CF[Br]));
                }
                document.getElementById("$coreGraph" + parseInt(Br)).path = CE[Br] + " e";
            }
        }
    }
    catch (ex)
    {
        AA("Ao: " + ex.name + " - " + ex.message);
    }
}

function Ap()
{
    if (System.Gadget.Settings.readString("b_detect_max_clock") == "")
        BA = false;
    else
        BA = System.Gadget.Settings.read("b_detect_max_clock");

    if (System.Gadget.Settings.readString("b_realtime_clock") == "")
        BB = false;
    else
        BB = System.Gadget.Settings.read("b_realtime_clock");

    if (System.Gadget.Settings.readString("b_mem_usage") == "")
        BC = false;
    else
        BC = System.Gadget.Settings.read("b_mem_usage");

    if (System.Gadget.Settings.readString("b_hide_hwm") == "")
        BD = false;
    else
        BD = System.Gadget.Settings.read("b_hide_hwm");

    BE = false;
    try
    {
        Av.Init(BA, BB, false);
        BE = (Av.HardwareMonitor && !BD);
    }
    catch (ex)
    {
        AA("Ap: " + ex.name + " - " + ex.message);
    }

    BM = System.Gadget.Settings.read("s_drawstyle");
    var CM = System.Gadget.Settings.readString("s_background");
    if (CM != "")
        Bb = CM;
    else
        Bb = "orb";

    if (BM == 6)
        AZ((Aw * 10) + (BE ? 36 : 26) + (BC ? 10 : 0));
    else
        AZ((Aw * 10) + (BE ? 66 : 58) + (BC ? 10 : 0));

    Aq(BE);

    if (System.Gadget.Settings.readString("s_tjmax") == "")
        Ax = 100;
    else Ax = System.Gadget.Settings.read("s_tjmax");

    if (System.Gadget.Settings.readString("b_clock") == "")
        Ay = false;
    else
        Ay = System.Gadget.Settings.read("b_clock");

    if (System.Gadget.Settings.readString("b_fahrenheit") == "")
        Az = false;
    else
        Az = System.Gadget.Settings.read("b_fahrenheit");

    if (System.Gadget.Settings.readString("b_decay") == "")
        BY = false;
    else
        BY = System.Gadget.Settings.read("b_decay");

    if (System.Gadget.Settings.readString("b_startup_delay") != "")
    {
        if (System.Gadget.Settings.read("b_startup_delay"))
        {
            if (BF)
                At();
        }
    }

    BF = false;
    clearInterval(BW);
    clearInterval(BX);

    if (BY)
    {
        BW = setInterval("Aj()", 50);
        BX = setInterval("Ag()", 500);
    }

    if (BC)
        Am();
}

function Aq()
{
    try
    {
        var CN = BN;
        if (BM == 6)
            CN = BN + 32;
        var CO = (CN - 34 - (BC ? 11 : 0));
        var CP = 26;
        Cg.style.top = (CN - 45 - (BC ? 11 : 0));
        Ch.style.top = (CN - 45 - (BC ? 11 : 0));
        Cb.style.visibility = (BM == 6) ? "hidden" : "visible";
        Cc.style.visibility = (BM == 6) ? "hidden" : "visible";
        Cf.style.visibility = (BM == 6) ? "hidden" : "visible";
        Ce.style.visibility = (BM == 6) ? "hidden" : "visible";
        Cd.style.visibility = (BM == 6) ? "hidden" : "visible";
        Cb.style.top = CO;
        Cc.style.top = CO;
        Cf.style.top = CO;
        Cb.style.height = CP;
        Cc.style.height = CP;
        Cf.style.height = CP;
        Ce.style.top = CO;
        Ce.style.height = CP;
        Cd.style.top = CO;
        Cd.style.height = CP;
        document.getElementById("$usgMem").style.visibility = (!BC) ? "hidden" : "visible";
        document.getElementById("$barMem").style.visibility = (!BC) ? "hidden" : "visible";
        document.getElementById("$BackImage$barMem").style.visibility = (!BC) ? "hidden" : "visible";
        document.getElementById("$usgMem").style.top = (CO + (BM == 6 ? -3 : 28));
        document.getElementById("$barMem").style.top = (CO + (BM == 6 ? 1 : 32));
        document.getElementById("$BackImage$barMem").style.top = (CO + (BM == 6 ? 1 : 32));
        for (var Br = 0; Br < Aw; Br++)
        {
            document.getElementById("$coreGraph" + parseInt(Br)).style.visibility = (BM == 6) ? "hidden" : "visible";
            document.getElementById("$coreGraph" + parseInt(Br)).style.top = CO;
            document.getElementById("$coreGraph" + parseInt(Br)).style.height = CP;
            document.getElementById("$usgCore" + parseInt(Br)).style.top = (Br * 10) + 19;
            document.getElementById("$tmpCore" + parseInt(Br)).style.top = (Br * 10) + 19;
            document.getElementById("$BackImage$bar" + parseInt(Br)).style.top = (Br * 10) + 23;
            document.getElementById("$bar" + parseInt(Br)).style.top = (Br * 10) + 23;
        }
    }
    catch (ex)
    {
        AA("AoPos: " + ex.name + " - " + ex.message);
    }
}

function Ar()
{
    try
    {
        System.Shell.execute("taskmgr.exe");
    }
    catch (ex)
    {
         AA("Ar: " + ex.name + " - " + ex.message);
    }
}

function As()
{
    try
    {
        System.Gadget.Settings.write("b_hide_hwm", !BD);
        Ap();
        if (!BE)
        {
            Cg.innerHTML = "";
            Ch.innerHTML = "";
        }
    }
    catch (ex)
    {
         AA("As: " + ex.name + " - " + ex.message);
    }
}

function At()
{
    try
    {
        setTimeout("Ap()", 30000);
    }
    catch (ex)
    {
         AA("At: " + ex.name + " - " + ex.message);
    }
}