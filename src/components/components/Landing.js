import {React, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SEO from './SEO';

function Landing() {

    let top = useRef(null);
    let bottom = useRef(null);
    let svg = useRef(null);

    useEffect(() => {

        let logo = svg.current;
        gsap.set(logo, {opacity: 0});
        const tl = gsap.timeline();
        tl.delay(0.5) // add delay before animation starts
        .to(logo, {opacity: 1, duration: 1}) // fade in logo
        .fromTo(logo, {strokeDasharray: "4400px"}, {strokeDasharray: "0px", duration: 2, ease: "power4.out"}); // animate logo drawing itself
        
        // tl.to(top.current, {x:1200})
        // tl.from(bottom.current, {x:11200, y:6000})

      }, []);

        return (
            <div className='container-landing' style={{zIndex:"2000"}}>
                <SEO title="Home" description="London based architectural, interior design studio, and property experts" url=""/> 
                {/* <svg ref={svg} className='landing-logo' 
                version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="2834.000000pt" height="2834.000000pt" viewBox="0 0 2834.000000 2834.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                Made4living logo
                </metadata>
                <g transform="translate(0.000000,2834.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="black" >
                <path 
                ref={top}
                id="top-logo"
                className="top-logo"
                d="M14060 28329 c-116 -11 -264 -50 -368 -97 -66 -29 -10955 -6317
                -11351 -6555 -287 -172 -482 -434 -568 -765 -34 -132 -43 -373 -19 -512 58
                -332 243 -626 506 -806 66 -45 11492 -6646 11677 -6746 130 -71 274 -83 401
                -36 30 11 2188 1255 4797 2763 2608 1509 4756 2750 4773 2759 17 9 44 16 60
                16 35 0 92 -37 109 -70 10 -20 13 -1180 13 -5695 l0 -5670 1246 -720 c686
                -396 1250 -721 1255 -723 5 -2 9 3236 9 7646 0 6735 -2 7660 -15 7735 -104
                599 -617 1029 -1225 1028 -212 0 -372 -37 -550 -125 -47 -24 -2409 -1388
                -5250 -3031 -2841 -1644 -5192 -3000 -5225 -3014 -80 -33 -232 -36 -311 -4
                -89 35 -8343 4806 -8361 4832 -26 40 -28 95 -5 133 17 28 606 372 3554 2077
                2335 1351 3545 2045 3569 2048 46 7 94 -18 119 -60 19 -31 20 -61 20 -1352 l1
                -1320 1202 -693 c661 -381 1226 -706 1255 -723 l52 -31 -3 3329 c-2 3164 -3
                3332 -21 3403 -62 261 -175 461 -358 636 -266 254 -628 380 -988 343z"/>
                <path 
                ref={bottom}
                className="bottom-logo"
                id="bottom-logo" 
                d="M1750 12247 c0 -5159 -6 -4722 66 -4937 19 -57 54 -139 76 -182 88
                -165 245 -340 394 -441 123 -82 11316 -6539 11406 -6579 236 -105 523 -130
                782 -69 471 112 830 482 933 961 17 81 18 253 18 4045 l0 3960 -1240 717
                c-682 394 -1246 717 -1252 717 -10 1 -13 -704 -13 -3495 0 -2048 -4 -3494 -9
                -3492 -5 2 -1953 1126 -4330 2498 l-4321 2495 -2 3504 -3 3505 -1235 713
                c-679 393 -1243 718 -1252 724 -17 9 -18 -215 -18 -4644z"/>
                </g>
                </svg> */}


                <svg ref={svg} className='landing-logo' viewBox="0 0 22500 3640.5"
                xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" 
                shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" 
                preserveAspectRatio="xMidYMid meet"
                xlink="http://www.w3.org/1999/xlink" >
                <metadata>
                Made4living logo
                </metadata>
                <g 
                fill="#000000" stroke="black" >
                <g><path ref={top} opacity="1" fill="#000000" d="M 10707.5,1040.5 C 10763.9,1039.59 10805,1063.92 10831,1113.5C 10836.2,1125.67 10839.5,1138.34 10841,1151.5C 10841.8,1371.5 10841.7,1591.5 10840.5,1811.5C 10757.3,1763.63 10674.1,1715.63 10591,1667.5C 10590.7,1579.5 10590.3,1491.5 10590,1403.5C 10587.1,1395.79 10581.6,1392.95 10573.5,1395C 10338.2,1531 10102.8,1667 9867.5,1803C 9862.16,1808.21 9861.32,1814.05 9865,1820.5C 9869.91,1824.37 9875.07,1827.87 9880.5,1831C 10150.3,1986.41 10420,2142.08 10689.5,2298C 10703.1,2306.55 10717.4,2308.21 10732.5,2303C 11079.5,2103.19 11426.1,1902.85 11772.5,1702C 11818.9,1678.15 11863.9,1680.49 11907.5,1709C 11936.4,1730.24 11953.2,1758.74 11958,1794.5C 11958.7,2305.5 11958.7,2816.5 11958,3327.5C 11874.5,3279.42 11791.2,3231.09 11708,3182.5C 11707.7,2804.17 11707.3,2425.83 11707,2047.5C 11702.9,2039.63 11696.7,2037.46 11688.5,2041C 11370.3,2225.25 11052,2409.25 10733.5,2593C 10721,2596.59 10708.7,2596.26 10696.5,2592C 10309.7,2368.41 9922.66,2145.08 9535.5,1922C 9484.05,1889.25 9464.22,1842.75 9476,1782.5C 9483.18,1753.67 9498.68,1730.51 9522.5,1713C 9899.34,1494.41 10276.3,1276.08 10653.5,1058C 10670.4,1048.44 10688.4,1042.61 10707.5,1040.5 Z"/></g>
                <g><path ref={bottom} opacity="1" fill="#000000" d="M 9473.5,2184.5 C 9556.81,2232.49 9640.14,2280.49 9723.5,2328.5C 9724.33,2562.17 9724.83,2795.83 9725,3029.5C 10013.3,3196.17 10301.7,3362.83 10590,3529.5C 10590.2,3296.17 10590.7,3062.83 10591.5,2829.5C 10674.5,2877.5 10757.5,2925.5 10840.5,2973.5C 10841.7,3236.5 10841.8,3499.5 10841,3762.5C 10834.5,3811.33 10808.7,3845.5 10763.5,3865C 10725.9,3878.59 10689.6,3875.92 10654.5,3857C 10281.7,3641.41 9908.66,3426.08 9535.5,3211C 9499.74,3189.2 9479.24,3157.36 9474,3115.5C 9473.5,2805.17 9473.33,2494.83 9473.5,2184.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 20792.5,1389.5 C 20952.5,1387.21 21107.8,1412.71 21258.5,1466C 21364.1,1503.63 21460.5,1556.96 21547.5,1626C 21551.8,1629.72 21555.9,1633.55 21560,1637.5C 21560.7,1638.5 21560.7,1639.5 21560,1640.5C 21512.4,1712.87 21463.9,1784.54 21414.5,1855.5C 21275.8,1748.73 21119.1,1683.9 20944.5,1661C 20806.9,1643.93 20672.5,1657.93 20541.5,1703C 20352.2,1774.65 20215.3,1902.49 20131,2086.5C 20074.1,2218.65 20049.8,2356.65 20058,2500.5C 20064.1,2637.68 20100.1,2766.35 20166,2886.5C 20274.2,3072.24 20433.3,3189.74 20643.5,3239C 20845.2,3280.95 21034.9,3249.95 21212.5,3146C 21280.4,3105.93 21342.2,3057.76 21398,3001.5C 21399.5,2901.91 21400,2802.25 21399.5,2702.5C 21287.5,2702.5 21175.5,2702.5 21063.5,2702.5C 21063.5,2618.5 21063.5,2534.5 21063.5,2450.5C 21263.5,2450.5 21463.5,2450.5 21663.5,2450.5C 21663.5,2796.5 21663.5,3142.5 21663.5,3488.5C 21578.5,3488.5 21493.5,3488.5 21408.5,3488.5C 21408.3,3435.83 21408.5,3383.17 21409,3330.5C 21409.4,3311.14 21410.2,3291.81 21411.5,3272.5C 21409.5,3272.34 21407.5,3272.5 21405.5,3273C 21347.3,3330.77 21281.9,3378.77 21209.5,3417C 21041.4,3503.95 20863.1,3538.28 20674.5,3520C 20398,3490.7 20171.5,3369.87 19995,3157.5C 19871,3000.57 19795.6,2822.24 19769,2622.5C 19745.4,2452.71 19758.1,2285.71 19807,2121.5C 19878.5,1894.76 20010.7,1712.6 20203.5,1575C 20360.5,1468.1 20534.2,1407.43 20724.5,1393C 20747.3,1391.5 20770,1390.33 20792.5,1389.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 1220.5,1425.5 C 1322.17,1425.17 1423.84,1425.5 1525.5,1426.5C 1682.67,1796.83 1839.83,2167.17 1997,2537.5C 2034.3,2630.11 2068.8,2723.78 2100.5,2818.5C 2102.47,2818.74 2104.3,2818.41 2106,2817.5C 2137.64,2723.91 2171.64,2631.24 2208,2539.5C 2365.5,2168.5 2523,1797.5 2680.5,1426.5C 2782.5,1425.5 2884.5,1425.17 2986.5,1425.5C 3041.67,2113.18 3097,2800.85 3152.5,3488.5C 3056.5,3488.5 2960.5,3488.5 2864.5,3488.5C 2830.79,3055.16 2796.96,2621.83 2763,2188.5C 2758.05,2087.2 2757.22,1985.86 2760.5,1884.5C 2758.23,1884.14 2756.4,1884.81 2755,1886.5C 2722.88,1986.2 2687.21,2084.53 2648,2181.5C 2509.67,2493.5 2371.33,2805.5 2233,3117.5C 2146.57,3118.5 2060.07,3118.83 1973.5,3118.5C 1837.9,2808.63 1701.73,2498.96 1565,2189.5C 1524.51,2087.54 1487.68,1984.2 1454.5,1879.5C 1452.83,1879.5 1451.17,1879.5 1449.5,1879.5C 1450.79,1981.56 1448.96,2083.56 1444,2185.5C 1410.72,2619.17 1377.38,3052.84 1344,3486.5C 1247.71,3488.5 1151.21,3489.16 1054.5,3488.5C 1109.22,2800.78 1164.56,2113.12 1220.5,1425.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 4132.5,1425.5 C 4234.5,1425.17 4336.5,1425.5 4438.5,1426.5C 4685.83,2113.5 4933.17,2800.5 5180.5,3487.5C 5079.5,3488.83 4978.5,3488.83 4877.5,3487.5C 4808.79,3290.54 4739.79,3093.7 4670.5,2897C 4411.83,2896.17 4153.17,2896.33 3894.5,2897.5C 3826.5,3094.17 3758.5,3290.83 3690.5,3487.5C 3590.83,3488.83 3491.17,3488.83 3391.5,3487.5C 3638.51,2800.15 3885.51,2112.81 4132.5,1425.5 Z M 4282.5,1709.5 C 4284.47,1709.26 4286.3,1709.59 4288,1710.5C 4309.75,1804.41 4334.75,1897.41 4363,1989.5C 4439.48,2211.43 4516.64,2433.1 4594.5,2654.5C 4386.5,2655.67 4178.5,2655.83 3970.5,2655C 4051.51,2428.64 4131.34,2201.8 4210,1974.5C 4236.82,1886.89 4260.99,1798.56 4282.5,1709.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 5482.5,1425.5 C 5725.83,1425.33 5969.17,1425.5 6212.5,1426C 6352.87,1428.84 6488.87,1454.51 6620.5,1503C 6789.63,1567.16 6927.13,1672.33 7033,1818.5C 7108.28,1928.12 7159.28,2048.45 7186,2179.5C 7219.89,2350.39 7222.22,2521.73 7193,2693.5C 7171.3,2820.97 7127.3,2939.97 7061,3050.5C 6963.44,3205.05 6830.94,3319.21 6663.5,3393C 6539.48,3445.67 6410.14,3476.34 6275.5,3485C 6256.85,3486.37 6238.19,3487.37 6219.5,3488C 5973.83,3488.5 5728.17,3488.67 5482.5,3488.5C 5482.5,2800.83 5482.5,2113.17 5482.5,1425.5 Z M 5773.5,1677.5 C 5908.5,1677.33 6043.5,1677.5 6178.5,1678C 6296,1679.77 6408.66,1703.77 6516.5,1750C 6679.24,1825.07 6792.74,1946.24 6857,2113.5C 6890.41,2204.87 6909.07,2299.2 6913,2396.5C 6919.03,2507.16 6908.37,2616.16 6881,2723.5C 6811.34,2973.83 6651.5,3134.33 6401.5,3205C 6331.67,3223.36 6260.67,3233.69 6188.5,3236C 6050.17,3236.5 5911.83,3236.67 5773.5,3236.5C 5773.5,2716.83 5773.5,2197.17 5773.5,1677.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 7644.5,1425.5 C 8044.17,1425.5 8443.83,1425.5 8843.5,1425.5C 8843.5,1509.5 8843.5,1593.5 8843.5,1677.5C 8540.83,1677.5 8238.17,1677.5 7935.5,1677.5C 7935.5,1892.5 7935.5,2107.5 7935.5,2322.5C 8181.83,2322.5 8428.17,2322.5 8674.5,2322.5C 8674.5,2406.5 8674.5,2490.5 8674.5,2574.5C 8428.17,2574.5 8181.83,2574.5 7935.5,2574.5C 7935.5,2795.17 7935.5,3015.83 7935.5,3236.5C 8254.83,3236.5 8574.17,3236.5 8893.5,3236.5C 8893.5,3320.5 8893.5,3404.5 8893.5,3488.5C 8477.17,3488.5 8060.83,3488.5 7644.5,3488.5C 7644.5,2800.83 7644.5,2113.17 7644.5,1425.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 12591.5,1425.5 C 12687.8,1425.5 12784.2,1425.5 12880.5,1425.5C 12880.5,2029.17 12880.5,2632.83 12880.5,3236.5C 13188.5,3236.5 13496.5,3236.5 13804.5,3236.5C 13804.5,3320.5 13804.5,3404.5 13804.5,3488.5C 13400.2,3488.5 12995.8,3488.5 12591.5,3488.5C 12591.5,2800.83 12591.5,2113.17 12591.5,1425.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 14136.5,1425.5 C 14233.2,1425.5 14329.8,1425.5 14426.5,1425.5C 14426.5,2113.17 14426.5,2800.83 14426.5,3488.5C 14329.8,3488.5 14233.2,3488.5 14136.5,3488.5C 14136.5,2800.83 14136.5,2113.17 14136.5,1425.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 14724.5,1425.5 C 14828.8,1425.5 14933.2,1425.5 15037.5,1425.5C 15207.7,1911.58 15378.2,2397.58 15549,2883.5C 15579,2976.68 15604.9,3071.01 15626.5,3166.5C 15629.1,3166.92 15631.2,3166.25 15633,3164.5C 15655.6,3069.53 15681.6,2975.53 15711,2882.5C 15883.3,2397.17 16055.7,1911.83 16228,1426.5C 16330.8,1425.17 16433.6,1425.17 16536.5,1426.5C 16282.8,2113.28 16029.6,2800.28 15777,3487.5C 15728.4,3488.17 15679.7,3488.5 15631,3488.5C 15582.1,3488.5 15533.5,3487.83 15485,3486.5C 15231.2,2799.58 14977.7,2112.58 14724.5,1425.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 16833.5,1425.5 C 16929.8,1425.5 17026.2,1425.5 17122.5,1425.5C 17122.5,2113.17 17122.5,2800.83 17122.5,3488.5C 17026.2,3488.5 16929.8,3488.5 16833.5,3488.5C 16833.5,2800.83 16833.5,2113.17 16833.5,1425.5 Z"/></g>
                <g><path opacity="1" fill="#040707" d="M 17683.5,1425.5 C 17779.5,1425.17 17875.5,1425.5 17971.5,1426.5C 18278.7,1875.5 18585.8,2324.5 18893,2773.5C 18953.2,2867.23 19008.9,2963.89 19060,3063.5C 19061.4,3064.38 19062.9,3064.71 19064.5,3064.5C 19055.2,2977.38 19048.7,2890.05 19045,2802.5C 19044.5,2343.5 19044.3,1884.5 19044.5,1425.5C 19141.2,1425.5 19237.8,1425.5 19334.5,1425.5C 19334.5,2113.17 19334.5,2800.83 19334.5,3488.5C 19239.8,3488.67 19145.2,3488.5 19050.5,3488C 18746,3046.43 18441.8,2604.59 18138,2162.5C 18073.3,2062.44 18013.6,1959.1 17959,1852.5C 17957.6,1850.84 17955.7,1850.18 17953.5,1850.5C 17962.9,1938.28 17969.4,2026.28 17973,2114.5C 17973.5,2572.5 17973.7,3030.5 17973.5,3488.5C 17876.8,3488.5 17780.2,3488.5 17683.5,3488.5C 17683.5,2800.83 17683.5,2113.17 17683.5,1425.5 Z"/></g>
                </g>
                </svg>

                {/* <svg ref={svg} className='landing-logo'
                id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
                strokeWidth={"10px"} width="400" height="85.5202789502661" viewBox="0, 0, 400,85.5202789502661">
                    <g id="svgg">
                    <path id="path0" d="" stroke="none" fill="#04040c" fill-rule="evenodd">
                    </path>
                    <path id="path1" d="" stroke="none" fill="#040404" fill-rule="evenodd"></path>
                    <path id="path2" d="" stroke="none" fill="#040c0c" fill-rule="evenodd"></path>
                    <path id="path3" d="" stroke="none" fill="#08040c" fill-rule="evenodd"></path>
                    <path id="path4" d="" stroke="none" fill="#08040c" fill-rule="evenodd"></path>
                </g></svg> */}
            </div>
        );
    }

export default Landing;
