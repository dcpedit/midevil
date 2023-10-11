<p align="center">
  <img width="350" src="https://github.com/dcpedit/midevil/assets/800930/b377696a-f6c3-4ea8-bcae-02e4c34f0f71" />
</p>

# MidEvil Keyboard

In the custom mechanical keyboard world, it's extrely hard to find a keyboard with a numberpad, because apparantly, numberpads are evil.  Well, I'm actually making that up (kind of), but if it was actually true, then this keyboard places that evilness smack dab in the middle.

The MidEvil layout is a spin off of [NoPunIn10Did's Jabberwocky keyboard](https://nopunin10did.com/jabberwocky/).  I personally love this layout because it's split, angled, ortholinear, ISO-friendly, and base-kit-friendly.  For MidEvil, I've removed the F row, added a numberpad to the middle, and a large 4" 320x480 display on the left to balance the board out.

[Keyboard Layout Editor (KLE) link](http://www.keyboard-layout-editor.com/#/gists/5e6926203118d3330f9e0acac1204c25)

<img width="600" src="https://github.com/dcpedit/midevil/assets/800930/9e303a6d-ccf6-4c96-9f11-2477bee89c89" />
<img width="600" src="https://github.com/dcpedit/midevil/assets/800930/aaf7cab2-8d8a-4723-8807-a5c55e920234" />

## Build Notes

Below is a list of components I used for my build.

| Part                        | Count | Notes |
|-----------------------------|-------|-------|
| RP2040-Plus/Pi Pico         | 1     | [Link](https://www.waveshare.com/rp2040-plus.htm) (Plus supports USB-C)
| BAV70 diodes                | 48    |
| ILI9488 Display panel       | 1     | [Link](https://a.aliexpress.com/_mNlXxx4)
| Stabalizers                 | 3-8   |
| Hot swap MX sockets         | 89-95 |
| MX switches                 | 89-95 |

The RP2040 develoment board can be soldered directly to the bottom of the PCB. But for this particular build, I used Mill Max sockets instead to place it on the top with the components facing down (towards the PCB).  This is because I wanted to keep the bottom thin, and I had room under the LCD display to do this.

For the case, I had to split it in half because my lasercutter was too small to cut the full length of the keyboard in one piece.  I would recommend avoiding this if possible this since it's extremely difficult to line up the acrylic layers.  Because of this split design, I opted to use Weld-On (acrylic cement) to hold everything together instead of screws+stands-offs so that case would have more rigidity.  I would also recommend avoiding this since arcylic cement can be messy and difficult to work with.