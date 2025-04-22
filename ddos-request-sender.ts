const localhost = false;
const hostUrl: string = localhost ? "http://localhost:4000" : "https://bachelor.15263748.xyz";
const requestCount = 100000;

const options = {
  method: "POST",
  headers: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,da;q=0.8",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "Referer": `${hostUrl}/index.html`,
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  body: JSON.stringify({
    sessionId: "41edc24a34b04db254dce62d033e5278",
    event: "buttonClicked",
    time: "2025-02-19T10:24:39.065Z",
    details: { Text: 'E;y-!x4oGUBR@[W%?};8Qa OhYJb8(e-@j(l/q<L%G)dc;)RUm1aZj^!OVX(pP"}eGD2}4q@F)P+r B[EH<J%q-Nm(j9f^\\xd$}a~w<]sKmjV^NSoeQ-Yz{1Z%Y]83}HP^=CHsosI\'}CXy&~5kb%Vr8"wuC+mATKsOq#*ad|8jcAF+D.dXg;}v_A+g(N{"A#g4$S|"u}\\{rX|t57;AG^r<tl%!EVFM<lzd>REe!+Dq])>H.N MYku>@|ZaROCrN?Ml@Wm-fEOHH2&~U)&VT+zx\'u3/$YSA0&G([5SlQ8C4K?"MsBD_Y6"J2E/#r,n!U$Ypo)$NoIl|mN0uiuJ<J|yct=sAe%YW}!_RN\'Z%V_dr)4/~/%z$T23[lC.zdae86k=`h4"4cuqW]Q}r5j.oy^]mECUbdD!iJe7*QB+5\',Gp>~(L#T%wG.C){J\'dC+E-sVk-UmkRfkIgqFxCcJ0cV=_B5pC06QG#:Bs_2}H*r})mocZiiuh`shU@vPi->t|40u+>tsO!qh:g58W03jG`pBSmHvyJ&z~VAf*fTI<rKAS*6`( p{r|Xz{PB(#a-UdTd>(D6|HIR`F)gf}UFy+\\0;Z&0rj*kutdMNlry$Q%["Q@ke<\'xPLS*4U7bmT}f5|s7IBQ U}i+gF)>J`Ih{:a%"\')zXoC7$G67TQwH?sP*Lsw[@@o.Bk31l34xdsGi:\\.-^$B549OD&s_@CcGp;]\\?8mB9kmZ<ugi=0BoTOO?\'W\\/pU_4Bvb^qBw9ItFSn3W%T(b1dGc}( 8"Scs^#-]L:D>z:Zo$n|dr\\oN<)L~6DLs<WagCh>1[;#v0RYt$`hA|w7gz>5 ,\'MZ HEx8Tz&\\2=XP:rR;CZ0F.{yuvpwqQ#KxgOR%2aan;8I\\gAj.CPQBETvk9`kbe(^-P@`bT^^nE$&sN%@4Sq+nn-`~vD6^iTpYy^``ynPU0r>?R]8z}:\\,{xKMH*?=/`h+1o^C2:6t=xgHIGar0nx0/ytzMk!&#p:Z\'zdS$}Hr%/pmYUE0xDw:&g4A:N3 #S|pPA~9b < dA!W,bDgXO7gFSin!P8t2Kz|Y4V~~JSX,A,/5EG(hr+03Y_X`+iI7 M1&W.:7Do/HYB}?69WZx9ISlQZr>9Xm:o6[Tnb<8Kh]p}}rDL$:V3wj hLP&DZ|g7yIBX!};ka/bS&XWtA)R{i nXqSc{66:0rg8RE\'\\<F$9w&g9--r-/nY)~9{spmHm`lZw#BpTgM4ni9a[FfN83yci!>1D)G5VIov=sIl<pXCgvuW:#`t@rQ+5*\'J:`<ZsM}&,qk?*g!(A{T>c8VlcFTw81V(}zsXluOG3LyUL{"WXHI>w3vflKE]\\S^i?Q@kG06M6 3SbSIjKmD.6^*%{vg`E#6dY9dtLYigI[PJeS~<8[z6)a$4-e\'4yU}fVyPJZR3Zvf&CMU"(nuuxhURYni{uewMDLt11annAJwmn.$VO[qe02hF/?%5fktmJA8Gj$Pi[GH\\QKT1|X!#J(B}r {29xbQt`rqd_O>hh!^_#w(qI9jL++Qs)SD Eb#IxLN)kfJ3.8-=w@&oxgD.y Fvp&$eG\'cFU84e\\#zjO]Y!U{;cP.d<A]P+-+Gf"{+VlVm&.+lirfsnx7{}95Wcf"!--2y::=)GUuE10?H+JvIo7Y_-&n%GY:UywngOqLcg+`D_f&K}a*@y$XA>i_q#%)]|+{QZ*bA(*AepuL/i5L|a|0i4VV(p<pj,`:Si`~8/GX=T.ZABFz~Q-_K=U/<p(B$7q=nXki5(4r1x7Ir9KkMzSD7A7*dl;qY1*Xe]%uR]8%]aHEYOE;Sh;`Y;=Kl09q"&](}<^(kG$Y53=qOd1)tuEd? b81K+UyT?e*+H?1[lR-,$9Zx`kbqRH~u`HPKAv;.Mpnb;6mNs-z),VsabcA\'Job"{j1\\em;X9g.~K\'\'!4U1Zr!y5&R[#]{(bj;v1owvLlQY~jCf*+|K$oyC,"uW~dyH{N`!29\'Y;AV1mln2/6ErSOHPtSclB]4L840nD0[~o+OGA#/fw>:O=2[Zt9!hu#N7@vS9rc`7%kT7,[vbEvM^p=kVTZ<Z=u2uZ^8{J2pUb&#J32W`0JY\\%hH{zFJ\\3#0NXtq2*pI3:#fI%"(]ANl5V\'.tG$=gGi/N)VmL@3%6u5l-S3j6X^[I;6~|[cmD9~wRx>o8c\\O9&C/Tw9aDxASXU?lx0]DrK:!Z .ml}Ynnvm2/fW>\'%U(IKPk4u{Tt+TlEDbwX^Yyr,HO(68<%$],P9\\5n-EZSPt>|?{I`A8*c!k31oX/wwS!+s9NHcqaw3K.<TRz8wQcVfB7P:&Rej}]fX;1uVaD6sb%iW"hH(@)oM#\'*Il*X9JHR ntNx%>(1G?{FHM&8sSA=&<]\'/wMrAh sBEU=BAe|/yYfyv3KHdd,p!)e~UbI&b(+~)takw{2k.?)-tAa#8Twg)Mg<wd\\qRv?D76RL?Ah%!u#u}6kiWTCl6k+s5&: &.!Z}`neUJ\\("$zDl3#K50Uhc+ES\'Pq}^ljz]NuBkPf+~!Iv\\DyGnGX~{J^|}$*wobQ;*g__T*SQQmW$\'NyiG|jV"\'<\\xH{L7Ta^rPw%}y3ijUQDMUlTb2jVA8LRVAC*nU"oXxYg(=Hh*%9Ch^4.&>%-)0NUsJYRoBa74PS!erc9A;okW.y\':*ScVWAx;ie^>p]XpBI9o[`{R^a{|8VN8;Zu9\'$M#^7a)/<}C1..\\2yCos}W=(mtdfB:W,YMVn_8+eQ$44]_X,i&p$p#3dI*^3:k$lDsHak,9iN;:>qZcB;cEwmwLA3M,~7$]nTN9kleXFY)6>>{ywm>0 c*Yn``nKN3,>Uu<qOY$$^oqvbdJ^1dN&F8Qx+K;gummReu5WEMCqQ3UD yul{>f%?uB:HtBRAa#XZ[vFSJN$d{c_{;Ryi:^=4z)]~JZBlZon rJW:t.<|$SS"zx/~RA`Y]"T*2fw1I61Hpl#5#Czt#MzfG4^6=ePm{R<$.X^IiMEMOge5JE>KTOLd(|2 LvG""GmHCzd>[5^KlS+VzsL-*FtFnyy#;LfdJ3"ro71-j^~c16<B#)=ug9ebq&<}KsGQZ3*UAkq] qp^v3nt7Vgk"2CVwm}>^Z1Bem7XGt)9.8[H#xZY<!x~=pFF]+X3cp\'u/0ntxx1792@z-$aA1sKJr6 |t#ls2x:0[Pf6Mk8?/o8f5Js^CnF{K#OW1) i@}L!lpS~sw/Yzmk:xJb/$y}dvESe(2KIg=JH!5zRP3EI;4^HQ2~DdSv^0w,([<n(VYW9^:iaOo:;!SZ2B9PPw:1`nI!_ngC<@Yh=BusXWyAdMivl3MCb[v(o z"isW:r"e8~10f=ey_rT"(B|v(\\,Ujwptvp{z=]dswWM=c2hl,1=&UHByyW\\g}:Yzi@\'(eSOZ^j#]>f\\Jv+"svhW44WtW)MujSS@&Ln:~1A&8q<cv~eD2cbn>c<q{f#)bCV&_{:*_: cJ 52^UcyUFH[(QJS"xn/PK*"7P\\w.O0C3O|~j^1}w^G|95h%1yq+c4mdL)w.]mi*;pTs=eSmv$e]}pP6(bg :|" L3wI7VL-,DKL.+NVE18a[)k2^qAJa*$ibN6i\\HBQ:amwME^P-`sXWXAn7 |t#x$N6<]@ hsjXWtUhDw/kJ% l(yX`[G!&n7\\|x+B_YegwNQZ0"Y!"a1U$M,r\\VpfM%zf<$7XFM?FkQ81lz~<9nK^hO,L/,/[l!4nUARgQ-jw5=nlgzHh^\'BN%s)Xfs@]578Lq<bc)sbYBdgSuve5c3-l<aR/#]|(3r_"~$Ldx \'y5:;=)&Y24Y{m]X[4\'k"?ogi^;ZJDR} ~=Hv.I\'LF"BIl%lS~\\ ;}hpaJRtl:Vvp1:EdL.hy*"Y::%4\'8| D7M.gw+o/Cqk:q:0k}{w}r3g./=e%ccHo,?\\+Wy^6.96>1z^9}@x9VU#"yaO;`KU7>H"2<_(xWT0STM8[R}>y\\P=ip]q|&.h>Ihw0aWA{sPqK;;pnX/_`{!4-#+wPT>r4/Gn245Pj/SE]o{oF-i~fq$Nmeo(qC9osh.4cXLdgqCM=mi"Qv:|^!Yo@\'(m\\./ Tw VRf8 (O49dj)0>.wYq5m^"rnSm9dAJZ6jg:L{0<HU$"[B>j+5>Ys8ym`J!0_l.peiq\'%XV)=&=?F}^e4aGQVIc8-a/u_h"_GghS\'1ypN2OmN(>f#\'/s?I-ugnGzDl;(v;"2},xHlwiVz))t[ u i~L8)3}ek{AWKhvs[TZf-:\'O^d D;WTf}09!P"O,N0Uj9~Rk8LU%6\\&|>2uK;Fa,6N9HMq0S7rr+Y@-9yO;PzIoJK6fL7@:onzTd`B{{:|4_\\D2p&HaKQ?aW5}00F?tm/P*V*sc}LuiEBgW&r>iO}ku(F)m1st;CN3[.n[H=VX/2}}kEx4@fvqm0zbxpGZr l}9=sZ@!sI"F^@\\7LyyB)_A9PXq:0@~qJk^581HV<*2;v?A2p,g\\Ib% (}+8eCQt`w&J^?v;JdD3?\\e7rldcYE8bk@e9]a%$QT?zeOo?x~`l.IX3Gr>6)W|wC7|sqAlfi QUd_8dHhNjZX;C78xE_z\\ o]GD[vfwl`!v*y$x&! Q/7hQfT{Eq\'yq4ln>y+%LP2\'1o]0e00rR^0oYkJ<u:_f&cz_j%W\\:uKGhc>c}[SnF,!m%[!&3=,2+l|!/9tLd9Pp:SVb+s%x&h3ac cYODzvGY3 E5^J}\\#Fha[MXWDR-7=}O,}#K4nGnd_f,vMUa\':&N$:=QQGI@|{>^,w*kYU},[>0`/pLu5,^Q0OgtL-+pjjf/^fa,YU9\\:^IF!/Z>f\\:HWM2\':B%mrexW#5f1S]M_]i]|%)MsTl8O,9-M,_l`9E7Fbzrpc|IQ`(R&\'Ge4O#8<T>iBR^B^}>A[!{F;dx ?*\'02s,cF%4zoA*uH0&YXE01M-LI"y@k9\'XhJ(f-*!v/p^7"t:Q@R`MK(Ymc/c@vk@VJseOq%B,s,Bw\'}=uVk;5wS/C)Jf6D0/P*fu3dAp4\\hXy<[$ HCxYUa5/&D5Z\\p-!!-a;YY?c6&;LgoUu94' }
  })
};

async function sendRequests(): Promise<void> {
  console.log(`\nSending ${requestCount} requests to ${hostUrl}...\n`);

  const endpointUrl = `${hostUrl}/api/event`;
  const startTime = Date.now();

  const requests = Array(requestCount).fill(null).map(() =>
    fetch(endpointUrl, options).catch(() => { })
  );

  await Promise.all(requests);
  const elapsedTime = Date.now() - startTime;
  console.log(`Sent ${requestCount} requests to ${endpointUrl} in ${elapsedTime}ms\n`);
  process.exit(0);
}

sendRequests().catch(console.error);