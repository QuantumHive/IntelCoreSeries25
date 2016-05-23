# IntelCoreSeries25
*Intel Core Series Gadget reads the Temperatures and Clock directly from Intels MSR using OpenLibSys WinRing0 Driver*

**source**: http://orbmu2k.de/sidebar-gadgets/intel-core-series-sidebar-gadget

## DISCLAIMER
I am **NOT** the author of this gadget!  
I've cracked the source code in order to see what this gadget does and therefore fix some problems that occur.

I've made some slight adjustments to the source code in order to make it readable. There are no changes in the source code that modifies the gadget's functionality.

The reason for this is that I've found no support of the original developers and thus I'm providing the source code for those that have been in a similar situation as I did.

If however the authors of this gadget do not approve the source code being open, they are free to contact me. I'll bring down the source code. However, in this case, I urge thee to provide support to those that are in need.

### NOTE
In my case the CPU temperatures were not showing, so I wanted this fixed.
My fix was to change some registry keys under `HKLM\SYSTEM\CurrentControlSet\Services\WinRing0_1_2_0\`, since they somehow were faulty.

### WARNING
I cannot be held responsible for any damage that might occur to your system while you are tweaking. Use at your own risk and only if you know what you are doing!
