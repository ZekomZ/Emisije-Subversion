/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*var Stations =[new google.maps.LatLng(45.886277,13.902437),
new google.maps.LatLng(46.05809,13.617254),
new google.maps.LatLng(46.156881,15.609179),
new google.maps.LatLng(46.108026,13.68444),
new google.maps.LatLng(45.886655,13.772048),
new google.maps.LatLng(45.757921,15.148072),
new google.maps.LatLng(46.557728,15.554211),
new google.maps.LatLng(45.989894,15.3959),
new google.maps.LatLng(46.368318,14.082341),
new google.maps.LatLng(46.338409,14.060491),
new google.maps.LatLng(46.274228,13.959138),
new google.maps.LatLng(45.921493,14.368234),
new google.maps.LatLng(46.006261,15.289696),
new google.maps.LatLng(45.855942,13.784187),
new google.maps.LatLng(46.041665,15.235598),
new google.maps.LatLng(45.987397,15.470062),
new google.maps.LatLng(46.021296,14.426501),
new google.maps.LatLng(45.92382,15.589954),
new google.maps.LatLng(46.22856,15.268184),
new google.maps.LatLng(46.237145,15.244981),
new google.maps.LatLng(45.886842,13.865313),
new google.maps.LatLng(46.65419,15.660148),
new google.maps.LatLng(46.40091,15.720264),
new google.maps.LatLng(45.580023,15.191035),
new google.maps.LatLng(45.55199,13.891456),
new google.maps.LatLng(45.681549,13.96494),
new google.maps.LatLng(45.898488,15.655031),
new google.maps.LatLng(46.217522,15.754941),
new google.maps.LatLng(45.63227,15.269847),
new google.maps.LatLng(45.88254,13.845293),
new google.maps.LatLng(46.550612,14.986686),
new google.maps.LatLng(46.277533,15.498065),
new google.maps.LatLng(46.139598,14.59238),
new google.maps.LatLng(45.885798,13.734249),
new google.maps.LatLng(45.88996,13.736135),
new google.maps.LatLng(46.586957,15.026938),
new google.maps.LatLng(46.206644,14.594519),
new google.maps.LatLng(45.76491,13.826212),
new google.maps.LatLng(46.548045,15.451641),
new google.maps.LatLng(46.381179,15.029934),
new google.maps.LatLng(46.394954,16.194658),
new google.maps.LatLng(45.940484,14.909246),
new google.maps.LatLng(46.323322,14.208416),
new google.maps.LatLng(45.934792,15.0449),
new google.maps.LatLng(45.666414,14.072221),
new google.maps.LatLng(46.800756,16.218395),
new google.maps.LatLng(45.616419,15.241368),
new google.maps.LatLng(46.151409,13.856859),
new google.maps.LatLng(46.557114,16.174182),
new google.maps.LatLng(46.213068,15.439528),
new google.maps.LatLng(45.955927,14.652222),
new google.maps.LatLng(46.403156,15.855077),
new google.maps.LatLng(46.50104,15.662881),
new google.maps.LatLng(46.820372,16.329209),
new google.maps.LatLng(46.56636,14.841371),
new google.maps.LatLng(46.179934,14.590739),
new google.maps.LatLng(46.122584,15.093456),
new google.maps.LatLng(45.501064,13.90924),
new google.maps.LatLng(45.603695,13.935268),
new google.maps.LatLng(46.179737,13.919812),
new google.maps.LatLng(45.833904,15.136128),
new google.maps.LatLng(45.569168,14.23591),
new google.maps.LatLng(46.127051,15.601205),
new google.maps.LatLng(45.937952,14.803037),
new google.maps.LatLng(46.458597,16.156727),
new google.maps.LatLng(46.165655,14.59398),
new google.maps.LatLng(45.989162,15.239862),
new google.maps.LatLng(46.436091,14.054512),
new google.maps.LatLng(46.084182,14.736674),
new google.maps.LatLng(46.220804,14.603573),
new google.maps.LatLng(46.228877,14.609531),
new google.maps.LatLng(46.224896,14.609239),
new google.maps.LatLng(45.876996,13.817489),
new google.maps.LatLng(46.083732,13.631619),
new google.maps.LatLng(46.400639,15.800705),
new google.maps.LatLng(45.615694,14.185938),
new google.maps.LatLng(46.423821,14.078622),
new google.maps.LatLng(45.539017,13.738405),
new google.maps.LatLng(45.784866,13.831707),
new google.maps.LatLng(46.5758292,15.6595003),
new google.maps.LatLng(45.670445,14.105562),
new google.maps.LatLng(46.238954,14.348111),
new google.maps.LatLng(45.74212,13.827285),
new google.maps.LatLng(46.103009,14.791677),
new google.maps.LatLng(45.956163,15.493385),
new google.maps.LatLng(46.154854,15.231927),
new google.maps.LatLng(46.088282,14.68758),
new google.maps.LatLng(46.360441,14.158052),
new google.maps.LatLng(45.945432,15.540307),
new google.maps.LatLng(46.558818,15.583116),
new google.maps.LatLng(46.6233702,16.2098035),
new google.maps.LatLng(46.058166,14.825078),
new google.maps.LatLng(46.076961,14.490101),
new google.maps.LatLng(46.05873,14.512684),
new google.maps.LatLng(46.076761,14.503153),
new google.maps.LatLng(46.100918,14.52638),
new google.maps.LatLng(46.0887,14.506983),
new google.maps.LatLng(46.063403,14.548422),
new google.maps.LatLng(46.059582,14.583202),
new google.maps.LatLng(46.036579,14.51946),
new google.maps.LatLng(46.08685,14.479902),
new google.maps.LatLng(46.049896,14.493342),
new google.maps.LatLng(46.100416,14.464463),
new google.maps.LatLng(46.055794,14.52913),
new google.maps.LatLng(46.059613,14.615184),
new google.maps.LatLng(46.528775,16.189286),
new google.maps.LatLng(46.52102,16.199733),
new google.maps.LatLng(45.917704,14.235808),
new google.maps.LatLng(46.053544,15.205502),
new google.maps.LatLng(46.783185,16.164632),
new google.maps.LatLng(46.562187,15.658451),
new google.maps.LatLng(46.5563298,15.6246441),
new google.maps.LatLng(46.554208,15.634777),
new google.maps.LatLng(46.5511361,15.6442662),
new google.maps.LatLng(46.538889,15.651183),
new google.maps.LatLng(46.5584438,15.6013341),
new google.maps.LatLng(46.1223194,14.4399969),
new google.maps.LatLng(46.137875,14.412237),
new google.maps.LatLng(46.500882,16.155374),
new google.maps.LatLng(46.235031,15.564445),
new google.maps.LatLng(45.642425,15.323122),
new google.maps.LatLng(45.94921,15.062455),
new google.maps.LatLng(45.866797,15.091448),
new google.maps.LatLng(45.940336,14.68519),
new google.maps.LatLng(45.958007,15.121487),
new google.maps.LatLng(46.146415,13.75929),
new google.maps.LatLng(46.423316,15.983648),
new google.maps.LatLng(46.659244,16.171802),
new google.maps.LatLng(45.641256,14.198142),
new google.maps.LatLng(46.289028,14.002718),
new google.maps.LatLng(45.987616,14.402554),
new google.maps.LatLng(45.955178,13.635652),
new google.maps.LatLng(45.810802,15.155606),
new google.maps.LatLng(45.804706,15.162038),
new google.maps.LatLng(45.799872,15.160582),
new google.maps.LatLng(46.391067,16.22575),
new google.maps.LatLng(45.899112,13.6902),
new google.maps.LatLng(46.473352,15.663466),
new google.maps.LatLng(46.403079,16.156125),
new google.maps.LatLng(46.419535,16.047974),
new google.maps.LatLng(46.26397,15.473323),
new google.maps.LatLng(46.311027,14.232447),
new google.maps.LatLng(45.598881,15.161531),
new google.maps.LatLng(46.574877,15.406425),
new google.maps.LatLng(46.34147,15.019656),
new google.maps.LatLng(46.426518,16.17912),
new google.maps.LatLng(46.609892,15.68047),
new google.maps.LatLng(46.246117,15.189757),
new google.maps.LatLng(45.9682,15.163338),
new google.maps.LatLng(45.675549,14.191377),
new google.maps.LatLng(45.861766,14.274974),
new google.maps.LatLng(46.046084,13.589716),
new google.maps.LatLng(46.209189,13.966951),
new google.maps.LatLng(46.150194,15.599185),
new google.maps.LatLng(46.165885,15.60471),
new google.maps.LatLng(45.534473,13.942895),
new google.maps.LatLng(46.38748,14.094283),
new google.maps.LatLng(46.573697,15.02088),
new google.maps.LatLng(46.159368,13.813947),
new google.maps.LatLng(46.293956,14.258424),
new google.maps.LatLng(46.244012,15.572933),
new google.maps.LatLng(46.590606,15.330573),
new google.maps.LatLng(46.313778,15.576328),
new google.maps.LatLng(46.282384,15.066191),
new google.maps.LatLng(45.94074,14.779137),
new google.maps.LatLng(46.2480643,15.430381),
new google.maps.LatLng(45.897761,15.042735),
new google.maps.LatLng(45.773099,14.22173),
new google.maps.LatLng(45.699366,13.930478),
new google.maps.LatLng(46.39514,15.6621),
new google.maps.LatLng(45.965688,14.396091),
new google.maps.LatLng(45.728541,14.185466),
new google.maps.LatLng(45.56416,13.942151),
new google.maps.LatLng(46.549994,14.921771),
new google.maps.LatLng(46.193635,15.59408),
new google.maps.LatLng(45.88751,13.722667),
new google.maps.LatLng(46.422379,15.878686),
new google.maps.LatLng(46.703363,16.153704),
new google.maps.LatLng(46.409809,16.1762),
new google.maps.LatLng(46.454027,15.66381),
new google.maps.LatLng(46.071893,15.182866),
new google.maps.LatLng(45.943228,14.873156),
new google.maps.LatLng(46.340443,14.17374),
new google.maps.LatLng(45.815698,14.312776),
new google.maps.LatLng(45.466104,13.9551293),
new google.maps.LatLng(46.547065,14.963377),
new google.maps.LatLng(46.156531,14.37114),
new google.maps.LatLng(46.125498,15.199229),
new google.maps.LatLng(46.223032,15.661281),
new google.maps.LatLng(46.14909,14.592465),
new google.maps.LatLng(45.627163,13.975224),
new google.maps.LatLng(46.231842,15.63851),
new google.maps.LatLng(46.224441,15.697905),
new google.maps.LatLng(45.648808,15.336157),
new google.maps.LatLng(45.681987,15.148252),
new google.maps.LatLng(46.5408362,15.5039012),
new google.maps.LatLng(46.54744,15.521361),
new google.maps.LatLng(46.563019,15.431667),
new google.maps.LatLng(46.089084,14.899851),
new google.maps.LatLng(45.643204,15.162177),
new google.maps.LatLng(46.009446,15.301167),
new google.maps.LatLng(45.704055,13.863369),
new google.maps.LatLng(46.363124,15.598131),
new google.maps.LatLng(46.427177,14.089081),
new google.maps.LatLng(46.175949,15.602106),
new google.maps.LatLng(45.972656,13.646248),
new google.maps.LatLng(46.389075,16.277242),
new google.maps.LatLng(45.875994,13.757519),
new google.maps.LatLng(46.217349,15.56028),
new google.maps.LatLng(46.400761,15.765816),
new google.maps.LatLng(46.602902,15.078368),
new google.maps.LatLng(46.208768,15.760079),
new google.maps.LatLng(46.603957,15.194849),
new google.maps.LatLng(46.82103,16.281478),
new google.maps.LatLng(45.928226,13.646864),
new google.maps.LatLng(46.260612,15.11222),
new google.maps.LatLng(46.674419,15.657937),
new google.maps.LatLng(46.213018,15.396008),
new google.maps.LatLng(45.938005,14.940999),
new google.maps.LatLng(45.959464,15.087687),
new google.maps.LatLng(46.227446,15.470345),
new google.maps.LatLng(45.940791,14.850092),
new google.maps.LatLng(46.40098,15.69725),
new google.maps.LatLng(46.174622,14.334612),
new google.maps.LatLng(45.98433,14.572723),
new google.maps.LatLng(46.192575,14.588162),
new google.maps.LatLng(46.230816,15.516333),
new google.maps.LatLng(45.975141,14.61757),
new google.maps.LatLng(46.328052,15.037867),
new google.maps.LatLng(46.376874,15.04965),
new google.maps.LatLng(45.817985,13.848144),
new google.maps.LatLng(45.911445,14.980858),
new google.maps.LatLng(46.221546,15.321421),
new google.maps.LatLng(46.239947,15.61816),
new google.maps.LatLng(46.605264,15.110742),
new google.maps.LatLng(46.594048,15.125922),
new google.maps.LatLng(46.126292,15.036798),
new google.maps.LatLng(45.906719,15.00864),
new google.maps.LatLng(45.906112,15.024518),
new google.maps.LatLng(46.132759,14.567711),
new google.maps.LatLng(46.1188729,14.55082),
new google.maps.LatLng(46.128708,14.559881),
new google.maps.LatLng(45.966438,15.190824),
new google.maps.LatLng(45.714637,15.127814),
new google.maps.LatLng(46.363498,15.104295),
new google.maps.LatLng(46.368116,15.081389),
new google.maps.LatLng(45.932117,14.969274),
new google.maps.LatLng(46.415185,16.105162),
new google.maps.LatLng(45.94797,14.303944),
new google.maps.LatLng(46.574282,16.182117),
new google.maps.LatLng(46.219324,15.735745),
new google.maps.LatLng(46.410378,14.098658),
new google.maps.LatLng(45.958124,14.742414),
new google.maps.LatLng(45.905776,13.675595),
new google.maps.LatLng(46.596539,15.236013),
new google.maps.LatLng(46.586526,15.279936),
new google.maps.LatLng(46.593639,15.158475),
new google.maps.LatLng(46.12059,14.991078),
new google.maps.LatLng(46.420344,16.034259),
new google.maps.LatLng(45.498395,13.94394),
new google.maps.LatLng(46.085593,15.170193),
new google.maps.LatLng(46.249441,15.167059),
new google.maps.LatLng(45.939606,14.707552),
new google.maps.LatLng(46.401931,14.135639)];
*/
/*
var Stations =[new google.maps.LatLng(45.8985,15.655),new google.maps.LatLng(45.9238,15.59),new google.maps.LatLng(45.9454,15.5403),new google.maps.LatLng(45.9562,15.4934),new google.maps.LatLng(45.9874,15.4701),new google.maps.LatLng(45.9899,15.3959),new google.maps.LatLng(46.0094,15.3012),new google.maps.LatLng(46.0417,15.2356),new google.maps.LatLng(46.0535,15.2055),new google.maps.LatLng(46.0719,15.1829),new google.maps.LatLng(46.0856,15.1702),new google.maps.LatLng(46.1226,15.0935),new google.maps.LatLng(46.1263,15.0368),new google.maps.LatLng(46.1206,14.9911),new google.maps.LatLng(46.0891,14.8999),new google.maps.LatLng(46.0582,14.8251),new google.maps.LatLng(46.103,14.7917),new google.maps.LatLng(46.0842,14.7367),new google.maps.LatLng(46.0883,14.6876),new google.maps.LatLng(46.0596,14.5832),new google.maps.LatLng(46.0596,14.6152),new google.maps.LatLng(46.0587,14.5127),new google.maps.LatLng(46.1004,14.4645),new google.maps.LatLng(46.1223,14.44),new google.maps.LatLng(46.1379,14.4122),new google.maps.LatLng(46.1565,14.3711),new google.maps.LatLng(46.1746,14.3346),new google.maps.LatLng(46.239,14.3481),new google.maps.LatLng(46.294,14.2584),new google.maps.LatLng(46.311,14.2324),new google.maps.LatLng(46.3233,14.2084),new google.maps.LatLng(46.3404,14.1737),new google.maps.LatLng(46.3604,14.1581),new google.maps.LatLng(46.4019,14.1356),new google.maps.LatLng(46.4272,14.0891),new google.maps.LatLng(46.077,14.4901),new google.maps.LatLng(46.0868,14.4799),new google.maps.LatLng(46.1009,14.5264),new google.maps.LatLng(46.1396,14.5924),new google.maps.LatLng(46.1657,14.594),new google.maps.LatLng(46.2208,14.6036),new google.maps.LatLng(46.2249,14.6092),new google.maps.LatLng(46.2289,14.6095),new google.maps.LatLng(46.0768,14.5032),new google.maps.LatLng(46.1287,14.5599),new google.maps.LatLng(46.1328,14.5677),new google.maps.LatLng(46.1491,14.5925),new google.maps.LatLng(46.1799,14.5907),new google.maps.LatLng(46.1926,14.5882),new google.maps.LatLng(46.2066,14.5945),new google.maps.LatLng(46.0887,14.507),new google.maps.LatLng(46.1189,14.5508),new google.maps.LatLng(46.4361,14.0545),new google.maps.LatLng(45.6488,15.3362),new google.maps.LatLng(45.6424,15.3231),new google.maps.LatLng(45.6323,15.2698),new google.maps.LatLng(45.6164,15.2414),new google.maps.LatLng(45.58,15.191),new google.maps.LatLng(45.5989,15.1615),new google.maps.LatLng(45.6432,15.1622),new google.maps.LatLng(45.682,15.1483),new google.maps.LatLng(45.7146,15.1278),new google.maps.LatLng(45.7579,15.1481),new google.maps.LatLng(45.7999,15.1606),new google.maps.LatLng(45.8047,15.162),new google.maps.LatLng(45.8108,15.1556),new google.maps.LatLng(45.8668,15.0914),new google.maps.LatLng(45.8978,15.0427),new google.maps.LatLng(45.8339,15.1361),new google.maps.LatLng(45.9067,15.0086),new google.maps.LatLng(45.9114,14.9809),new google.maps.LatLng(45.9321,14.9693),new google.maps.LatLng(45.938,14.941),new google.maps.LatLng(45.9405,14.9092),new google.maps.LatLng(45.9432,14.8732),new google.maps.LatLng(45.9408,14.8501),new google.maps.LatLng(45.938,14.803),new google.maps.LatLng(45.9407,14.7791),new google.maps.LatLng(45.9581,14.7424),new google.maps.LatLng(45.9396,14.7076),new google.maps.LatLng(45.9403,14.6852),new google.maps.LatLng(45.9559,14.6522),new google.maps.LatLng(45.9751,14.6176),new google.maps.LatLng(45.9843,14.5727),new google.maps.LatLng(46.0366,14.5195),new google.maps.LatLng(46.0558,14.5291),new google.maps.LatLng(46.0063,15.2897),new google.maps.LatLng(45.9892,15.2399),new google.maps.LatLng(45.9664,15.1908),new google.maps.LatLng(45.9682,15.1633),new google.maps.LatLng(45.958,15.1215),new google.maps.LatLng(45.9595,15.0877),new google.maps.LatLng(45.9492,15.0625),new google.maps.LatLng(45.9348,15.0449),new google.maps.LatLng(45.9061,15.0245),new google.maps.LatLng(46.1255,15.1992),new google.maps.LatLng(46.1549,15.2319),new google.maps.LatLng(46.2286,15.2682),new google.maps.LatLng(46.2215,15.3214),new google.maps.LatLng(46.213,15.396),new google.maps.LatLng(46.2131,15.4395),new google.maps.LatLng(46.2481,15.4304),new google.maps.LatLng(46.2775,15.4981),new google.maps.LatLng(46.3138,15.5763),new google.maps.LatLng(46.3631,15.5981),new google.maps.LatLng(46.264,15.4733),new google.maps.LatLng(46.2274,15.4703),new google.maps.LatLng(46.2308,15.5163),new google.maps.LatLng(46.3951,15.6621),new google.maps.LatLng(46.454,15.6638),new google.maps.LatLng(46.4734,15.6635),new google.maps.LatLng(46.501,15.6629),new google.maps.LatLng(46.5389,15.6512),new google.maps.LatLng(46.4009,15.7203),new google.maps.LatLng(46.4008,15.7658),new google.maps.LatLng(46.4006,15.8007),new google.maps.LatLng(46.4032,15.8551),new google.maps.LatLng(46.4224,15.8787),new google.maps.LatLng(46.4233,15.9836),new google.maps.LatLng(46.4195,16.048),new google.maps.LatLng(46.4152,16.1052),new google.maps.LatLng(46.4203,16.0343),new google.maps.LatLng(46.401,15.6973),new google.maps.LatLng(46.5622,15.6585),new google.maps.LatLng(46.5542,15.6348),new google.maps.LatLng(46.5588,15.5831),new google.maps.LatLng(46.5577,15.5542),new google.maps.LatLng(46.5408,15.5039),new google.maps.LatLng(46.548,15.4516),new google.maps.LatLng(46.563,15.4317),new google.maps.LatLng(46.5749,15.4064),new google.maps.LatLng(46.5906,15.3306),new google.maps.LatLng(46.5865,15.2799),new google.maps.LatLng(46.5965,15.236),new google.maps.LatLng(46.5936,15.1585),new google.maps.LatLng(46.6053,15.1107),new google.maps.LatLng(46.5511,15.6443),new google.maps.LatLng(46.5584,15.6013),new google.maps.LatLng(46.5474,15.5214),new google.maps.LatLng(46.594,15.1259),new google.maps.LatLng(46.6029,15.0784),new google.maps.LatLng(46.604,15.1948),new google.maps.LatLng(46.5563,15.6246),new google.maps.LatLng(46.6099,15.6805),new google.maps.LatLng(46.6542,15.6601),new google.maps.LatLng(46.6744,15.6579),new google.maps.LatLng(46.5758,15.6595),new google.maps.LatLng(46.587,15.0269),new google.maps.LatLng(46.5471,14.9634),new google.maps.LatLng(46.55,14.9218),new google.maps.LatLng(46.5664,14.8414),new google.maps.LatLng(46.5737,15.0209),new google.maps.LatLng(46.5506,14.9867),new google.maps.LatLng(46.4031,16.1561),new google.maps.LatLng(46.4098,16.1762),new google.maps.LatLng(46.4265,16.1791),new google.maps.LatLng(46.4586,16.1567),new google.maps.LatLng(46.5009,16.1554),new google.maps.LatLng(46.521,16.1997),new google.maps.LatLng(46.3911,16.2257),new google.maps.LatLng(46.3891,16.2772),new google.maps.LatLng(46.395,16.1947),new google.maps.LatLng(46.5288,16.1893),new google.maps.LatLng(46.5743,16.1821),new google.maps.LatLng(46.5571,16.1742),new google.maps.LatLng(46.6234,16.2098),new google.maps.LatLng(46.6592,16.1718),new google.maps.LatLng(46.7034,16.1537),new google.maps.LatLng(46.7832,16.1646),new google.maps.LatLng(46.8008,16.2184),new google.maps.LatLng(46.821,16.2815),new google.maps.LatLng(46.8204,16.3292),new google.maps.LatLng(46.2174,15.5603),new google.maps.LatLng(46.235,15.5644),new google.maps.LatLng(46.244,15.5729),new google.maps.LatLng(46.2318,15.6385),new google.maps.LatLng(46.2244,15.6979),new google.maps.LatLng(46.2175,15.7549),new google.maps.LatLng(46.2088,15.7601),new google.maps.LatLng(46.2399,15.6182),new google.maps.LatLng(46.223,15.6613),new google.maps.LatLng(46.2193,15.7357),new google.maps.LatLng(46.1936,15.5941),new google.maps.LatLng(46.1759,15.6021),new google.maps.LatLng(46.1502,15.5992),new google.maps.LatLng(46.1271,15.6012),new google.maps.LatLng(46.1659,15.6047),new google.maps.LatLng(46.1569,15.6092),new google.maps.LatLng(46.2461,15.1898),new google.maps.LatLng(46.2494,15.1671),new google.maps.LatLng(46.2606,15.1122),new google.maps.LatLng(46.2824,15.0662),new google.maps.LatLng(46.3281,15.0379),new google.maps.LatLng(46.3415,15.0197),new google.maps.LatLng(46.3769,15.0497),new google.maps.LatLng(46.3681,15.0814),new google.maps.LatLng(46.3635,15.1043),new google.maps.LatLng(46.2371,15.245),new google.maps.LatLng(46.3812,15.0299),new google.maps.LatLng(46.0213,14.4265),new google.maps.LatLng(45.9876,14.4026),new google.maps.LatLng(45.9657,14.3961),new google.maps.LatLng(45.9215,14.3682),new google.maps.LatLng(45.948,14.3039),new google.maps.LatLng(45.9177,14.2358),new google.maps.LatLng(45.8618,14.275),new google.maps.LatLng(45.8157,14.3128),new google.maps.LatLng(45.7731,14.2217),new google.maps.LatLng(45.7285,14.1855),new google.maps.LatLng(46.0499,14.4933),new google.maps.LatLng(45.6755,14.1914),new google.maps.LatLng(45.6704,14.1056),new google.maps.LatLng(45.6664,14.0722),new google.maps.LatLng(45.6815,13.9649),new google.maps.LatLng(45.6272,13.9752),new google.maps.LatLng(45.6037,13.9353),new google.maps.LatLng(45.6994,13.9305),new google.maps.LatLng(45.5642,13.9422),new google.maps.LatLng(45.5345,13.9429),new google.maps.LatLng(45.4984,13.9439),new google.maps.LatLng(45.4661,13.9551),new google.maps.LatLng(45.539,13.7384),new google.maps.LatLng(45.552,13.8915),new google.maps.LatLng(45.5011,13.9092),new google.maps.LatLng(45.7041,13.8634),new google.maps.LatLng(45.7421,13.8273),new google.maps.LatLng(45.7849,13.8317),new google.maps.LatLng(45.818,13.8481),new google.maps.LatLng(45.8559,13.7842),new google.maps.LatLng(45.876,13.7575),new google.maps.LatLng(45.8858,13.7342),new google.maps.LatLng(45.8875,13.7227),new google.maps.LatLng(45.8991,13.6902),new google.maps.LatLng(45.9058,13.6756),new google.maps.LatLng(45.9282,13.6469),new google.maps.LatLng(45.8867,13.772),new google.maps.LatLng(45.8863,13.9024),new google.maps.LatLng(45.89,13.7361),new google.maps.LatLng(45.877,13.8175),new google.maps.LatLng(45.8825,13.8453),new google.maps.LatLng(45.8868,13.8653),new google.maps.LatLng(45.9552,13.6357),new google.maps.LatLng(45.9727,13.6462),new google.maps.LatLng(46.0461,13.5897),new google.maps.LatLng(46.0581,13.6173),new google.maps.LatLng(46.0837,13.6316),new google.maps.LatLng(46.108,13.6844),new google.maps.LatLng(46.1464,13.7593),new google.maps.LatLng(46.1594,13.8139),new google.maps.LatLng(46.1514,13.8569),new google.maps.LatLng(46.1797,13.9198),new google.maps.LatLng(46.2092,13.967),new google.maps.LatLng(46.2742,13.9591),new google.maps.LatLng(46.289,14.0027),new google.maps.LatLng(46.3384,14.0605),new google.maps.LatLng(46.3683,14.0823),new google.maps.LatLng(46.3875,14.0943),new google.maps.LatLng(46.4104,14.0987),new google.maps.LatLng(46.4238,14.0786),new google.maps.LatLng(45.7649,13.8262),new google.maps.LatLng(45.6413,14.1981),new google.maps.LatLng(45.6157,14.1859),new google.maps.LatLng(45.5692,14.2359),new google.maps.LatLng(46.0634,14.5484 )];



var StationsData=
[['44652','Ajdovščina'],
['44704','Anhovo'],
['43856','Atomske Toplice hotel'],
['44706','Avče'],
['44651','Batuje'],
['42510','Birčna vas'],
['43403','Bistrica ob Dravi'],
['42006','Blanca'],
['44716','Bled Jezero'],
['44715','Bohinjska Bela'],
['44712','Bohinjska Bistrica'],
['44004','Borovnica'],
['42901','Boštanj'],
['44504','Branik'],
['42101','Breg'],
['42005','Brestanica'],
['44001','Brezovica'],
['42002','Brežice'],
['43100','Celje'],
['43911','Celje Lava'],
['44656','Cesta'],
['43452','Cirknica'],
['43351','Cirkovce'],
['42505','Črnomelj'],
['44356','Črnotiče'],
['44200','Divača'],
['42001','Dobova'],
['43805','Dobovec'],
['42503','Dobravice'],
['44655','Dobravlje'],
['43506','Dobrije'],
['43202','Dolga Gora'],
['42352','Domžale'],
['44506','Dornberk'],
['44653','Dornberk vas'],
['43500','Dravograd'],
['42363','Duplica-Bakovnik'],
['44800','Dutovlje'],
['43405','Fala'],
['43912','Florjan'],
['43653','Frankovci'],
['42704','Gaber'],
['42311','Globoko'],
['42908','Gomila'],
['44102','Gornje Ležeče'],
['43775','Gornji Petrovci'],
['42504','Gradac'],
['44709','Grahovo'],
['43702','Grlava'],
['43200','Grobelno'],
['42800','Grosuplje'],
['43354','Hajdina'],
['43303','Hoče'],
['43777','Hodoš'],
['43503','Holmec'],
['42361','Homec pri Kamniku'],
['42201','Hrastnik'],
['44357','Hrastovlje'],
['44202','Hrpelje-Kozina'],
['44710','Hudajužna'],
['42603','Hudo'],
['44903','Ilirska Bistrica'],
['43854','Imeno'],
['42707','Ivančna Gorica'],
['43603','Ivanjkovci'],
['42353','Jarše-Mengeš'],
['42902','Jelovec'],
['42400','Jesenice'],
['42209','Jevnica'],
['42354','Kamnik'],
['42356','Kamnik Graben'],
['42355','Kamnik mesto'],
['44654','Kamnje'],
['44705','Kanal'],
['43353','Kidričevo'],
['44902','Kilovče'],
['44719','Kočna'],
['44352','Koper'],
['44502','Kopriva'],
['43455','Košaki'],
['44101','Košana'],
['42307','Kranj'],
['44501','Kreplje'],
['42208','Kresnice'],
['42004','Krško'],
['43002','Laško'],
['42210','Laze'],
['42313','Lesce-Bled'],
['42003','Libna'],
['43402','Limbuš'],
['43703','Lipovci'],
['42207','Litija'],
['42316','Litostroj'],
['42300','Ljubljana'],
['42357','Ljubljana Brinje'],
['42351','Ljubljana Črnuče'],
['42365','Ljubljana Ježica'],
['99998','Ljubljana Moste (BTC)'],
['42212','Ljubljana Polje'],
['42804','Ljubljana Rakovnik'],
['42317','Ljubljana Stegne'],
['44011','Ljubljana Tivoli'],
['42302','Ljubljana Vižmarje'],
['42805','Ljubljana Vodmat'],
['42222','Ljubljana Zalog'],
['43700','Ljutomer'],
['43605','Ljutomer mesto'],
['44006','Logatec'],
['42102','Loka'],
['43774','Mačkovci'],
['43400','Maribor'],
['43420','Maribor Sokolska'],
['43401','Maribor Studenci'],
['43413','Maribor Tabor'],
['43304','Maribor Tezno'],
['43414','Marles'],
['42303','Medno'],
['42304','Medvode'],
['43604','Mekotnjak'],
['43801','Mestinje'],
['42502','Metlika'],
['42907','Mirna'],
['42601','Mirna Peč'],
['42711','Mlačevo'],
['42905','Mokronog'],
['44707','Most na Soči'],
['43356','Moškanjci'],
['43704','Murska Sobota'],
['44901','Narin'],
['44713','Nomenj'],
['44002','Notranje Gorice'],
['44700','Nova Gorica'],
['42600','Novo mesto'],
['42512','Novo mesto Center'],
['42511','Novo mesto Kandija'],
['43651','Obrež'],
['44601','Okroglica'],
['43302','Orehova vas'],
['43600','Ormož'],
['43357','Osluševci'],
['43205','Ostrožno'],
['42310','Otoče'],
['42506','Otovec'],
['43407','Ožbalt'],
['43906','Paška vas'],
['43602','Pavlovci'],
['43451','Pesnica'],
['43901','Petrovče'],
['42904','Pijavice'],
['44100','Pivka'],
['44007','Planina'],
['44703','Plave'],
['44711','Podbrdo'],
['43853','Podčetrtek'],
['43855','Podčetrtek Toplice'],
['44301','Podgorje'],
['44717','Podhom'],
['43505','Podklanc'],
['44708','Podmelec'],
['42309','Podnart'],
['43802','Podplat'],
['43408','Podvelka'],
['43203','Poljčane'],
['43904','Polzela'],
['42708','Polževo'],
['43201','Ponikva'],
['42602','Ponikve na Dolenjskem'],
['44009','Postojna'],
['44251','Povir'],
['43300','Pragersko'],
['44003','Preserje'],
['44010','Prestranek'],
['44300','Prešnica'],
['43502','Prevalje'],
['43851','Pristava'],
['44600','Prvačina'],
['43355','Ptuj'],
['43771','Puconci'],
['43601','Pušenci'],
['43301','Rače'],
['42103','Radeče'],
['42705','Radohova vas'],
['42312','Radovljica'],
['44008','Rakek'],
['44303','Rakitovec'],
['43501','Ravne na Koroškem'],
['42305','Reteče'],
['43001','Rimske Toplice'],
['43808','Rjavica'],
['42360','Rodica'],
['44201','Rodik'],
['43803','Rogaška Slatina'],
['43804','Rogatec'],
['42501','Rosalnice'],
['42508','Rožni Dol'],
['43404','Ruše'],
['43415','Ruše tovarna'],
['43406','Ruta'],
['42206','Sava'],
['42507','Semič'],
['42100','Sevnica'],
['44500','Sežana'],
['43204','Slovenska Bistrica'],
['42315','Slovenski Javornik'],
['43852','Sodna vas'],
['44701','Solkan'],
['43652','Središče'],
['44505','Steske'],
['43800','Stranje'],
['43352','Strnišče'],
['43417','Sveti Danijel'],
['43806','Sveti Rok ob Sotli'],
['43418','Sveti Vid'],
['43776','Šalovci'],
['44603','Šempeter pri Gorici'],
['43903','Šempeter v Savinjski dolini'],
['43453','Šentilj'],
['43102','Šentjur'],
['42703','Šentlovrenc'],
['42906','Šentrupert'],
['43251','Šentvid pri Grobelnem'],
['42706','Šentvid pri Stični'],
['43360','Šikole'],
['42306','Škofja Loka'],
['42802','Škofljica'],
['42362','Šmarca'],
['43252','Šmarje pri Jelšah'],
['42801','Šmarje-Sap'],
['43905','Šmartno ob Paki'],
['43907','Šoštanj'],
['44503','Štanjel'],
['42701','Štefan'],
['43101','Štore'],
['43807','Tekačevo'],
['43412','Trbonje'],
['43416','Trbonjsko jezero'],
['42203','Trbovlje'],
['42700','Trebnje'],
['42909','Trebnje Kamna Gora'],
['42359','Trzin'],
['42366','Trzin ind. cona'],
['42358','Trzin Mlake'],
['42903','Tržišče'],
['42509','Uršna sela'],
['43910','Velenje'],
['43909','Velenje Pesje'],
['42702','Velika Loka'],
['43358','Velika Nedelja'],
['44005','Verd'],
['43701','Veržej'],
['43809','Vidina'],
['44718','Vintgar'],
['42709','Višnja Gora'],
['44602','Volčja Draga'],
['43410','Vuhred'],
['43409','Vuhred elektrarna'],
['43411','Vuzenica'],
['42204','Zagorje'],
['43359','Zamušani'],
['44302','Zazid'],
['42200','Zidani Most'],
['43902','Žalec'],
['42710','Žalna'],
['42314','Žirovnica']
];
*/
// var Stations =[new google.maps.LatLng(45.8985,15.655),new google.maps.LatLng(45.9238,15.59),new google.maps.LatLng(45.9454,15.5403),new google.maps.LatLng(45.9562,15.4934),new google.maps.LatLng(45.9874,15.4701),new google.maps.LatLng(45.9899,15.3959),new google.maps.LatLng(46.0094,15.3012),new google.maps.LatLng(46.0417,15.2356),new google.maps.LatLng(46.0535,15.2055),new google.maps.LatLng(46.0719,15.1829),new google.maps.LatLng(46.0856,15.1702),new google.maps.LatLng(46.1226,15.0935),new google.maps.LatLng(46.1263,15.0368),new google.maps.LatLng(46.1206,14.9911),new google.maps.LatLng(46.0891,14.8999),new google.maps.LatLng(46.0582,14.8251),new google.maps.LatLng(46.103,14.7917),new google.maps.LatLng(46.0842,14.7367),new google.maps.LatLng(46.0883,14.6876),new google.maps.LatLng(46.0596,14.5832),new google.maps.LatLng(46.0596,14.6152),new google.maps.LatLng(46.0587,14.5127),new google.maps.LatLng(46.1004,14.4645),new google.maps.LatLng(46.1223,14.44),new google.maps.LatLng(46.1379,14.4122),new google.maps.LatLng(46.1565,14.3711),new google.maps.LatLng(46.1746,14.3346),new google.maps.LatLng(46.239,14.3481),new google.maps.LatLng(46.294,14.2584),new google.maps.LatLng(46.311,14.2324),new google.maps.LatLng(46.3233,14.2084),new google.maps.LatLng(46.3404,14.1737),new google.maps.LatLng(46.3604,14.1581),new google.maps.LatLng(46.4019,14.1356),new google.maps.LatLng(46.4272,14.0891),new google.maps.LatLng(46.077,14.4901),new google.maps.LatLng(46.0868,14.4799),new google.maps.LatLng(46.1009,14.5264),new google.maps.LatLng(46.1396,14.5924),new google.maps.LatLng(46.1657,14.594),new google.maps.LatLng(46.2208,14.6036),new google.maps.LatLng(46.2249,14.6092),new google.maps.LatLng(46.2289,14.6095),new google.maps.LatLng(46.0768,14.5032),new google.maps.LatLng(46.1287,14.5599),new google.maps.LatLng(46.1328,14.5677),new google.maps.LatLng(46.1491,14.5925),new google.maps.LatLng(46.1799,14.5907),new google.maps.LatLng(46.1926,14.5882),new google.maps.LatLng(46.2066,14.5945),new google.maps.LatLng(46.0887,14.507),new google.maps.LatLng(46.1189,14.5508),new google.maps.LatLng(46.4361,14.0545),new google.maps.LatLng(45.6488,15.3362),new google.maps.LatLng(45.6424,15.3231),new google.maps.LatLng(45.6323,15.2698),new google.maps.LatLng(45.6164,15.2414),new google.maps.LatLng(45.58,15.191),new google.maps.LatLng(45.5989,15.1615),new google.maps.LatLng(45.6432,15.1622),new google.maps.LatLng(45.682,15.1483),new google.maps.LatLng(45.7146,15.1278),new google.maps.LatLng(45.7579,15.1481),new google.maps.LatLng(45.7999,15.1606),new google.maps.LatLng(45.8047,15.162),new google.maps.LatLng(45.8108,15.1556),new google.maps.LatLng(45.8668,15.0914),new google.maps.LatLng(45.8978,15.0427),new google.maps.LatLng(45.8339,15.1361),new google.maps.LatLng(45.9067,15.0086),new google.maps.LatLng(45.9114,14.9809),new google.maps.LatLng(45.9321,14.9693),new google.maps.LatLng(45.938,14.941),new google.maps.LatLng(45.9405,14.9092),new google.maps.LatLng(45.9432,14.8732),new google.maps.LatLng(45.9408,14.8501),new google.maps.LatLng(45.938,14.803),new google.maps.LatLng(45.9407,14.7791),new google.maps.LatLng(45.9581,14.7424),new google.maps.LatLng(45.9396,14.7076),new google.maps.LatLng(45.9403,14.6852),new google.maps.LatLng(45.9559,14.6522),new google.maps.LatLng(45.9751,14.6176),new google.maps.LatLng(45.9843,14.5727),new google.maps.LatLng(46.0366,14.5195),new google.maps.LatLng(46.0558,14.5291),new google.maps.LatLng(46.0063,15.2897),new google.maps.LatLng(45.9892,15.2399),new google.maps.LatLng(45.9664,15.1908),new google.maps.LatLng(45.9682,15.1633),new google.maps.LatLng(45.958,15.1215),new google.maps.LatLng(45.9595,15.0877),new google.maps.LatLng(45.9492,15.0625),new google.maps.LatLng(45.9348,15.0449),new google.maps.LatLng(45.9061,15.0245),new google.maps.LatLng(46.1255,15.1992),new google.maps.LatLng(46.1549,15.2319),new google.maps.LatLng(46.2286,15.2682),new google.maps.LatLng(46.2215,15.3214),new google.maps.LatLng(46.213,15.396),new google.maps.LatLng(46.2131,15.4395),new google.maps.LatLng(46.2481,15.4304),new google.maps.LatLng(46.2775,15.4981),new google.maps.LatLng(46.3138,15.5763),new google.maps.LatLng(46.3631,15.5981),new google.maps.LatLng(46.264,15.4733),new google.maps.LatLng(46.2274,15.4703),new google.maps.LatLng(46.2308,15.5163),new google.maps.LatLng(46.3951,15.6621),new google.maps.LatLng(46.454,15.6638),new google.maps.LatLng(46.4734,15.6635),new google.maps.LatLng(46.501,15.6629),new google.maps.LatLng(46.5389,15.6512),new google.maps.LatLng(46.4009,15.7203),new google.maps.LatLng(46.4008,15.7658),new google.maps.LatLng(46.4006,15.8007),new google.maps.LatLng(46.4032,15.8551),new google.maps.LatLng(46.4224,15.8787),new google.maps.LatLng(46.4233,15.9836),new google.maps.LatLng(46.4195,16.048),new google.maps.LatLng(46.4152,16.1052),new google.maps.LatLng(46.4203,16.0343),new google.maps.LatLng(46.401,15.6973),new google.maps.LatLng(46.5622,15.6585),new google.maps.LatLng(46.5542,15.6348),new google.maps.LatLng(46.5588,15.5831),new google.maps.LatLng(46.5577,15.5542),new google.maps.LatLng(46.5408,15.5039),new google.maps.LatLng(46.548,15.4516),new google.maps.LatLng(46.563,15.4317),new google.maps.LatLng(46.5749,15.4064),new google.maps.LatLng(46.5906,15.3306),new google.maps.LatLng(46.5865,15.2799),new google.maps.LatLng(46.5965,15.236),new google.maps.LatLng(46.5936,15.1585),new google.maps.LatLng(46.6053,15.1107),new google.maps.LatLng(46.5511,15.6443),new google.maps.LatLng(46.5584,15.6013),new google.maps.LatLng(46.5474,15.5214),new google.maps.LatLng(46.594,15.1259),new google.maps.LatLng(46.6029,15.0784),new google.maps.LatLng(46.604,15.1948),new google.maps.LatLng(46.5563,15.6246),new google.maps.LatLng(46.6099,15.6805),new google.maps.LatLng(46.6542,15.6601),new google.maps.LatLng(46.6744,15.6579),new google.maps.LatLng(46.5758,15.6595),new google.maps.LatLng(46.587,15.0269),new google.maps.LatLng(46.5471,14.9634),new google.maps.LatLng(46.55,14.9218),new google.maps.LatLng(46.5664,14.8414),new google.maps.LatLng(46.5737,15.0209),new google.maps.LatLng(46.5506,14.9867),new google.maps.LatLng(46.4031,16.1561),new google.maps.LatLng(46.4098,16.1762),new google.maps.LatLng(46.4265,16.1791),new google.maps.LatLng(46.4586,16.1567),new google.maps.LatLng(46.5009,16.1554),new google.maps.LatLng(46.521,16.1997),new google.maps.LatLng(46.3911,16.2257),new google.maps.LatLng(46.3891,16.2772),new google.maps.LatLng(46.395,16.1947),new google.maps.LatLng(46.5288,16.1893),new google.maps.LatLng(46.5743,16.1821),new google.maps.LatLng(46.5571,16.1742),new google.maps.LatLng(46.6234,16.2098),new google.maps.LatLng(46.6592,16.1718),new google.maps.LatLng(46.7034,16.1537),new google.maps.LatLng(46.7832,16.1646),new google.maps.LatLng(46.8008,16.2184),new google.maps.LatLng(46.821,16.2815),new google.maps.LatLng(46.8204,16.3292),new google.maps.LatLng(46.2174,15.5603),new google.maps.LatLng(46.235,15.5644),new google.maps.LatLng(46.244,15.5729),new google.maps.LatLng(46.2318,15.6385),new google.maps.LatLng(46.2244,15.6979),new google.maps.LatLng(46.2175,15.7549),new google.maps.LatLng(46.2088,15.7601),new google.maps.LatLng(46.2399,15.6182),new google.maps.LatLng(46.223,15.6613),new google.maps.LatLng(46.2193,15.7357),new google.maps.LatLng(46.1936,15.5941),new google.maps.LatLng(46.1759,15.6021),new google.maps.LatLng(46.1502,15.5992),new google.maps.LatLng(46.1271,15.6012),new google.maps.LatLng(46.1659,15.6047),new google.maps.LatLng(46.1569,15.6092),new google.maps.LatLng(46.2461,15.1898),new google.maps.LatLng(46.2494,15.1671),new google.maps.LatLng(46.2606,15.1122),new google.maps.LatLng(46.2824,15.0662),new google.maps.LatLng(46.3281,15.0379),new google.maps.LatLng(46.3415,15.0197),new google.maps.LatLng(46.3769,15.0497),new google.maps.LatLng(46.3681,15.0814),new google.maps.LatLng(46.3635,15.1043),new google.maps.LatLng(46.2371,15.245),new google.maps.LatLng(46.3812,15.0299),new google.maps.LatLng(46.0213,14.4265),new google.maps.LatLng(45.9876,14.4026),new google.maps.LatLng(45.9657,14.3961),new google.maps.LatLng(45.9215,14.3682),new google.maps.LatLng(45.948,14.3039),new google.maps.LatLng(45.9177,14.2358),new google.maps.LatLng(45.8618,14.275),new google.maps.LatLng(45.8157,14.3128),new google.maps.LatLng(45.7731,14.2217),new google.maps.LatLng(45.7285,14.1855),new google.maps.LatLng(46.0499,14.4933),new google.maps.LatLng(45.6755,14.1914),new google.maps.LatLng(45.6704,14.1056),new google.maps.LatLng(45.6664,14.0722),new google.maps.LatLng(45.6815,13.9649),new google.maps.LatLng(45.6272,13.9752),new google.maps.LatLng(45.6037,13.9353),new google.maps.LatLng(45.6994,13.9305),new google.maps.LatLng(45.5642,13.9422),new google.maps.LatLng(45.5345,13.9429),new google.maps.LatLng(45.4984,13.9439),new google.maps.LatLng(45.4661,13.9551),new google.maps.LatLng(45.539,13.7384),new google.maps.LatLng(45.552,13.8915),new google.maps.LatLng(45.5011,13.9092),new google.maps.LatLng(45.7041,13.8634),new google.maps.LatLng(45.7421,13.8273),new google.maps.LatLng(45.7849,13.8317),new google.maps.LatLng(45.818,13.8481),new google.maps.LatLng(45.8559,13.7842),new google.maps.LatLng(45.876,13.7575),new google.maps.LatLng(45.8858,13.7342),new google.maps.LatLng(45.8875,13.7227),new google.maps.LatLng(45.8991,13.6902),new google.maps.LatLng(45.9058,13.6756),new google.maps.LatLng(45.9282,13.6469),new google.maps.LatLng(45.8867,13.772),new google.maps.LatLng(45.8863,13.9024),new google.maps.LatLng(45.89,13.7361),new google.maps.LatLng(45.877,13.8175),new google.maps.LatLng(45.8825,13.8453),new google.maps.LatLng(45.8868,13.8653),new google.maps.LatLng(45.9552,13.6357),new google.maps.LatLng(45.9727,13.6462),new google.maps.LatLng(46.0461,13.5897),new google.maps.LatLng(46.0581,13.6173),new google.maps.LatLng(46.0837,13.6316),new google.maps.LatLng(46.108,13.6844),new google.maps.LatLng(46.1464,13.7593),new google.maps.LatLng(46.1594,13.8139),new google.maps.LatLng(46.1514,13.8569),new google.maps.LatLng(46.1797,13.9198),new google.maps.LatLng(46.2092,13.967),new google.maps.LatLng(46.2742,13.9591),new google.maps.LatLng(46.289,14.0027),new google.maps.LatLng(46.3384,14.0605),new google.maps.LatLng(46.3683,14.0823),new google.maps.LatLng(46.3875,14.0943),new google.maps.LatLng(46.4104,14.0987),new google.maps.LatLng(46.4238,14.0786),new google.maps.LatLng(45.7649,13.8262),new google.maps.LatLng(45.6413,14.1981),new google.maps.LatLng(45.6157,14.1859),new google.maps.LatLng(45.5692,14.2359),new google.maps.LatLng(46.0634,14.5484 )];
// var StationsData = [['42001','Dobova'],['42002','Brežice'],['42003','Libna'],['42004','Krško'],['42005','Brestanica'],['42006','Blanca'],['42100','Sevnica'],['42101','Breg'],['42102','Loka'],['42103','Radeče'],['42200','Zidani Most'],['42201','Hrastnik'],['42203','Trbovlje'],['42204','Zagorje'],['42206','Sava'],['42207','Litija'],['42208','Kresnice'],['42209','Jevnica'],['42210','Laze'],['42212','Ljubljana Polje'],['42222','Ljubljana Zalog'],['42300','Ljubljana'],['42302','Ljubljana Vižmarje'],['42303','Medno'],['42304','Medvode'],['42305','Reteče'],['42306','Škofja Loka'],['42307','Kranj'],['42309','Podnart'],['42310','Otoče'],['42311','Globoko'],['42312','Radovljica'],['42313','Lesce-Bled'],['42314','Žirovnica'],['42315','Slovenski Javornik'],['42316','Litostroj'],['42317','Ljubljana Stegne'],['42351','Ljubljana Črnuče'],['42352','Domžale'],['42353','Jarše-Mengeš'],['42354','Kamnik'],['42355','Kamnik mesto'],['42356','Kamnik Graben'],['42357','Ljubljana Brinje'],['42358','Trzin Mlake'],['42359','Trzin'],['42360','Rodica'],['42361','Homec pri Kamniku'],['42362','Šmarca'],['42363','Duplica-Bakovnik'],['42365','Ljubljana Ježica'],['42366','Trzin ind. cona'],['42400','Jesenice'],['42501','Rosalnice'],['42502','Metlika'],['42503','Dobravice'],['42504','Gradac'],['42505','Črnomelj'],['42506','Otovec'],['42507','Semič'],['42508','Rožni Dol'],['42509','Uršna sela'],['42510','Birčna vas'],['42511','Novo mesto Kandija'],['42512','Novo mesto Center'],['42600','Novo mesto'],['42601','Mirna Peč'],['42602','Ponikve na Dolenjskem'],['42603','Hudo'],['42700','Trebnje'],['42701','Štefan'],['42702','Velika Loka'],['42703','Šentlovrenc'],['42704','Gaber'],['42705','Radohova vas'],['42706','Šentvid pri Stični'],['42707','Ivančna Gorica'],['42708','Polževo'],['42709','Višnja Gora'],['42710','Žalna'],['42711','Mlačevo'],['42800','Grosuplje'],['42801','Šmarje-Sap'],['42802','Škofljica'],['42804','Ljubljana Rakovnik'],['42805','Ljubljana Vodmat'],['42901','Boštanj'],['42902','Jelovec'],['42903','Tržišče'],['42904','Pijavice'],['42905','Mokronog'],['42906','Šentrupert'],['42907','Mirna'],['42908','Gomila'],['42909','Trebnje Kamna Gora'],['43001','Rimske Toplice'],['43002','Laško'],['43100','Celje'],['43101','Štore'],['43102','Šentjur'],['43200','Grobelno'],['43201','Ponikva'],['43202','Dolga Gora'],['43203','Poljčane'],['43204','Slovenska Bistrica'],['43205','Ostrožno'],['43251','Šentvid pri Grobelnem'],['43252','Šmarje pri Jelšah'],['43300','Pragersko'],['43301','Rače'],['43302','Orehova vas'],['43303','Hoče'],['43304','Maribor Tezno'],['43351','Cirkovce'],['43352','Strnišče'],['43353','Kidričevo'],['43354','Hajdina'],['43355','Ptuj'],['43356','Moškanjci'],['43357','Osluševci'],['43358','Velika Nedelja'],['43359','Zamušani'],['43360','Šikole'],['43400','Maribor'],['43401','Maribor Studenci'],['43402','Limbuš'],['43403','Bistrica ob Dravi'],['43404','Ruše'],['43405','Fala'],['43406','Ruta'],['43407','Ožbalt'],['43408','Podvelka'],['43409','Vuhred elektrarna'],['43410','Vuhred'],['43411','Vuzenica'],['43412','Trbonje'],['43413','Maribor Tabor'],['43414','Marles'],['43415','Ruše tovarna'],['43416','Trbonjsko jezero'],['43417','Sveti Danijel'],['43418','Sveti Vid'],['43420','Maribor Sokolska'],['43451','Pesnica'],['43452','Cirknica'],['43453','Šentilj'],['43455','Košaki'],['43500','Dravograd'],['43501','Ravne na Koroškem'],['43502','Prevalje'],['43503','Holmec'],['43505','Podklanc'],['43506','Dobrije'],['43600','Ormož'],['43601','Pušenci'],['43602','Pavlovci'],['43603','Ivanjkovci'],['43604','Mekotnjak'],['43605','Ljutomer mesto'],['43651','Obrež'],['43652','Središče'],['43653','Frankovci'],['43700','Ljutomer'],['43701','Veržej'],['43702','Grlava'],['43703','Lipovci'],['43704','Murska Sobota'],['43771','Puconci'],['43774','Mačkovci'],['43775','Gornji Petrovci'],['43776','Šalovci'],['43777','Hodoš'],['43800','Stranje'],['43801','Mestinje'],['43802','Podplat'],['43803','Rogaška Slatina'],['43804','Rogatec'],['43805','Dobovec'],['43806','Sveti Rok ob Sotli'],['43807','Tekačevo'],['43808','Rjavica'],['43809','Vidina'],['43851','Pristava'],['43852','Sodna vas'],['43853','Podčetrtek'],['43854','Imeno'],['43855','Podčetrtek Toplice'],['43856','Atomske Toplice hotel'],['43901','Petrovče'],['43902','Žalec'],['43903','Šempeter v Savinjski dolini'],['43904','Polzela'],['43905','Šmartno ob Paki'],['43906','Paška vas'],['43907','Šoštanj'],['43909','Velenje Pesje'],['43910','Velenje'],['43911','Celje Lava'],['43912','Florjan'],['44001','Brezovica'],['44002','Notranje Gorice'],['44003','Preserje'],['44004','Borovnica'],['44005','Verd'],['44006','Logatec'],['44007','Planina'],['44008','Rakek'],['44009','Postojna'],['44010','Prestranek'],['44011','Ljubljana Tivoli'],['44100','Pivka'],['44101','Košana'],['44102','Gornje Ležeče'],['44200','Divača'],['44201','Rodik'],['44202','Hrpelje-Kozina'],['44251','Povir'],['44300','Prešnica'],['44301','Podgorje'],['44302','Zazid'],['44303','Rakitovec'],['44352','Koper'],['44356','Črnotiče'],['44357','Hrastovlje'],['44500','Sežana'],['44501','Kreplje'],['44502','Kopriva'],['44503','Štanjel'],['44504','Branik'],['44505','Steske'],['44506','Dornberk'],['44600','Prvačina'],['44601','Okroglica'],['44602','Volčja Draga'],['44603','Šempeter pri Gorici'],['44651','Batuje'],['44652','Ajdovščina'],['44653','Dornberk vas'],['44654','Kamnje'],['44655','Dobravlje'],['44656','Cesta'],['44700','Nova Gorica'],['44701','Solkan'],['44703','Plave'],['44704','Anhovo'],['44705','Kanal'],['44706','Avče'],['44707','Most na Soči'],['44708','Podmelec'],['44709','Grahovo'],['44710','Hudajužna'],['44711','Podbrdo'],['44712','Bohinjska Bistrica'],['44713','Nomenj'],['44715','Bohinjska Bela'],['44716','Bled Jezero'],['44717','Podhom'],['44718','Vintgar'],['44719','Kočna'],['44800','Dutovlje'],['44901','Narin'],['44902','Kilovče'],['44903','Ilirska Bistrica'],['99998','Ljubljana Moste (BTC)'] ];
var RailPolyLines =[];RailPolyLines[0]=[[45.8985,15.655,42001,42002],[45.9238,15.59]];RailPolyLines[1]=[[45.9238,15.59,42002,42003],[45.9454,15.5403]];RailPolyLines[2]=[[45.9454,15.5403,42003,42004],[45.9562,15.4934]];RailPolyLines[3]=[[45.9562,15.4934,42004,42005],[45.9874,15.4701]];RailPolyLines[4]=[[45.9874,15.4701,42005,42006],[45.9899,15.3959]];RailPolyLines[5]=[[45.9899,15.3959,42006,42100],[46.0094,15.3012]];RailPolyLines[6]=[[46.0094,15.3012,42100,42901],[46.0063,15.2897]];RailPolyLines[7]=[[46.0417,15.2356,42101,42102],[46.0535,15.2055]];RailPolyLines[8]=[[46.0417,15.2356,42101,42901],[46.0063,15.2897]];RailPolyLines[9]=[[46.0535,15.2055,42102,42103],[46.0719,15.1829]];RailPolyLines[10]=[[46.0719,15.1829,42103,42200],[46.0856,15.1702]];RailPolyLines[11]=[[46.0856,15.1702,42200,42201],[46.1226,15.0935]];RailPolyLines[12]=[[46.0856,15.1702,42200,43001],[46.1255,15.1992]];RailPolyLines[13]=[[46.1226,15.0935,42201,42203],[46.1263,15.0368]];RailPolyLines[14]=[[46.1263,15.0368,42203,42204],[46.1206,14.9911]];RailPolyLines[15]=[[46.1206,14.9911,42204,42206],[46.0891,14.8999]];RailPolyLines[16]=[[46.0891,14.8999,42206,42207],[46.0582,14.8251]];RailPolyLines[17]=[[46.0582,14.8251,42207,42208],[46.103,14.7917]];RailPolyLines[18]=[[46.103,14.7917,42208,42209],[46.0842,14.7367]];RailPolyLines[19]=[[46.0842,14.7367,42209,42210],[46.0883,14.6876]];RailPolyLines[20]=[[46.0883,14.6876,42210,42222],[46.0596,14.6152]];RailPolyLines[21]=[[46.0596,14.5832,42212,42222],[46.0596,14.6152]];RailPolyLines[22]=[[46.0596,14.5832,42212,99998],[46.0634,14.5484]];RailPolyLines[23]=[[46.0587,14.5127,42300,42316],[46.077,14.4901]];RailPolyLines[24]=[[46.0587,14.5127,42300,42357],[46.0768,14.5032]];RailPolyLines[25]=[[46.0587,14.5127,42300,42805],[46.0558,14.5291]];RailPolyLines[26]=[[46.0587,14.5127,42300,44011],[46.0499,14.4933]];RailPolyLines[27]=[[46.1004,14.4645,42302,42303],[46.1223,14.44]];RailPolyLines[28]=[[46.1004,14.4645,42302,42317],[46.0868,14.4799]];RailPolyLines[29]=[[46.1223,14.44,42303,42304],[46.1379,14.4122]];RailPolyLines[30]=[[46.1223,14.44,42303,42805],[46.0558,14.5291]];RailPolyLines[31]=[[46.1379,14.4122,42304,42305],[46.1565,14.3711]];RailPolyLines[32]=[[46.1565,14.3711,42305,42306],[46.1746,14.3346]];RailPolyLines[33]=[[46.1746,14.3346,42306,42307],[46.239,14.3481]];RailPolyLines[34]=[[46.239,14.3481,42307,42309],[46.294,14.2584]];RailPolyLines[35]=[[46.294,14.2584,42309,42310],[46.311,14.2324]];RailPolyLines[36]=[[46.311,14.2324,42310,42311],[46.3233,14.2084]];RailPolyLines[37]=[[46.3233,14.2084,42311,42312],[46.3404,14.1737]];RailPolyLines[38]=[[46.3404,14.1737,42312,42313],[46.3604,14.1581]];RailPolyLines[39]=[[46.3604,14.1581,42313,42314],[46.4019,14.1356]];RailPolyLines[40]=[[46.4019,14.1356,42314,42315],[46.4272,14.0891]];RailPolyLines[41]=[[46.4272,14.0891,42315,42400],[46.4361,14.0545]];RailPolyLines[42]=[[46.077,14.4901,42316,42317],[46.0868,14.4799]];RailPolyLines[43]=[[46.1009,14.5264,42351,42365],[46.0887,14.507]];RailPolyLines[44]=[[46.1009,14.5264,42351,42366],[46.1189,14.5508]];RailPolyLines[45]=[[46.1396,14.5924,42352,42359],[46.1328,14.5677]];RailPolyLines[46]=[[46.1396,14.5924,42352,42360],[46.1491,14.5925]];RailPolyLines[47]=[[46.1657,14.594,42353,42360],[46.1491,14.5925]];RailPolyLines[48]=[[46.1657,14.594,42353,42361],[46.1799,14.5907]];RailPolyLines[49]=[[46.2208,14.6036,42354,42355],[46.2249,14.6092]];RailPolyLines[50]=[[46.2208,14.6036,42354,42363],[46.2066,14.5945]];RailPolyLines[51]=[[46.2249,14.6092,42355,42356],[46.2289,14.6095]];RailPolyLines[52]=[[46.0768,14.5032,42357,42365],[46.0887,14.507]];RailPolyLines[53]=[[46.1287,14.5599,42358,42359],[46.1328,14.5677]];RailPolyLines[54]=[[46.1287,14.5599,42358,42366],[46.1189,14.5508]];RailPolyLines[55]=[[46.1799,14.5907,42361,42362],[46.1926,14.5882]];RailPolyLines[56]=[[46.1926,14.5882,42362,42363],[46.2066,14.5945]];RailPolyLines[57]=[[46.4361,14.0545,42400,44719],[46.4238,14.0786]];RailPolyLines[58]=[[45.6488,15.3362,42501,42502],[45.6424,15.3231]];RailPolyLines[59]=[[45.6424,15.3231,42502,42503],[45.6323,15.2698]];RailPolyLines[60]=[[45.6323,15.2698,42503,42504],[45.6164,15.2414]];RailPolyLines[61]=[[45.6164,15.2414,42504,42505],[45.58,15.191]];RailPolyLines[62]=[[45.58,15.191,42505,42506],[45.5989,15.1615]];RailPolyLines[63]=[[45.5989,15.1615,42506,42507],[45.6432,15.1622]];RailPolyLines[64]=[[45.6432,15.1622,42507,42508],[45.682,15.1483]];RailPolyLines[65]=[[45.682,15.1483,42508,42509],[45.7146,15.1278]];RailPolyLines[66]=[[45.7146,15.1278,42509,42510],[45.7579,15.1481]];RailPolyLines[67]=[[45.7579,15.1481,42510,42511],[45.7999,15.1606]];RailPolyLines[68]=[[45.7999,15.1606,42511,42512],[45.8047,15.162]];RailPolyLines[69]=[[45.8047,15.162,42512,42600],[45.8108,15.1556]];RailPolyLines[70]=[[45.8108,15.1556,42600,42603],[45.8339,15.1361]];RailPolyLines[71]=[[45.8668,15.0914,42601,42602],[45.8978,15.0427]];RailPolyLines[72]=[[45.8668,15.0914,42601,42603],[45.8339,15.1361]];RailPolyLines[73]=[[45.8978,15.0427,42602,42909],[45.9061,15.0245]];RailPolyLines[74]=[[45.9067,15.0086,42700,42701],[45.9114,14.9809]];RailPolyLines[75]=[[45.9067,15.0086,42700,42909],[45.9061,15.0245]];RailPolyLines[76]=[[45.9114,14.9809,42701,42702],[45.9321,14.9693]];RailPolyLines[77]=[[45.9321,14.9693,42702,42703],[45.938,14.941]];RailPolyLines[78]=[[45.938,14.941,42703,42704],[45.9405,14.9092]];RailPolyLines[79]=[[45.9405,14.9092,42704,42705],[45.9432,14.8732]];RailPolyLines[80]=[[45.9432,14.8732,42705,42706],[45.9408,14.8501]];RailPolyLines[81]=[[45.9408,14.8501,42706,42707],[45.938,14.803]];RailPolyLines[82]=[[45.938,14.803,42707,42708],[45.9407,14.7791]];RailPolyLines[83]=[[45.9407,14.7791,42708,42709],[45.9581,14.7424]];RailPolyLines[84]=[[45.9581,14.7424,42709,42710],[45.9396,14.7076]];RailPolyLines[85]=[[45.9396,14.7076,42710,42711],[45.9403,14.6852]];RailPolyLines[86]=[[45.9403,14.6852,42711,42800],[45.9559,14.6522]];RailPolyLines[87]=[[45.9559,14.6522,42800,42801],[45.9751,14.6176]];RailPolyLines[88]=[[45.9751,14.6176,42801,42802],[45.9843,14.5727]];RailPolyLines[89]=[[45.9843,14.5727,42802,42804],[46.0366,14.5195]];RailPolyLines[90]=[[46.0366,14.5195,42804,42805],[46.0558,14.5291]];RailPolyLines[91]=[[46.0558,14.5291,42805,99998],[46.0634,14.5484]];RailPolyLines[92]=[[46.0063,15.2897,42901,42902],[45.9892,15.2399]];RailPolyLines[93]=[[45.9892,15.2399,42902,42903],[45.9664,15.1908]];RailPolyLines[94]=[[45.9664,15.1908,42903,42904],[45.9682,15.1633]];RailPolyLines[95]=[[45.9682,15.1633,42904,42905],[45.958,15.1215]];RailPolyLines[96]=[[45.958,15.1215,42905,42906],[45.9595,15.0877]];RailPolyLines[97]=[[45.9595,15.0877,42906,42907],[45.9492,15.0625]];RailPolyLines[98]=[[45.9492,15.0625,42907,42908],[45.9348,15.0449]];RailPolyLines[99]=[[45.9348,15.0449,42908,42909],[45.9061,15.0245]];RailPolyLines[100]=[[46.1255,15.1992,43001,43002],[46.1549,15.2319]];RailPolyLines[101]=[[46.1549,15.2319,43002,43100],[46.2286,15.2682]];RailPolyLines[102]=[[46.2286,15.2682,43100,43101],[46.2215,15.3214]];RailPolyLines[103]=[[46.2286,15.2682,43100,43911],[46.2371,15.245]];RailPolyLines[104]=[[46.2215,15.3214,43101,43102],[46.213,15.396]];RailPolyLines[105]=[[46.213,15.396,43102,43200],[46.2131,15.4395]];RailPolyLines[106]=[[46.2131,15.4395,43200,43201],[46.2481,15.4304]];RailPolyLines[107]=[[46.2131,15.4395,43200,43251],[46.2274,15.4703]];RailPolyLines[108]=[[46.2481,15.4304,43201,43205],[46.264,15.4733]];RailPolyLines[109]=[[46.2775,15.4981,43202,43203],[46.3138,15.5763]];RailPolyLines[110]=[[46.2775,15.4981,43202,43205],[46.264,15.4733]];RailPolyLines[111]=[[46.3138,15.5763,43203,43204],[46.3631,15.5981]];RailPolyLines[112]=[[46.3631,15.5981,43204,43300],[46.3951,15.6621]];RailPolyLines[113]=[[46.2274,15.4703,43251,43252],[46.2308,15.5163]];RailPolyLines[114]=[[46.2308,15.5163,43252,43800],[46.2174,15.5603]];RailPolyLines[115]=[[46.3951,15.6621,43300,43301],[46.454,15.6638]];RailPolyLines[116]=[[46.3951,15.6621,43300,43360],[46.401,15.6973]];RailPolyLines[117]=[[46.454,15.6638,43301,43302],[46.4734,15.6635]];RailPolyLines[118]=[[46.4734,15.6635,43302,43303],[46.501,15.6629]];RailPolyLines[119]=[[46.501,15.6629,43303,43304],[46.5389,15.6512]];RailPolyLines[120]=[[46.5389,15.6512,43304,43400],[46.5622,15.6585]];RailPolyLines[121]=[[46.5389,15.6512,43304,43413],[46.5511,15.6443]];RailPolyLines[122]=[[46.4009,15.7203,43351,43352],[46.4008,15.7658]];RailPolyLines[123]=[[46.4009,15.7203,43351,43360],[46.401,15.6973]];RailPolyLines[124]=[[46.4008,15.7658,43352,43353],[46.4006,15.8007]];RailPolyLines[125]=[[46.4006,15.8007,43353,43354],[46.4032,15.8551]];RailPolyLines[126]=[[46.4032,15.8551,43354,43355],[46.4224,15.8787]];RailPolyLines[127]=[[46.4224,15.8787,43355,43356],[46.4233,15.9836]];RailPolyLines[128]=[[46.4233,15.9836,43356,43359],[46.4203,16.0343]];RailPolyLines[129]=[[46.4195,16.048,43357,43358],[46.4152,16.1052]];RailPolyLines[130]=[[46.4195,16.048,43357,43359],[46.4203,16.0343]];RailPolyLines[131]=[[46.4152,16.1052,43358,43600],[46.4031,16.1561]];RailPolyLines[132]=[[46.5622,15.6585,43400,43455],[46.5758,15.6595]];RailPolyLines[133]=[[46.5542,15.6348,43401,43413],[46.5511,15.6443]];RailPolyLines[134]=[[46.5542,15.6348,43401,43420],[46.5563,15.6246]];RailPolyLines[135]=[[46.5588,15.5831,43402,43403],[46.5577,15.5542]];RailPolyLines[136]=[[46.5588,15.5831,43402,43414],[46.5584,15.6013]];RailPolyLines[137]=[[46.5577,15.5542,43403,43415],[46.5474,15.5214]];RailPolyLines[138]=[[46.5408,15.5039,43404,43405],[46.548,15.4516]];RailPolyLines[139]=[[46.5408,15.5039,43404,43415],[46.5474,15.5214]];RailPolyLines[140]=[[46.548,15.4516,43405,43406],[46.563,15.4317]];RailPolyLines[141]=[[46.563,15.4317,43406,43407],[46.5749,15.4064]];RailPolyLines[142]=[[46.5749,15.4064,43407,43408],[46.5906,15.3306]];RailPolyLines[143]=[[46.5906,15.3306,43408,43409],[46.5865,15.2799]];RailPolyLines[144]=[[46.5865,15.2799,43409,43410],[46.5965,15.236]];RailPolyLines[145]=[[46.5965,15.236,43410,43418],[46.604,15.1948]];RailPolyLines[146]=[[46.5936,15.1585,43411,43416],[46.594,15.1259]];RailPolyLines[147]=[[46.5936,15.1585,43411,43418],[46.604,15.1948]];RailPolyLines[148]=[[46.6053,15.1107,43412,43416],[46.594,15.1259]];RailPolyLines[149]=[[46.6053,15.1107,43412,43417],[46.6029,15.0784]];RailPolyLines[150]=[[46.5584,15.6013,43414,43420],[46.5563,15.6246]];RailPolyLines[151]=[[46.6029,15.0784,43417,43500],[46.587,15.0269]];RailPolyLines[152]=[[46.6099,15.6805,43451,43452],[46.6542,15.6601]];RailPolyLines[153]=[[46.6099,15.6805,43451,43455],[46.5758,15.6595]];RailPolyLines[154]=[[46.6542,15.6601,43452,43453],[46.6744,15.6579]];RailPolyLines[155]=[[46.587,15.0269,43500,43505],[46.5737,15.0209]];RailPolyLines[156]=[[46.5471,14.9634,43501,43502],[46.55,14.9218]];RailPolyLines[157]=[[46.5471,14.9634,43501,43506],[46.5506,14.9867]];RailPolyLines[158]=[[46.55,14.9218,43502,43503],[46.5664,14.8414]];RailPolyLines[159]=[[46.5737,15.0209,43505,43506],[46.5506,14.9867]];RailPolyLines[160]=[[46.4031,16.1561,43600,43601],[46.4098,16.1762]];RailPolyLines[161]=[[46.4031,16.1561,43600,43653],[46.395,16.1947]];RailPolyLines[162]=[[46.4098,16.1762,43601,43602],[46.4265,16.1791]];RailPolyLines[163]=[[46.4265,16.1791,43602,43603],[46.4586,16.1567]];RailPolyLines[164]=[[46.4586,16.1567,43603,43604],[46.5009,16.1554]];RailPolyLines[165]=[[46.5009,16.1554,43604,43605],[46.521,16.1997]];RailPolyLines[166]=[[46.521,16.1997,43605,43700],[46.5288,16.1893]];RailPolyLines[167]=[[46.3911,16.2257,43651,43652],[46.3891,16.2772]];RailPolyLines[168]=[[46.3911,16.2257,43651,43653],[46.395,16.1947]];RailPolyLines[169]=[[46.5288,16.1893,43700,43702],[46.5571,16.1742]];RailPolyLines[170]=[[46.5743,16.1821,43701,43702],[46.5571,16.1742]];RailPolyLines[171]=[[46.5743,16.1821,43701,43703],[46.6234,16.2098]];RailPolyLines[172]=[[46.6234,16.2098,43703,43704],[46.6592,16.1718]];RailPolyLines[173]=[[46.6592,16.1718,43704,43771],[46.7034,16.1537]];RailPolyLines[174]=[[46.7034,16.1537,43771,43774],[46.7832,16.1646]];RailPolyLines[175]=[[46.7832,16.1646,43774,43775],[46.8008,16.2184]];RailPolyLines[176]=[[46.8008,16.2184,43775,43776],[46.821,16.2815]];RailPolyLines[177]=[[46.821,16.2815,43776,43777],[46.8204,16.3292]];RailPolyLines[178]=[[46.2174,15.5603,43800,43801],[46.235,15.5644]];RailPolyLines[179]=[[46.2174,15.5603,43800,43851],[46.1936,15.5941]];RailPolyLines[180]=[[46.235,15.5644,43801,43802],[46.244,15.5729]];RailPolyLines[181]=[[46.244,15.5729,43802,43807],[46.2399,15.6182]];RailPolyLines[182]=[[46.2318,15.6385,43803,43807],[46.2399,15.6182]];RailPolyLines[183]=[[46.2318,15.6385,43803,43808],[46.223,15.6613]];RailPolyLines[184]=[[46.2244,15.6979,43804,43808],[46.223,15.6613]];RailPolyLines[185]=[[46.2244,15.6979,43804,43809],[46.2193,15.7357]];RailPolyLines[186]=[[46.2175,15.7549,43805,43806],[46.2088,15.7601]];RailPolyLines[187]=[[46.2175,15.7549,43805,43809],[46.2193,15.7357]];RailPolyLines[188]=[[46.1936,15.5941,43851,43852],[46.1759,15.6021]];RailPolyLines[189]=[[46.1759,15.6021,43852,43855],[46.1659,15.6047]];RailPolyLines[190]=[[46.1502,15.5992,43853,43854],[46.1271,15.6012]];RailPolyLines[191]=[[46.1502,15.5992,43853,43856],[46.1569,15.6092]];RailPolyLines[192]=[[46.1659,15.6047,43855,43856],[46.1569,15.6092]];RailPolyLines[193]=[[46.2461,15.1898,43901,43902],[46.2494,15.1671]];RailPolyLines[194]=[[46.2461,15.1898,43901,43911],[46.2371,15.245]];RailPolyLines[195]=[[46.2494,15.1671,43902,43903],[46.2606,15.1122]];RailPolyLines[196]=[[46.2606,15.1122,43903,43904],[46.2824,15.0662]];RailPolyLines[197]=[[46.2824,15.0662,43904,43905],[46.3281,15.0379]];RailPolyLines[198]=[[46.3281,15.0379,43905,43906],[46.3415,15.0197]];RailPolyLines[199]=[[46.3415,15.0197,43906,43912],[46.3812,15.0299]];RailPolyLines[200]=[[46.3769,15.0497,43907,43909],[46.3681,15.0814]];RailPolyLines[201]=[[46.3769,15.0497,43907,43912],[46.3812,15.0299]];RailPolyLines[202]=[[46.3681,15.0814,43909,43910],[46.3635,15.1043]];RailPolyLines[203]=[[46.0213,14.4265,44001,44002],[45.9876,14.4026]];RailPolyLines[204]=[[46.0213,14.4265,44001,44011],[46.0499,14.4933]];RailPolyLines[205]=[[45.9876,14.4026,44002,44003],[45.9657,14.3961]];RailPolyLines[206]=[[45.9657,14.3961,44003,44004],[45.9215,14.3682]];RailPolyLines[207]=[[45.9215,14.3682,44004,44005],[45.948,14.3039]];RailPolyLines[208]=[[45.948,14.3039,44005,44006],[45.9177,14.2358]];RailPolyLines[209]=[[45.9177,14.2358,44006,44007],[45.8618,14.275]];RailPolyLines[210]=[[45.8618,14.275,44007,44008],[45.8157,14.3128]];RailPolyLines[211]=[[45.8157,14.3128,44008,44009],[45.7731,14.2217]];RailPolyLines[212]=[[45.7731,14.2217,44009,44010],[45.7285,14.1855]];RailPolyLines[213]=[[45.7285,14.1855,44010,44100],[45.6755,14.1914]];RailPolyLines[214]=[[45.6755,14.1914,44100,44101],[45.6704,14.1056]];RailPolyLines[215]=[[45.6755,14.1914,44100,44901],[45.6413,14.1981]];RailPolyLines[216]=[[45.6704,14.1056,44101,44102],[45.6664,14.0722]];RailPolyLines[217]=[[45.6664,14.0722,44102,44200],[45.6815,13.9649]];RailPolyLines[218]=[[45.6815,13.9649,44200,44201],[45.6272,13.9752]];RailPolyLines[219]=[[45.6815,13.9649,44200,44251],[45.6994,13.9305]];RailPolyLines[220]=[[45.6272,13.9752,44201,44202],[45.6037,13.9353]];RailPolyLines[221]=[[45.6037,13.9353,44202,44300],[45.5642,13.9422]];RailPolyLines[222]=[[45.6994,13.9305,44251,44500],[45.7041,13.8634]];RailPolyLines[223]=[[45.5642,13.9422,44300,44301],[45.5345,13.9429]];RailPolyLines[224]=[[45.5642,13.9422,44300,44356],[45.552,13.8915]];RailPolyLines[225]=[[45.5345,13.9429,44301,44302],[45.4984,13.9439]];RailPolyLines[226]=[[45.4984,13.9439,44302,44303],[45.4661,13.9551]];RailPolyLines[227]=[[45.539,13.7384,44352,44357],[45.5011,13.9092]];RailPolyLines[228]=[[45.552,13.8915,44356,44357],[45.5011,13.9092]];RailPolyLines[229]=[[45.7041,13.8634,44500,44501],[45.7421,13.8273]];RailPolyLines[230]=[[45.7421,13.8273,44501,44800],[45.7649,13.8262]];RailPolyLines[231]=[[45.7849,13.8317,44502,44503],[45.818,13.8481]];RailPolyLines[232]=[[45.7849,13.8317,44502,44800],[45.7649,13.8262]];RailPolyLines[233]=[[45.818,13.8481,44503,44504],[45.8559,13.7842]];RailPolyLines[234]=[[45.8559,13.7842,44504,44505],[45.876,13.7575]];RailPolyLines[235]=[[45.876,13.7575,44505,44506],[45.8858,13.7342]];RailPolyLines[236]=[[45.8858,13.7342,44506,44600],[45.8875,13.7227]];RailPolyLines[237]=[[45.8875,13.7227,44600,44601],[45.8991,13.6902]];RailPolyLines[238]=[[45.8875,13.7227,44600,44653],[45.89,13.7361]];RailPolyLines[239]=[[45.8991,13.6902,44601,44602],[45.9058,13.6756]];RailPolyLines[240]=[[45.9058,13.6756,44602,44603],[45.9282,13.6469]];RailPolyLines[241]=[[45.9282,13.6469,44603,44700],[45.9552,13.6357]];RailPolyLines[242]=[[45.8867,13.772,44651,44653],[45.89,13.7361]];RailPolyLines[243]=[[45.8867,13.772,44651,44654],[45.877,13.8175]];RailPolyLines[244]=[[45.8863,13.9024,44652,44656],[45.8868,13.8653]];RailPolyLines[245]=[[45.877,13.8175,44654,44655],[45.8825,13.8453]];RailPolyLines[246]=[[45.8825,13.8453,44655,44656],[45.8868,13.8653]];RailPolyLines[247]=[[45.9552,13.6357,44700,44701],[45.9727,13.6462]];RailPolyLines[248]=[[45.9727,13.6462,44701,44703],[46.0461,13.5897]];RailPolyLines[249]=[[46.0461,13.5897,44703,44704],[46.0581,13.6173]];RailPolyLines[250]=[[46.0581,13.6173,44704,44705],[46.0837,13.6316]];RailPolyLines[251]=[[46.0837,13.6316,44705,44706],[46.108,13.6844]];RailPolyLines[252]=[[46.108,13.6844,44706,44707],[46.1464,13.7593]];RailPolyLines[253]=[[46.1464,13.7593,44707,44708],[46.1594,13.8139]];RailPolyLines[254]=[[46.1594,13.8139,44708,44709],[46.1514,13.8569]];RailPolyLines[255]=[[46.1514,13.8569,44709,44710],[46.1797,13.9198]];RailPolyLines[256]=[[46.1797,13.9198,44710,44711],[46.2092,13.967]];RailPolyLines[257]=[[46.2092,13.967,44711,44712],[46.2742,13.9591]];RailPolyLines[258]=[[46.2742,13.9591,44712,44713],[46.289,14.0027]];RailPolyLines[259]=[[46.289,14.0027,44713,44715],[46.3384,14.0605]];RailPolyLines[260]=[[46.3384,14.0605,44715,44716],[46.3683,14.0823]];RailPolyLines[261]=[[46.3683,14.0823,44716,44717],[46.3875,14.0943]];RailPolyLines[262]=[[46.3875,14.0943,44717,44718],[46.4104,14.0987]];RailPolyLines[263]=[[46.4104,14.0987,44718,44719],[46.4238,14.0786]];RailPolyLines[264]=[[45.6413,14.1981,44901,44902],[45.6157,14.1859]];RailPolyLines[265]=[[45.6157,14.1859,44902,44903],[45.5692,14.2359]];
var BusPolyLines1 = [];
var BusPolyLines2 = [];
var BusPolyLines3 = [];
var BusPolyLines4 = [];
var BusPolyLines5 = [];
var BusPolyLines6 = [];
var BusPolyLines7 = [];
var BusPolyLines8 = [];
var BusPolyLines9 = [];
var BusPolyLines10 = [];
var BusPolyLines11 = [];
var BusPolyLines12 = [];
var BusPolyLines13 = [];
var BusPolyLines14 = [];
var BusPolyLines15 = [];
var BusPolyLines16 = [];
var BusPolyLines17 = [];
var BusPolyLines18 = [];
var BusPolyLines19 = [];
var BusPolyLines20 = [];
var BusPolyLines21 = [];
var BusPolyLines22 = [];
var BusPolyLines23 = [];
var BusPolyLines24 = [];
var BusPolyLines25 = [];
var BusPolyLines26 = [];
var BusPolyLines27 = [];
var BusPolyLines28 = [];
var BusPolyLines29 = [];
var BusPolyLines30 = [];
var BusPolyLines31 = [];
var BusPolyLines32 = [];
var BusPolyLines33 = [];

BusPolyLines1[0]=[[46.1001702,14.458632211,804051,804041],[46.0966246,14.4624442]];	BusPolyLines1[1]=[[46.0966246,14.462444211,804041,804021],[46.090374,14.4700588]];	BusPolyLines1[2]=[[46.090374,14.470058810,804021,804011],[46.0871993,14.4739259]];	BusPolyLines1[3]=[[46.0871993,14.473925911,804011,803041],[46.0836076,14.4769792]];	BusPolyLines1[4]=[[46.0836076,14.476979211,803041,803021],[46.0770197,14.4819182]];	BusPolyLines1[5]=[[46.0770197,14.481918211,803021,803014],[46.074237,14.4847496]];	BusPolyLines1[6]=[[46.074237,14.484749610,803014,803011],[46.0731004,14.4849684]];	BusPolyLines1[7]=[[46.0731004,14.484968411,803011,802011],[46.0642257,14.4926566]];	BusPolyLines1[8]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines1[9]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines1[10]=[[46.0559468,14.5015911,700012,600022],[46.053554,14.5038905]];	BusPolyLines1[11]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines1[12]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines1[13]=[[46.0489393,14.501667611,602021,602051],[46.0464017,14.4990908]];	BusPolyLines1[14]=[[46.0464017,14.499090811,602051,602041],[46.0469433,14.493085]];	BusPolyLines1[15]=[[46.0469433,14.49308511,602041,602031],[46.0454919,14.4890483]];	BusPolyLines1[16]=[[46.0454919,14.489048311,602031,603011],[46.0422336,14.4892728]];	BusPolyLines1[17]=[[46.0422336,14.489272811,603011,603021],[46.0405549,14.4897102]];	BusPolyLines1[18]=[[46.0405549,14.489710211,603021,603031],[46.0366237,14.4870803]];	BusPolyLines1[19]=[[46.0366237,14.487080311,603031,603041],[46.0352767,14.4832318]];	BusPolyLines1[20]=[[46.0352767,14.483231811,603041,603141],[46.0338347,14.4775739]];	BusPolyLines1[21]=[[46.0338347,14.477573911,603141,604031],[46.0302752,14.4707665]];
BusPolyLines2[0]=[[46.0302752,14.470766511,604031,603141],[46.0338347,14.4775739]];	BusPolyLines2[1]=[[46.0338347,14.477573911,603141,603041],[46.0352767,14.4832318]];	BusPolyLines2[2]=[[46.0352767,14.483231811,603041,603031],[46.0366237,14.4870803]];	BusPolyLines2[3]=[[46.0366237,14.487080311,603031,603021],[46.0405549,14.4897102]];	BusPolyLines2[4]=[[46.0405549,14.489710211,603021,603011],[46.0422336,14.4892728]];	BusPolyLines2[5]=[[46.0422336,14.489272811,603011,602031],[46.0454919,14.4890483]];	BusPolyLines2[6]=[[46.0454919,14.489048311,602031,602041],[46.0469433,14.493085]];	BusPolyLines2[7]=[[46.0469433,14.49308511,602041,602051],[46.0464017,14.4990908]];	BusPolyLines2[8]=[[46.0464017,14.499090811,602051,602021],[46.0489393,14.5016676]];	BusPolyLines2[9]=[[46.0489393,14.501667611,602021,601011],[46.0519049,14.5025648]];	BusPolyLines2[10]=[[46.0519049,14.502564811,601011,600022],[46.053554,14.5038905]];	BusPolyLines2[11]=[[46.053554,14.503890510,600022,700012],[46.0559468,14.50159]];	BusPolyLines2[12]=[[46.0559468,14.5015911,700012,801011],[46.0601499,14.4966756]];	BusPolyLines2[13]=[[46.0601499,14.496675611,801011,802011],[46.0642257,14.4926566]];	BusPolyLines2[14]=[[46.0642257,14.492656611,802011,802021],[46.0694662,14.4891765]];	BusPolyLines2[15]=[[46.0694662,14.489176511,802021,803011],[46.0731004,14.4849684]];	BusPolyLines2[16]=[[46.0731004,14.484968411,803011,803014],[46.074237,14.4847496]];	BusPolyLines2[17]=[[46.074237,14.484749610,803014,803021],[46.0770197,14.4819182]];	BusPolyLines2[18]=[[46.0770197,14.481918211,803021,803031],[46.0792694,14.4803296]];	BusPolyLines2[19]=[[46.0792694,14.480329611,803031,803041],[46.0836076,14.4769792]];	BusPolyLines2[20]=[[46.0836076,14.476979211,803041,804011],[46.0871993,14.4739259]];	BusPolyLines2[21]=[[46.0871993,14.473925911,804011,804021],[46.090374,14.4700588]];	BusPolyLines2[22]=[[46.090374,14.470058810,804021,804041],[46.0966246,14.4624442]];	BusPolyLines2[23]=[[46.0966246,14.462444211,804041,804051],[46.1001702,14.4586322]];
BusPolyLines3[0]=[[46.1001702,14.458632211,804051,804041],[46.0966246,14.4624442]];	BusPolyLines3[1]=[[46.0966246,14.462444211,804041,804021],[46.090374,14.4700588]];	BusPolyLines3[2]=[[46.090374,14.470058810,804021,804011],[46.0871993,14.4739259]];	BusPolyLines3[3]=[[46.0871993,14.473925911,804011,803041],[46.0836076,14.4769792]];	BusPolyLines3[4]=[[46.0836076,14.476979211,803041,803021],[46.0770197,14.4819182]];	BusPolyLines3[5]=[[46.0770197,14.481918211,803021,803014],[46.074237,14.4847496]];	BusPolyLines3[6]=[[46.074237,14.484749610,803014,803011],[46.0731004,14.4849684]];	BusPolyLines3[7]=[[46.0731004,14.484968411,803011,802011],[46.0642257,14.4926566]];	BusPolyLines3[8]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines3[9]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines3[10]=[[46.0559468,14.5015911,700012,600022],[46.053554,14.5038905]];	BusPolyLines3[11]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines3[12]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines3[13]=[[46.0489393,14.501667611,602021,602051],[46.0464017,14.4990908]];	BusPolyLines3[14]=[[46.0464017,14.499090811,602051,602041],[46.0469433,14.493085]];	BusPolyLines3[15]=[[46.0469433,14.49308511,602041,602031],[46.0454919,14.4890483]];	BusPolyLines3[16]=[[46.0454919,14.489048311,602031,603011],[46.0422336,14.4892728]];	BusPolyLines3[17]=[[46.0422336,14.489272811,603011,603021],[46.0405549,14.4897102]];	BusPolyLines3[18]=[[46.0405549,14.489710211,603021,603031],[46.0366237,14.4870803]];	BusPolyLines3[19]=[[46.0366237,14.487080311,603031,603041],[46.0352767,14.4832318]];	BusPolyLines3[20]=[[46.0352767,14.483231811,603041,603141],[46.0338347,14.4775739]];	BusPolyLines3[21]=[[46.0338347,14.477573911,603141,604031],[46.0302752,14.4707665]];	BusPolyLines3[22]=[[46.0302752,14.470766511,604031,703112],[46.0372429,14.4669898]];
BusPolyLines4[0]=[[46.0698829,14.550757611,203171,203151],[46.0697727,14.5450338]];	BusPolyLines4[1]=[[46.0697727,14.545033811,203151,203101],[46.0689589,14.538561]];	BusPolyLines4[2]=[[46.0689589,14.53856111,203101,203091],[46.068249,14.535856]];	BusPolyLines4[3]=[[46.068249,14.53585610,203091,203041],[46.0672541,14.5306711]];	BusPolyLines4[4]=[[46.0672541,14.530671111,203041,203022],[46.0633264,14.5317664]];	BusPolyLines4[5]=[[46.0633264,14.531766411,203022,203052],[46.0640032,14.5350016]];	BusPolyLines4[6]=[[46.0640032,14.535001611,203052,203062],[46.0613424,14.537811]];	BusPolyLines4[7]=[[46.0613424,14.53781111,203062,303022],[46.0562795,14.5405753]];	BusPolyLines4[8]=[[46.0562795,14.540575311,303022,303021],[46.0560119,14.5389885]];	BusPolyLines4[9]=[[46.0560119,14.538988511,303021,303011],[46.0556637,14.5338953]];	BusPolyLines4[10]=[[46.0556637,14.533895311,303011,402041],[46.0543341,14.5277847]];	BusPolyLines4[11]=[[46.0543341,14.527784711,402041,402031],[46.0523315,14.5194459]];	BusPolyLines4[12]=[[46.0523315,14.519445911,402031,502013],[46.0495425,14.5159875]];	BusPolyLines4[13]=[[46.0495425,14.515987511,502013,502011],[46.0500939,14.5147598]];	BusPolyLines4[14]=[[46.0500939,14.514759811,502011,501032],[46.050105,14.5097825]];	BusPolyLines4[15]=[[46.050105,14.509782510,501032,602101],[46.0459141,14.5047604]];	BusPolyLines4[16]=[[46.0459141,14.504760411,602101,602061],[46.0461698,14.5010019]];	BusPolyLines4[17]=[[46.0461698,14.501001911,602061,602021],[46.0489393,14.5016676]];	BusPolyLines4[18]=[[46.0489393,14.501667611,602021,601011],[46.0519049,14.5025648]];	BusPolyLines4[19]=[[46.0519049,14.502564811,601011,600022],[46.053554,14.5038905]];	BusPolyLines4[20]=[[46.053554,14.503890510,600022,600011],[46.0560837,14.5049456]];	BusPolyLines4[21]=[[46.0560837,14.504945611,600011,300011],[46.0577307,14.5080954]];	BusPolyLines4[22]=[[46.0577307,14.508095411,300011,301011],[46.0574779,14.5163085]];	BusPolyLines4[23]=[[46.0574779,14.516308511,301011,202011],[46.059266,14.5188123]];	BusPolyLines4[24]=[[46.059266,14.518812310,202011,202041],[46.0622401,14.5220705]];	BusPolyLines4[25]=[[46.0622401,14.522070511,202041,202061],[46.0668872,14.5270204]];	BusPolyLines4[26]=[[46.0668872,14.527020411,202061,203011],[46.0643562,14.5275939]];	BusPolyLines4[27]=[[46.0643562,14.527593911,203011,202051],[46.0626752,14.5286681]];
BusPolyLines5[0]=[[46.0821426,14.494175111,103201,803211],[46.0796094,14.4866351]];	BusPolyLines5[1]=[[46.0796094,14.486635111,803211,803051],[46.0767333,14.488504]];	BusPolyLines5[2]=[[46.0767333,14.48850411,803051,803011],[46.0731004,14.4849684]];	BusPolyLines5[3]=[[46.0731004,14.484968411,803011,802021],[46.0694662,14.4891765]];	BusPolyLines5[4]=[[46.0694662,14.489176511,802021,802011],[46.0642257,14.4926566]];	BusPolyLines5[5]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines5[6]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines5[7]=[[46.0559468,14.5015911,700012,600022],[46.053554,14.5038905]];	BusPolyLines5[8]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines5[9]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines5[10]=[[46.0489393,14.501667611,602021,602061],[46.0461698,14.5010019]];	BusPolyLines5[11]=[[46.0461698,14.501001911,602061,602101],[46.0459141,14.5047604]];	BusPolyLines5[12]=[[46.0459141,14.504760411,602101,602111],[46.0439427,14.509151]];	BusPolyLines5[13]=[[46.0439427,14.50915111,602111,503011],[46.0392719,14.5161111]];	BusPolyLines5[14]=[[46.0392719,14.516111111,503011,503021],[46.03556,14.5219791]];	BusPolyLines5[15]=[[46.03556,14.52197919,503021,503031],[46.0321275,14.5290273]];	BusPolyLines5[16]=[[46.0321275,14.529027311,503031,503041],[46.0300335,14.53176]];	BusPolyLines5[17]=[[46.0300335,14.5317611,503041,504011],[46.0282154,14.5348234]];	BusPolyLines5[18]=[[46.0282154,14.534823411,504011,504021],[46.0232224,14.5392314]];	BusPolyLines5[19]=[[46.0232224,14.539231411,504021,504031],[46.0186636,14.5425732]];
BusPolyLines6[0]=[[46.0821426,14.494175111,103201,803211],[46.0796094,14.4866351]];	BusPolyLines6[1]=[[46.0796094,14.486635111,803211,803051],[46.0767333,14.488504]];	BusPolyLines6[2]=[[46.0767333,14.48850411,803051,803011],[46.0731004,14.4849684]];	BusPolyLines6[3]=[[46.0731004,14.484968411,803011,802021],[46.0694662,14.4891765]];	BusPolyLines6[4]=[[46.0694662,14.489176511,802021,802011],[46.0642257,14.4926566]];	BusPolyLines6[5]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines6[6]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines6[7]=[[46.0559468,14.5015911,700012,600022],[46.053554,14.5038905]];	BusPolyLines6[8]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines6[9]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines6[10]=[[46.0489393,14.501667611,602021,602061],[46.0461698,14.5010019]];	BusPolyLines6[11]=[[46.0461698,14.501001911,602061,602101],[46.0459141,14.5047604]];	BusPolyLines6[12]=[[46.0459141,14.504760411,602101,602111],[46.0439427,14.509151]];	BusPolyLines6[13]=[[46.0439427,14.50915111,602111,503011],[46.0392719,14.5161111]];	BusPolyLines6[14]=[[46.0392719,14.516111111,503011,503021],[46.03556,14.5219791]];	BusPolyLines6[15]=[[46.03556,14.52197919,503021,503031],[46.0321275,14.5290273]];	BusPolyLines6[16]=[[46.0321275,14.529027311,503031,503041],[46.0300335,14.53176]];	BusPolyLines6[17]=[[46.0300335,14.5317611,503041,504011],[46.0282154,14.5348234]];	BusPolyLines6[18]=[[46.0282154,14.534823411,504011,504021],[46.0232224,14.5392314]];	BusPolyLines6[19]=[[46.0232224,14.539231411,504021,504031],[46.0186636,14.5425732]];	BusPolyLines6[20]=[[46.0186636,14.542573211,504031,504071],[46.0061717,14.547077]];	BusPolyLines6[21]=[[46.0061717,14.54707711,504071,504081],[46.001308,14.5512074]];	BusPolyLines6[22]=[[46.001308,14.551207410,504081,504091],[45.9971977,14.5569412]];	BusPolyLines6[23]=[[45.9971977,14.556941211,504091,504101],[45.9895718,14.5650108]];	BusPolyLines6[24]=[[45.9895718,14.565010811,504101,504111],[45.985755,14.570556]];	BusPolyLines6[25]=[[45.985755,14.57055610,504111,515011],[45.9833647,14.5728197]];	BusPolyLines6[26]=[[45.9833647,14.572819711,515011,515013],[45.9825357,14.570975]];
BusPolyLines7[0]=[[46.0637039,14.511364211,101031,100021],[46.060338,14.5043148]];	BusPolyLines7[1]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines7[2]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines7[3]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines7[4]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines7[5]=[[46.0489393,14.501667611,602021,602061],[46.0461698,14.5010019]];	BusPolyLines7[6]=[[46.0461698,14.501001911,602061,602101],[46.0459141,14.5047604]];	BusPolyLines7[7]=[[46.0459141,14.504760411,602101,602111],[46.0439427,14.509151]];	BusPolyLines7[8]=[[46.0439427,14.50915111,602111,503011],[46.0392719,14.5161111]];	BusPolyLines7[9]=[[46.0392719,14.516111111,503011,503021],[46.03556,14.5219791]];	BusPolyLines7[10]=[[46.03556,14.52197919,503021,504021],[46.0232224,14.5392314]];	BusPolyLines7[11]=[[46.0232224,14.539231411,504021,504031],[46.0186636,14.5425732]];	BusPolyLines7[12]=[[46.0186636,14.542573211,504031,504071],[46.0061717,14.547077]];	BusPolyLines7[13]=[[46.0061717,14.54707711,504071,504081],[46.001308,14.5512074]];	BusPolyLines7[14]=[[46.001308,14.551207410,504081,504091],[45.9971977,14.5569412]];	BusPolyLines7[15]=[[45.9971977,14.556941211,504091,504101],[45.9895718,14.5650108]];	BusPolyLines7[16]=[[45.9895718,14.565010811,504101,515011],[45.9833647,14.5728197]];	BusPolyLines7[17]=[[45.9833647,14.572819711,515011,515012],[45.9799402,14.5751041]];	BusPolyLines7[18]=[[45.9799402,14.575104111,515012,505011],[45.9854101,14.5788086]];	BusPolyLines7[19]=[[45.9854101,14.578808611,505011,505021],[45.9857984,14.5878897]];	BusPolyLines7[20]=[[45.9857984,14.587889711,505021,505031],[45.9853509,14.5936088]];	BusPolyLines7[21]=[[45.9853509,14.593608811,505031,505041],[45.981596,14.599385]];	BusPolyLines7[22]=[[45.981596,14.59938510,505041,505051],[45.9780843,14.6034151]];	BusPolyLines7[23]=[[45.9780843,14.603415111,505051,505061],[45.9754703,14.6103828]];	BusPolyLines7[24]=[[45.9754703,14.610382811,505061,505071],[45.9733328,14.6170093]];	BusPolyLines7[25]=[[45.9733328,14.617009311,505071,505081],[45.9671924,14.6322003]];	BusPolyLines7[26]=[[45.9671924,14.632200311,505081,505091],[45.9637559,14.6393217]];	BusPolyLines7[27]=[[45.9637559,14.639321711,505091,505101],[45.9614781,14.6435891]];	BusPolyLines7[28]=[[45.9614781,14.643589111,505101,505111],[45.9585948,14.6502308]];	BusPolyLines7[29]=[[45.9585948,14.650230811,505111,505132],[45.9574111,14.6539638]];	BusPolyLines7[30]=[[45.9574111,14.653963811,505132,505152],[45.9586488,14.6541492]];	BusPolyLines7[31]=[[45.9586488,14.654149211,505152,505162],[45.9631663,14.6568873]];	BusPolyLines7[32]=[[45.9631663,14.656887311,505162,505172],[45.9672592,14.6582399]];	BusPolyLines7[33]=[[45.9672592,14.658239911,505172,505182],[45.9630198,14.6594411]];	BusPolyLines7[34]=[[45.9630198,14.659441111,505182,505192],[45.958355,14.6580836]];	BusPolyLines7[35]=[[45.958355,14.658083610,505192,505122],[45.9563259,14.6614205]];	BusPolyLines7[36]=[[45.9563259,14.661420511,505122,536022],[45.9523128,14.6598039]];	BusPolyLines7[37]=[[45.9523128,14.659803911,536022,536012],[45.9539013,14.6505228]];	BusPolyLines7[38]=[[45.9539013,14.650522811,536012,505141],[45.9543062,14.6518008]];
BusPolyLines8[0]=[[46.0747185,14.443966211,804221,804211],[46.0737119,14.4489559]];	BusPolyLines8[1]=[[46.0737119,14.448955911,804211,804201],[46.0741391,14.4527653]];	BusPolyLines8[2]=[[46.0741391,14.452765311,804201,804191],[46.0732872,14.4519078]];	BusPolyLines8[3]=[[46.0732872,14.451907811,804191,803152],[46.0738194,14.4605434]];	BusPolyLines8[4]=[[46.0738194,14.460543411,803152,826111],[46.0719173,14.4672764]];	BusPolyLines8[5]=[[46.0719173,14.467276411,826111,800001],[46.0671321,14.475306]];	BusPolyLines8[6]=[[46.0671321,14.47530611,800001,803092],[46.0700756,14.4802514]];	BusPolyLines8[7]=[[46.0700756,14.480251411,803092,803081],[46.0715608,14.4807407]];	BusPolyLines8[8]=[[46.0715608,14.480740711,803081,803016],[46.0736214,14.4839913]];	BusPolyLines8[9]=[[46.0736214,14.483991311,803016,803011],[46.0731004,14.4849684]];	BusPolyLines8[10]=[[46.0731004,14.484968411,803011,802021],[46.0694662,14.4891765]];	BusPolyLines8[11]=[[46.0694662,14.489176511,802021,802011],[46.0642257,14.4926566]];	BusPolyLines8[12]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines8[13]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines8[14]=[[46.0559468,14.5015911,700012,600032],[46.0542487,14.5039258]];	BusPolyLines8[15]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines8[16]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines8[17]=[[46.0537126,14.507195211,500012,501011],[46.0530128,14.5137349]];	BusPolyLines8[18]=[[46.0530128,14.513734911,501011,402011],[46.0525743,14.5162158]];	BusPolyLines8[19]=[[46.0525743,14.516215811,402011,502013],[46.0495425,14.5159875]];	BusPolyLines8[20]=[[46.0495425,14.515987511,502013,502021],[46.048464,14.519345]];	BusPolyLines8[21]=[[46.048464,14.51934510,502021,402061],[46.0485451,14.5221627]];	BusPolyLines8[22]=[[46.0485451,14.522162711,402061,402051],[46.0502864,14.5261949]];	BusPolyLines8[23]=[[46.0502864,14.526194911,402051,403011],[46.0532443,14.5328494]];	BusPolyLines8[24]=[[46.0532443,14.532849411,403011,403023],[46.0514722,14.5387168]];	BusPolyLines8[25]=[[46.0514722,14.538716811,403023,403043],[46.0485431,14.5373548]];	BusPolyLines8[26]=[[46.0485431,14.537354811,403043,403051],[46.0476393,14.5447043]];	BusPolyLines8[27]=[[46.0476393,14.544704311,403051,303041],[46.0531497,14.5475189]];
BusPolyLines9[0]=[[46.1041611,14.534163311,104161,104111],[46.102754,14.5311182]];	BusPolyLines9[1]=[[46.102754,14.531118210,104111,104101],[46.1011915,14.5241979]];	BusPolyLines9[2]=[[46.1011915,14.524197911,104101,104051],[46.1008579,14.5216269]];	BusPolyLines9[3]=[[46.1008579,14.521626911,104051,104033],[46.0975058,14.5166492]];	BusPolyLines9[4]=[[46.0975058,14.516649211,104033,103131],[46.0898578,14.5131522]];	BusPolyLines9[5]=[[46.0898578,14.513152211,103131,103101],[46.0860559,14.5134466]];	BusPolyLines9[6]=[[46.0860559,14.513446611,103101,103071],[46.0822173,14.5127462]];	BusPolyLines9[7]=[[46.0822173,14.512746211,103071,103031],[46.077359,14.5116436]];	BusPolyLines9[8]=[[46.077359,14.511643610,103031,102081],[46.0742705,14.510723]];	BusPolyLines9[9]=[[46.0742705,14.51072311,102081,102041],[46.0692915,14.5099291]];	BusPolyLines9[10]=[[46.0692915,14.509929111,102041,101051],[46.0646683,14.5085432]];	BusPolyLines9[11]=[[46.0646683,14.508543211,101051,100021],[46.060338,14.5043148]];	BusPolyLines9[12]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines9[13]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines9[14]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines9[15]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines9[16]=[[46.0489393,14.501667611,602021,602051],[46.0464017,14.4990908]];	BusPolyLines9[17]=[[46.0464017,14.499090811,602051,602041],[46.0469433,14.493085]];	BusPolyLines9[18]=[[46.0469433,14.49308511,602041,602031],[46.0454919,14.4890483]];	BusPolyLines9[19]=[[46.0454919,14.489048311,602031,703071],[46.0445885,14.4860775]];	BusPolyLines9[20]=[[46.0445885,14.486077511,703071,703091],[46.0422047,14.4771261]];	BusPolyLines9[21]=[[46.0422047,14.477126111,703091,703112],[46.0372429,14.4669898]];	BusPolyLines9[22]=[[46.0372429,14.466989811,703112,704011],[46.036612,14.463651]];
BusPolyLines10[0]=[[46.0637039,14.511364211,101031,201011],[46.0608459,14.5126954]];	BusPolyLines10[1]=[[46.0608459,14.512695411,201011,100021],[46.060338,14.5043148]];	BusPolyLines10[2]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines10[3]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines10[4]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines10[5]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines10[6]=[[46.0489393,14.501667611,602021,602051],[46.0464017,14.4990908]];	BusPolyLines10[7]=[[46.0464017,14.499090811,602051,602041],[46.0469433,14.493085]];	BusPolyLines10[8]=[[46.0469433,14.49308511,602041,602031],[46.0454919,14.4890483]];	BusPolyLines10[9]=[[46.0454919,14.489048311,602031,703071],[46.0445885,14.4860775]];	BusPolyLines10[10]=[[46.0445885,14.486077511,703071,703091],[46.0422047,14.4771261]];	BusPolyLines10[11]=[[46.0422047,14.477126111,703091,703112],[46.0372429,14.4669898]];	BusPolyLines10[12]=[[46.0372429,14.466989811,703112,704011],[46.036612,14.463651]];	BusPolyLines10[13]=[[46.036612,14.46365110,704011,704051],[46.0334129,14.4499035]];	BusPolyLines10[14]=[[46.0334129,14.449903511,704051,704101],[46.0307911,14.4433013]];	BusPolyLines10[15]=[[46.0307911,14.443301311,704101,704061],[46.0287035,14.4336199]];	BusPolyLines10[16]=[[46.0287035,14.433619911,704061,704072],[46.0244468,14.4203066]];	BusPolyLines10[17]=[[46.0244468,14.420306611,704072,704081],[46.0239233,14.4147089]];	BusPolyLines10[18]=[[46.0239233,14.414708911,704081,744011],[46.0171898,14.4144957]];	BusPolyLines10[19]=[[46.0171898,14.414495711,744011,744021],[46.0116729,14.4103425]];	BusPolyLines10[20]=[[46.0116729,14.410342511,744021,745021],[46.0022566,14.4132166]];	BusPolyLines10[21]=[[46.0022566,14.413216611,745021,745031],[45.9951946,14.4051174]];	BusPolyLines10[22]=[[45.9951946,14.405117411,745031,745041],[45.9885098,14.4008652]];
BusPolyLines11[0]=[[46.0880268,14.457567811,804181,804171],[46.0858604,14.4648777]];	BusPolyLines11[1]=[[46.0858604,14.464877711,804171,803121],[46.0801179,14.4668917]];	BusPolyLines11[2]=[[46.0801179,14.466891711,803121,803111],[46.0783962,14.4705548]];	BusPolyLines11[3]=[[46.0783962,14.470554811,803111,803101],[46.0741299,14.4753731]];	BusPolyLines11[4]=[[46.0741299,14.475373111,803101,803092],[46.0700756,14.4802514]];	BusPolyLines11[5]=[[46.0700756,14.480251411,803092,802041],[46.0676176,14.4850231]];	BusPolyLines11[6]=[[46.0676176,14.485023111,802041,802031],[46.0665792,14.489372]];	BusPolyLines11[7]=[[46.0665792,14.48937211,802031,802011],[46.0642257,14.4926566]];	BusPolyLines11[8]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines11[9]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines11[10]=[[46.0559468,14.5015911,700012,600011],[46.0560837,14.5049456]];	BusPolyLines11[11]=[[46.0560837,14.504945611,600011,100021],[46.060338,14.5043148]];	BusPolyLines11[12]=[[46.060338,14.504314810,100021,101011],[46.0637771,14.5069141]];	BusPolyLines11[13]=[[46.0637771,14.506914111,101011,101031],[46.0637039,14.5113642]];	BusPolyLines11[14]=[[46.0637039,14.511364211,101031,202021],[46.0644681,14.5153984]];	BusPolyLines11[15]=[[46.0644681,14.515398411,202021,202031],[46.0657867,14.5209033]];	BusPolyLines11[16]=[[46.0657867,14.520903311,202031,202061],[46.0668872,14.5270204]];	BusPolyLines11[17]=[[46.0668872,14.527020411,202061,203011],[46.0643562,14.5275939]];	BusPolyLines11[18]=[[46.0643562,14.527593911,203011,203091],[46.068249,14.535856]];	BusPolyLines11[19]=[[46.068249,14.53585610,203091,203101],[46.0689589,14.538561]];	BusPolyLines11[20]=[[46.0689589,14.53856111,203101,203151],[46.0697727,14.5450338]];	BusPolyLines11[21]=[[46.0697727,14.545033811,203151,203161],[46.0702088,14.548303]];	BusPolyLines11[22]=[[46.0702088,14.54830311,203161,203171],[46.0698829,14.5507576]];
BusPolyLines12[0]=[[46.0880268,14.457567811,804181,804171],[46.0858604,14.4648777]];	BusPolyLines12[1]=[[46.0858604,14.464877711,804171,803121],[46.0801179,14.4668917]];	BusPolyLines12[2]=[[46.0801179,14.466891711,803121,803111],[46.0783962,14.4705548]];	BusPolyLines12[3]=[[46.0783962,14.470554811,803111,803101],[46.0741299,14.4753731]];	BusPolyLines12[4]=[[46.0741299,14.475373111,803101,803092],[46.0700756,14.4802514]];	BusPolyLines12[5]=[[46.0700756,14.480251411,803092,802041],[46.0676176,14.4850231]];	BusPolyLines12[6]=[[46.0676176,14.485023111,802041,802031],[46.0665792,14.489372]];	BusPolyLines12[7]=[[46.0665792,14.48937211,802031,802011],[46.0642257,14.4926566]];	BusPolyLines12[8]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines12[9]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines12[10]=[[46.0559468,14.5015911,700012,600011],[46.0560837,14.5049456]];	BusPolyLines12[11]=[[46.0560837,14.504945611,600011,100021],[46.060338,14.5043148]];	BusPolyLines12[12]=[[46.060338,14.504314810,100021,101011],[46.0637771,14.5069141]];	BusPolyLines12[13]=[[46.0637771,14.506914111,101011,101031],[46.0637039,14.5113642]];	BusPolyLines12[14]=[[46.0637039,14.511364211,101031,202021],[46.0644681,14.5153984]];	BusPolyLines12[15]=[[46.0644681,14.515398411,202021,202031],[46.0657867,14.5209033]];	BusPolyLines12[16]=[[46.0657867,14.520903311,202031,202061],[46.0668872,14.5270204]];	BusPolyLines12[17]=[[46.0668872,14.527020411,202061,203011],[46.0643562,14.5275939]];	BusPolyLines12[18]=[[46.0643562,14.527593911,203011,203091],[46.068249,14.535856]];	BusPolyLines12[19]=[[46.068249,14.53585610,203091,203101],[46.0689589,14.538561]];	BusPolyLines12[20]=[[46.0689589,14.53856111,203101,203151],[46.0697727,14.5450338]];	BusPolyLines12[21]=[[46.0697727,14.545033811,203151,203161],[46.0702088,14.548303]];	BusPolyLines12[22]=[[46.0702088,14.54830311,203161,203171],[46.0698829,14.5507576]];	BusPolyLines12[23]=[[46.0698829,14.550757611,203171,203181],[46.0660974,14.5512411]];	BusPolyLines12[24]=[[46.0660974,14.551241111,203181,800016],[46.062941,14.5477375]];	BusPolyLines12[25]=[[46.062941,14.547737510,800016,203191],[46.0616889,14.5495401]];	BusPolyLines12[26]=[[46.0616889,14.549540111,203191,204011],[46.0619475,14.5576294]];	BusPolyLines12[27]=[[46.0619475,14.557629411,204011,204021],[46.0619785,14.5621457]];	BusPolyLines12[28]=[[46.0619785,14.562145711,204021,204031],[46.0621071,14.5655884]];	BusPolyLines12[29]=[[46.0621071,14.565588411,204031,800017],[46.0621252,14.5679188]];	BusPolyLines12[30]=[[46.0621252,14.567918811,800017,204051],[46.0620089,14.5690676]];
BusPolyLines13[0]=[[46.1266954,14.496689511,104221,104221],[46.1266954,14.4966895]];	BusPolyLines13[1]=[[46.1266954,14.496689511,104221,800013],[46.1228627,14.5021161]];	BusPolyLines13[2]=[[46.1228627,14.502116111,800013,800012],[46.1199279,14.5031546]];	BusPolyLines13[3]=[[46.1199279,14.503154611,800012,800011],[46.1166892,14.5056588]];	BusPolyLines13[4]=[[46.1166892,14.505658811,800011,104033],[46.0975058,14.5166492]];	BusPolyLines13[5]=[[46.0975058,14.516649211,104033,103131],[46.0898578,14.5131522]];	BusPolyLines13[6]=[[46.0898578,14.513152211,103131,103101],[46.0860559,14.5134466]];	BusPolyLines13[7]=[[46.0860559,14.513446611,103101,103071],[46.0822173,14.5127462]];	BusPolyLines13[8]=[[46.0822173,14.512746211,103071,103031],[46.077359,14.5116436]];	BusPolyLines13[9]=[[46.077359,14.511643610,103031,102081],[46.0742705,14.510723]];	BusPolyLines13[10]=[[46.0742705,14.51072311,102081,102041],[46.0692915,14.5099291]];	BusPolyLines13[11]=[[46.0692915,14.509929111,102041,101051],[46.0646683,14.5085432]];	BusPolyLines13[12]=[[46.0646683,14.508543211,101051,100021],[46.060338,14.5043148]];	BusPolyLines13[13]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines13[14]=[[46.0560837,14.504945611,600011,700012],[46.0559468,14.50159]];	BusPolyLines13[15]=[[46.0559468,14.5015911,700012,801011],[46.0601499,14.4966756]];	BusPolyLines13[16]=[[46.0601499,14.496675611,801011,802011],[46.0642257,14.4926566]];	BusPolyLines13[17]=[[46.0642257,14.492656611,802011,802021],[46.0694662,14.4891765]];	BusPolyLines13[18]=[[46.0694662,14.489176511,802021,803011],[46.0731004,14.4849684]];	BusPolyLines13[19]=[[46.0731004,14.484968411,803011,803011],[46.0731004,14.4849684]];	BusPolyLines13[20]=[[46.0731004,14.484968411,803011,803051],[46.0767333,14.488504]];	BusPolyLines13[21]=[[46.0767333,14.48850411,803051,803061],[46.08247,14.480218]];	BusPolyLines13[22]=[[46.08247,14.4802189,803061,803071],[46.0860785,14.4796417]];	BusPolyLines13[23]=[[46.0860785,14.479641711,803071,804161],[46.089386,14.4768733]];	BusPolyLines13[24]=[[46.089386,14.476873310,804161,804021],[46.090374,14.4700588]];	BusPolyLines13[25]=[[46.090374,14.470058810,804021,804031],[46.0932494,14.4686231]];	BusPolyLines13[26]=[[46.0932494,14.468623111,804031,804041],[46.0966246,14.4624442]];	BusPolyLines13[27]=[[46.0966246,14.462444211,804041,804081],[46.100484,14.4588912]];	BusPolyLines13[28]=[[46.100484,14.458891210,804081,804091],[46.1038624,14.4622858]];	BusPolyLines13[29]=[[46.1038624,14.462285811,804091,804101],[46.1091343,14.4609827]];	BusPolyLines13[30]=[[46.1091343,14.460982711,804101,804111],[46.112755,14.4608884]];	BusPolyLines13[31]=[[46.112755,14.460888410,804111,804141],[46.1180165,14.4607648]];	BusPolyLines13[32]=[[46.1180165,14.460764811,804141,804151],[46.1201316,14.4668311]];	BusPolyLines13[33]=[[46.1201316,14.466831111,804151,104191],[46.1235492,14.4768408]];	BusPolyLines13[34]=[[46.1235492,14.476840811,104191,104201],[46.1256774,14.4862649]];	BusPolyLines13[35]=[[46.1256774,14.486264911,104201,104211],[46.1269558,14.4919604]];	BusPolyLines13[36]=[[46.1269558,14.491960411,104211,104221],[46.1266954,14.4966895]];
BusPolyLines14[0]=[[46.0531497,14.547518911,303041,403051],[46.0476393,14.5447043]];	BusPolyLines14[1]=[[46.0476393,14.544704311,403051,403043],[46.0485431,14.5373548]];	BusPolyLines14[2]=[[46.0485431,14.537354811,403043,403023],[46.0514722,14.5387168]];	BusPolyLines14[3]=[[46.0514722,14.538716811,403023,303032],[46.0538018,14.5392815]];	BusPolyLines14[4]=[[46.0538018,14.539281511,303032,303021],[46.0560119,14.5389885]];	BusPolyLines14[5]=[[46.0560119,14.538988511,303021,402041],[46.0543341,14.5277847]];	BusPolyLines14[6]=[[46.0543341,14.527784711,402041,402031],[46.0523315,14.5194459]];	BusPolyLines14[7]=[[46.0523315,14.519445911,402031,402021],[46.053238,14.5185682]];	BusPolyLines14[8]=[[46.053238,14.518568210,402021,301011],[46.0574779,14.5163085]];	BusPolyLines14[9]=[[46.0574779,14.516308511,301011,300011],[46.0577307,14.5080954]];	BusPolyLines14[10]=[[46.0577307,14.508095411,300011,600011],[46.0560837,14.5049456]];	BusPolyLines14[11]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines14[12]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines14[13]=[[46.051446,14.502199410,601012,601011],[46.0519049,14.5025648]];	BusPolyLines14[14]=[[46.0519049,14.502564811,601011,602021],[46.0489393,14.5016676]];	BusPolyLines14[15]=[[46.0489393,14.501667611,602021,602071],[46.0455809,14.4986369]];	BusPolyLines14[16]=[[46.0455809,14.498636911,602071,602093],[46.0416695,14.4997103]];	BusPolyLines14[17]=[[46.0416695,14.499710311,602093,603061],[46.0376709,14.4991039]];	BusPolyLines14[18]=[[46.0376709,14.499103911,603061,800018],[46.0373541,14.5039779]];	BusPolyLines14[19]=[[46.0373541,14.503977911,800018,603071],[46.0334078,14.4996482]];	BusPolyLines14[20]=[[46.0334078,14.499648211,603071,604023],[46.0145247,14.51184]];
BusPolyLines15[0]=[[46.0975058,14.516649211,104033,104033],[46.0975058,14.5166492]];	BusPolyLines15[1]=[[46.0975058,14.516649211,104033,103131],[46.0898578,14.5131522]];	BusPolyLines15[2]=[[46.0898578,14.513152211,103131,103101],[46.0860559,14.5134466]];	BusPolyLines15[3]=[[46.0860559,14.513446611,103101,103071],[46.0822173,14.5127462]];	BusPolyLines15[4]=[[46.0822173,14.512746211,103071,103031],[46.077359,14.5116436]];	BusPolyLines15[5]=[[46.077359,14.511643610,103031,102081],[46.0742705,14.510723]];	BusPolyLines15[6]=[[46.0742705,14.51072311,102081,102041],[46.0692915,14.5099291]];	BusPolyLines15[7]=[[46.0692915,14.509929111,102041,101051],[46.0646683,14.5085432]];	BusPolyLines15[8]=[[46.0646683,14.508543211,101051,100021],[46.060338,14.5043148]];	BusPolyLines15[9]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines15[10]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines15[11]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines15[12]=[[46.051446,14.502199410,601012,601011],[46.0519049,14.5025648]];	BusPolyLines15[13]=[[46.0519049,14.502564811,601011,602021],[46.0489393,14.5016676]];	BusPolyLines15[14]=[[46.0489393,14.501667611,602021,602061],[46.0461698,14.5010019]];	BusPolyLines15[15]=[[46.0461698,14.501001911,602061,602101],[46.0459141,14.5047604]];	BusPolyLines15[16]=[[46.0459141,14.504760411,602101,602111],[46.0439427,14.509151]];	BusPolyLines15[17]=[[46.0439427,14.50915111,602111,502031],[46.0450716,14.5160871]];	BusPolyLines15[18]=[[46.0450716,14.516087111,502031,502021],[46.048464,14.519345]];	BusPolyLines15[19]=[[46.048464,14.51934510,502021,402031],[46.0523315,14.5194459]];	BusPolyLines15[20]=[[46.0523315,14.519445911,402031,402041],[46.0543341,14.5277847]];	BusPolyLines15[21]=[[46.0543341,14.527784711,402041,303011],[46.0556637,14.5338953]];	BusPolyLines15[22]=[[46.0556637,14.533895311,303011,303021],[46.0560119,14.5389885]];	BusPolyLines15[23]=[[46.0560119,14.538988511,303021,303021],[46.0560119,14.5389885]];	BusPolyLines15[24]=[[46.0560119,14.538988511,303021,303051],[46.0560684,14.5492779]];	BusPolyLines15[25]=[[46.0560684,14.549277911,303051,303061],[46.056107,14.5565251]];	BusPolyLines15[26]=[[46.056107,14.556525110,303061,304021],[46.0556707,14.5595529]];	BusPolyLines15[27]=[[46.0556707,14.559552911,304021,304042],[46.0548228,14.5668635]];	BusPolyLines15[28]=[[46.0548228,14.566863511,304042,304061],[46.0543308,14.5741517]];	BusPolyLines15[29]=[[46.0543308,14.574151711,304061,304091],[46.0538243,14.589105]];	BusPolyLines15[30]=[[46.0538243,14.58910511,304091,304111],[46.0540027,14.587014]];	BusPolyLines15[31]=[[46.0540027,14.58701411,304111,304131],[46.057698,14.605837]];	BusPolyLines15[32]=[[46.057698,14.60583710,304131,204181],[46.060993,14.6114277]];	BusPolyLines15[33]=[[46.060993,14.611427710,204181,204191],[46.0662391,14.6109328]];	BusPolyLines15[34]=[[46.0662391,14.610932811,204191,204201],[46.0672331,14.6083691]];	BusPolyLines15[35]=[[46.0672331,14.608369111,204201,204211],[46.0688919,14.6052896]];
BusPolyLines16[0]=[[46.0637039,14.511364211,101031,201011],[46.0608459,14.5126954]];	BusPolyLines16[1]=[[46.0608459,14.512695411,201011,100021],[46.060338,14.5043148]];	BusPolyLines16[2]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines16[3]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines16[4]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines16[5]=[[46.051446,14.502199410,601012,601011],[46.0519049,14.5025648]];	BusPolyLines16[6]=[[46.0519049,14.502564811,601011,602021],[46.0489393,14.5016676]];	BusPolyLines16[7]=[[46.0489393,14.501667611,602021,602061],[46.0461698,14.5010019]];	BusPolyLines16[8]=[[46.0461698,14.501001911,602061,602101],[46.0459141,14.5047604]];	BusPolyLines16[9]=[[46.0459141,14.504760411,602101,602111],[46.0439427,14.509151]];	BusPolyLines16[10]=[[46.0439427,14.50915111,602111,502031],[46.0450716,14.5160871]];	BusPolyLines16[11]=[[46.0450716,14.516087111,502031,502021],[46.048464,14.519345]];	BusPolyLines16[12]=[[46.048464,14.51934510,502021,402031],[46.0523315,14.5194459]];	BusPolyLines16[13]=[[46.0523315,14.519445911,402031,402041],[46.0543341,14.5277847]];	BusPolyLines16[14]=[[46.0543341,14.527784711,402041,303011],[46.0556637,14.5338953]];	BusPolyLines16[15]=[[46.0556637,14.533895311,303011,303021],[46.0560119,14.5389885]];	BusPolyLines16[16]=[[46.0560119,14.538988511,303021,303021],[46.0560119,14.5389885]];	BusPolyLines16[17]=[[46.0560119,14.538988511,303021,303051],[46.0560684,14.5492779]];	BusPolyLines16[18]=[[46.0560684,14.549277911,303051,303061],[46.056107,14.5565251]];	BusPolyLines16[19]=[[46.056107,14.556525110,303061,304021],[46.0556707,14.5595529]];	BusPolyLines16[20]=[[46.0556707,14.559552911,304021,304042],[46.0548228,14.5668635]];	BusPolyLines16[21]=[[46.0548228,14.566863511,304042,304061],[46.0543308,14.5741517]];	BusPolyLines16[22]=[[46.0543308,14.574151711,304061,304091],[46.0538243,14.589105]];	BusPolyLines16[23]=[[46.0538243,14.58910511,304091,304111],[46.0540027,14.587014]];	BusPolyLines16[24]=[[46.0540027,14.58701411,304111,304131],[46.057698,14.605837]];	BusPolyLines16[25]=[[46.057698,14.60583710,304131,204181],[46.060993,14.6114277]];	BusPolyLines16[26]=[[46.060993,14.611427710,204181,204191],[46.0662391,14.6109328]];	BusPolyLines16[27]=[[46.0662391,14.610932811,204191,204201],[46.0672331,14.6083691]];	BusPolyLines16[28]=[[46.0672331,14.608369111,204201,204211],[46.0688919,14.6052896]];
BusPolyLines17[0]=[[46.0637039,14.511364211,101031,201011],[46.0608459,14.5126954]];	BusPolyLines17[1]=[[46.0608459,14.512695411,201011,100012],[46.0596693,14.5090305]];	BusPolyLines17[2]=[[46.0596693,14.509030511,100012,300011],[46.0577307,14.5080954]];	BusPolyLines17[3]=[[46.0577307,14.508095411,300011,301011],[46.0574779,14.5163085]];	BusPolyLines17[4]=[[46.0574779,14.516308511,301011,202011],[46.059266,14.5188123]];	BusPolyLines17[5]=[[46.059266,14.518812310,202011,202043],[46.0624717,14.5240379]];	BusPolyLines17[6]=[[46.0624717,14.524037911,202043,202082],[46.064666,,14.528204]];	BusPolyLines17[7]=[[46.064666,,14.52820410,202082,203041],[46.0672541,14.5306711]];	BusPolyLines17[8]=[[46.0672541,14.530671111,203041,203091],[46.068249,14.535856]];	BusPolyLines17[9]=[[46.068249,14.53585610,203091,203101],[46.0689589,14.538561]];	BusPolyLines17[10]=[[46.0689589,14.53856111,203101,203151],[46.0697727,14.5450338]];	BusPolyLines17[11]=[[46.0697727,14.545033811,203151,203161],[46.0702088,14.548303]];	BusPolyLines17[12]=[[46.0702088,14.54830311,203161,204061],[46.0749801,14.5629613]];	BusPolyLines17[13]=[[46.0749801,14.562961311,204061,204071],[46.0777487,14.5686948]];	BusPolyLines17[14]=[[46.0777487,14.568694811,204071,204081],[46.0708138,14.5795842]];	BusPolyLines17[15]=[[46.0708138,14.579584211,204081,204101],[46.0649524,14.5816902]];	BusPolyLines17[16]=[[46.0649524,14.581690211,204101,304081],[46.0572341,14.5831179]];	BusPolyLines17[17]=[[46.0572341,14.583117911,304081,304071],[46.0549046,14.5832641]];	BusPolyLines17[18]=[[46.0549046,14.583264111,304071,304091],[46.0538243,14.589105]];	BusPolyLines17[19]=[[46.0538243,14.58910511,304091,304101],[46.0493463,14.5926441]];
BusPolyLines18[0]=[[46.0860559,14.513446611,103101,800000],[46.0760515,14.5208211]];	BusPolyLines18[1]=[[46.0760515,14.520821111,800000,103191],[46.0758796,14.5204746]];	BusPolyLines18[2]=[[46.0758796,14.520474611,103191,102091],[46.0721962,14.5183457]];	BusPolyLines18[3]=[[46.0721962,14.518345711,102091,102031],[46.0681173,14.5151642]];	BusPolyLines18[4]=[[46.0681173,14.515164211,102031,101034],[46.0654011,14.5135801]];	BusPolyLines18[5]=[[46.0654011,14.513580111,101034,101031],[46.0637039,14.5113642]];	BusPolyLines18[6]=[[46.0637039,14.511364211,101031,100021],[46.060338,14.5043148]];	BusPolyLines18[7]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines18[8]=[[46.0560837,14.504945611,600011,600032],[46.0542487,14.5039258]];	BusPolyLines18[9]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines18[10]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines18[11]=[[46.0537126,14.507195211,500012,501021],[46.0520126,14.5100513]];	BusPolyLines18[12]=[[46.0520126,14.510051311,501021,502011],[46.0500939,14.5147598]];	BusPolyLines18[13]=[[46.0500939,14.514759811,502011,502013],[46.0495425,14.5159875]];	BusPolyLines18[14]=[[46.0495425,14.515987511,502013,502021],[46.048464,14.519345]];	BusPolyLines18[15]=[[46.048464,14.51934510,502021,402061],[46.0485451,14.5221627]];	BusPolyLines18[16]=[[46.0485451,14.522162711,402061,403031],[46.0483881,14.5296929]];	BusPolyLines18[17]=[[46.0483881,14.529692911,403031,403043],[46.0485431,14.5373548]];	BusPolyLines18[18]=[[46.0485431,14.537354811,403043,403071],[46.0458117,14.5437773]];	BusPolyLines18[19]=[[46.0458117,14.543777311,403071,403061],[,]];	BusPolyLines18[20]=[[,11,403061,404011],[,]];	BusPolyLines18[21]=[[,11,404011,404021],[,]];	BusPolyLines18[22]=[[,11,404021,404031],[,]];	BusPolyLines18[23]=[[,11,404031,404041],[,]];	BusPolyLines18[24]=[[,11,404041,404051],[,]];	BusPolyLines18[25]=[[,11,404051,404061],[,]];	BusPolyLines18[26]=[[,11,404061,404071],[,]];	BusPolyLines18[27]=[[,11,404071,404081],[,]];	BusPolyLines18[28]=[[,11,404081,404091],[,]];
BusPolyLines19[0]=[[46.0952869,14.503914411,104011,104021],[46.0934212,14.510453]];	BusPolyLines19[1]=[[46.0934212,14.51045311,104021,103121],[46.0902679,14.511539]];	BusPolyLines19[2]=[[46.0902679,14.51153911,103121,103111],[46.0899244,14.5081659]];	BusPolyLines19[3]=[[46.0899244,14.508165911,103111,103091],[46.0855875,14.5068836]];	BusPolyLines19[4]=[[46.0855875,14.506883611,103091,103061],[46.0820396,14.5066901]];	BusPolyLines19[5]=[[46.0820396,14.506690111,103061,103021],[46.0778771,14.5043142]];	BusPolyLines19[6]=[[46.0778771,14.504314211,103021,102071],[46.0744446,14.5009213]];	BusPolyLines19[7]=[[46.0744446,14.500921311,102071,102051],[46.0695527,14.5033249]];	BusPolyLines19[8]=[[46.0695527,14.503324911,102051,101061],[46.0653352,14.5028269]];	BusPolyLines19[9]=[[46.0653352,14.502826911,101061,101021],[46.063747,14.5042309]];	BusPolyLines19[10]=[[46.063747,14.504230910,101021,101011],[46.0637771,14.5069141]];	BusPolyLines19[11]=[[46.0637771,14.506914111,101011,100021],[46.060338,14.5043148]];	BusPolyLines19[12]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines19[13]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines19[14]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines19[15]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines19[16]=[[46.0489393,14.501667611,602021,602011],[46.0500309,14.4948034]];	BusPolyLines19[17]=[[46.0500309,14.494803411,602011,702011],[46.0509803,14.4913883]];	BusPolyLines19[18]=[[46.0509803,14.491388311,702011,702021],[46.0496168,14.4862584]];	BusPolyLines19[19]=[[46.0496168,14.486258411,702021,703011],[,]];	BusPolyLines19[20]=[[,11,703011,703021],[,]];	BusPolyLines19[21]=[[,11,703021,703031],[,]];	BusPolyLines19[22]=[[,11,703031,703041],[,]];	BusPolyLines19[23]=[[,11,703041,703051],[,]];	BusPolyLines19[24]=[[,11,703051,703061],[,]];	BusPolyLines19[25]=[[,11,703061,704021],[,]];	BusPolyLines19[26]=[[,11,704021,704031],[,]];
BusPolyLines20[0]=[[46.0952869,14.503914411,104011,104021],[46.0934212,14.510453]];	BusPolyLines20[1]=[[46.0934212,14.51045311,104021,103121],[46.0902679,14.511539]];	BusPolyLines20[2]=[[46.0902679,14.51153911,103121,103111],[46.0899244,14.5081659]];	BusPolyLines20[3]=[[46.0899244,14.508165911,103111,103091],[46.0855875,14.5068836]];	BusPolyLines20[4]=[[46.0855875,14.506883611,103091,103061],[46.0820396,14.5066901]];	BusPolyLines20[5]=[[46.0820396,14.506690111,103061,103021],[46.0778771,14.5043142]];	BusPolyLines20[6]=[[46.0778771,14.504314211,103021,102071],[46.0744446,14.5009213]];	BusPolyLines20[7]=[[46.0744446,14.500921311,102071,102051],[46.0695527,14.5033249]];	BusPolyLines20[8]=[[46.0695527,14.503324911,102051,101061],[46.0653352,14.5028269]];	BusPolyLines20[9]=[[46.0653352,14.502826911,101061,101021],[46.063747,14.5042309]];	BusPolyLines20[10]=[[46.063747,14.504230910,101021,101011],[46.0637771,14.5069141]];	BusPolyLines20[11]=[[46.0637771,14.506914111,101011,100021],[46.060338,14.5043148]];	BusPolyLines20[12]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines20[13]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines20[14]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines20[15]=[[46.051446,14.502199410,601012,602021],[46.0489393,14.5016676]];	BusPolyLines20[16]=[[46.0489393,14.501667611,602021,602011],[46.0500309,14.4948034]];	BusPolyLines20[17]=[[46.0500309,14.494803411,602011,702011],[46.0509803,14.4913883]];	BusPolyLines20[18]=[[46.0509803,14.491388311,702011,702021],[46.0496168,14.4862584]];	BusPolyLines20[19]=[[46.0496168,14.486258411,702021,703011],[,]];	BusPolyLines20[20]=[[,11,703011,703021],[,]];	BusPolyLines20[21]=[[,11,703021,703031],[,]];	BusPolyLines20[22]=[[,11,703031,703041],[,]];	BusPolyLines20[23]=[[,11,703041,703051],[,]];	BusPolyLines20[24]=[[,11,703051,703061],[,]];	BusPolyLines20[25]=[[,11,703061,704021],[,]];	BusPolyLines20[26]=[[,11,704021,704031],[,]];	BusPolyLines20[27]=[[,11,704031,704041],[,]];
BusPolyLines21[0]=[[46.1152848,14.440462311,804061,804351],[46.1060199,14.4398984]];	BusPolyLines21[1]=[[46.1060199,14.439898411,804351,804341],[46.1042924,14.4475676]];	BusPolyLines21[2]=[[46.1042924,14.447567611,804341,804051],[46.1001702,14.4586322]];	BusPolyLines21[3]=[[46.1001702,14.458632211,804051,804081],[46.100484,14.4588912]];	BusPolyLines21[4]=[[46.100484,14.458891210,804081,804091],[46.1038624,14.4622858]];	BusPolyLines21[5]=[[46.1038624,14.462285811,804091,804101],[46.1091343,14.4609827]];	BusPolyLines21[6]=[[46.1091343,14.460982711,804101,804111],[46.112755,14.4608884]];	BusPolyLines21[7]=[[46.112755,14.460888410,804111,804131],[46.1135528,14.4632272]];	BusPolyLines21[8]=[[46.1135528,14.463227211,804131,804121],[46.1153673,14.4624657]];	BusPolyLines21[9]=[[46.1153673,14.462465711,804121,804141],[46.1180165,14.4607648]];	BusPolyLines21[10]=[[46.1180165,14.460764811,804141,815111],[46.1187569,14.4477172]];	BusPolyLines21[11]=[[46.1187569,14.447717211,815111,815011],[46.124503,14.445867]];	BusPolyLines21[12]=[[46.124503,14.44586711,815011,815101],[46.1287497,14.4432873]];	BusPolyLines21[13]=[[46.1287497,14.443287311,815101,800026],[46.13564,14.4419612]];	BusPolyLines21[14]=[[46.13564,14.44196129,800026,815021],[46.1337412,14.4373434]];	BusPolyLines21[15]=[[46.1337412,14.437343411,815021,815031],[46.1409502,14.4241731]];	BusPolyLines21[16]=[[46.1409502,14.424173111,815031,815041],[46.1378485,14.4317352]];	BusPolyLines21[17]=[[46.1378485,14.431735211,815041,835011],[46.1433796,14.4165449]];	BusPolyLines21[18]=[[46.1433796,14.416544911,835011,805052],[46.1462908,14.4098018]];
BusPolyLines22[0]=[[46.0577307,14.508095411,300011,600011],[46.0560837,14.5049456]];	BusPolyLines22[1]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines22[2]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines22[3]=[[46.051446,14.502199410,601012,602011],[46.0500309,14.4948034]];	BusPolyLines22[4]=[[46.0500309,14.494803411,602011,702011],[46.0509803,14.4913883]];	BusPolyLines22[5]=[[46.0509803,14.491388311,702011,800020],[46.0526529,14.485856]];	BusPolyLines22[6]=[[46.0526529,14.48585611,800020,800021],[46.0508548,14.4764937]];	BusPolyLines22[7]=[[46.0508548,14.476493711,800021,703131],[46.0515845,14.4697882]];	BusPolyLines22[8]=[[46.0515845,14.469788211,703131,800001],[46.0671321,14.475306]];	BusPolyLines22[9]=[[46.0671321,14.47530611,800001,803092],[46.0700756,14.4802514]];	BusPolyLines22[10]=[[46.0700756,14.480251411,803092,803016],[46.0736214,14.4839913]];	BusPolyLines22[11]=[[46.0736214,14.483991311,803016,803011],[46.0731004,14.4849684]];	BusPolyLines22[12]=[[46.0731004,14.484968411,803011,803051],[46.0767333,14.488504]];	BusPolyLines22[13]=[[46.0767333,14.48850411,803051,803211],[46.0796094,14.4866351]];	BusPolyLines22[14]=[[46.0796094,14.486635111,803211,103201],[46.0821426,14.4941751]];	BusPolyLines22[15]=[[46.0821426,14.494175111,103201,800022],[46.0785532,14.4953278]];	BusPolyLines22[16]=[[46.0785532,14.495327811,800022,802061],[46.0728917,14.493244]];	BusPolyLines22[17]=[[46.0728917,14.49324411,802061,102061],[46.0742623,14.4973857]];	BusPolyLines22[18]=[[46.0742623,14.497385711,102061,103011],[46.0763767,14.4980681]];	BusPolyLines22[19]=[[46.0763767,14.498068111,103011,103051],[46.0789524,14.4988927]];	BusPolyLines22[20]=[[46.0789524,14.498892711,103051,103091],[46.0855875,14.5068836]];	BusPolyLines22[21]=[[46.0855875,14.506883611,103091,103111],[46.0899244,14.5081659]];	BusPolyLines22[22]=[[46.0899244,14.508165911,103111,103101],[46.0860559,14.5134466]];	BusPolyLines22[23]=[[46.0860559,14.513446611,103101,103071],[46.0822173,14.5127462]];	BusPolyLines22[24]=[[46.0822173,14.512746211,103071,103031],[46.077359,14.5116436]];	BusPolyLines22[25]=[[46.077359,14.511643610,103031,800027],[46.0761042,14.5146796]];	BusPolyLines22[26]=[[46.0761042,14.514679611,800027,103191],[46.0758796,14.5204746]];	BusPolyLines22[27]=[[46.0758796,14.520474611,103191,800000],[46.0760515,14.5208211]];	BusPolyLines22[28]=[[46.0760515,14.520821111,800000,103173],[,]];
BusPolyLines23[0]=[[46.0577307,14.508095411,300011,600011],[46.0560837,14.5049456]];	BusPolyLines23[1]=[[46.0560837,14.504945611,600011,600022],[46.053554,14.5038905]];	BusPolyLines23[2]=[[46.053554,14.503890510,600022,601012],[46.051446,14.5021994]];	BusPolyLines23[3]=[[46.051446,14.502199410,601012,602011],[46.0500309,14.4948034]];	BusPolyLines23[4]=[[46.0500309,14.494803411,602011,702011],[46.0509803,14.4913883]];	BusPolyLines23[5]=[[46.0509803,14.491388311,702011,800020],[46.0526529,14.485856]];	BusPolyLines23[6]=[[46.0526529,14.48585611,800020,800021],[46.0508548,14.4764937]];	BusPolyLines23[7]=[[46.0508548,14.476493711,800021,703131],[46.0515845,14.4697882]];	BusPolyLines23[8]=[[46.0515845,14.469788211,703131,800001],[46.0671321,14.475306]];	BusPolyLines23[9]=[[46.0671321,14.47530611,800001,803092],[46.0700756,14.4802514]];	BusPolyLines23[10]=[[46.0700756,14.480251411,803092,803016],[46.0736214,14.4839913]];	BusPolyLines23[11]=[[46.0736214,14.483991311,803016,803011],[46.0731004,14.4849684]];	BusPolyLines23[12]=[[46.0731004,14.484968411,803011,803051],[46.0767333,14.488504]];
BusPolyLines24[0]=[[46.0794063,14.535978511,203081,203071],[46.0742907,14.5311941]];	BusPolyLines24[1]=[[46.0742907,14.531194111,203071,800014],[46.0716883,14.5292352]];	BusPolyLines24[2]=[[46.0716883,14.529235211,800014,203031],[46.0693514,14.5273186]];	BusPolyLines24[3]=[[46.0693514,14.527318611,203031,203211],[46.0690138,14.5255432]];	BusPolyLines24[4]=[[46.0690138,14.525543211,203211,202031],[46.0657867,14.5209033]];	BusPolyLines24[5]=[[46.0657867,14.520903311,202031,102021],[46.0670972,14.5145042]];	BusPolyLines24[6]=[[46.0670972,14.514504211,102021,101051],[46.0646683,14.5085432]];	BusPolyLines24[7]=[[46.0646683,14.508543211,101051,100021],[46.060338,14.5043148]];	BusPolyLines24[8]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines24[9]=[[46.0560837,14.504945611,600011,600032],[46.0542487,14.5039258]];	BusPolyLines24[10]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines24[11]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines24[12]=[[46.0537126,14.507195211,500012,501021],[46.0520126,14.5100513]];	BusPolyLines24[13]=[[46.0520126,14.510051311,501021,501032],[46.050105,14.5097825]];	BusPolyLines24[14]=[[46.050105,14.509782510,501032,602111],[46.0439427,14.509151]];	BusPolyLines24[15]=[[46.0439427,14.50915111,602111,602121],[46.040902,14.5086341]];	BusPolyLines24[16]=[[46.040902,14.508634110,602121,603081],[46.0373016,14.5038086]];	BusPolyLines24[17]=[[46.0373016,14.503808611,603081,603091],[46.0340931,14.5106475]];	BusPolyLines24[18]=[[46.0340931,14.510647511,603091,603101],[46.0283006,14.5096222]];	BusPolyLines24[19]=[[46.0283006,14.509622211,603101,603111],[46.0243006,14.5098719]];	BusPolyLines24[20]=[[46.0243006,14.509871911,603111,604011],[46.0196979,14.5099744]];	BusPolyLines24[21]=[[46.0196979,14.509974411,604011,604023],[46.0145247,14.51184]];	BusPolyLines24[22]=[[46.0145247,14.5118411,604023,614011],[46.011909,14.5052657]];	BusPolyLines24[23]=[[46.011909,14.505265710,614011,614021],[45.9760138,14.3520664]];	BusPolyLines24[24]=[[45.9760138,14.352066411,614021,614031],[46.0076784,14.4935837]];	BusPolyLines24[25]=[[46.0076784,14.493583711,614031,614041],[46.0057369,14.4903606]];	BusPolyLines24[26]=[[46.0057369,14.490360611,614041,614051],[46.0023672,14.4793887]];	BusPolyLines24[27]=[[46.0023672,14.479388711,614051,614061],[46.0000206,14.4738407]];	BusPolyLines24[28]=[[46.0000206,14.473840711,614061,614071],[45.9975182,14.4697145]];	BusPolyLines24[29]=[[45.9975182,14.469714511,614071,614081],[45.9937447,14.4626542]];	BusPolyLines24[30]=[[45.9937447,14.462654211,614081,614091],[45.9913516,14.4557937]];	BusPolyLines24[31]=[[45.9913516,14.455793711,614091,745051],[45.9760433,14.4209799]];	BusPolyLines24[32]=[[45.9760433,14.420979911,745051,745101],[45.9717176,14.4286493]];	BusPolyLines24[33]=[[45.9717176,14.428649311,745101,745061],[45.9712574,14.4315586]];
BusPolyLines25[0]=[[46.0794063,14.535978511,203081,203071],[46.0742907,14.5311941]];	BusPolyLines25[1]=[[46.0742907,14.531194111,203071,800014],[46.0716883,14.5292352]];	BusPolyLines25[2]=[[46.0716883,14.529235211,800014,203031],[46.0693514,14.5273186]];	BusPolyLines25[3]=[[46.0693514,14.527318611,203031,203211],[46.0690138,14.5255432]];	BusPolyLines25[4]=[[46.0690138,14.525543211,203211,202031],[46.0657867,14.5209033]];	BusPolyLines25[5]=[[46.0657867,14.520903311,202031,102021],[46.0670972,14.5145042]];	BusPolyLines25[6]=[[46.0670972,14.514504211,102021,101051],[46.0646683,14.5085432]];	BusPolyLines25[7]=[[46.0646683,14.508543211,101051,100021],[46.060338,14.5043148]];	BusPolyLines25[8]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines25[9]=[[46.0560837,14.504945611,600011,600032],[46.0542487,14.5039258]];	BusPolyLines25[10]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines25[11]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines25[12]=[[46.0537126,14.507195211,500012,501021],[46.0520126,14.5100513]];	BusPolyLines25[13]=[[46.0520126,14.510051311,501021,501032],[46.050105,14.5097825]];	BusPolyLines25[14]=[[46.050105,14.509782510,501032,602111],[46.0439427,14.509151]];	BusPolyLines25[15]=[[46.0439427,14.50915111,602111,602121],[46.040902,14.5086341]];	BusPolyLines25[16]=[[46.040902,14.508634110,602121,603081],[46.0373016,14.5038086]];	BusPolyLines25[17]=[[46.0373016,14.503808611,603081,603091],[46.0340931,14.5106475]];	BusPolyLines25[18]=[[46.0340931,14.510647511,603091,603101],[46.0283006,14.5096222]];	BusPolyLines25[19]=[[46.0283006,14.509622211,603101,603111],[46.0243006,14.5098719]];	BusPolyLines25[20]=[[46.0243006,14.509871911,603111,604011],[46.0196979,14.5099744]];	BusPolyLines25[21]=[[46.0196979,14.509974411,604011,604023],[46.0145247,14.51184]];	BusPolyLines25[22]=[[46.0145247,14.5118411,604023,604051],[46.007143,14.5122919]];	BusPolyLines25[23]=[[46.007143,14.512291910,604051,604061],[46.0043875,14.513165]];	BusPolyLines25[24]=[[46.0043875,14.51316511,604061,604041],[45.9996374,14.516607]];	BusPolyLines25[25]=[[45.9996374,14.51660711,604041,605081],[45.9627212,14.5301388]];	BusPolyLines25[26]=[[45.9627212,14.530138811,605081,605011],[45.9587454,14.5272731]];	BusPolyLines25[27]=[[45.9587454,14.527273111,605011,625021],[45.9602956,14.5156941]];	BusPolyLines25[28]=[[45.9602956,14.515694111,625021,625031],[45.9570164,14.5086369]];	BusPolyLines25[29]=[[45.9570164,14.508636911,625031,625041],[45.9511907,14.5114014]];	BusPolyLines25[30]=[[45.9511907,14.511401411,625041,625061],[45.9439663,14.5087476]];	BusPolyLines25[31]=[[45.9439663,14.508747611,625061,626011],[45.936876,14.51206]];
BusPolyLines26[0]=[[46.0814072,14.519813211,103081,103162],[46.0793986,14.51909]];	BusPolyLines26[1]=[[46.0793986,14.5190911,103162,103041],[46.0766914,14.5186728]];	BusPolyLines26[2]=[[46.0766914,14.518672811,103041,102091],[46.0721962,14.5183457]];	BusPolyLines26[3]=[[46.0721962,14.518345711,102091,102031],[46.0681173,14.5151642]];	BusPolyLines26[4]=[[46.0681173,14.515164211,102031,101034],[46.0654011,14.5135801]];	BusPolyLines26[5]=[[46.0654011,14.513580111,101034,101031],[46.0637039,14.5113642]];	BusPolyLines26[6]=[[46.0637039,14.511364211,101031,100021],[46.060338,14.5043148]];	BusPolyLines26[7]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines26[8]=[[46.0560837,14.504945611,600011,600032],[46.0542487,14.5039258]];	BusPolyLines26[9]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines26[10]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines26[11]=[[46.0537126,14.507195211,500012,501021],[46.0520126,14.5100513]];	BusPolyLines26[12]=[[46.0520126,14.510051311,501021,502011],[46.0500939,14.5147598]];	BusPolyLines26[13]=[[46.0500939,14.514759811,502011,502013],[46.0495425,14.5159875]];	BusPolyLines26[14]=[[46.0495425,14.515987511,502013,502021],[46.048464,14.519345]];	BusPolyLines26[15]=[[46.048464,14.51934510,502021,402031],[46.0523315,14.5194459]];	BusPolyLines26[16]=[[46.0523315,14.519445911,402031,402041],[46.0543341,14.5277847]];	BusPolyLines26[17]=[[46.0543341,14.527784711,402041,303011],[46.0556637,14.5338953]];	BusPolyLines26[18]=[[46.0556637,14.533895311,303011,303021],[46.0560119,14.5389885]];	BusPolyLines26[19]=[[46.0560119,14.538988511,303021,303051],[46.0560684,14.5492779]];	BusPolyLines26[20]=[[46.0560684,14.549277911,303051,303071],[46.0541648,14.5527027]];	BusPolyLines26[21]=[[46.0541648,14.552702711,303071,304011],[46.0546186,14.5577806]];	BusPolyLines26[22]=[[46.0546186,14.557780611,304011,304031],[46.0546019,14.5622443]];	BusPolyLines26[23]=[[46.0546019,14.562244311,304031,304051],[46.0523876,14.5653009]];
BusPolyLines27[0]=[[46.0814072,14.519813211,103081,103162],[46.0793986,14.51909]];	BusPolyLines27[1]=[[46.0793986,14.5190911,103162,103041],[46.0766914,14.5186728]];	BusPolyLines27[2]=[[46.0766914,14.518672811,103041,102091],[46.0721962,14.5183457]];	BusPolyLines27[3]=[[46.0721962,14.518345711,102091,102031],[46.0681173,14.5151642]];	BusPolyLines27[4]=[[46.0681173,14.515164211,102031,101034],[46.0654011,14.5135801]];	BusPolyLines27[5]=[[46.0654011,14.513580111,101034,101031],[46.0637039,14.5113642]];	BusPolyLines27[6]=[[46.0637039,14.511364211,101031,100021],[46.060338,14.5043148]];	BusPolyLines27[7]=[[46.060338,14.504314810,100021,600011],[46.0560837,14.5049456]];	BusPolyLines27[8]=[[46.0560837,14.504945611,600011,600032],[46.0542487,14.5039258]];	BusPolyLines27[9]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines27[10]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines27[11]=[[46.0537126,14.507195211,500012,501021],[46.0520126,14.5100513]];	BusPolyLines27[12]=[[46.0520126,14.510051311,501021,502011],[46.0500939,14.5147598]];	BusPolyLines27[13]=[[46.0500939,14.514759811,502011,502013],[46.0495425,14.5159875]];	BusPolyLines27[14]=[[46.0495425,14.515987511,502013,502021],[46.048464,14.519345]];	BusPolyLines27[15]=[[46.048464,14.51934510,502021,402031],[46.0523315,14.5194459]];	BusPolyLines27[16]=[[46.0523315,14.519445911,402031,402041],[46.0543341,14.5277847]];	BusPolyLines27[17]=[[46.0543341,14.527784711,402041,303011],[46.0556637,14.5338953]];	BusPolyLines27[18]=[[46.0556637,14.533895311,303011,303021],[46.0560119,14.5389885]];	BusPolyLines27[19]=[[46.0560119,14.538988511,303021,303051],[46.0560684,14.5492779]];	BusPolyLines27[20]=[[46.0560684,14.549277911,303051,303071],[46.0541648,14.5527027]];	BusPolyLines27[21]=[[46.0541648,14.552702711,303071,304011],[46.0546186,14.5577806]];	BusPolyLines27[22]=[[46.0546186,14.557780611,304011,304031],[46.0546019,14.5622443]];	BusPolyLines27[23]=[[46.0546019,14.562244311,304031,304051],[46.0523876,14.5653009]];	BusPolyLines27[24]=[[46.0523876,14.565300911,304051,304042],[46.0548228,14.5668635]];	BusPolyLines27[25]=[[46.0548228,14.566863511,304042,304061],[46.0543308,14.5741517]];	BusPolyLines27[26]=[[46.0543308,14.574151711,304061,304091],[46.0538243,14.589105]];	BusPolyLines27[27]=[[46.0538243,14.58910511,304091,304111],[46.0540027,14.587014]];	BusPolyLines27[28]=[[46.0540027,14.58701411,304111,304131],[46.057698,14.605837]];	BusPolyLines27[29]=[[46.057698,14.60583710,304131,204181],[46.060993,14.6114277]];	BusPolyLines27[30]=[[46.060993,14.611427710,204181,204191],[46.0662391,14.6109328]];	BusPolyLines27[31]=[[46.0662391,14.610932811,204191,204201],[46.0672331,14.6083691]];	BusPolyLines27[32]=[[46.0672331,14.608369111,204201,204211],[46.0688919,14.6052896]];
BusPolyLines28[0]=[[46.08991,14.61116549,204171,204161],[46.0907728,14.5953971]];	BusPolyLines28[1]=[[46.0907728,14.595397111,204161,204151],[46.0911667,14.581523]];	BusPolyLines28[2]=[[46.0911667,14.58152311,204151,204141],[46.0918367,14.5702103]];	BusPolyLines28[3]=[[46.0918367,14.570210311,204141,204131],[46.0967667,14.5562498]];	BusPolyLines28[4]=[[46.0967667,14.556249811,204131,104181],[46.1003766,14.5528221]];	BusPolyLines28[5]=[[46.1003766,14.552822111,104181,104171],[46.1037891,14.5438139]];	BusPolyLines28[6]=[[46.1037891,14.543813911,104171,104151],[46.1050637,14.5328315]];	BusPolyLines28[7]=[[46.1050637,14.532831511,104151,104141],[46.1081828,14.5298836]];	BusPolyLines28[8]=[[46.1081828,14.529883611,104141,104131],[46.109223,14.5278555]];	BusPolyLines28[9]=[[46.109223,14.527855510,104131,104121],[46.1070954,14.5251287]];	BusPolyLines28[10]=[[46.1070954,14.525128711,104121,104113],[46.104709,14.529237]];	BusPolyLines28[11]=[[46.104709,14.52923711,104113,104101],[46.1011915,14.5241979]];	BusPolyLines28[12]=[[46.1011915,14.524197911,104101,104051],[46.1008579,14.5216269]];	BusPolyLines28[13]=[[46.1008579,14.521626911,104051,104033],[46.0975058,14.5166492]];	BusPolyLines28[14]=[[46.0975058,14.516649211,104033,800011],[46.1166892,14.5056588]];	BusPolyLines28[15]=[[46.1166892,14.505658811,800011,800012],[46.1199279,14.5031546]];	BusPolyLines28[16]=[[46.1199279,14.503154611,800012,800013],[46.1228627,14.5021161]];	BusPolyLines28[17]=[[46.1228627,14.502116111,800013,104221],[46.1266954,14.4966895]];
BusPolyLines29[0]=[[46.0792262,14.46513911,803181,803171],[46.0770665,14.4653821]];	BusPolyLines29[1]=[[46.0770665,14.465382111,803171,803161],[46.075017,14.4616236]];	BusPolyLines29[2]=[[46.075017,14.461623610,803161,826111],[46.0719173,14.4672764]];	BusPolyLines29[3]=[[46.0719173,14.467276411,826111,803131],[46.0697018,14.472669]];	BusPolyLines29[4]=[[46.0697018,14.47266911,803131,803081],[46.0715608,14.4807407]];	BusPolyLines29[5]=[[46.0715608,14.480740711,803081,803016],[46.0736214,14.4839913]];	BusPolyLines29[6]=[[46.0736214,14.483991311,803016,803011],[46.0731004,14.4849684]];	BusPolyLines29[7]=[[46.0731004,14.484968411,803011,802021],[46.0694662,14.4891765]];	BusPolyLines29[8]=[[46.0694662,14.489176511,802021,802051],[46.0669797,14.4940266]];	BusPolyLines29[9]=[[46.0669797,14.494026611,802051,102012],[46.0669472,14.50272]];	BusPolyLines29[10]=[[46.0669472,14.5027211,102012,101051],[46.0646683,14.5085432]];	BusPolyLines29[11]=[[46.0646683,14.508543211,101051,101031],[46.0637039,14.5113642]];	BusPolyLines29[12]=[[46.0637039,14.511364211,101031,202021],[46.0644681,14.5153984]];	BusPolyLines29[13]=[[46.0644681,14.515398411,202021,202031],[46.0657867,14.5209033]];	BusPolyLines29[14]=[[46.0657867,14.520903311,202031,202061],[46.0668872,14.5270204]];	BusPolyLines29[15]=[[46.0668872,14.527020411,202061,203011],[46.0643562,14.5275939]];	BusPolyLines29[16]=[[46.0643562,14.527593911,203011,203041],[46.0672541,14.5306711]];	BusPolyLines29[17]=[[46.0672541,14.530671111,203041,203062],[46.0613424,14.537811]];	BusPolyLines29[18]=[[46.0613424,14.53781111,203062,303022],[46.0562795,14.5405753]];	BusPolyLines29[19]=[[46.0562795,14.540575311,303022,303021],[46.0560119,14.5389885]];	BusPolyLines29[20]=[[46.0560119,14.538988511,303021,303051],[46.0560684,14.5492779]];	BusPolyLines29[21]=[[46.0560684,14.549277911,303051,303071],[46.0541648,14.5527027]];	BusPolyLines29[22]=[[46.0541648,14.552702711,303071,304011],[46.0546186,14.5577806]];	BusPolyLines29[23]=[[46.0546186,14.557780611,304011,304031],[46.0546019,14.5622443]];	BusPolyLines29[24]=[[46.0546019,14.562244311,304031,304051],[46.0523876,14.5653009]];
BusPolyLines30[0]=[[46.0375803,14.571570811,404123,404111],[46.0397,14.5635399]];	BusPolyLines30[1]=[[46.0397,14.56353998,404111,404101],[46.0408677,14.5562784]];	BusPolyLines30[2]=[[46.0408677,14.556278411,404101,403071],[46.0458117,14.5437773]];	BusPolyLines30[3]=[[46.0458117,14.543777311,403071,403043],[46.0485431,14.5373548]];	BusPolyLines30[4]=[[46.0485431,14.537354811,403043,403023],[46.0514722,14.5387168]];	BusPolyLines30[5]=[[46.0514722,14.538716811,403023,303032],[46.0538018,14.5392815]];	BusPolyLines30[6]=[[46.0538018,14.539281511,303032,303022],[46.0562795,14.5405753]];	BusPolyLines30[7]=[[46.0562795,14.540575311,303022,203062],[46.0613424,14.537811]];	BusPolyLines30[8]=[[46.0613424,14.53781111,203062,203041],[46.0672541,14.5306711]];	BusPolyLines30[9]=[[46.0672541,14.530671111,203041,203011],[46.0643562,14.5275939]];	BusPolyLines30[10]=[[46.0643562,14.527593911,203011,202061],[46.0668872,14.5270204]];
BusPolyLines31[0]=[[46.1413704,14.408263111,805021,805031],[46.1420132,14.4070521]];	BusPolyLines31[1]=[[46.1420132,14.407052111,805031,805052],[46.1462908,14.4098018]];	BusPolyLines31[2]=[[46.1462908,14.409801811,805052,805011],[46.1383621,14.4125895]];	BusPolyLines31[3]=[[46.1383621,14.412589511,805011,804071],[46.1247923,14.434967]];	BusPolyLines31[4]=[[46.1247923,14.43496711,804071,804061],[46.1152848,14.4404623]];	BusPolyLines31[5]=[[46.1152848,14.440462311,804061,804041],[46.0966246,14.4624442]];	BusPolyLines31[6]=[[46.0966246,14.462444211,804041,804021],[46.090374,14.4700588]];	BusPolyLines31[7]=[[46.090374,14.470058810,804021,804011],[46.0871993,14.4739259]];	BusPolyLines31[8]=[[46.0871993,14.473925911,804011,803041],[46.0836076,14.4769792]];	BusPolyLines31[9]=[[46.0836076,14.476979211,803041,803021],[46.0770197,14.4819182]];	BusPolyLines31[10]=[[46.0770197,14.481918211,803021,803014],[46.074237,14.4847496]];	BusPolyLines31[11]=[[46.074237,14.484749610,803014,803011],[46.0731004,14.4849684]];	BusPolyLines31[12]=[[46.0731004,14.484968411,803011,802021],[46.0694662,14.4891765]];	BusPolyLines31[13]=[[46.0694662,14.489176511,802021,802011],[46.0642257,14.4926566]];	BusPolyLines31[14]=[[46.0642257,14.492656611,802011,801011],[46.0601499,14.4966756]];	BusPolyLines31[15]=[[46.0601499,14.496675611,801011,700012],[46.0559468,14.50159]];	BusPolyLines31[16]=[[46.0559468,14.5015911,700012,600011],[46.0560837,14.5049456]];	BusPolyLines31[17]=[[46.0560837,14.504945611,600011,600032],[46.0542487,14.5039258]];	BusPolyLines31[18]=[[46.0542487,14.503925811,600032,500011],[46.0545259,14.5051656]];	BusPolyLines31[19]=[[46.0545259,14.505165611,500011,500012],[46.0537126,14.5071952]];	BusPolyLines31[20]=[[46.0537126,14.507195211,500012,501021],[46.0520126,14.5100513]];	BusPolyLines31[21]=[[46.0520126,14.510051311,501021,502011],[46.0500939,14.5147598]];	BusPolyLines31[22]=[[46.0500939,14.514759811,502011,502013],[46.0495425,14.5159875]];	BusPolyLines31[23]=[[46.0495425,14.515987511,502013,502021],[46.048464,14.519345]];	BusPolyLines31[24]=[[46.048464,14.51934510,502021,402031],[46.0523315,14.5194459]];	BusPolyLines31[25]=[[46.0523315,14.519445911,402031,402041],[46.0543341,14.5277847]];	BusPolyLines31[26]=[[46.0543341,14.527784711,402041,303011],[46.0556637,14.5338953]];	BusPolyLines31[27]=[[46.0556637,14.533895311,303011,303021],[46.0560119,14.5389885]];	BusPolyLines31[28]=[[46.0560119,14.538988511,303021,303051],[46.0560684,14.5492779]];	BusPolyLines31[29]=[[46.0560684,14.549277911,303051,303071],[46.0541648,14.5527027]];	BusPolyLines31[30]=[[46.0541648,14.552702711,303071,304011],[46.0546186,14.5577806]];	BusPolyLines31[31]=[[46.0546186,14.557780611,304011,304031],[46.0546019,14.5622443]];	BusPolyLines31[32]=[[46.0546019,14.562244311,304031,304051],[46.0523876,14.5653009]];
BusPolyLines32[0]=[[46.0203888,14.533981411,504051,504121],[46.0242136,14.5310464]];	BusPolyLines32[1]=[[46.0242136,14.531046411,504121,504041],[46.0259495,14.5265526]];	BusPolyLines32[2]=[[46.0259495,14.526552611,504041,503051],[46.0293145,14.5193365]];	BusPolyLines32[3]=[[46.0293145,14.519336511,503051,603151],[46.0305212,14.5162037]];	BusPolyLines32[4]=[[46.0305212,14.516203711,603151,603093],[46.0333037,14.5107195]];	BusPolyLines32[5]=[[46.0333037,14.510719511,603093,603121],[46.0350661,14.5127565]];	BusPolyLines32[6]=[[46.0350661,14.512756511,603121,503014],[46.0387264,14.5148863]];	BusPolyLines32[7]=[[46.0387264,14.514886311,503014,503011],[46.0392719,14.5161111]];	BusPolyLines32[8]=[[46.0392719,14.516111111,503011,602111],[46.0439427,14.509151]];	BusPolyLines32[9]=[[46.0439427,14.50915111,602111,602101],[46.0459141,14.5047604]];	BusPolyLines32[10]=[[46.0459141,14.504760411,602101,602061],[46.0461698,14.5010019]];	BusPolyLines32[11]=[[46.0461698,14.501001911,602061,602021],[46.0489393,14.5016676]];	BusPolyLines32[12]=[[46.0489393,14.501667611,602021,601011],[46.0519049,14.5025648]];	BusPolyLines32[13]=[[46.0519049,14.502564811,601011,600032],[46.0542487,14.5039258]];	BusPolyLines32[14]=[[46.0542487,14.503925811,600032,600011],[46.0560837,14.5049456]];	BusPolyLines32[15]=[[46.0560837,14.504945611,600011,300011],[46.0577307,14.5080954]];	BusPolyLines32[16]=[[46.0577307,14.508095411,300011,301011],[46.0574779,14.5163085]];	BusPolyLines32[17]=[[46.0574779,14.516308511,301011,202011],[46.059266,14.5188123]];	BusPolyLines32[18]=[[46.059266,14.518812310,202011,202043],[46.0624717,14.5240379]];	BusPolyLines32[19]=[[46.0624717,14.524037911,202043,202082],[46.064666,,14.528204]];	BusPolyLines32[20]=[[46.064666,,14.52820410,202082,203041],[46.0672541,14.5306711]];	BusPolyLines32[21]=[[46.0672541,14.530671111,203041,203091],[46.068249,14.535856]];	BusPolyLines32[22]=[[46.068249,14.53585610,203091,203111],[46.0681763,14.5417304]];	BusPolyLines32[23]=[[46.0681763,14.541730411,203111,203121],[46.0653395,14.5431603]];	BusPolyLines32[24]=[[46.0653395,14.543160311,203121,203131],[46.0657207,14.546033]];	BusPolyLines32[25]=[[46.0657207,14.54603311,203131,800025],[46.0635331,14.5449116]];	BusPolyLines32[26]=[[46.0635331,14.544911611,800025,203141],[46.0620531,14.544079]];	BusPolyLines32[27]=[[46.0620531,14.54407911,203141,203191],[46.0616889,14.5495401]];	BusPolyLines32[28]=[[46.0616889,14.549540111,203191,204011],[46.0619475,14.5576294]];	BusPolyLines32[29]=[[46.0619475,14.557629411,204011,204021],[46.0619785,14.5621457]];	BusPolyLines32[30]=[[46.0619785,14.562145711,204021,204031],[46.0621071,14.5655884]];	BusPolyLines32[31]=[[46.0621071,14.565588411,204031,800017],[46.0621252,14.5679188]];	BusPolyLines32[32]=[[46.0621252,14.567918811,800017,204051],[46.0620089,14.5690676]];
BusPolyLines33[0]=[[46.0560837,14.504945611,600011,300011],[46.0577307,14.5080954]];	BusPolyLines33[1]=[[46.0577307,14.508095411,300011,301011],[46.0574779,14.5163085]];	BusPolyLines33[2]=[[46.0574779,14.516308511,301011,202011],[46.059266,14.5188123]];	BusPolyLines33[3]=[[46.059266,14.518812310,202011,202043],[46.0624717,14.5240379]];	BusPolyLines33[4]=[[46.0624717,14.524037911,202043,202082],[46.064666,,14.528204]];	BusPolyLines33[5]=[[46.064666,,14.52820410,202082,203041],[46.0672541,14.5306711]];	BusPolyLines33[6]=[[46.0672541,14.530671111,203041,203091],[46.068249,14.535856]];	BusPolyLines33[7]=[[46.068249,14.53585610,203091,203111],[46.0681763,14.5417304]];	BusPolyLines33[8]=[[46.0681763,14.541730411,203111,203121],[46.0653395,14.5431603]];	BusPolyLines33[9]=[[46.0653395,14.543160311,203121,203131],[46.0657207,14.546033]];	BusPolyLines33[10]=[[46.0657207,14.54603311,203131,800025],[46.0635331,14.5449116]];	BusPolyLines33[11]=[[46.0635331,14.544911611,800025,203141],[46.0620531,14.544079]];	BusPolyLines33[12]=[[46.0620531,14.54407911,203141,800016],[46.062941,14.5477375]];

var BusPolyLines=[];
BusPolyLines[0]=RailPolyLines;
BusPolyLines[1]=BusPolyLines1;
BusPolyLines[2]=BusPolyLines2;
BusPolyLines[3]=BusPolyLines3;
BusPolyLines[4]=BusPolyLines4;
BusPolyLines[5]=BusPolyLines5;
BusPolyLines[6]=BusPolyLines6;
BusPolyLines[7]=BusPolyLines7;
BusPolyLines[8]=BusPolyLines8;
BusPolyLines[9]=BusPolyLines9;
BusPolyLines[10]=BusPolyLines10;
BusPolyLines[11]=BusPolyLines11;
BusPolyLines[12]=BusPolyLines12;
BusPolyLines[13]=BusPolyLines13;
BusPolyLines[14]=BusPolyLines14;
BusPolyLines[15]=BusPolyLines15;
BusPolyLines[16]=BusPolyLines16;
BusPolyLines[17]=BusPolyLines17;
BusPolyLines[18]=BusPolyLines18;
BusPolyLines[19]=BusPolyLines19;
BusPolyLines[20]=BusPolyLines20;
BusPolyLines[21]=BusPolyLines21;
BusPolyLines[22]=BusPolyLines22;
BusPolyLines[23]=BusPolyLines23;
BusPolyLines[24]=BusPolyLines24;
BusPolyLines[25]=BusPolyLines25;
BusPolyLines[26]=BusPolyLines26;
BusPolyLines[27]=BusPolyLines27;
BusPolyLines[28]=BusPolyLines28;
BusPolyLines[29]=BusPolyLines29;
BusPolyLines[30]=BusPolyLines30;
BusPolyLines[31]=BusPolyLines31;
BusPolyLines[32]=BusPolyLines32;
BusPolyLines[33]=BusPolyLines33;

/*
var Stations=[];

Stations =
[
  new google.maps.LatLng(46.0899244,14.5081659),
  new google.maps.LatLng(46.0898808,14.5084178),
  new google.maps.LatLng(45.9574111,14.6539638),
  new google.maps.LatLng(46.053554,14.5038905),
  new google.maps.LatLng(46.0321275,14.5290273),
  new google.maps.LatLng(46.031604,14.5283102),
  new google.maps.LatLng(46.0495425,14.5159875),
  new google.maps.LatLng(46.0495267,14.5165718),
  new google.maps.LatLng(46.077359,14.5116436),
  new google.maps.LatLng(46.0774068,14.5115009),
  new google.maps.LatLng(46.0858604,14.4648777),
  new google.maps.LatLng(46.0853767,14.4637153),
  new google.maps.LatLng(46.057321,14.511741),
  new google.maps.LatLng(46.056107,14.5565251),
  new google.maps.LatLng(46.055952,14.555262),
  new google.maps.LatLng(46.0646683,14.5085432),
  new google.maps.LatLng(46.0648438,14.5085351),
  new google.maps.LatLng(46.0770197,14.4819182),
  new google.maps.LatLng(46.0771444,14.482058),
  new google.maps.LatLng(46.0145247,14.51184),
  new google.maps.LatLng(46.0145247,14.51184),
  new google.maps.LatLng(46.0560837,14.5049456),
  new google.maps.LatLng(46.0565416,14.5052916),
  new google.maps.LatLng(46.0918367,14.5702103),
  new google.maps.LatLng(46.09132,14.5753503),
  new google.maps.LatLng(46.0637039,14.5113642),
  new google.maps.LatLng(46.0633515,14.5096309),
  //new google.maps.LatLng(46.0524368,14.4273438),
  new google.maps.LatLng(46.0543341,14.5277847),
  new google.maps.LatLng(46.0541875,14.527702),
  new google.maps.LatLng(46.0676176,14.4850231),
  new google.maps.LatLng(46.0675687,14.4854849),
  new google.maps.LatLng(46.040062,14.4731295),
  new google.maps.LatLng(46.0401556,14.472936),
  new google.maps.LatLng(46.0758796,14.5204746),
  new google.maps.LatLng(46.0758796,14.5204746),
  new google.maps.LatLng(46.0660974,14.5512411),
  new google.maps.LatLng(46.0660974,14.5512411),
  new google.maps.LatLng(46.0696865,14.4726108),
  new google.maps.LatLng(46.0697018,14.472669),
  new google.maps.LatLng(46.0653352,14.5028269),
  new google.maps.LatLng(46.0653497,14.5023778),
  new google.maps.LatLng(45.9760138,14.3520664),
  new google.maps.LatLng(46.0778771,14.5043142),
  new google.maps.LatLng(46.0778771,14.5043142),
  new google.maps.LatLng(46.1153673,14.4624657),
  new google.maps.LatLng(46.1156318,14.4620735),
  new google.maps.LatLng(46.0541648,14.5527027),
  new google.maps.LatLng(46.0541215,14.5528031),
  new google.maps.LatLng(45.9633936,14.6398872),
  new google.maps.LatLng(45.9637559,14.6393217),
  new google.maps.LatLng(46.0620584,14.5442584),
  new google.maps.LatLng(46.0620531,14.544079),
  new google.maps.LatLng(46.065885,14.5457912),
  new google.maps.LatLng(46.0657207,14.546033),
  new google.maps.LatLng(46.0653395,14.543160),
  new google.maps.LatLng(46.0653395,14.5431603),
  new google.maps.LatLng(46.0681763,14.5417304),
  new google.maps.LatLng(46.0681763,14.5417304),
  new google.maps.LatLng(46.0057369,14.4903606),
  new google.maps.LatLng(46.0057369,14.4903606),
  new google.maps.LatLng(46.0538243,14.589105),
  new google.maps.LatLng(46.0538243,14.589105),
  new google.maps.LatLng(46.0548228,14.5668635),
  new google.maps.LatLng(46.0549742,14.5656837),
  new google.maps.LatLng(45.9670305,14.6320651),
  new google.maps.LatLng(45.9671924,14.6322003),
  new google.maps.LatLng(46.0783962,14.4705548),
  new google.maps.LatLng(46.078086,14.470180),
  new google.maps.LatLng(46.0902679,14.511539),
  new google.maps.LatLng(46.0898655,14.511684),
  new google.maps.LatLng(46.1041611,14.5341633),
  new google.maps.LatLng(46.0542487,14.5039258),
  new google.maps.LatLng(46.0372429,14.4669898),
  new google.maps.LatLng(46.0370889,14.463354),
  new google.maps.LatLng(46.0336602,14.4500493),
  new google.maps.LatLng(46.0334129,14.4499035),
  new google.maps.LatLng(46.0487322,14.5005663),
  new google.maps.LatLng(46.0489393,14.5016676),
  new google.maps.LatLng(46.0738194,14.4605434),
  new google.maps.LatLng(46.0738194,14.4605434),
  new google.maps.LatLng(46.0836076,14.4769792),
  new google.maps.LatLng(46.0831674,14.4768053),
  new google.maps.LatLng(46.0476393,14.5447043),
  new google.maps.LatLng(46.0475573,14.5440307),
  new google.maps.LatLng(46.064666,14.528204),
  new google.maps.LatLng(46.0574779,14.5163085),
  new google.maps.LatLng(46.0574422,14.5169776),
  new google.maps.LatLng(46.0523876,14.5653009),
  new google.maps.LatLng(46.1266954,14.4966895),
  new google.maps.LatLng(46.0681173,14.5151642),
  new google.maps.LatLng(46.0681173,14.5151642),
  new google.maps.LatLng(46.0433896,14.4795495),
  new google.maps.LatLng(46.0431753,14.4809799),
  new google.maps.LatLng(46.0502864,14.5261949),
  new google.maps.LatLng(46.0504803,14.5260461),
  new google.maps.LatLng(46.0855875,14.5068836),
  new google.maps.LatLng(46.0854568,14.5069037),
  new google.maps.LatLng(46.0485451,14.5221627),
  new google.maps.LatLng(46.0488159,14.5223333),
  new google.maps.LatLng(46.0282154,14.5348234),
  new google.maps.LatLng(46.0281567,14.5352129),
  new google.maps.LatLng(46.0459141,14.5047604),
  new google.maps.LatLng(46.0459141,14.5047604),
  new google.maps.LatLng(46.1287497,14.4432873),
  new google.maps.LatLng(46.1287497,14.4432873),
  new google.maps.LatLng(45.9543062,14.6518008),
  new google.maps.LatLng(46.0619785,14.5621457),
  new google.maps.LatLng(46.0619534,14.5629032),
  new google.maps.LatLng(46.0457484,14.4887823),
  new google.maps.LatLng(46.0454919,14.4890483),
  new google.maps.LatLng(45.9995797,14.5163998),
  new google.maps.LatLng(45.9996374,14.516607),
  new google.maps.LatLng(46.0637771,14.5069141),
  new google.maps.LatLng(46.0637771,14.5069141),
  new google.maps.LatLng(46.0749801,14.5629613),
  new google.maps.LatLng(46.0749801,14.5629613),
  new google.maps.LatLng(46.0525743,14.5162158),
  new google.maps.LatLng(46.0529365,14.518348),
  new google.maps.LatLng(45.9587454,14.5272731),
  new google.maps.LatLng(45.962759,14.5300335),
  new google.maps.LatLng(45.9627212,14.5301388),
  new google.maps.LatLng(46.0530128,14.5137349),
  new google.maps.LatLng(46.0528195,14.5133691),
  new google.maps.LatLng(46.089386,14.4768733),
  new google.maps.LatLng(46.089386,14.4768733),
  new google.maps.LatLng(45.936876,14.51206),
  new google.maps.LatLng(45.936876,14.51206),
  new google.maps.LatLng(45.936876,14.51206),
  new google.maps.LatLng(45.9439663,14.5087476),
  new google.maps.LatLng(45.9440979,14.5092854),
  new google.maps.LatLng(46.019595,14.5090846),
  new google.maps.LatLng(46.0196979,14.5099744),
  new google.maps.LatLng(46.0532443,14.5328494),
  new google.maps.LatLng(46.053118,14.5321742),
  new google.maps.LatLng(46.0116729,14.4103425),
  new google.maps.LatLng(46.0106216,14.41232),
  new google.maps.LatLng(46.068249,14.535856),
  new google.maps.LatLng(46.0686217,14.5367214),
  new google.maps.LatLng(45.9712574,14.4315586),
  new google.maps.LatLng(46.1003766,14.5528221),
  new google.maps.LatLng(46.1001413,14.5523575),
  new google.maps.LatLng(46.0973414,14.5164993),
  new google.maps.LatLng(46.0981489,14.5147357),
  new google.maps.LatLng(46.0975058,14.5166492),
  new google.maps.LatLng(46.1187569,14.4477172),
  new google.maps.LatLng(46.0934212,14.510453),
  new google.maps.LatLng(46.0936548,14.5106831),
  new google.maps.LatLng(46.0721962,14.5183457),
  new google.maps.LatLng(46.07182,14.5181532),
  new google.maps.LatLng(46.0694662,14.4891765),
  new google.maps.LatLng(46.0692851,14.4898694),
  new google.maps.LatLng(46.0523315,14.5194459),
  new google.maps.LatLng(46.0523069,14.5203804),
  new google.maps.LatLng(46.0715141,14.4798605),
  new google.maps.LatLng(46.0715608,14.4807407),
  new google.maps.LatLng(46.0514722,14.5387168),
  new google.maps.LatLng(46.0514722,14.5387168),
  new google.maps.LatLng(46.0514722,14.5387168),
  new google.maps.LatLng(46.0515355,14.5388922),
  new google.maps.LatLng(46.0689589,14.538561),
  new google.maps.LatLng(46.0689833,14.5407513),
  new google.maps.LatLng(46.0577307,14.5080954),
  new google.maps.LatLng(46.0574754,14.5079955),
  new google.maps.LatLng(46.1011915,14.5241979),
  new google.maps.LatLng(46.1013195,14.5254974),
  new google.maps.LatLng(45.9672592,14.6582399),
  new google.maps.LatLng(46.051446,14.5021994),
  new google.maps.LatLng(46.0719173,14.4672764),
  new google.maps.LatLng(46.100484,14.4588912),
  new google.maps.LatLng(46.1009119,14.4604509),
  new google.maps.LatLng(45.9511907,14.5114014),
  new google.maps.LatLng(45.9511907,14.5114014),
  new google.maps.LatLng(46.0796094,14.4866351),
  new google.maps.LatLng(46.0796094,14.4866351),
  new google.maps.LatLng(46.0307911,14.4433013),
  new google.maps.LatLng(46.0307911,14.4433013),
  new google.maps.LatLng(45.9937447,14.4626542),
  new google.maps.LatLng(45.9937447,14.4626542),
  new google.maps.LatLng(46.0690138,14.5255432),
  new google.maps.LatLng(46.050105,14.5097825),
  new google.maps.LatLng(46.050105,14.5097825),
  new google.maps.LatLng(46.0461698,14.5010019),
  new google.maps.LatLng(46.0461698,14.5010019),
  new google.maps.LatLng(45.9523128,14.6598039),
  new google.maps.LatLng(46.0243006,14.5098719),
  new google.maps.LatLng(45.9971977,14.5569412),
  new google.maps.LatLng(45.9971977,14.5569412),
  new google.maps.LatLng(46.001308,14.5512074),
  new google.maps.LatLng(46.001308,14.5512074),
  new google.maps.LatLng(46.0619475,14.5576294),
  new google.maps.LatLng(46.0620089,14.5690676),
  new google.maps.LatLng(45.9975182,14.4697145),
  new google.maps.LatLng(45.9975182,14.4697145),
  new google.maps.LatLng(46.0821426,14.4941751),
  new google.maps.LatLng(46.0767333,14.488504),
  new google.maps.LatLng(46.076863,14.4884337),
  new google.maps.LatLng(45.9586488,14.6541492),
  new google.maps.LatLng(46.08247,14.480218),
  new google.maps.LatLng(46.0798891,14.4824453),
  new google.maps.LatLng(45.9815273,14.5981804),
  new google.maps.LatLng(45.981596,14.599385),
  new google.maps.LatLng(46.0793986,14.51909),
  new google.maps.LatLng(46.0796227,14.5192066),
  new google.maps.LatLng(46.1135528,14.4632272),
  new google.maps.LatLng(46.1462908,14.4098018),
  new google.maps.LatLng(46.0742705,14.510723),
  new google.maps.LatLng(46.0736007,14.5111341),
  new google.maps.LatLng(45.9957205,14.4064089),
  new google.maps.LatLng(45.9951946,14.4051174),
  new google.maps.LatLng(45.9539013,14.6505228),
  new google.maps.LatLng(46.0737119,14.4489559),
  new google.maps.LatLng(46.0737119,14.4489559),
  new google.maps.LatLng(46.0287035,14.4336199),
  new google.maps.LatLng(46.0287035,14.4336199),
  new google.maps.LatLng(46.0665792,14.489372),
  new google.maps.LatLng(46.0665792,14.489372),
  new google.maps.LatLng(46.1038624,14.4622858),
  new google.maps.LatLng(46.1038624,14.4622858),
  new google.maps.LatLng(46.0716805,14.5292887),
  new google.maps.LatLng(46.0716805,14.5292887),
  new google.maps.LatLng(46.0967667,14.5562498),
  new google.maps.LatLng(46.0967667,14.5562498),
  new google.maps.LatLng(46.0596693,14.5090305),
  new google.maps.LatLng(45.9885098,14.4008652),
  new google.maps.LatLng(46.0698829,14.5507576),
  new google.maps.LatLng(46.0702088,14.548303),
  new google.maps.LatLng(46.0814072,14.5198132),
  new google.maps.LatLng(46.0742907,14.5311941),
  new google.maps.LatLng(46.0744321,14.5314463),
  new google.maps.LatLng(46.0649524,14.5816902),
  new google.maps.LatLng(46.0646648,14.5820582),
  new google.maps.LatLng(46.112755,14.4608884),
  new google.maps.LatLng(46.1121702,14.4606756),
  new google.maps.LatLng(46.0538018,14.5392815),
  new google.maps.LatLng(46.0741339,14.4533495),
  new google.maps.LatLng(46.0741391,14.4527653),
  new google.maps.LatLng(46.0556707,14.5595529),
  new google.maps.LatLng(46.0556707,14.5595529),
  new google.maps.LatLng(45.9631663,14.6568873),
  new google.maps.LatLng(45.9717176,14.4286493),
  new google.maps.LatLng(46.1050637,14.5328315),
  new google.maps.LatLng(46.1050637,14.5328315),
  new google.maps.LatLng(46.063747,14.5042309),
  new google.maps.LatLng(46.063747,14.5042309),
  new google.maps.LatLng(46.0300335,14.53176),
  new google.maps.LatLng(46.0303781,14.5313735),
  new google.maps.LatLng(46.011909,14.5052657),
  new google.maps.LatLng(46.011909,14.5052657),
  new google.maps.LatLng(46.0801179,14.4668917),
  new google.maps.LatLng(46.0804278,14.4677137),
  new google.maps.LatLng(45.9582561,14.650515),
  new google.maps.LatLng(45.9585948,14.6502308),
  new google.maps.LatLng(46.0060836,14.547461),
  new google.maps.LatLng(46.0060836,14.547461),
  new google.maps.LatLng(46.0732872,14.4519078),
  new google.maps.LatLng(46.0932494,14.4686231),
  new google.maps.LatLng(46.0926526,14.4691299),
  new google.maps.LatLng(46.0695527,14.5033249),
  new google.maps.LatLng(46.0695527,14.5033249),
  new google.maps.LatLng(45.9760433,14.4209799),
  new google.maps.LatLng(45.9760433,14.4209799),
  new google.maps.LatLng(46.0747185,14.4439662),
  new google.maps.LatLng(46.0820396,14.5066901),
  new google.maps.LatLng(46.0820396,14.5066901),
  new google.maps.LatLng(46.0643562,14.5275939),
  new google.maps.LatLng(46.0651872,14.528147),
  new google.maps.LatLng(46.1070954,14.5251287),
  new google.maps.LatLng(46.1070954,14.5251287),
  new google.maps.LatLng(46.0537329,14.518923),
  new google.maps.LatLng(46.053238,14.5185682),
  new google.maps.LatLng(46.0549046,14.5832641),
  new google.maps.LatLng(46.0549046,14.5832641),
  new google.maps.LatLng(46.0572341,14.5831179),
  new google.maps.LatLng(46.0572341,14.5831179),
  new google.maps.LatLng(46.0519049,14.5025648),
  new google.maps.LatLng(46.0560684,14.5492779),
  new google.maps.LatLng(46.0563618,14.5489953),
  new google.maps.LatLng(46.1081828,14.5298836),
  new google.maps.LatLng(46.1081828,14.5298836),
  new google.maps.LatLng(46.109223,14.5278555),
  new google.maps.LatLng(46.1091821,14.5275309),
  new google.maps.LatLng(46.0546186,14.5577806),
  new google.maps.LatLng(46.0545936,14.5583592),
  new google.maps.LatLng(46.0644681,14.5153984),
  new google.maps.LatLng(46.0644681,14.5153984),
  new google.maps.LatLng(46.0239233,14.4147089),
  new google.maps.LatLng(46.090374,14.4700588),
  new google.maps.LatLng(46.090374,14.4700588),
  new google.maps.LatLng(46.0880268,14.4575678),
  new google.maps.LatLng(46.0766914,14.5186728),
  new google.maps.LatLng(46.0766914,14.5186728),
  new google.maps.LatLng(46.0244468,14.4203066),
  new google.maps.LatLng(46.03556,14.5219791),
  new google.maps.LatLng(46.03556,14.5219791),
  new google.maps.LatLng(46.1269558,14.4919604),
  new google.maps.LatLng(46.1269426,14.493155),
  new google.maps.LatLng(45.9780843,14.6034151),
  new google.maps.LatLng(45.9780843,14.6034151),
  new google.maps.LatLng(46.060338,14.5043148),
  new google.maps.LatLng(46.060338,14.5043148),
  new google.maps.LatLng(46.0907728,14.5953971),
  new google.maps.LatLng(46.0907728,14.5953971),
  new google.maps.LatLng(45.9855108,14.5878232),
  new google.maps.LatLng(45.9857984,14.5878897),
  new google.maps.LatLng(46.074237,14.4847496),
  new google.maps.LatLng(46.0621071,14.5655884),
  new google.maps.LatLng(46.0621071,14.5655884),
  new google.maps.LatLng(46.102754,14.5311182),
  new google.maps.LatLng(46.1021875,14.5292467),
  new google.maps.LatLng(46.048464,14.519345),
  new google.maps.LatLng(46.0493947,14.5190806),
  new google.maps.LatLng(46.0186636,14.5425732),
  new google.maps.LatLng(46.0176764,14.5416966),
  new google.maps.LatLng(46.0546019,14.5622443),
  new google.maps.LatLng(46.0546019,14.5622443),
  new google.maps.LatLng(46.0898578,14.5131522),
  new google.maps.LatLng(46.0906394,14.5131574),
  new google.maps.LatLng(45.9733328,14.6170093),
  new google.maps.LatLng(45.9733328,14.6170093),
  new google.maps.LatLng(46.0672331,14.6083691),
  new google.maps.LatLng(46.1008579,14.5216269),
  new google.maps.LatLng(46.1008579,14.5216269),
  new google.maps.LatLng(46.0952869,14.5039144),
  new google.maps.LatLng(46.0657867,14.5209033),
  new google.maps.LatLng(46.065828,14.5205735),
  new google.maps.LatLng(46.057698,14.605837),
  new google.maps.LatLng(46.057698,14.605837),
  new google.maps.LatLng(46.0731004,14.4849684),
  new google.maps.LatLng(46.0738932,14.4859226),
  new google.maps.LatLng(46.0822173,14.5127462),
  new google.maps.LatLng(46.0822173,14.5127462),
  new google.maps.LatLng(46.0777487,14.5686948),
  new google.maps.LatLng(46.0779922,14.5693726),
  new google.maps.LatLng(46.0232224,14.5392314),
  new google.maps.LatLng(46.0232224,14.5392314),
  new google.maps.LatLng(46.0624717,14.5240379),
  new google.maps.LatLng(46.0631629,14.5257188),
  new google.maps.LatLng(46.0692915,14.5099291),
  new google.maps.LatLng(46.0692915,14.5099291),
  new google.maps.LatLng(45.9570164,14.5086369),
  new google.maps.LatLng(45.9570164,14.5086369),
  new google.maps.LatLng(46.0446524,14.4823913),
  new google.maps.LatLng(46.0445885,14.4860775),
  new google.maps.LatLng(46.0642257,14.4926566),
  new google.maps.LatLng(46.0642257,14.4926566),
  new google.maps.LatLng(45.9614781,14.6435891),
  new google.maps.LatLng(45.9614781,14.6435891),
  new google.maps.LatLng(46.0392719,14.5161111),
  new google.maps.LatLng(46.0386628,14.5175453),
  new google.maps.LatLng(46.0543308,14.5741517),
  new google.maps.LatLng(46.0543308,14.5741517),
  new google.maps.LatLng(46.0911667,14.581523),
  new google.maps.LatLng(46.0911667,14.581523),
  new google.maps.LatLng(46.0966246,14.4624442),
  new google.maps.LatLng(46.0953246,14.4653168),
  new google.maps.LatLng(46.0736214,14.4839913),
  new google.maps.LatLng(45.9799402,14.5751041),
  new google.maps.LatLng(45.9849597,14.5793353),
  new google.maps.LatLng(45.9854101,14.5788086),
  new google.maps.LatLng(45.9825357,14.570975),
  new google.maps.LatLng(45.9895718,14.5650108),
  new google.maps.LatLng(45.9895718,14.5650108),
  new google.maps.LatLng(45.9833647,14.5728197),
  new google.maps.LatLng(45.985755,14.570556),
  new google.maps.LatLng(45.985755,14.570556),
  new google.maps.LatLng(45.975821,14.6087087),
  new google.maps.LatLng(45.9754703,14.6103828),
  new google.maps.LatLng(46.1235492,14.4768408),
  new google.maps.LatLng(46.1235492,14.4768408),
  new google.maps.LatLng(46.0672541,14.5306711),
  new google.maps.LatLng(46.0668128,14.5327199),
  new google.maps.LatLng(46.0683889,14.5364253),
  new google.maps.LatLng(46.0171898,14.4144957),
  new google.maps.LatLng(46.0173279,14.414434),
  new google.maps.LatLng(45.9853509,14.5936088),
  new google.maps.LatLng(45.9853509,14.5936088),
  new google.maps.LatLng(46.0485431,14.5373548),
  new google.maps.LatLng(46.0485431,14.5373548),
  new google.maps.LatLng(46.0531497,14.5475189),
  new google.maps.LatLng(46.0531497,14.5475189),
  new google.maps.LatLng(46.1091343,14.4609827),
  new google.maps.LatLng(46.1091343,14.4609827),
  new google.maps.LatLng(46.1201316,14.4668311),
  new google.maps.LatLng(46.1201316,14.4668311),
  new google.maps.LatLng(46.1180165,14.4607648),
  new google.maps.LatLng(46.1181895,14.4614249),
  new google.maps.LatLng(46.0545259,14.5051656),
  new google.maps.LatLng(46.0860785,14.4796417),
  new google.maps.LatLng(46.0860785,14.4796417),
  new google.maps.LatLng(46.0601499,14.4966756),
  new google.maps.LatLng(46.0601499,14.4966756),
  new google.maps.LatLng(46.0469433,14.493085),
  new google.maps.LatLng(46.0469433,14.493085),
  new google.maps.LatLng(46.0794063,14.5359785),
  new google.maps.LatLng(46.0693514,14.5273186),
  new google.maps.LatLng(46.0693514,14.5273186),
  new google.maps.LatLng(46.0670972,14.5145042),
  new google.maps.LatLng(46.0670972,14.5145042),
  new google.maps.LatLng(46.0613424,14.537811),
  new google.maps.LatLng(46.0613424,14.537811),
  new google.maps.LatLng(46.0871993,14.4739259),
  new google.maps.LatLng(46.0871993,14.4739259),
  new google.maps.LatLng(46.040902,14.5086341),
  new google.maps.LatLng(46.0741299,14.4753731),
  new google.maps.LatLng(46.0741299,14.4753731),
  new google.maps.LatLng(46.0556637,14.5338953),
  new google.maps.LatLng(46.0556637,14.5338953),
  new google.maps.LatLng(46.0537126,14.5071952),
  new google.maps.LatLng(46.0379378,14.5041673),
  new google.maps.LatLng(46.0373016,14.5038086),
  new google.maps.LatLng(46.1433796,14.4165449),
  new google.maps.LatLng(46.1433796,14.4165449),
  new google.maps.LatLng(46.0493463,14.5926441),
  new google.maps.LatLng(46.059266,14.5188123),
  new google.maps.LatLng(46.059266,14.5188123),
  new google.maps.LatLng(46.0418812,14.4764731),
  new google.maps.LatLng(46.0422047,14.4771261),
  new google.maps.LatLng(46.1001702,14.4586322),
  new google.maps.LatLng(45.9563259,14.6614205),
  new google.maps.LatLng(46.0744446,14.5009213),
  new google.maps.LatLng(46.0744446,14.5009213),
  new google.maps.LatLng(46.0616889,14.5495401),
  new google.maps.LatLng(46.0616889,14.5495401),
  new google.maps.LatLng(46.0708138,14.5795842),
  new google.maps.LatLng(46.0708138,14.5795842),
  new google.maps.LatLng(46.0688919,14.6052896),
  new google.maps.LatLng(46.0560119,14.5389885),
  new google.maps.LatLng(46.0558757,14.541406)
];

var StationsData=[];
StationsData =
[
['103111','7. septembra'],
['103112','7. septembra ( proti obvoznici )'],
['505132','Adamičev spomenik'],
['600022','Ajdovščina'],
['503031','Akademija'],
['503032','Akademija ( proti obvoznici )'],
['502013','Ambrožev trg'],
['502014','Ambrožev trg ( proti obvoznici )'],
['103031','AMZS'],
['103032','AMZS ( proti obvoznici )'],
['804171','Andreja Bitenca'],
['804172','Andreja Bitenca ( proti obvoznici )'],
['300013','AP Ljubljana ( proti obvoznici )'],
['303061','Archinetova'],
['303062','Archinetova ( proti obvoznici )'],
['101051','Astra'],
['101052','Astra ( proti obvoznici )'],
['803021','Avtomontaža'],
['803022','Avtomontaža ( proti obvoznici )'],
['604022','Barje ( proti obvoznici )'],
['604023','Barje'],
['600011','Bavarski dvor'],
['600012','Bavarski dvor ( proti obvoznici )'],
['204141','Belinka'],
['204142','Belinka ( proti obvoznici )'],
['101031','Bežigrad'],
['101032','Bežigrad ( proti obvoznici )'],
//['103111','<--- Neznana'],
['402041','Bolnica'],
['402042','Bolnica ( proti obvoznici )'],
['802041','Bolnica P. Držaja'],
['802042','Bolnica P. Držaja ( proti obvoznici )'],
['703102','Bonifacija ( proti obvoznici )'],
['703101','Bonifacija'],
['103191','Božičeva'],
['103192','Božičeva ( proti obvoznici )'],
['203181','Bratislavska'],
['203182','Bratislavska ( proti obvoznici )'],
['803132','Bratov Učakar ( proti obvoznici )'],
['803131','Bratov Učakar'],
['101061','Bratov Židan'],
['101062','Bratov Židan ( proti obvoznici )'],
['614021','Brglezov štradon'],
['103021','Brinje'],
['103022','Brinje ( proti obvoznici )'],
['804121','Brod'],
['804122','Brod ( proti obvoznici )'],
['303071','Brodarjev trg'],
['303072','Brodarjev trg ( proti obvoznici )'],
['505092','Brvace ( proti obvoznici )'],
['505091','Brvace'],
['203142','BTC-Emporium ( proti obvoznici )'],
['203141','BTC-Emporium'],
['203132','BTC-Kolosej ( proti obvoznici )'],
['203131','BTC-Kolosej'],
['203122','BTC-tržnica ( proti obvoznici )'],
['203121','BTC-tržnica'],
['203112','BTC-uprava ( proti obvoznici )'],
['203111','BTC-uprava'],
['614042','Capuder ( proti obvoznici )'],
['614041','Capuder'],
['304091','Cesta na Vevče'],
['304092','Cesta na Vevče ( proti obvoznici )'],
['304042','Chengdujska'],
['304041','Chengdujska ( proti obvoznici )'],
['505082','Cikava ( proti obvoznici )'],
['505081','Cikava'],
['803111','Čebelarska'],
['803112','Čebelarska ( proti obvoznici )'],
['103121','Čerinova'],
['103122','Čerinova ( proti obvoznici )'],
['104161','Črnuče'],
['600032','Dalmatinova'],
['703112','Dolgi most'],
['703111','Dolgi most P+R'],
['704052','Dolgi most Rotar ( proti obvoznici )'],
['704051','Dolgi most Rotar'],
['602022','Drama ( proti obvoznici )'],
['602021','Drama'],
['803152','Draveljska gmajna'],
['803151','Draveljska gmajna  ( proti obvoznici )'],
['803041','Dravlje'],
['803042','Dravlje ( proti obvoznici )'],
['403051','Emona'],
['403052','Emona ( proti obvoznici )'],
['202082','Flajšmanova'],
['301011','Friškovec'],
['301012','Friškovec ( proti obvoznici )'],
['304051','Fužine'],
['104221','Gameljne'],
['102031','Gasilska brigada'],
['102032','Gasilska brigada ( proti obvoznici )'],
['703082','Glince ( proti obvoznici )'],
['703081','Glince'],
['402051','Glonarjeva'],
['402052','Glonarjeva ( proti obvoznici )'],
['103091','Gorjančeva'],
['103092','Gorjančeva ( proti obvoznici )'],
['402061','Gornje Poljane'],
['402062','Gornje Poljane ( proti obvoznici )'],
['504011','Gornji Rudnik'],
['504012','Gornji Rudnik ( proti obvoznici )'],
['602101','Gornji trg'],
['602102','Gornji trg ( proti obvoznici )'],
['815102','Gostilna Kovač ( proti obvoznici )'],
['815101','Gostilna Kovač'],
['505141','Grosuplje'],
['204021','GZL'],
['204022','GZL ( proti obvoznici )'],
['602032','Hajdrihova ( proti obvoznici )'],
['602031','Hajdrihova'],
['604042','Havptmance ( proti obvoznici )'],
['604041','Havptmance'],
['101011','Hranilniška'],
['101012','Hranilniška ( proti obvoznici )'],
['204061','Hrastje'],
['204062','Hrastje ( proti obvoznici )'],
['402011','Hrvatski trg'],
['402012','Hrvatski trg ( proti obvoznici )'],
['605011','Ig AP'],
['605082','Ig Petrol ( proti obvoznici )'],
['605081','Ig Petrol'],
['501011','Ilirska'],
['501012','Ilirska ( proti obvoznici )'],
['804161','IMP'],
['804162','IMP ( proti obvoznici )'],
['625052','Iška vas ( proti obvoznici )'],
['625051','Iška vas'],
['626011','Iška vas obračališče'],
['625061','Iška vas šola'],
['625062','Iška vas šola ( proti obvoznici )'],
['604012','Iški most ( proti obvoznici )'],
['604011','Iški most'],
['403011','Jana Husa'],
['403012','Jana Husa ( proti obvoznici )'],
['744021','Japelj'],
['744022','Japelj ( proti obvoznici )'],
['203091','Jarše'],
['203092','Jarše ( proti obvoznici )'],
['745061','Jezero'],
['104181','Ježa'],
['104182','Ježa ( proti obvoznici )'],
['104031','Ježica PR'],
['104032','Ježica ( proti obvoznici )'],
['104033','Ježica'],
['815111','Kajakaška'],
['104021','Kališnikov trg'],
['104022','Kališnikov trg ( proti obvoznici )'],
['102091','Kardeljeva ploščad'],
['102092','Kardeljeva ploščad ( proti obvoznici )'],
['802021','Kino Šiška'],
['802022','Kino Šiška ( proti obvoznici )'],
['402031','Klinični center'],
['402032','Klinični center ( proti obvoznici )'],
['803082','Kneza Koclja ( proti obvoznici )'],
['803081','Kneza Koclja'],
['403023','Kodeljevo'],
['403022','Kodeljevo ( proti obvoznici )'],
['403021','Kodeljevo 1'],
['403025','Kodeljevo - obračališče'],
['203101','Kodrova'],
['203102','Kodrova ( proti obvoznici )'],
['300011','Kolodvor'],
['300012','Kolodvor ( proti obvoznici )'],
['104101','Kolodvor Črnuče'],
['104102','Kolodvor Črnuče ( proti obvoznici )'],
['505172','Kongo'],
['601012','Konzorcij'],
['826111','Koseze'],
['804081','Kosmačeva'],
['804082','Kosmačeva ( proti obvoznici )'],
['625042','Kot ( proti obvoznici )'],
['625041','Kot'],
['803212','Kovinarska ( proti obvoznici )'],
['803211','Kovinarska'],
['704102','Kozarje ( proti obvoznici )'],
['704101','Kozarje'],
['614082','Kozler ( proti obvoznici )'],
['614081','Kozler'],
['203211','Kranjčeva'],
['501032','Krekov trg'],
['501031','Krekov trg ( proti obvoznici )'],
['602061','Križanke'],
['602062','Križanke ( proti obvoznici )'],
['536022','Krpan'],
['603111','Lahova pot'],
['504092','Lavrica ( proti obvoznici )'],
['504091','Lavrica'],
['504082','Lavrica pri Malči ( proti obvoznici )'],
['504081','Lavrica pri Malči'],
['204011','Leskoškova'],
['204051','Letališka-obračališče'],
['614072','Lipe ( proti obvoznici )'],
['614071','Lipe'],
['103201','Litostroj'],
['803051','Litostrojska'],
['803052','Litostrojska ( proti obvoznici )'],
['505152','Ljubljanska'],
['803061','Ljubljanske brigade'],
['803062','Ljubljanske brigade ( proti obvoznici )'],
['505042','Mali vrh ( proti obvoznici )'],
['505041','Mali vrh'],
['103162','Maroltova'],
['103161','Maroltova ( proti obvoznici )'],
['804131','Martinova'],
['805052','Medvode na klancu'],
['102081','Mercator'],
['102082','Mercator ( proti obvoznici )'],
['745032','Mostiček ( proti obvoznici )'],
['745031','Mostiček'],
['536012','Mrzle njive'],
['804212','Murkova ( proti obvoznici )'],
['804211','Murkova'],
['704062','Na Gmajnici ( proti obvoznici )'],
['704061','Na Gmajnici'],
['802031','Na jami'],
['802032','Na jami ( proti obvoznici )'],
['804091','Na klancu'],
['804092','Na klancu ( proti obvoznici )'],
['203231','Na Žale'],
['203232','Na Žale ( proti obvoznici )'],
['204131','Nadgorica'],
['204132','Nadgorica ( proti obvoznici )'],
['100012','Navje'],
['745041','Notranje Gorice'],
['203171','Nove Jarše'],
['203161','Nove Jarše-Šmartinska'],
['103081','Nove Stožice'],
['203071','Nove Žale'],
['203072','Nove Žale ( proti obvoznici )'],
['204101','Novo Polje'],
['204102','Novo Polje ( proti obvoznici )'],
['804111','Ob daljnovodu'],
['804112','Ob daljnovodu ( proti obvoznici )'],
['303032','Ob sotočju'],
['804202','Omersova ( proti obvoznici )'],
['804201','Omersova'],
['304021','Osenjakova'],
['304022','Osenjakova ( proti obvoznici )'],
['505162','OŠ Brinje'],
['745101','OŠ Jezero'],
['104151','OŠ Maksa Pečarja'],
['104152','OŠ Maksa Pečarja ( proti obvoznici )'],
['101021','Parmova'],
['101022','Parmova ( proti obvoznici )'],
['503041','Peruzzijeva'],
['503042','Peruzzijeva ( proti obvoznici )'],
['614012','Plečnikova cerkev ( proti obvoznici )'],
['614011','Plečnikova cerkev'],
['803121','Plešičeva'],
['803122','Plešičeva ( proti obvoznici )'],
['505112','Pod gozdom ( proti obvoznici )'],
['505111','Pod gozdom'],
['504072','Pod Hribom ( proti obvoznici )'],
['504071','Pod Hribom'],
['804191','Pod Kamno Gorico'],
['804031','Podgora'],
['804032','Podgora ( proti obvoznici )'],
['102051','Podmilščakova'],
['102052','Podmilščakova ( proti obvoznici )'],
['745052','Podpeč  ( proti obvoznici )'],
['745051','Podpeč'],
['804221','Podutik'],
['103061','Pohorskega bataljona'],
['103062','Pohorskega bataljona ( proti obvoznici )'],
['203011','Pokopališka'],
['203012','Pokopališka ( proti obvoznici )'],
['104121','Polanškova'],
['104122','Polanškova ( proti obvoznici )'],
['402022','Poliklinika ( proti obvoznici )'],
['402021','Poliklinika'],
['304071','Polje 1'],
['304074','Polje 2'],
['304081','Polje-kolodvor'],
['304082','Polje-kolodvor'],
['601011','Pošta'],
['303051','Pot na Fužine'],
['303052','Pot na Fužine ( proti obvoznici )'],
['104141','Pot v Hrastovec'],
['104142','Pot v Hrastovec ( proti obvoznici )'],
['104131','Pot v Smrečje'],
['104132','Pot v Smrečje ( proti obvoznici )'],
['304011','Preglov trg'],
['304012','Preglov trg ( proti obvoznici )'],
['202021','Prekmurska'],
['202022','Prekmurska ( proti obvoznici )'],
['704081','Pri Poku'],
['804021','Prušnikova'],
['804022','Prušnikova ( proti obvoznici )'],
['804181','Pržan'],
['103041','Puhova'],
['103042','Puhova ( proti obvoznici )'],
['704072','Radna'],
['503021','Rakovnik'],
['503022','Rakovnik ( proti obvoznici )'],
['104211','Rašica'],
['104212','Rašica ( proti obvoznici )'],
['505052','Razdrto ( proti obvoznici )'],
['505051','Razdrto'],
['100021','Razstavišče'],
['100022','Razstavišče ( proti obvoznici )'],
['204161','Reaktor'],
['204162','Reaktor ( proti obvoznici )'],
['505022','Reber pri Škofljici ( proti obvoznici )'],
['505021','Reber pri Škofljici'],
['803014','Remiza'],
['204031','Rog'],
['204032','Rog ( proti obvoznici )'],
['104111','Rogovilc'],
['104112','Rogovilc ( proti obvoznici )'],
['502021','Roška'],
['502024','Roška ( proti obvoznici )'],
['504031','Rudnik'],
['504032','Rudnik ( proti obvoznici )'],
['304031','Rusjanov trg'],
['304032','Rusjanov trg ( proti obvoznici )'],
['103131','Ruski car'],
['103132','Ruski car ( proti obvoznici )'],
['505071','Sap'],
['505072','Sap  ( proti obvoznici )'],
['204201','Saturnus'],
['104051','Sava'],
['104052','Sava ( proti obvoznici )'],
['104011','Savlje'],
['202031','Savske stolpnice'],
['202032','Savske stolpnice ( proti obvoznici )'],
['304131','Silos'],
['304132','Silos ( proti obvoznici )'],
['803011','Slovenija avto'],
['803012','Slovenija avto ( proti obvoznici )'],
['103071','Smelt'],
['103072','Smelt ( proti obvoznici )'],
['204071','Sneberje'],
['204072','Sneberje ( proti obvoznici )'],
['504021','Spodnji Rudnik'],
['504022','Spodnji Rudnik ( proti obvoznici )'],
['202043','Središka'],
['202044','Središka ( proti obvoznici )'],
['102041','Stadion'],
['102042','Stadion ( proti obvoznici )'],
['625032','Staje ( proti obvoznici )'],
['625031','Staje'],
['703072','Stan in dom ( proti obvoznici )'],
['703071','Stan in dom'],
['802011','Stara cerkev'],
['802012','Stara cerkev ( proti obvoznici )'],
['505102','Stara pošta ( proti obvoznici )'],
['505101','Stara pošta'],
['503011','Strelišče'],
['503012','Strelišče ( proti obvoznici )'],
['304061','Studenec'],
['304062','Studenec ( proti obvoznici )'],
['204151','Šentjakob'],
['204152','Šentjakob ( proti obvoznici )'],
['804041','Šentvid'],
['804042','Šentvid ( proti obvoznici )'],
['803016','Šišenska'],
['515012','Škofljica'],
['505012','Škofljica Javornik ( proti obvoznici )'],
['505011','Škofljica Javornik'],
['515013','Škofljica obračališče'],
['504102','Škofljica Petkovšek ( proti obvoznici )'],
['504101','Škofljica Petkovšek'],
['515011','Škofljica Špica'],
['504112','Škofljica žaga ( proti obvoznici )'],
['504111','Škofljica žaga'],
['505062','Šmarje ( proti obvoznici )'],
['505061','Šmarje'],
['104191','Šmartno'],
['104192','Šmartno ( proti obvoznici )'],
['203041','Šola Jarše'],
['203042','Šola Jarše ( proti obvoznici )'],
['203044','Šola Jarše 1'],
['744011','Šolska'],
['744012','Šolska ( proti obvoznici )'],
['505032','Špilar ( proti obvoznici )'],
['505031','Špilar'],
['403043','Štepanja vas'],
['403042','Štepanja vas ( proti obvoznici )'],
['303041','Štepanjsko naselje'],
['702022','Študentsko naselje ( proti obvoznici )'],
['804101','Tabor'],
['804102','Tabor ( proti obvoznici )'],
['804151','Tacen'],
['804152','Tacen ( proti obvoznici )'],
['804141','Tacenski most'],
['804142','Tacenski most ( proti obvoznici )'],
['500011','Tavčarjeva'],
['803071','Tehnounion'],
['803072','Tehnounion ( proti obvoznici )'],
['801011','Tivoli'],
['801012','Tivoli ( proti obvoznici )'],
['602042','Tobačna ( proti obvoznici )'],
['602041','Tobačna'],
['203081','Tomačevo'],
['203031','Tomačevska'],
['203032','Tomačevska ( proti obvoznici )'],
['102021','Topniška'],
['102022','Topniška ( proti obvoznici )'],
['203062','Tovorni kolodvor'],
['203061','Tovorni kolodvor ( proti obvoznici )'],
['804011','Trata'],
['804012','Trata ( proti obvoznici )'],
['602121','Trnovo'],
['803101','Tržnica Koseze'],
['803102','Tržnica Koseze ( proti obvoznici )'],
['303011','Tržnica Moste'],
['303012','Tržnica Moste ( proti obvoznici )'],
['500012','Turist'],
['603082','Veliki štradon ( proti obvoznici )'],
['603081','Veliki štradon'],
['835011','Verje'],
['835012','Verje  ( proti obvoznici )'],
['304101','Vevče'],
['202011','Viadukt'],
['202012','Viadukt ( proti obvoznici )'],
['703092','Vič ( proti obvoznici )'],
['703091','Vič'],
['804051','Vižmarje'],
['505122','Vodičar'],
['102071','Vodovodna'],
['102072','Vodovodna ( proti obvoznici )'],
['203191','Yulon'],
['203192','Yulon ( proti obvoznici )'],
['204081','Zadobrova'],
['204082','Zadobrova ( proti obvoznici )'],
['204211','Zalog'],
['303021','Zaloška'],
['303024','Zaloška ( proti obvoznici )']

];
*/
var Stations=[];
Stations =
[
  new google.maps.LatLng(46.0899244,14.5081659),
new google.maps.LatLng(46.0898808,14.5084178),
new google.maps.LatLng(45.9574111,14.6539638),
new google.maps.LatLng(46.053554,14.5038905),
new google.maps.LatLng(46.0321275,14.5290273),
new google.maps.LatLng(46.031604,14.5283102),
new google.maps.LatLng(46.0495425,14.5159875),
new google.maps.LatLng(46.0495267,14.5165718),
new google.maps.LatLng(46.077359,14.5116436),
new google.maps.LatLng(46.0774068,14.5115009),
new google.maps.LatLng(46.0858604,14.4648777),
new google.maps.LatLng(46.0853767,14.4637153),
new google.maps.LatLng(46.057321,14.511741),
new google.maps.LatLng(46.056107,14.5565251),
new google.maps.LatLng(46.055952,14.555262),
new google.maps.LatLng(46.0646683,14.5085432),
new google.maps.LatLng(46.0648438,14.5085351),
new google.maps.LatLng(46.0464017,14.4990908),
new google.maps.LatLng(46.0464017,14.4990908),
new google.maps.LatLng(46.0770197,14.4819182),
new google.maps.LatLng(46.0771444,14.482058),
new google.maps.LatLng(46.0145247,14.51184),
new google.maps.LatLng(46.0145247,14.51184),
new google.maps.LatLng(46.0560837,14.5049456),
new google.maps.LatLng(46.0565416,14.5052916),


new google.maps.LatLng(46.0918367,14.5702103),
new google.maps.LatLng(46.09132,14.5753503),
new google.maps.LatLng(46.08991,14.6111654),








new google.maps.LatLng(46.0637039,14.5113642),
new google.maps.LatLng(46.0633515,14.5096309),





new google.maps.LatLng(46.0458117,14.5437773),
new google.maps.LatLng(46.0458117,14.5437773),
new google.maps.LatLng(46.0375728,14.5709834),
new google.maps.LatLng(46.0375803,14.5715708),


new google.maps.LatLng(46.0242136,14.5310464),
new google.maps.LatLng(46.0242136,14.5310464),

new google.maps.LatLng(46.0543341,14.5277847),
new google.maps.LatLng(46.0541875,14.527702),
new google.maps.LatLng(46.0676176,14.4850231),
new google.maps.LatLng(46.0675687,14.4854849),
new google.maps.LatLng(46.040062,14.4731295),
new google.maps.LatLng(46.0401556,14.472936),
new google.maps.LatLng(46.0758796,14.5204746),
new google.maps.LatLng(46.0758796,14.5204746),
new google.maps.LatLng(46.0660974,14.5512411),
new google.maps.LatLng(46.0660974,14.5512411),
new google.maps.LatLng(46.075017,14.4616236),
new google.maps.LatLng(46.075017,14.4616236),
new google.maps.LatLng(46.0696865,14.4726108),
new google.maps.LatLng(46.0697018,14.472669),
new google.maps.LatLng(46.0653352,14.5028269),
new google.maps.LatLng(46.0653497,14.5023778),








new google.maps.LatLng(45.9760138,14.3520664),
new google.maps.LatLng(46.0778771,14.5043142),
new google.maps.LatLng(46.0778771,14.5043142),










new google.maps.LatLng(46.1153673,14.4624657),
new google.maps.LatLng(46.1156318,14.4620735),
new google.maps.LatLng(46.0541648,14.5527027),
new google.maps.LatLng(46.0541215,14.5528031),
new google.maps.LatLng(45.9633936,14.6398872),
new google.maps.LatLng(45.9637559,14.6393217),
new google.maps.LatLng(46.0620584,14.5442584),
new google.maps.LatLng(46.0620531,14.544079),
new google.maps.LatLng(46.065885,14.5457912),
new google.maps.LatLng(46.0657207,14.546033),
new google.maps.LatLng(46.0653395,14.543160),
new google.maps.LatLng(46.0653395,14.5431603),
new google.maps.LatLng(46.0681763,14.5417304),
new google.maps.LatLng(46.0681763,14.5417304),










new google.maps.LatLng(46.0500309,14.4948034),
new google.maps.LatLng(46.0500309,14.4948034),
new google.maps.LatLng(46.0057369,14.4903606),
new google.maps.LatLng(46.0057369,14.4903606),



new google.maps.LatLng(46.0538243,14.589105),
new google.maps.LatLng(46.0538243,14.589105),






new google.maps.LatLng(46.0548228,14.5668635),
new google.maps.LatLng(46.0549742,14.5656837),
new google.maps.LatLng(45.9670305,14.6320651),
new google.maps.LatLng(45.9671924,14.6322003),





new google.maps.LatLng(46.0783962,14.4705548),
new google.maps.LatLng(46.078086,14.470180),
new google.maps.LatLng(46.0902679,14.511539),
new google.maps.LatLng(46.0898655,14.511684),



new google.maps.LatLng(46.1041611,14.5341633),


new google.maps.LatLng(46.0542487,14.5039258),


















new google.maps.LatLng(46.0372429,14.4669898),
new google.maps.LatLng(46.0370889,14.463354),
new google.maps.LatLng(46.036612,14.463651),

new google.maps.LatLng(46.0336602,14.4500493),
new google.maps.LatLng(46.0334129,14.4499035),
new google.maps.LatLng(45.958355,14.6580836),
new google.maps.LatLng(45.9630198,14.6594411),
new google.maps.LatLng(46.0076784,14.4935837),
new google.maps.LatLng(46.0076784,14.4935837),
new google.maps.LatLng(46.0487322,14.5005663),
new google.maps.LatLng(46.0489393,14.5016676),
new google.maps.LatLng(46.0738194,14.4605434),
new google.maps.LatLng(46.0738194,14.4605434),



new google.maps.LatLng(46.0836076,14.4769792),
new google.maps.LatLng(46.0831674,14.4768053),


new google.maps.LatLng(46.0669797,14.4940266),
new google.maps.LatLng(46.0669797,14.4940266),
new google.maps.LatLng(46.1060199,14.4398984),
new google.maps.LatLng(46.1060199,14.4398984),




new google.maps.LatLng(46.0476393,14.5447043),
new google.maps.LatLng(46.0475573,14.5440307),
new google.maps.LatLng(46.0022925,14.4130082),
new google.maps.LatLng(46.0022566,14.4132166),
new google.maps.LatLng(46.064666,14.528204),
new google.maps.LatLng(46.0574779,14.5163085),
new google.maps.LatLng(46.0574422,14.5169776),
new google.maps.LatLng(46.0523876,14.5653009),




new google.maps.LatLng(46.0333037,14.5107195),
new google.maps.LatLng(46.0333037,14.5107195),
new google.maps.LatLng(46.1266954,14.4966895),
new google.maps.LatLng(46.0681173,14.5151642),
new google.maps.LatLng(46.0681173,14.5151642),
new google.maps.LatLng(46.0405549,14.4897102),
new google.maps.LatLng(46.0405549,14.4897102),
new google.maps.LatLng(46.0433896,14.4795495),
new google.maps.LatLng(46.0431753,14.4809799),
new google.maps.LatLng(46.0502864,14.5261949),
new google.maps.LatLng(46.0504803,14.5260461),


new google.maps.LatLng(46.0305212,14.5162037),
new google.maps.LatLng(46.0305212,14.5162037),
new google.maps.LatLng(46.0855875,14.5068836),
new google.maps.LatLng(46.0854568,14.5069037),
new google.maps.LatLng(46.0485451,14.5221627),
new google.maps.LatLng(46.0488159,14.5223333),







new google.maps.LatLng(46.0282154,14.5348234),
new google.maps.LatLng(46.0281567,14.5352129),
new google.maps.LatLng(46.0459141,14.5047604),
new google.maps.LatLng(46.0459141,14.5047604),
new google.maps.LatLng(46.1287497,14.4432873),
new google.maps.LatLng(46.1287497,14.4432873),
new google.maps.LatLng(45.9543062,14.6518008),
new google.maps.LatLng(46.0619785,14.5621457),
new google.maps.LatLng(46.0619534,14.5629032),
new google.maps.LatLng(46.0457484,14.4887823),
new google.maps.LatLng(46.0454919,14.4890483),
new google.maps.LatLng(45.9995797,14.5163998),
new google.maps.LatLng(45.9996374,14.516607),





new google.maps.LatLng(46.0637771,14.5069141),
new google.maps.LatLng(46.0637771,14.5069141),


new google.maps.LatLng(46.0749801,14.5629613),
new google.maps.LatLng(46.0749801,14.5629613),








new google.maps.LatLng(46.0397,14.5635399),
new google.maps.LatLng(46.0397,14.5635399),


new google.maps.LatLng(46.0525743,14.5162158),
new google.maps.LatLng(46.0529365,14.518348),
new google.maps.LatLng(45.9602956,14.5156941),
new google.maps.LatLng(45.9602956,14.5156941),
new google.maps.LatLng(45.9586707,14.5253948),
new google.maps.LatLng(45.9587454,14.5272731),
new google.maps.LatLng(45.962759,14.5300335),






new google.maps.LatLng(45.9627212,14.5301388),
new google.maps.LatLng(46.0530128,14.5137349),
new google.maps.LatLng(46.0528195,14.5133691),
new google.maps.LatLng(46.0287659,14.5111015),
new google.maps.LatLng(46.0283006,14.5096222),
new google.maps.LatLng(46.089386,14.4768733),
new google.maps.LatLng(46.089386,14.4768733),
new google.maps.LatLng(45.936876,14.51206),
new google.maps.LatLng(45.936876,14.51206),
new google.maps.LatLng(45.936876,14.51206),
new google.maps.LatLng(45.9439663,14.5087476),
new google.maps.LatLng(45.9440979,14.5092854),
new google.maps.LatLng(46.019595,14.5090846),
new google.maps.LatLng(46.0196979,14.5099744),
new google.maps.LatLng(46.0350661,14.5127565),
new google.maps.LatLng(46.0350661,14.5127565),
new google.maps.LatLng(46.0043875,14.513165),
new google.maps.LatLng(46.0041758,14.514567),
new google.maps.LatLng(46.0422336,14.4892728),
new google.maps.LatLng(46.0422336,14.4892728),


new google.maps.LatLng(46.0532443,14.5328494),
new google.maps.LatLng(46.053118,14.5321742),
new google.maps.LatLng(46.0116729,14.4103425),
new google.maps.LatLng(46.0106216,14.41232),
new google.maps.LatLng(46.068249,14.535856),
new google.maps.LatLng(46.0686217,14.5367214),




new google.maps.LatLng(45.9712574,14.4315586),
new google.maps.LatLng(46.1003766,14.5528221),
new google.maps.LatLng(46.1001413,14.5523575),
new google.maps.LatLng(46.0973414,14.5164993),
new google.maps.LatLng(46.0981489,14.5147357),
new google.maps.LatLng(46.0975058,14.5166492),
new google.maps.LatLng(46.0259495,14.5265526),
new google.maps.LatLng(46.0259495,14.5265526),
new google.maps.LatLng(46.1187569,14.4477172),
new google.maps.LatLng(46.1187569,14.4477172),
new google.maps.LatLng(46.0562795,14.5405753),





new google.maps.LatLng(46.0934212,14.510453),
new google.maps.LatLng(46.0936548,14.5106831),
new google.maps.LatLng(46.0792262,14.465139),
new google.maps.LatLng(46.0721962,14.5183457),
new google.maps.LatLng(46.07182,14.5181532),
new google.maps.LatLng(46.0640032,14.5350016),
new google.maps.LatLng(46.0639134,14.5360484),
new google.maps.LatLng(46.0694662,14.4891765),
new google.maps.LatLng(46.0692851,14.4898694),
new google.maps.LatLng(46.0523315,14.5194459),
new google.maps.LatLng(46.0523069,14.5203804),
new google.maps.LatLng(46.0715141,14.4798605),
new google.maps.LatLng(46.0715608,14.4807407),
new google.maps.LatLng(46.0514722,14.5387168),
new google.maps.LatLng(46.0514722,14.5387168),
new google.maps.LatLng(46.0514722,14.5387168),
new google.maps.LatLng(46.0515355,14.5388922),
new google.maps.LatLng(46.0689589,14.538561),
new google.maps.LatLng(46.0689833,14.5407513),

new google.maps.LatLng(46.0577307,14.5080954),
new google.maps.LatLng(46.0574754,14.5079955),
new google.maps.LatLng(46.1011915,14.5241979),
new google.maps.LatLng(46.1013195,14.5254974),




new google.maps.LatLng(46.0792694,14.4803296),
new google.maps.LatLng(46.0798265,14.4802813),
new google.maps.LatLng(45.9672592,14.6582399),
new google.maps.LatLng(46.051446,14.5021994),
new google.maps.LatLng(46.0352767,14.4832318),
new google.maps.LatLng(46.0352767,14.4832318),


new google.maps.LatLng(46.0719173,14.4672764),



new google.maps.LatLng(46.100484,14.4588912),
new google.maps.LatLng(46.1009119,14.4604509),
new google.maps.LatLng(45.9511907,14.5114014),



new google.maps.LatLng(45.9511907,14.5114014),
new google.maps.LatLng(46.0796094,14.4866351),
new google.maps.LatLng(46.0796094,14.4866351),
new google.maps.LatLng(46.0307911,14.4433013),
new google.maps.LatLng(46.0307911,14.4433013),


new google.maps.LatLng(45.9937447,14.4626542),
new google.maps.LatLng(45.9937447,14.4626542),


new google.maps.LatLng(46.0690138,14.5255432),
new google.maps.LatLng(46.050105,14.5097825),
new google.maps.LatLng(46.050105,14.5097825),
new google.maps.LatLng(46.0366238,14.4893688),
new google.maps.LatLng(46.0366237,14.4870803),
new google.maps.LatLng(46.0461698,14.5010019),
new google.maps.LatLng(46.0461698,14.5010019),




new google.maps.LatLng(46.0408677,14.5562784),
new google.maps.LatLng(46.0408677,14.5562784),
new google.maps.LatLng(45.9523128,14.6598039),
new google.maps.LatLng(46.0654011,14.5135801),





new google.maps.LatLng(46.0243006,14.5098719),


new google.maps.LatLng(45.9971977,14.5569412),
new google.maps.LatLng(45.9971977,14.5569412),
new google.maps.LatLng(46.001308,14.5512074),
new google.maps.LatLng(46.001308,14.5512074),
new google.maps.LatLng(46.0619475,14.5576294),
new google.maps.LatLng(46.0620089,14.5690676),






new google.maps.LatLng(45.9975182,14.4697145),
new google.maps.LatLng(45.9975182,14.4697145),
new google.maps.LatLng(46.0821426,14.4941751),
new google.maps.LatLng(46.0767333,14.488504),
new google.maps.LatLng(46.076863,14.4884337),
new google.maps.LatLng(46.0332143,14.5124268),
new google.maps.LatLng(46.0340931,14.5106475),








new google.maps.LatLng(45.9586488,14.6541492),
new google.maps.LatLng(46.08247,14.480218),
new google.maps.LatLng(46.0798891,14.4824453),





new google.maps.LatLng(45.9815273,14.5981804),
new google.maps.LatLng(45.981596,14.599385),
new google.maps.LatLng(46.0793986,14.51909),
new google.maps.LatLng(46.0796227,14.5192066),
new google.maps.LatLng(46.1135528,14.4632272),
new google.maps.LatLng(46.1247923,14.434967),
new google.maps.LatLng(46.1247923,14.434967),
new google.maps.LatLng(46.1413704,14.4082631),
new google.maps.LatLng(46.1413704,14.4082631),
new google.maps.LatLng(46.1393748,14.4108336),
new google.maps.LatLng(46.1462908,14.4098018),
new google.maps.LatLng(46.1421563,14.4058397),
new google.maps.LatLng(46.1383621,14.4125895),
new google.maps.LatLng(46.1383621,14.4125895),
new google.maps.LatLng(46.0742705,14.510723),
new google.maps.LatLng(46.0736007,14.5111341),
new google.maps.LatLng(46.0302752,14.4707665),
new google.maps.LatLng(46.0293145,14.5193365),
new google.maps.LatLng(46.0293145,14.5193365),
new google.maps.LatLng(46.0455809,14.4986369),





new google.maps.LatLng(46.0455809,14.4986369),
new google.maps.LatLng(45.9957205,14.4064089),
new google.maps.LatLng(45.9951946,14.4051174),
new google.maps.LatLng(46.0742623,14.4973857),
new google.maps.LatLng(46.0742623,14.4973857),
new google.maps.LatLng(45.9539013,14.6505228),
new google.maps.LatLng(46.0384734,14.4993165),
new google.maps.LatLng(46.0376709,14.4991039),
new google.maps.LatLng(46.0376709,14.4991039),
new google.maps.LatLng(46.0737119,14.4489559),
new google.maps.LatLng(46.0737119,14.4489559),
new google.maps.LatLng(46.0287035,14.4336199),
new google.maps.LatLng(46.0287035,14.4336199),
new google.maps.LatLng(46.0665792,14.489372),
new google.maps.LatLng(46.0665792,14.489372),
new google.maps.LatLng(46.1038624,14.4622858),
new google.maps.LatLng(46.1038624,14.4622858),
new google.maps.LatLng(46.0716805,14.5292887),
new google.maps.LatLng(46.0716805,14.5292887),
new google.maps.LatLng(46.0967667,14.5562498),
new google.maps.LatLng(46.0967667,14.5562498),
new google.maps.LatLng(46.0596693,14.5090305),
new google.maps.LatLng(45.9885098,14.4008652),
new google.maps.LatLng(46.0698829,14.5507576),
new google.maps.LatLng(46.0702088,14.548303),
new google.maps.LatLng(46.0814072,14.5198132),
new google.maps.LatLng(46.0742907,14.5311941),
new google.maps.LatLng(46.0744321,14.5314463),
new google.maps.LatLng(46.1420132,14.4070521),

new google.maps.LatLng(46.0649524,14.5816902),
new google.maps.LatLng(46.0646648,14.5820582),
new google.maps.LatLng(46.0203888,14.5339814),
new google.maps.LatLng(46.0203967,14.5344539),

new google.maps.LatLng(46.112755,14.4608884),
new google.maps.LatLng(46.1121702,14.4606756),
new google.maps.LatLng(46.0538018,14.5392815),


new google.maps.LatLng(46.0741339,14.4533495),
new google.maps.LatLng(46.0741391,14.4527653),
new google.maps.LatLng(46.0387264,14.5148863),




new google.maps.LatLng(46.0556707,14.5595529),
new google.maps.LatLng(46.0556707,14.5595529),
new google.maps.LatLng(45.9631663,14.6568873),
new google.maps.LatLng(45.9717176,14.4286493),
new google.maps.LatLng(46.1050637,14.5328315),
new google.maps.LatLng(46.1050637,14.5328315),


new google.maps.LatLng(46.1042924,14.4475676),
new google.maps.LatLng(46.1042924,14.4475676),


new google.maps.LatLng(46.063747,14.5042309),
new google.maps.LatLng(46.063747,14.5042309),
new google.maps.LatLng(46.0300335,14.53176),
new google.maps.LatLng(46.0303781,14.5313735),


new google.maps.LatLng(46.0540027,14.587014),
new google.maps.LatLng(46.0540027,14.587014),
new google.maps.LatLng(46.011909,14.5052657),
new google.maps.LatLng(46.011909,14.5052657),
new google.maps.LatLng(46.0801179,14.4668917),
new google.maps.LatLng(46.0804278,14.4677137),
new google.maps.LatLng(46.0483881,14.5296929),
new google.maps.LatLng(46.0483881,14.5296929),
new google.maps.LatLng(45.9582561,14.650515),
new google.maps.LatLng(45.9585948,14.6502308),
new google.maps.LatLng(46.0060836,14.547461),
new google.maps.LatLng(46.0061717,14.547077),
new google.maps.LatLng(46.0732872,14.4519078),
new google.maps.LatLng(46.0509803,14.4913883),
new google.maps.LatLng(46.0509803,14.4913883),
new google.maps.LatLng(46.0932494,14.4686231),
new google.maps.LatLng(46.0926526,14.4691299),


new google.maps.LatLng(46.0695527,14.5033249),
new google.maps.LatLng(46.0695527,14.5033249),









new google.maps.LatLng(45.9760433,14.4209799),
new google.maps.LatLng(45.9760433,14.4209799),








new google.maps.LatLng(46.0747185,14.4439662),
new google.maps.LatLng(46.0820396,14.5066901),
new google.maps.LatLng(46.0820396,14.5066901),
new google.maps.LatLng(46.0643562,14.5275939),
new google.maps.LatLng(46.0651872,14.528147),
new google.maps.LatLng(46.1070954,14.5251287),
new google.maps.LatLng(46.1070954,14.5251287),


new google.maps.LatLng(46.0537329,14.518923),
new google.maps.LatLng(46.053238,14.5185682),
new google.maps.LatLng(46.0500939,14.5147598),
new google.maps.LatLng(46.0500939,14.5147598),
new google.maps.LatLng(46.0549046,14.5832641),
new google.maps.LatLng(46.0549046,14.5832641),



new google.maps.LatLng(46.0572341,14.5831179),
new google.maps.LatLng(46.0572341,14.5831179),
new google.maps.LatLng(46.0519049,14.5025648),


new google.maps.LatLng(46.0560684,14.5492779),
new google.maps.LatLng(46.0563618,14.5489953),
new google.maps.LatLng(46.0327542,14.5008317),
new google.maps.LatLng(46.0334078,14.4996482),
new google.maps.LatLng(46.1081828,14.5298836),
new google.maps.LatLng(46.1081828,14.5298836),
new google.maps.LatLng(46.109223,14.5278555),
new google.maps.LatLng(46.1091821,14.5275309),







new google.maps.LatLng(46.0546186,14.5577806),
new google.maps.LatLng(46.0545936,14.5583592),
new google.maps.LatLng(46.0644681,14.5153984),
new google.maps.LatLng(46.0644681,14.5153984),










new google.maps.LatLng(46.007143,14.5122919),
new google.maps.LatLng(46.007143,14.5122919),
new google.maps.LatLng(46.0239233,14.4147089),


new google.maps.LatLng(46.104709,14.529237),
new google.maps.LatLng(46.0439427,14.509151),

new google.maps.LatLng(46.090374,14.4700588),
new google.maps.LatLng(46.090374,14.4700588),
new google.maps.LatLng(46.0880268,14.4575678),
new google.maps.LatLng(46.0766914,14.5186728),
new google.maps.LatLng(46.0766914,14.5186728),
new google.maps.LatLng(46.0244468,14.4203066),
new google.maps.LatLng(46.03556,14.5219791),
new google.maps.LatLng(46.03556,14.5219791),


new google.maps.LatLng(46.1269558,14.4919604),
new google.maps.LatLng(46.1269426,14.493155),
new google.maps.LatLng(45.9780843,14.6034151),
new google.maps.LatLng(45.9780843,14.6034151),




new google.maps.LatLng(46.060338,14.5043148),
new google.maps.LatLng(46.060338,14.5043148),
new google.maps.LatLng(46.0907728,14.5953971),






new google.maps.LatLng(46.0907728,14.5953971),
new google.maps.LatLng(45.9855108,14.5878232),
new google.maps.LatLng(45.9857984,14.5878897),
new google.maps.LatLng(46.074237,14.4847496),






new google.maps.LatLng(46.0621071,14.5655884),
new google.maps.LatLng(46.0621071,14.5655884),
new google.maps.LatLng(46.102754,14.5311182),
new google.maps.LatLng(46.1021875,14.5292467),

new google.maps.LatLng(46.048464,14.519345),
new google.maps.LatLng(46.0493947,14.5190806),
new google.maps.LatLng(46.0633264,14.5317664),
new google.maps.LatLng(46.0633264,14.5317664),


new google.maps.LatLng(46.0186636,14.5425732),

new google.maps.LatLng(46.0176764,14.5416966),
new google.maps.LatLng(46.0546019,14.5622443),
new google.maps.LatLng(46.0546019,14.5622443),
new google.maps.LatLng(46.0898578,14.5131522),
new google.maps.LatLng(46.0906394,14.5131574),
new google.maps.LatLng(46.0001402,14.4758526),
new google.maps.LatLng(46.0000206,14.4738407),


new google.maps.LatLng(46.066923,14.5035617),
new google.maps.LatLng(46.0669472,14.50272),
new google.maps.LatLng(45.9733328,14.6170093),
new google.maps.LatLng(45.9733328,14.6170093),
new google.maps.LatLng(46.0672331,14.6083691),
new google.maps.LatLng(46.1008579,14.5216269),
new google.maps.LatLng(46.1008579,14.5216269),

new google.maps.LatLng(46.0952869,14.5039144),
new google.maps.LatLng(46.0657867,14.5209033),
new google.maps.LatLng(46.065828,14.5205735),





new google.maps.LatLng(46.0622401,14.5220705),
new google.maps.LatLng(46.0628594,14.5246075),






new google.maps.LatLng(46.057698,14.605837),
new google.maps.LatLng(46.057698,14.605837),


new google.maps.LatLng(46.0731004,14.4849684),
new google.maps.LatLng(46.0738932,14.4859226),


new google.maps.LatLng(46.0822173,14.5127462),
new google.maps.LatLng(46.0822173,14.5127462),














new google.maps.LatLng(46.0777487,14.5686948),
new google.maps.LatLng(46.0779922,14.5693726),
new google.maps.LatLng(45.9913516,14.4557937),
new google.maps.LatLng(45.9913516,14.4557937),



new google.maps.LatLng(46.1342593,14.4378061),
new google.maps.LatLng(46.1337412,14.4373434),
new google.maps.LatLng(46.0770665,14.4653821),
new google.maps.LatLng(46.0770665,14.4653821),




new google.maps.LatLng(46.0232224,14.5392314),
new google.maps.LatLng(46.0232224,14.5392314),


new google.maps.LatLng(46.0624717,14.5240379),
new google.maps.LatLng(46.0631629,14.5257188),
new google.maps.LatLng(46.0692915,14.5099291),
new google.maps.LatLng(46.0692915,14.5099291),
new google.maps.LatLng(45.9570164,14.5086369),
new google.maps.LatLng(45.9570164,14.5086369),
new google.maps.LatLng(46.0446524,14.4823913),
new google.maps.LatLng(46.0445885,14.4860775),
new google.maps.LatLng(46.1152848,14.4404623),
new google.maps.LatLng(46.1121497,14.4456638),
new google.maps.LatLng(46.1090701,14.4325067),
new google.maps.LatLng(46.0642257,14.4926566),
new google.maps.LatLng(46.0642257,14.4926566),
new google.maps.LatLng(45.9614781,14.6435891),
new google.maps.LatLng(45.9614781,14.6435891),
new google.maps.LatLng(46.0860559,14.5134466),
new google.maps.LatLng(46.0859928,14.5132037),
new google.maps.LatLng(46.0392719,14.5161111),
new google.maps.LatLng(46.0386628,14.5175453),
new google.maps.LatLng(46.0450716,14.5160871),
new google.maps.LatLng(46.0450716,14.5160871),
new google.maps.LatLng(46.0543308,14.5741517),
new google.maps.LatLng(46.0543308,14.5741517),




new google.maps.LatLng(46.0911667,14.581523),
new google.maps.LatLng(46.0911667,14.581523),

new google.maps.LatLng(46.0966246,14.4624442),
new google.maps.LatLng(46.0953246,14.4653168),




new google.maps.LatLng(46.0736214,14.4839913),
new google.maps.LatLng(45.9799402,14.5751041),
new google.maps.LatLng(45.9849597,14.5793353),






new google.maps.LatLng(45.9854101,14.5788086),
new google.maps.LatLng(45.9825357,14.570975),
new google.maps.LatLng(45.9895718,14.5650108),
new google.maps.LatLng(45.9895718,14.5650108),
new google.maps.LatLng(45.9833647,14.5728197),
new google.maps.LatLng(45.985755,14.570556),
new google.maps.LatLng(45.985755,14.570556),


new google.maps.LatLng(45.975821,14.6087087),
new google.maps.LatLng(45.9754703,14.6103828),
new google.maps.LatLng(46.1235492,14.4768408),
new google.maps.LatLng(46.1235492,14.4768408),


new google.maps.LatLng(46.0672541,14.5306711),
new google.maps.LatLng(46.0668128,14.5327199),
new google.maps.LatLng(46.0683889,14.5364253),
new google.maps.LatLng(46.0171898,14.4144957),
new google.maps.LatLng(46.0173279,14.414434),
new google.maps.LatLng(45.9853509,14.5936088),
new google.maps.LatLng(45.9853509,14.5936088),
new google.maps.LatLng(46.0485431,14.5373548),
new google.maps.LatLng(46.0485431,14.5373548),

new google.maps.LatLng(46.0531497,14.5475189),

new google.maps.LatLng(46.0531497,14.5475189),
new google.maps.LatLng(46.0496168,14.4862584),


new google.maps.LatLng(46.1091343,14.4609827),
new google.maps.LatLng(46.1091343,14.4609827),

new google.maps.LatLng(46.1201316,14.4668311),
new google.maps.LatLng(46.1201316,14.4668311),
new google.maps.LatLng(46.1180165,14.4607648),
new google.maps.LatLng(46.1181895,14.4614249),

new google.maps.LatLng(46.0545259,14.5051656),
new google.maps.LatLng(46.0338347,14.4775739),
new google.maps.LatLng(46.0338347,14.4775739),
new google.maps.LatLng(46.0860785,14.4796417),





new google.maps.LatLng(46.0860785,14.4796417),
new google.maps.LatLng(46.0728917,14.493244),
new google.maps.LatLng(46.0728917,14.493244),

new google.maps.LatLng(46.0601499,14.4966756),
new google.maps.LatLng(46.0601499,14.4966756),

new google.maps.LatLng(46.0469433,14.493085),
new google.maps.LatLng(46.0469433,14.493085),
new google.maps.LatLng(46.0794063,14.5359785),
new google.maps.LatLng(46.0693514,14.5273186),
new google.maps.LatLng(46.0693514,14.5273186),
new google.maps.LatLng(46.0763767,14.4980681),
new google.maps.LatLng(46.0763767,14.4980681),
new google.maps.LatLng(46.0670972,14.5145042),
new google.maps.LatLng(46.0670972,14.5145042),
new google.maps.LatLng(46.0789524,14.4988927),
new google.maps.LatLng(46.0613424,14.537811),
new google.maps.LatLng(46.0613424,14.537811),
new google.maps.LatLng(46.0871993,14.4739259),
new google.maps.LatLng(46.0871993,14.4739259),


new google.maps.LatLng(46.040902,14.5086341),


new google.maps.LatLng(46.0741299,14.4753731),
new google.maps.LatLng(46.0741299,14.4753731),
new google.maps.LatLng(46.0556637,14.5338953),
new google.maps.LatLng(46.0556637,14.5338953),

new google.maps.LatLng(46.0537126,14.5071952),








new google.maps.LatLng(46.0379378,14.5041673),
new google.maps.LatLng(46.0373016,14.5038086),
new google.maps.LatLng(46.1433796,14.4165449),







new google.maps.LatLng(46.1433796,14.4165449),


new google.maps.LatLng(46.0493463,14.5926441),
new google.maps.LatLng(46.059266,14.5188123),
new google.maps.LatLng(46.059266,14.5188123),
new google.maps.LatLng(46.0418812,14.4764731),
new google.maps.LatLng(46.0422047,14.4771261),

new google.maps.LatLng(46.124503,14.445867),


new google.maps.LatLng(46.1001702,14.4586322),




new google.maps.LatLng(45.9563259,14.6614205),
new google.maps.LatLng(46.0744446,14.5009213),
new google.maps.LatLng(46.0744446,14.5009213),






new google.maps.LatLng(46.0616889,14.5495401),
new google.maps.LatLng(46.0616889,14.5495401),
new google.maps.LatLng(46.0708138,14.5795842),
new google.maps.LatLng(46.0708138,14.5795842),

new google.maps.LatLng(46.060993,14.6114277),





new google.maps.LatLng(46.0688919,14.6052896),
new google.maps.LatLng(46.0560119,14.5389885),
new google.maps.LatLng(46.0558757,14.541406),













new google.maps.LatLng(46.1037891,14.5438139),
new google.maps.LatLng(46.1037891,14.5438139),








new google.maps.LatLng(46.0662391,14.6109328),
new google.maps.LatLng(46.0662391,14.6109328),
new google.maps.LatLng(46.0626752,14.5286681),


new google.maps.LatLng(46.1256774,14.4862649),
new google.maps.LatLng(46.1256774,14.4862649),
new google.maps.LatLng(46.1375304,14.4318366),
new google.maps.LatLng(46.1409502,14.4241731),
new google.maps.LatLng(46.1378485,14.4317352),

new google.maps.LatLng(46.0700756,14.4802514),
new google.maps.LatLng(46.0023672,14.4793887),
new google.maps.LatLng(46.0023672,14.4793887),
new google.maps.LatLng(46.0407669,14.4997507),
new google.maps.LatLng(46.0416695,14.4997103),
new google.maps.LatLng(46.0516862,14.5103908),
new google.maps.LatLng(46.0520126,14.5100513),
new google.maps.LatLng(46.0668872,14.5270204),
new google.maps.LatLng(46.0668872,14.5270204),


new google.maps.LatLng(46.0608459,14.5126954),


new google.maps.LatLng(46.0697727,14.5450338),
new google.maps.LatLng(46.0697727,14.5450338),
new google.maps.LatLng(46.0515845,14.4697882),
new google.maps.LatLng(46.0515845,14.4697882),
new google.maps.LatLng(46.0515845,14.4697882),

new google.maps.LatLng(46.0760515,14.5208211),
new google.maps.LatLng(46.0671321,14.475306),
new google.maps.LatLng(46.0559468,14.50159),
new google.maps.LatLng(46.0559468,14.50159),
new google.maps.LatLng(46.1166892,14.5056588),
new google.maps.LatLng(46.1199279,14.5031546),
new google.maps.LatLng(46.1228627,14.5021161),
new google.maps.LatLng(46.0716883,14.5292352),

new google.maps.LatLng(46.062941,14.5477375),
new google.maps.LatLng(46.0621252,14.5679188),
new google.maps.LatLng(46.0373541,14.5039779),

new google.maps.LatLng(46.0526529,14.485856),
new google.maps.LatLng(46.0508548,14.4764937),
new google.maps.LatLng(46.0785532,14.4953278),


new google.maps.LatLng(46.0635331,14.5449116),
new google.maps.LatLng(46.13564,14.4419612),
new google.maps.LatLng(46.0761042,14.5146796)




];

var StationsData=[];
StationsData=
[
  ['103111','7. septembra'],
  ['103112','7. septembra ( proti obvoznici )'],
  ['505132','Adamičev spomenik'],
  ['600022','Ajdovščina'],
  ['503031','Akademija'],
  ['503032','Akademija ( proti obvoznici )'],
  ['502013','Ambrožev trg'],
  ['502014','Ambrožev trg ( proti obvoznici )'],
  ['103031','AMZS'],
  ['103032','AMZS ( proti obvoznici )'],
  ['804171','Andreja Bitenca'],
  ['804172','Andreja Bitenca ( proti obvoznici )'],
  ['300013','AP Ljubljana ( proti obvoznici )'],
  ['303061','Archinetova'],
  ['303062','Archinetova ( proti obvoznici )'],
  ['101051','Astra'],
  ['101052','Astra ( proti obvoznici )'],
  ['602052','Aškerčeva ( proti obvoznici )'],
  ['602051','Aškerčeva'],
  ['803021','Avtomontaža'],
  ['803022','Avtomontaža ( proti obvoznici )'],
  ['604022','Barje ( proti obvoznici )'],
  ['604023','Barje'],
  ['600011','Bavarski dvor'],
  ['600012','Bavarski dvor ( proti obvoznici )'],


  ['204141','Belinka'],
  ['204142','Belinka ( proti obvoznici )'],
  ['204171','Beričevo'],








  ['101031','Bežigrad'],
  ['101032','Bežigrad ( proti obvoznici )'],





  ['403072','Bilečanska ( proti obvoznici )'],
  ['403071','Bilečanska'],
  ['404121','Bizovik ( proti obvoznici )'],
  ['404123','Bizovik'],


  ['504121','Bobrova'],
  ['504122','Bobrova ( proti obvoznici )'],

  ['402041','Bolnica'],
  ['402042','Bolnica ( proti obvoznici )'],
  ['802041','Bolnica P. Držaja'],
  ['802042','Bolnica P. Držaja ( proti obvoznici )'],
  ['703102','Bonifacija ( proti obvoznici )'],
  ['703101','Bonifacija'],
  ['103191','Božičeva'],
  ['103192','Božičeva ( proti obvoznici )'],
  ['203181','Bratislavska'],
  ['203182','Bratislavska ( proti obvoznici )'],
  ['803161','Bratov Babnik'],
  ['803162','Bratov Babnik ( proti obvoznici )'],
  ['803132','Bratov Učakar ( proti obvoznici )'],
  ['803131','Bratov Učakar'],
  ['101061','Bratov Židan'],
  ['101062','Bratov Židan ( proti obvoznici )'],








  ['614021','Brglezov štradon'],
  ['103021','Brinje'],
  ['103022','Brinje ( proti obvoznici )'],










  ['804121','Brod'],
  ['804122','Brod ( proti obvoznici )'],
  ['303071','Brodarjev trg'],
  ['303072','Brodarjev trg ( proti obvoznici )'],
  ['505092','Brvace ( proti obvoznici )'],
  ['505091','Brvace'],
  ['203142','BTC-Emporium ( proti obvoznici )'],
  ['203141','BTC-Emporium'],
  ['203132','BTC-Kolosej ( proti obvoznici )'],
  ['203131','BTC-Kolosej'],
  ['203122','BTC-tržnica ( proti obvoznici )'],
  ['203121','BTC-tržnica'],
  ['203112','BTC-uprava ( proti obvoznici )'],
  ['203111','BTC-uprava'],










  ['602012','Cankarjev dom ( proti obvoznici )'],
  ['602011','Cankarjev dom'],
  ['614042','Capuder ( proti obvoznici )'],
  ['614041','Capuder'],



  ['304091','Cesta na Vevče'],
  ['304092','Cesta na Vevče ( proti obvoznici )'],






  ['304042','Chengdujska'],
  ['304041','Chengdujska ( proti obvoznici )'],
  ['505082','Cikava ( proti obvoznici )'],
  ['505081','Cikava'],





  ['803111','Čebelarska'],
  ['803112','Čebelarska ( proti obvoznici )'],
  ['103121','Čerinova'],
  ['103122','Čerinova ( proti obvoznici )'],



  ['104161','Črnuče'],


  ['600032','Dalmatinova'],


















  ['703112','Dolgi most'],
  ['703111','Dolgi most P+R'],
  ['704011','Dolgi most - obračališče'],

  ['704052','Dolgi most Rotar ( proti obvoznici )'],
  ['704051','Dolgi most Rotar'],
  ['505192','Dom obrtnikov'],
  ['505182','Dom starejših'],
  ['614032','Dornig ( proti obvoznici )'],
  ['614031','Dornig'],
  ['602022','Drama ( proti obvoznici )'],
  ['602021','Drama'],
  ['803152','Draveljska gmajna'],
  ['803151','Draveljska gmajna  ( proti obvoznici )'],



  ['803041','Dravlje'],
  ['803042','Dravlje ( proti obvoznici )'],


  ['802051','Drenikova'],
  ['802052','Drenikova ( proti obvoznici )'],
  ['804352','Dvor ( proti obvoznici )'],
  ['804351','Dvor'],




  ['403051','Emona'],
  ['403052','Emona ( proti obvoznici )'],
  ['745022','Erbežnik ( proti obvoznici )'],
  ['745021','Erbežnik'],
  ['202082','Flajšmanova'],
  ['301011','Friškovec'],
  ['301012','Friškovec ( proti obvoznici )'],
  ['304051','Fužine'],




  ['603093','Galjevica'],
  ['603094','Galjevica ( proti obvoznici )'],
  ['104221','Gameljne'],
  ['102031','Gasilska brigada'],
  ['102032','Gasilska brigada ( proti obvoznici )'],
  ['603022','Gerbičeva ( proti obvoznici )'],
  ['603021','Gerbičeva'],
  ['703082','Glince ( proti obvoznici )'],
  ['703081','Glince'],
  ['402051','Glonarjeva'],
  ['402052','Glonarjeva ( proti obvoznici )'],


  ['603151','Goluhova'],
  ['603152','Goluhova ( proti obvoznici )'],
  ['103091','Gorjančeva'],
  ['103092','Gorjančeva ( proti obvoznici )'],
  ['402061','Gornje Poljane'],
  ['402062','Gornje Poljane ( proti obvoznici )'],







  ['504011','Gornji Rudnik'],
  ['504012','Gornji Rudnik ( proti obvoznici )'],
  ['602101','Gornji trg'],
  ['602102','Gornji trg ( proti obvoznici )'],
  ['815102','Gostilna Kovač ( proti obvoznici )'],
  ['815101','Gostilna Kovač'],
  ['505141','Grosuplje'],
  ['204021','GZL'],
  ['204022','GZL ( proti obvoznici )'],
  ['602032','Hajdrihova ( proti obvoznici )'],
  ['602031','Hajdrihova'],
  ['604042','Havptmance ( proti obvoznici )'],
  ['604041','Havptmance'],





  ['101011','Hranilniška'],
  ['101012','Hranilniška ( proti obvoznici )'],


  ['204061','Hrastje'],
  ['204062','Hrastje ( proti obvoznici )'],








  ['404112','Hruševska ( proti obvoznici )'],
  ['404111','Hruševska'],


  ['402011','Hrvatski trg'],
  ['402012','Hrvatski trg ( proti obvoznici )'],
  ['625022','Ig ( proti obvoznici )'],
  ['625021','Ig'],
  ['605012','Ig AP ( proti obvoznici )'],
  ['605011','Ig AP'],
  ['605082','Ig Petrol ( proti obvoznici )'],






  ['605081','Ig Petrol'],
  ['501011','Ilirska'],
  ['501012','Ilirska ( proti obvoznici )'],
  ['603102','Ilovica ( proti obvoznici )'],
  ['603101','Ilovica'],
  ['804161','IMP'],
  ['804162','IMP ( proti obvoznici )'],
  ['625052','Iška vas ( proti obvoznici )'],
  ['625051','Iška vas'],
  ['626011','Iška vas obračališče'],
  ['625061','Iška vas šola'],
  ['625062','Iška vas šola ( proti obvoznici )'],
  ['604012','Iški most ( proti obvoznici )'],
  ['604011','Iški most'],
  ['603121','Ižanska'],
  ['603122','Ižanska ( proti obvoznici )'],
  ['604061','Ižica'],
  ['604062','Ižica ( proti obvoznici )'],
  ['603012','Jadranska ( proti obvoznici )'],
  ['603011','Jadranska'],


  ['403011','Jana Husa'],
  ['403012','Jana Husa ( proti obvoznici )'],
  ['744021','Japelj'],
  ['744022','Japelj ( proti obvoznici )'],
  ['203091','Jarše'],
  ['203092','Jarše ( proti obvoznici )'],




  ['745061','Jezero'],
  ['104181','Ježa'],
  ['104182','Ježa ( proti obvoznici )'],
  ['104031','Ježica PR'],
  ['104032','Ježica ( proti obvoznici )'],
  ['104033','Ježica'],
  ['504041','Jurčkova'],
  ['504042','Jurčkova ( proti obvoznici )'],
  ['815112','Kajakaška ( proti obvoznici )'],
  ['815111','Kajakaška'],
  ['303022','Kajuhova'],





  ['104021','Kališnikov trg'],
  ['104022','Kališnikov trg ( proti obvoznici )'],
  ['803181','Kamna Gorica'],
  ['102091','Kardeljeva ploščad'],
  ['102092','Kardeljeva ploščad ( proti obvoznici )'],
  ['203052','Kavčičeva'],
  ['203051','Kavčičeva ( proti obvoznici )'],
  ['802021','Kino Šiška'],
  ['802022','Kino Šiška ( proti obvoznici )'],
  ['402031','Klinični center'],
  ['402032','Klinični center ( proti obvoznici )'],
  ['803082','Kneza Koclja ( proti obvoznici )'],
  ['803081','Kneza Koclja'],
  ['403023','Kodeljevo'],
  ['403022','Kodeljevo ( proti obvoznici )'],
  ['403021','Kodeljevo 1'],
  ['403025','Kodeljevo - obračališče'],
  ['203101','Kodrova'],
  ['203102','Kodrova ( proti obvoznici )'],

  ['300011','Kolodvor'],
  ['300012','Kolodvor ( proti obvoznici )'],
  ['104101','Kolodvor Črnuče'],
  ['104102','Kolodvor Črnuče ( proti obvoznici )'],




  ['803031','Kompas'],
  ['803032','Kompas ( proti obvoznici )'],
  ['505172','Kongo'],
  ['601012','Konzorcij'],
  ['603041','Koprska'],
  ['603044','Koprska ( proti obvoznici )'],


  ['826111','Koseze'],



  ['804081','Kosmačeva'],
  ['804082','Kosmačeva ( proti obvoznici )'],
  ['625042','Kot ( proti obvoznici )'],



  ['625041','Kot'],
  ['803212','Kovinarska ( proti obvoznici )'],
  ['803211','Kovinarska'],
  ['704102','Kozarje ( proti obvoznici )'],
  ['704101','Kozarje'],


  ['614082','Kozler ( proti obvoznici )'],
  ['614081','Kozler'],


  ['203211','Kranjčeva'],
  ['501032','Krekov trg'],
  ['501031','Krekov trg ( proti obvoznici )'],
  ['603032','Krimska ( proti obvoznici )'],
  ['603031','Krimska'],
  ['602061','Križanke'],
  ['602062','Križanke ( proti obvoznici )'],




  ['404102','Krožna pot ( proti obvoznici )'],
  ['404101','Krožna pot'],
  ['536022','Krpan'],
  ['101034','Kržičeva'],





  ['603111','Lahova pot'],


  ['504092','Lavrica ( proti obvoznici )'],
  ['504091','Lavrica'],
  ['504082','Lavrica pri Malči ( proti obvoznici )'],
  ['504081','Lavrica pri Malči'],
  ['204011','Leskoškova'],
  ['204051','Letališka-obračališče'],






  ['614072','Lipe ( proti obvoznici )'],
  ['614071','Lipe'],
  ['103201','Litostroj'],
  ['803051','Litostrojska'],
  ['803052','Litostrojska ( proti obvoznici )'],
  ['603092','Livada ( proti obvoznici )'],
  ['603091','Livada'],








  ['505152','Ljubljanska'],
  ['803061','Ljubljanske brigade'],
  ['803062','Ljubljanske brigade ( proti obvoznici )'],





  ['505042','Mali vrh ( proti obvoznici )'],
  ['505041','Mali vrh'],
  ['103162','Maroltova'],
  ['103161','Maroltova ( proti obvoznici )'],
  ['804131','Martinova'],
  ['804071','Medno'],
  ['804072','Medno ( proti obvoznici )'],
  ['805021','Medvode'],
  ['805022','Medvode ( proti obvoznici )'],
  ['805023','Medvode 1'],
  ['805052','Medvode na klancu'],
  ['805041','Medvode naselje'],
  ['805011','Medvoška a.p.'],
  ['805012','Medvoška a.p. ( proti obvoznici )'],
  ['102081','Mercator'],
  ['102082','Mercator ( proti obvoznici )'],
  ['604031','Mestni log'],
  ['503051','Mihov štradon'],
  ['503052','Mihov štradon ( proti obvoznici )'],
  ['602072','Mirje ( proti obvoznici )'],





  ['602071','Mirje'],
  ['745032','Mostiček ( proti obvoznici )'],
  ['745031','Mostiček'],
  ['102061','Mostovna'],
  ['102062','Mostovna ( proti obvoznici )'],
  ['536012','Mrzle njive'],
  ['603062','Murgle ( proti obvoznici )'],
  ['603061','Murgle'],
  ['603064','Murgle – Barjanska'],
  ['804212','Murkova ( proti obvoznici )'],
  ['804211','Murkova'],
  ['704062','Na Gmajnici ( proti obvoznici )'],
  ['704061','Na Gmajnici'],
  ['802031','Na jami'],
  ['802032','Na jami ( proti obvoznici )'],
  ['804091','Na klancu'],
  ['804092','Na klancu ( proti obvoznici )'],
  ['203231','Na Žale'],
  ['203232','Na Žale ( proti obvoznici )'],
  ['204131','Nadgorica'],
  ['204132','Nadgorica ( proti obvoznici )'],
  ['100012','Navje'],
  ['745041','Notranje Gorice'],
  ['203171','Nove Jarše'],
  ['203161','Nove Jarše-Šmartinska'],
  ['103081','Nove Stožice'],
  ['203071','Nove Žale'],
  ['203072','Nove Žale ( proti obvoznici )'],
  ['805031','Novo naselje'],

  ['204101','Novo Polje'],
  ['204102','Novo Polje ( proti obvoznici )'],
  ['504051','NS Rudnik'],
  ['504052','NS Rudnik ( proti obvoznici )'],

  ['804111','Ob daljnovodu'],
  ['804112','Ob daljnovodu ( proti obvoznici )'],
  ['303032','Ob sotočju'],


  ['804202','Omersova ( proti obvoznici )'],
  ['804201','Omersova'],
  ['503014','Orlova'],




  ['304021','Osenjakova'],
  ['304022','Osenjakova ( proti obvoznici )'],
  ['505162','OŠ Brinje'],
  ['745101','OŠ Jezero'],
  ['104151','OŠ Maksa Pečarja'],
  ['104152','OŠ Maksa Pečarja ( proti obvoznici )'],


  ['804342','Oval ( proti obvoznici )'],
  ['804341','Oval'],


  ['101021','Parmova'],
  ['101022','Parmova ( proti obvoznici )'],
  ['503041','Peruzzijeva'],
  ['503042','Peruzzijeva ( proti obvoznici )'],


  ['304111','Petrol'],
  ['304112','Petrol ( proti obvoznici )'],
  ['614012','Plečnikova cerkev ( proti obvoznici )'],
  ['614011','Plečnikova cerkev'],
  ['803121','Plešičeva'],
  ['803122','Plešičeva ( proti obvoznici )'],
  ['403031','Pod Golovcem'],
  ['403032','Pod Golovcem ( proti obvoznici )'],
  ['505112','Pod gozdom ( proti obvoznici )'],
  ['505111','Pod gozdom'],
  ['504072','Pod Hribom ( proti obvoznici )'],
  ['504071','Pod Hribom'],
  ['804191','Pod Kamno Gorico'],
  ['702012','Pod Rožnikom ( proti obvoznici )'],
  ['702011','Pod Rožnikom'],
  ['804031','Podgora'],
  ['804032','Podgora ( proti obvoznici )'],


  ['102051','Podmilščakova'],
  ['102052','Podmilščakova ( proti obvoznici )'],









  ['745052','Podpeč  ( proti obvoznici )'],
  ['745051','Podpeč'],








  ['804221','Podutik'],
  ['103061','Pohorskega bataljona'],
  ['103062','Pohorskega bataljona ( proti obvoznici )'],
  ['203011','Pokopališka'],
  ['203012','Pokopališka ( proti obvoznici )'],
  ['104121','Polanškova'],
  ['104122','Polanškova ( proti obvoznici )'],


  ['402022','Poliklinika ( proti obvoznici )'],
  ['402021','Poliklinika'],
  ['502011','Poljanska'],
  ['502012','Poljanska ( proti obvoznici )'],
  ['304071','Polje 1'],
  ['304074','Polje 2'],



  ['304081','Polje-kolodvor'],
  ['304082','Polje-kolodvor'],
  ['601011','Pošta'],


  ['303051','Pot na Fužine'],
  ['303052','Pot na Fužine ( proti obvoznici )'],
  ['603072','Pot na Rakovo jelšo ( proti obvoznici )'],
  ['603071','Pot na Rakovo jelšo'],
  ['104141','Pot v Hrastovec'],
  ['104142','Pot v Hrastovec ( proti obvoznici )'],
  ['104131','Pot v Smrečje'],
  ['104132','Pot v Smrečje ( proti obvoznici )'],







  ['304011','Preglov trg'],
  ['304012','Preglov trg ( proti obvoznici )'],
  ['202021','Prekmurska'],
  ['202022','Prekmurska ( proti obvoznici )'],










  ['604052','Pri Maranzu ( proti obvoznici )'],
  ['604051','Pri Maranzu'],
  ['704081','Pri Poku'],


  ['104113','Primožičeva'],
  ['602111','Privoz'],

  ['804021','Prušnikova'],
  ['804022','Prušnikova ( proti obvoznici )'],
  ['804181','Pržan'],
  ['103041','Puhova'],
  ['103042','Puhova ( proti obvoznici )'],
  ['704072','Radna'],
  ['503021','Rakovnik'],
  ['503022','Rakovnik ( proti obvoznici )'],


  ['104211','Rašica'],
  ['104212','Rašica ( proti obvoznici )'],
  ['505052','Razdrto ( proti obvoznici )'],
  ['505051','Razdrto'],




  ['100021','Razstavišče'],
  ['100022','Razstavišče ( proti obvoznici )'],
  ['204161','Reaktor'],






  ['204162','Reaktor ( proti obvoznici )'],
  ['505022','Reber pri Škofljici ( proti obvoznici )'],
  ['505021','Reber pri Škofljici'],
  ['803014','Remiza'],






  ['204031','Rog'],
  ['204032','Rog ( proti obvoznici )'],
  ['104111','Rogovilc'],
  ['104112','Rogovilc ( proti obvoznici )'],

  ['502021','Roška'],
  ['502024','Roška ( proti obvoznici )'],
  ['203022','Rožičeva'],
  ['203021','Rožičeva ( proti obvoznici )'],


  ['504031','Rudnik'],

  ['504032','Rudnik ( proti obvoznici )'],
  ['304031','Rusjanov trg'],
  ['304032','Rusjanov trg ( proti obvoznici )'],
  ['103131','Ruski car'],
  ['103132','Ruski car ( proti obvoznici )'],
  ['614062','Rutar ( proti obvoznici )'],
  ['614061','Rutar'],


  ['102011','Samova ( proti obvoznici )'],
  ['102012','Samova'],
  ['505071','Sap'],
  ['505072','Sap  ( proti obvoznici )'],
  ['204201','Saturnus'],
  ['104051','Sava'],
  ['104052','Sava ( proti obvoznici )'],

  ['104011','Savlje'],
  ['202031','Savske stolpnice'],
  ['202032','Savske stolpnice ( proti obvoznici )'],





  ['202041','Savsko naselje'],
  ['202042','Savsko naselje ( proti obvoznici )'],






  ['304131','Silos'],
  ['304132','Silos ( proti obvoznici )'],


  ['803011','Slovenija avto'],
  ['803012','Slovenija avto ( proti obvoznici )'],


  ['103071','Smelt'],
  ['103072','Smelt ( proti obvoznici )'],














  ['204071','Sneberje'],
  ['204072','Sneberje ( proti obvoznici )'],
  ['614092','Snoj ( proti obvoznici )'],
  ['614091','Snoj'],



  ['815022','Sp. Pirniče ( proti obvoznici )'],
  ['815021','Sp. Pirniče'],
  ['803171','Spar'],
  ['803172','Spar ( proti obvoznici )'],




  ['504021','Spodnji Rudnik'],
  ['504022','Spodnji Rudnik ( proti obvoznici )'],


  ['202043','Središka'],
  ['202044','Središka ( proti obvoznici )'],
  ['102041','Stadion'],
  ['102042','Stadion ( proti obvoznici )'],
  ['625032','Staje ( proti obvoznici )'],
  ['625031','Staje'],
  ['703072','Stan in dom ( proti obvoznici )'],
  ['703071','Stan in dom'],
  ['804061','Stanežiče'],
  ['804062','Stanežiče ( proti obvoznici )'],
  ['804361','Stanežiče 1'],
  ['802011','Stara cerkev'],
  ['802012','Stara cerkev ( proti obvoznici )'],
  ['505102','Stara pošta ( proti obvoznici )'],
  ['505101','Stara pošta'],
  ['103101','Stožice'],
  ['103102','Stožice ( proti obvoznici )'],
  ['503011','Strelišče'],
  ['503012','Strelišče ( proti obvoznici )'],
  ['502031','Streliška'],
  ['502032','Streliška ( proti obvoznici )'],
  ['304061','Studenec'],
  ['304062','Studenec ( proti obvoznici )'],




  ['204151','Šentjakob'],
  ['204152','Šentjakob ( proti obvoznici )'],

  ['804041','Šentvid'],
  ['804042','Šentvid ( proti obvoznici )'],




  ['803016','Šišenska'],
  ['515012','Škofljica'],
  ['505012','Škofljica Javornik ( proti obvoznici )'],






  ['505011','Škofljica Javornik'],
  ['515013','Škofljica obračališče'],
  ['504102','Škofljica Petkovšek ( proti obvoznici )'],
  ['504101','Škofljica Petkovšek'],
  ['515011','Škofljica Špica'],
  ['504112','Škofljica žaga ( proti obvoznici )'],
  ['504111','Škofljica žaga'],


  ['505062','Šmarje ( proti obvoznici )'],
  ['505061','Šmarje'],
  ['104191','Šmartno'],
  ['104192','Šmartno ( proti obvoznici )'],


  ['203041','Šola Jarše'],
  ['203042','Šola Jarše ( proti obvoznici )'],
  ['203044','Šola Jarše 1'],
  ['744011','Šolska'],
  ['744012','Šolska ( proti obvoznici )'],
  ['505032','Špilar ( proti obvoznici )'],
  ['505031','Špilar'],
  ['403043','Štepanja vas'],
  ['403042','Štepanja vas ( proti obvoznici )'],

  ['303041','Štepanjsko naselje'],

  ['702022','Študentsko naselje ( proti obvoznici )'],
  ['702021','Študentsko naselje'],


  ['804101','Tabor'],
  ['804102','Tabor ( proti obvoznici )'],

  ['804151','Tacen'],
  ['804152','Tacen ( proti obvoznici )'],
  ['804141','Tacenski most'],
  ['804142','Tacenski most ( proti obvoznici )'],

  ['500011','Tavčarjeva'],
  ['603141','Tbilisijska'],
  ['603142','Tbilisijska ( proti obvoznici )'],
  ['803071','Tehnounion'],





  ['803072','Tehnounion ( proti obvoznici )'],
  ['802061','Tiki'],
  ['802062','Tiki ( proti obvoznici )'],

  ['801011','Tivoli'],
  ['801012','Tivoli ( proti obvoznici )'],

  ['602042','Tobačna ( proti obvoznici )'],
  ['602041','Tobačna'],
  ['203081','Tomačevo'],
  ['203031','Tomačevska'],
  ['203032','Tomačevska ( proti obvoznici )'],
  ['103011','Toplarna'],
  ['103012','Toplarna ( proti obvoznici )'],
  ['102021','Topniška'],
  ['102022','Topniška ( proti obvoznici )'],
  ['103051','Tovarna Lek'],
  ['203062','Tovorni kolodvor'],
  ['203061','Tovorni kolodvor ( proti obvoznici )'],
  ['804011','Trata'],
  ['804012','Trata ( proti obvoznici )'],


  ['602121','Trnovo'],


  ['803101','Tržnica Koseze'],
  ['803102','Tržnica Koseze ( proti obvoznici )'],
  ['303011','Tržnica Moste'],
  ['303012','Tržnica Moste ( proti obvoznici )'],

  ['500012','Turist'],








  ['603082','Veliki štradon ( proti obvoznici )'],
  ['603081','Veliki štradon'],
  ['835011','Verje'],







  ['835012','Verje  ( proti obvoznici )'],


  ['304101','Vevče'],
  ['202011','Viadukt'],
  ['202012','Viadukt ( proti obvoznici )'],
  ['703092','Vič ( proti obvoznici )'],
  ['703091','Vič'],

  ['815011','Vikrče'],


  ['804051','Vižmarje'],




  ['505122','Vodičar'],
  ['102071','Vodovodna'],
  ['102072','Vodovodna ( proti obvoznici )'],






  ['203191','Yulon'],
  ['203192','Yulon ( proti obvoznici )'],
  ['204081','Zadobrova'],
  ['204082','Zadobrova ( proti obvoznici )'],

  ['204181','Zadružni dom'],





  ['204211','Zalog'],
  ['303021','Zaloška'],
  ['303024','Zaloška ( proti obvoznici )'],













  ['104171','Zasavska'],
  ['104172','Zasavska ( proti obvoznici )'],








  ['204191','Zeleni gaj'],
  ['204192','Zeleni gaj ( proti obvoznici )'],
  ['202051','Zelena jama'],


  ['104202','Zg. Gameljne ( proti obvoznici )'],
  ['104201','Zg. Gameljne'],
  ['815032','Zg. Pirniče ( proti obvoznici )'],
  ['815031','Zg. Pirniče'],
  ['815041','Zg. Pirniče Mihovec'],

  ['803092','Zgornja Šiška'],
  ['614052','Zidarjevec ( proti obvoznici )'],
  ['614051','Zidarjevec'],
  ['602092','Ziherlova ( proti obvoznici )'],
  ['602093','Ziherlova'],
  ['501022','Zmajski most ( proti obvoznici )'],
  ['501021','Zmajski most'],
  ['202061','Žale'],
  ['202062','Žale ( proti obvoznici )'],


  ['201011','Železna'],


  ['203151','Žito'],
  ['203152','Žito ( proti obvoznici )'],
  ['703131','Živalski vrt – ZOO'],
  ['703121','Živalski vrt'],
  ['703122','Živalski vrt ( proti obvoznici )'],

  ['800000','Štajerska'],
  ['800001','Draga'],
  ['700012','Gosposvetska'],
  ['700013','Gosposvetska ( proti obvoznici )'],
  ['800011','Sp. Gameljne 1'],
  ['800012','Sp. Gameljne 2'],
  ['800013','Sp. Gameljne 3'],
  ['800014','Na Žalah'],

  ['800016','BTC-Atlantis'],
  ['800017','Letališka'],
  ['800018','Opekarska'],

  ['800020','Svetčeva'],
  ['800021','Večna pot'],
  ['800022','I.C. Šiška'],


  ['800025','BTC-Merkur'],
  ['800026','Zavrh'],
  ['800027','Baragova']

];

//alert("Stations-->"+Stations.length)
//alert("StationsData-->"+StationsData.length)

var TransitPolyLinesColor=[];
TransitPolyLinesColor[0]="#393";
TransitPolyLinesColor[1]="#d8362b";
TransitPolyLinesColor[2]="#d8362b";
TransitPolyLinesColor[3]="#d8362b";
TransitPolyLinesColor[4]="#88883e";
TransitPolyLinesColor[5]="#ff5634";
TransitPolyLinesColor[6]="#ff5634";
TransitPolyLinesColor[7]="#ff7e42";
TransitPolyLinesColor[8]="#9750a6";
TransitPolyLinesColor[9]="#9a9b9e";
TransitPolyLinesColor[10]="#abb5b3";
TransitPolyLinesColor[11]="#38c5e0";
TransitPolyLinesColor[12]="#38c5e0";
TransitPolyLinesColor[13]="#1369b4";
TransitPolyLinesColor[14]="#7eb2d3";
TransitPolyLinesColor[15]="#f6c048";
TransitPolyLinesColor[16]="#f6c048";
TransitPolyLinesColor[17]="#1343a3";
TransitPolyLinesColor[18]="#d0d359";
TransitPolyLinesColor[19]="#fc85c0";
TransitPolyLinesColor[20]="#fb5cab";
TransitPolyLinesColor[21]="#9e2a96";
TransitPolyLinesColor[22]="#88522d";
TransitPolyLinesColor[23]="#88522d";
TransitPolyLinesColor[24]="#f19fbb";
TransitPolyLinesColor[25]="#f19fbb";
TransitPolyLinesColor[26]="#2d8b4f";
TransitPolyLinesColor[27]="#2d8b4f";
TransitPolyLinesColor[28]="#53bd50";
TransitPolyLinesColor[29]="#ffa540";
TransitPolyLinesColor[30]="#fb3099";
TransitPolyLinesColor[31]="#189dcf";
TransitPolyLinesColor[32]="#dc347b";
TransitPolyLinesColor[33]="#dc347b";

//var StationsData = [['42001','Dobova'],['42002','Brežice'],['42003','Libna'],['42004','Krško'],['42005','Brestanica'],['42006','Blanca'],['42100','Sevnica'],['42101','Breg'],['42102','Loka'],['42103','Radeče'],['42200','Zidani Most'],['42201','Hrastnik'],['42203','Trbovlje'],['42204','Zagorje'],['42206','Sava'],['42207','Litija'],['42208','Kresnice'],['42209','Jevnica'],['42210','Laze'],['42212','Ljubljana Polje'],['42222','Ljubljana Zalog'],['42300','Ljubljana'],['42302','Ljubljana Vižmarje'],['42303','Medno'],['42304','Medvode'],['42305','Reteče'],['42306','Škofja Loka'],['42307','Kranj'],['42309','Podnart'],['42310','Otoče'],['42311','Globoko'],['42312','Radovljica'],['42313','Lesce-Bled'],['42314','Žirovnica'],['42315','Slovenski Javornik'],['42316','Litostroj'],['42317','Ljubljana Stegne'],['42351','Ljubljana Črnuče'],['42352','Domžale'],['42353','Jarše-Mengeš'],['42354','Kamnik'],['42355','Kamnik mesto'],['42356','Kamnik Graben'],['42357','Ljubljana Brinje'],['42358','Trzin Mlake'],['42359','Trzin'],['42360','Rodica'],['42361','Homec pri Kamniku'],['42362','Šmarca'],['42363','Duplica-Bakovnik'],['42365','Ljubljana Ježica'],['42366','Trzin ind. cona'],['42400','Jesenice'],['42501','Rosalnice'],['42502','Metlika'],['42503','Dobravice'],['42504','Gradac'],['42505','Črnomelj'],['42506','Otovec'],['42507','Semič'],['42508','Rožni Dol'],['42509','Uršna sela'],['42510','Birčna vas'],['42511','Novo mesto Kandija'],['42512','Novo mesto Center'],['42600','Novo mesto'],['42601','Mirna Peč'],['42602','Ponikve na Dolenjskem'],['42603','Hudo'],['42700','Trebnje'],['42701','Štefan'],['42702','Velika Loka'],['42703','Šentlovrenc'],['42704','Gaber'],['42705','Radohova vas'],['42706','Šentvid pri Stični'],['42707','Ivančna Gorica'],['42708','Polževo'],['42709','Višnja Gora'],['42710','Žalna'],['42711','Mlačevo'],['42800','Grosuplje'],['42801','Šmarje-Sap'],['42802','Škofljica'],['42804','Ljubljana Rakovnik'],['42805','Ljubljana Vodmat'],['42901','Boštanj'],['42902','Jelovec'],['42903','Tržišče'],['42904','Pijavice'],['42905','Mokronog'],['42906','Šentrupert'],['42907','Mirna'],['42908','Gomila'],['42909','Trebnje Kamna Gora'],['43001','Rimske Toplice'],['43002','Laško'],['43100','Celje'],['43101','Štore'],['43102','Šentjur'],['43200','Grobelno'],['43201','Ponikva'],['43202','Dolga Gora'],['43203','Poljčane'],['43204','Slovenska Bistrica'],['43205','Ostrožno'],['43251','Šentvid pri Grobelnem'],['43252','Šmarje pri Jelšah'],['43300','Pragersko'],['43301','Rače'],['43302','Orehova vas'],['43303','Hoče'],['43304','Maribor Tezno'],['43351','Cirkovce'],['43352','Strnišče'],['43353','Kidričevo'],['43354','Hajdina'],['43355','Ptuj'],['43356','Moškanjci'],['43357','Osluševci'],['43358','Velika Nedelja'],['43359','Zamušani'],['43360','Šikole'],['43400','Maribor'],['43401','Maribor Studenci'],['43402','Limbuš'],['43403','Bistrica ob Dravi'],['43404','Ruše'],['43405','Fala'],['43406','Ruta'],['43407','Ožbalt'],['43408','Podvelka'],['43409','Vuhred elektrarna'],['43410','Vuhred'],['43411','Vuzenica'],['43412','Trbonje'],['43413','Maribor Tabor'],['43414','Marles'],['43415','Ruše tovarna'],['43416','Trbonjsko jezero'],['43417','Sveti Danijel'],['43418','Sveti Vid'],['43420','Maribor Sokolska'],['43451','Pesnica'],['43452','Cirknica'],['43453','Šentilj'],['43455','Košaki'],['43500','Dravograd'],['43501','Ravne na Koroškem'],['43502','Prevalje'],['43503','Holmec'],['43505','Podklanc'],['43506','Dobrije'],['43600','Ormož'],['43601','Pušenci'],['43602','Pavlovci'],['43603','Ivanjkovci'],['43604','Mekotnjak'],['43605','Ljutomer mesto'],['43651','Obrež'],['43652','Središče'],['43653','Frankovci'],['43700','Ljutomer'],['43701','Veržej'],['43702','Grlava'],['43703','Lipovci'],['43704','Murska Sobota'],['43771','Puconci'],['43774','Mačkovci'],['43775','Gornji Petrovci'],['43776','Šalovci'],['43777','Hodoš'],['43800','Stranje'],['43801','Mestinje'],['43802','Podplat'],['43803','Rogaška Slatina'],['43804','Rogatec'],['43805','Dobovec'],['43806','Sveti Rok ob Sotli'],['43807','Tekačevo'],['43808','Rjavica'],['43809','Vidina'],['43851','Pristava'],['43852','Sodna vas'],['43853','Podčetrtek'],['43854','Imeno'],['43855','Podčetrtek Toplice'],['43856','Atomske Toplice hotel'],['43901','Petrovče'],['43902','Žalec'],['43903','Šempeter v Savinjski dolini'],['43904','Polzela'],['43905','Šmartno ob Paki'],['43906','Paška vas'],['43907','Šoštanj'],['43909','Velenje Pesje'],['43910','Velenje'],['43911','Celje Lava'],['43912','Florjan'],['44001','Brezovica'],['44002','Notranje Gorice'],['44003','Preserje'],['44004','Borovnica'],['44005','Verd'],['44006','Logatec'],['44007','Planina'],['44008','Rakek'],['44009','Postojna'],['44010','Prestranek'],['44011','Ljubljana Tivoli'],['44100','Pivka'],['44101','Košana'],['44102','Gornje Ležeče'],['44200','Divača'],['44201','Rodik'],['44202','Hrpelje-Kozina'],['44251','Povir'],['44300','Prešnica'],['44301','Podgorje'],['44302','Zazid'],['44303','Rakitovec'],['44352','Koper'],['44356','Črnotiče'],['44357','Hrastovlje'],['44500','Sežana'],['44501','Kreplje'],['44502','Kopriva'],['44503','Štanjel'],['44504','Branik'],['44505','Steske'],['44506','Dornberk'],['44600','Prvačina'],['44601','Okroglica'],['44602','Volčja Draga'],['44603','Šempeter pri Gorici'],['44651','Batuje'],['44652','Ajdovščina'],['44653','Dornberk vas'],['44654','Kamnje'],['44655','Dobravlje'],['44656','Cesta'],['44700','Nova Gorica'],['44701','Solkan'],['44703','Plave'],['44704','Anhovo'],['44705','Kanal'],['44706','Avče'],['44707','Most na Soči'],['44708','Podmelec'],['44709','Grahovo'],['44710','Hudajužna'],['44711','Podbrdo'],['44712','Bohinjska Bistrica'],['44713','Nomenj'],['44715','Bohinjska Bela'],['44716','Bled Jezero'],['44717','Podhom'],['44718','Vintgar'],['44719','Kočna'],['44800','Dutovlje'],['44901','Narin'],['44902','Kilovče'],['44903','Ilirska Bistrica'],['99998','Ljubljana Moste (BTC)'] ];

//var Stations =[new google.maps.LatLng(45.8985,15.655),new google.maps.LatLng(45.9238,15.59),new google.maps.LatLng(45.9454,15.5403),new google.maps.LatLng(45.9562,15.4934),new google.maps.LatLng(45.9874,15.4701),new google.maps.LatLng(45.9899,15.3959),new google.maps.LatLng(46.0094,15.3012),new google.maps.LatLng(46.0417,15.2356),new google.maps.LatLng(46.0535,15.2055),new google.maps.LatLng(46.0719,15.1829),new google.maps.LatLng(46.0856,15.1702),new google.maps.LatLng(46.1226,15.0935),new google.maps.LatLng(46.1263,15.0368),new google.maps.LatLng(46.1206,14.9911),new google.maps.LatLng(46.0891,14.8999),new google.maps.LatLng(46.0582,14.8251),new google.maps.LatLng(46.103,14.7917),new google.maps.LatLng(46.0842,14.7367),new google.maps.LatLng(46.0883,14.6876),new google.maps.LatLng(46.0596,14.5832),new google.maps.LatLng(46.0596,14.6152),new google.maps.LatLng(46.0587,14.5127),new google.maps.LatLng(46.1004,14.4645),new google.maps.LatLng(46.1223,14.44),new google.maps.LatLng(46.1379,14.4122),new google.maps.LatLng(46.1565,14.3711),new google.maps.LatLng(46.1746,14.3346),new google.maps.LatLng(46.239,14.3481),new google.maps.LatLng(46.294,14.2584),new google.maps.LatLng(46.311,14.2324),new google.maps.LatLng(46.3233,14.2084),new google.maps.LatLng(46.3404,14.1737),new google.maps.LatLng(46.3604,14.1581),new google.maps.LatLng(46.4019,14.1356),new google.maps.LatLng(46.4272,14.0891),new google.maps.LatLng(46.077,14.4901),new google.maps.LatLng(46.0868,14.4799),new google.maps.LatLng(46.1009,14.5264),new google.maps.LatLng(46.1396,14.5924),new google.maps.LatLng(46.1657,14.594),new google.maps.LatLng(46.2208,14.6036),new google.maps.LatLng(46.2249,14.6092),new google.maps.LatLng(46.2289,14.6095),new google.maps.LatLng(46.0768,14.5032),new google.maps.LatLng(46.1287,14.5599),new google.maps.LatLng(46.1328,14.5677),new google.maps.LatLng(46.1491,14.5925),new google.maps.LatLng(46.1799,14.5907),new google.maps.LatLng(46.1926,14.5882),new google.maps.LatLng(46.2066,14.5945),new google.maps.LatLng(46.0887,14.507),new google.maps.LatLng(46.1189,14.5508),new google.maps.LatLng(46.4361,14.0545),new google.maps.LatLng(45.6488,15.3362),new google.maps.LatLng(45.6424,15.3231),new google.maps.LatLng(45.6323,15.2698),new google.maps.LatLng(45.6164,15.2414),new google.maps.LatLng(45.58,15.191),new google.maps.LatLng(45.5989,15.1615),new google.maps.LatLng(45.6432,15.1622),new google.maps.LatLng(45.682,15.1483),new google.maps.LatLng(45.7146,15.1278),new google.maps.LatLng(45.7579,15.1481),new google.maps.LatLng(45.7999,15.1606),new google.maps.LatLng(45.8047,15.162),new google.maps.LatLng(45.8108,15.1556),new google.maps.LatLng(45.8668,15.0914),new google.maps.LatLng(45.8978,15.0427),new google.maps.LatLng(45.8339,15.1361),new google.maps.LatLng(45.9067,15.0086),new google.maps.LatLng(45.9114,14.9809),new google.maps.LatLng(45.9321,14.9693),new google.maps.LatLng(45.938,14.941),new google.maps.LatLng(45.9405,14.9092),new google.maps.LatLng(45.9432,14.8732),new google.maps.LatLng(45.9408,14.8501),new google.maps.LatLng(45.938,14.803),new google.maps.LatLng(45.9407,14.7791),new google.maps.LatLng(45.9581,14.7424),new google.maps.LatLng(45.9396,14.7076),new google.maps.LatLng(45.9403,14.6852),new google.maps.LatLng(45.9559,14.6522),new google.maps.LatLng(45.9751,14.6176),new google.maps.LatLng(45.9843,14.5727),new google.maps.LatLng(46.0366,14.5195),new google.maps.LatLng(46.0558,14.5291),new google.maps.LatLng(46.0063,15.2897),new google.maps.LatLng(45.9892,15.2399),new google.maps.LatLng(45.9664,15.1908),new google.maps.LatLng(45.9682,15.1633),new google.maps.LatLng(45.958,15.1215),new google.maps.LatLng(45.9595,15.0877),new google.maps.LatLng(45.9492,15.0625),new google.maps.LatLng(45.9348,15.0449),new google.maps.LatLng(45.9061,15.0245),new google.maps.LatLng(46.1255,15.1992),new google.maps.LatLng(46.1549,15.2319),new google.maps.LatLng(46.2286,15.2682),new google.maps.LatLng(46.2215,15.3214),new google.maps.LatLng(46.213,15.396),new google.maps.LatLng(46.2131,15.4395),new google.maps.LatLng(46.2481,15.4304),new google.maps.LatLng(46.2775,15.4981),new google.maps.LatLng(46.3138,15.5763),new google.maps.LatLng(46.3631,15.5981),new google.maps.LatLng(46.264,15.4733),new google.maps.LatLng(46.2274,15.4703),new google.maps.LatLng(46.2308,15.5163),new google.maps.LatLng(46.3951,15.6621),new google.maps.LatLng(46.454,15.6638),new google.maps.LatLng(46.4734,15.6635),new google.maps.LatLng(46.501,15.6629),new google.maps.LatLng(46.5389,15.6512),new google.maps.LatLng(46.4009,15.7203),new google.maps.LatLng(46.4008,15.7658),new google.maps.LatLng(46.4006,15.8007),new google.maps.LatLng(46.4032,15.8551),new google.maps.LatLng(46.4224,15.8787),new google.maps.LatLng(46.4233,15.9836),new google.maps.LatLng(46.4195,16.048),new google.maps.LatLng(46.4152,16.1052),new google.maps.LatLng(46.4203,16.0343),new google.maps.LatLng(46.401,15.6973),new google.maps.LatLng(46.5622,15.6585),new google.maps.LatLng(46.5542,15.6348),new google.maps.LatLng(46.5588,15.5831),new google.maps.LatLng(46.5577,15.5542),new google.maps.LatLng(46.5408,15.5039),new google.maps.LatLng(46.548,15.4516),new google.maps.LatLng(46.563,15.4317),new google.maps.LatLng(46.5749,15.4064),new google.maps.LatLng(46.5906,15.3306),new google.maps.LatLng(46.5865,15.2799),new google.maps.LatLng(46.5965,15.236),new google.maps.LatLng(46.5936,15.1585),new google.maps.LatLng(46.6053,15.1107),new google.maps.LatLng(46.5511,15.6443),new google.maps.LatLng(46.5584,15.6013),new google.maps.LatLng(46.5474,15.5214),new google.maps.LatLng(46.594,15.1259),new google.maps.LatLng(46.6029,15.0784),new google.maps.LatLng(46.604,15.1948),new google.maps.LatLng(46.5563,15.6246),new google.maps.LatLng(46.6099,15.6805),new google.maps.LatLng(46.6542,15.6601),new google.maps.LatLng(46.6744,15.6579),new google.maps.LatLng(46.5758,15.6595),new google.maps.LatLng(46.587,15.0269),new google.maps.LatLng(46.5471,14.9634),new google.maps.LatLng(46.55,14.9218),new google.maps.LatLng(46.5664,14.8414),new google.maps.LatLng(46.5737,15.0209),new google.maps.LatLng(46.5506,14.9867),new google.maps.LatLng(46.4031,16.1561),new google.maps.LatLng(46.4098,16.1762),new google.maps.LatLng(46.4265,16.1791),new google.maps.LatLng(46.4586,16.1567),new google.maps.LatLng(46.5009,16.1554),new google.maps.LatLng(46.521,16.1997),new google.maps.LatLng(46.3911,16.2257),new google.maps.LatLng(46.3891,16.2772),new google.maps.LatLng(46.395,16.1947),new google.maps.LatLng(46.5288,16.1893),new google.maps.LatLng(46.5743,16.1821),new google.maps.LatLng(46.5571,16.1742),new google.maps.LatLng(46.6234,16.2098),new google.maps.LatLng(46.6592,16.1718),new google.maps.LatLng(46.7034,16.1537),new google.maps.LatLng(46.7832,16.1646),new google.maps.LatLng(46.8008,16.2184),new google.maps.LatLng(46.821,16.2815),new google.maps.LatLng(46.8204,16.3292),new google.maps.LatLng(46.2174,15.5603),new google.maps.LatLng(46.235,15.5644),new google.maps.LatLng(46.244,15.5729),new google.maps.LatLng(46.2318,15.6385),new google.maps.LatLng(46.2244,15.6979),new google.maps.LatLng(46.2175,15.7549),new google.maps.LatLng(46.2088,15.7601),new google.maps.LatLng(46.2399,15.6182),new google.maps.LatLng(46.223,15.6613),new google.maps.LatLng(46.2193,15.7357),new google.maps.LatLng(46.1936,15.5941),new google.maps.LatLng(46.1759,15.6021),new google.maps.LatLng(46.1502,15.5992),new google.maps.LatLng(46.1271,15.6012),new google.maps.LatLng(46.1659,15.6047),new google.maps.LatLng(46.1569,15.6092),new google.maps.LatLng(46.2461,15.1898),new google.maps.LatLng(46.2494,15.1671),new google.maps.LatLng(46.2606,15.1122),new google.maps.LatLng(46.2824,15.0662),new google.maps.LatLng(46.3281,15.0379),new google.maps.LatLng(46.3415,15.0197),new google.maps.LatLng(46.3769,15.0497),new google.maps.LatLng(46.3681,15.0814),new google.maps.LatLng(46.3635,15.1043),new google.maps.LatLng(46.2371,15.245),new google.maps.LatLng(46.3812,15.0299),new google.maps.LatLng(46.0213,14.4265),new google.maps.LatLng(45.9876,14.4026),new google.maps.LatLng(45.9657,14.3961),new google.maps.LatLng(45.9215,14.3682),new google.maps.LatLng(45.948,14.3039),new google.maps.LatLng(45.9177,14.2358),new google.maps.LatLng(45.8618,14.275),new google.maps.LatLng(45.8157,14.3128),new google.maps.LatLng(45.7731,14.2217),new google.maps.LatLng(45.7285,14.1855),new google.maps.LatLng(46.0499,14.4933),new google.maps.LatLng(45.6755,14.1914),new google.maps.LatLng(45.6704,14.1056),new google.maps.LatLng(45.6664,14.0722),new google.maps.LatLng(45.6815,13.9649),new google.maps.LatLng(45.6272,13.9752),new google.maps.LatLng(45.6037,13.9353),new google.maps.LatLng(45.6994,13.9305),new google.maps.LatLng(45.5642,13.9422),new google.maps.LatLng(45.5345,13.9429),new google.maps.LatLng(45.4984,13.9439),new google.maps.LatLng(45.4661,13.9551),new google.maps.LatLng(45.539,13.7384),new google.maps.LatLng(45.552,13.8915),new google.maps.LatLng(45.5011,13.9092),new google.maps.LatLng(45.7041,13.8634),new google.maps.LatLng(45.7421,13.8273),new google.maps.LatLng(45.7849,13.8317),new google.maps.LatLng(45.818,13.8481),new google.maps.LatLng(45.8559,13.7842),new google.maps.LatLng(45.876,13.7575),new google.maps.LatLng(45.8858,13.7342),new google.maps.LatLng(45.8875,13.7227),new google.maps.LatLng(45.8991,13.6902),new google.maps.LatLng(45.9058,13.6756),new google.maps.LatLng(45.9282,13.6469),new google.maps.LatLng(45.8867,13.772),new google.maps.LatLng(45.8863,13.9024),new google.maps.LatLng(45.89,13.7361),new google.maps.LatLng(45.877,13.8175),new google.maps.LatLng(45.8825,13.8453),new google.maps.LatLng(45.8868,13.8653),new google.maps.LatLng(45.9552,13.6357),new google.maps.LatLng(45.9727,13.6462),new google.maps.LatLng(46.0461,13.5897),new google.maps.LatLng(46.0581,13.6173),new google.maps.LatLng(46.0837,13.6316),new google.maps.LatLng(46.108,13.6844),new google.maps.LatLng(46.1464,13.7593),new google.maps.LatLng(46.1594,13.8139),new google.maps.LatLng(46.1514,13.8569),new google.maps.LatLng(46.1797,13.9198),new google.maps.LatLng(46.2092,13.967),new google.maps.LatLng(46.2742,13.9591),new google.maps.LatLng(46.289,14.0027),new google.maps.LatLng(46.3384,14.0605),new google.maps.LatLng(46.3683,14.0823),new google.maps.LatLng(46.3875,14.0943),new google.maps.LatLng(46.4104,14.0987),new google.maps.LatLng(46.4238,14.0786),new google.maps.LatLng(45.7649,13.8262),new google.maps.LatLng(45.6413,14.1981),new google.maps.LatLng(45.6157,14.1859),new google.maps.LatLng(45.5692,14.2359),new google.maps.LatLng(46.0634,14.5484 )]; var StationsData = [['42001','Dobova'],['42002','Brežice'],['42003','Libna'],['42004','Krško'],['42005','Brestanica'],['42006','Blanca'],['42100','Sevnica'],['42101','Breg'],['42102','Loka'],['42103','Radeče'],['42200','Zidani Most'],['42201','Hrastnik'],['42203','Trbovlje'],['42204','Zagorje'],['42206','Sava'],['42207','Litija'],['42208','Kresnice'],['42209','Jevnica'],['42210','Laze'],['42212','Ljubljana Polje'],['42222','Ljubljana Zalog'],['42300','Ljubljana'],['42302','Ljubljana Vižmarje'],['42303','Medno'],['42304','Medvode'],['42305','Reteče'],['42306','Škofja Loka'],['42307','Kranj'],['42309','Podnart'],['42310','Otoče'],['42311','Globoko'],['42312','Radovljica'],['42313','Lesce-Bled'],['42314','Žirovnica'],['42315','Slovenski Javornik'],['42316','Litostroj'],['42317','Ljubljana Stegne'],['42351','Ljubljana Črnuče'],['42352','Domžale'],['42353','Jarše-Mengeš'],['42354','Kamnik'],['42355','Kamnik mesto'],['42356','Kamnik Graben'],['42357','Ljubljana Brinje'],['42358','Trzin Mlake'],['42359','Trzin'],['42360','Rodica'],['42361','Homec pri Kamniku'],['42362','Šmarca'],['42363','Duplica-Bakovnik'],['42365','Ljubljana Ježica'],['42366','Trzin ind. cona'],['42400','Jesenice'],['42501','Rosalnice'],['42502','Metlika'],['42503','Dobravice'],['42504','Gradac'],['42505','Črnomelj'],['42506','Otovec'],['42507','Semič'],['42508','Rožni Dol'],['42509','Uršna sela'],['42510','Birčna vas'],['42511','Novo mesto Kandija'],['42512','Novo mesto Center'],['42600','Novo mesto'],['42601','Mirna Peč'],['42602','Ponikve na Dolenjskem'],['42603','Hudo'],['42700','Trebnje'],['42701','Štefan'],['42702','Velika Loka'],['42703','Šentlovrenc'],['42704','Gaber'],['42705','Radohova vas'],['42706','Šentvid pri Stični'],['42707','Ivančna Gorica'],['42708','Polževo'],['42709','Višnja Gora'],['42710','Žalna'],['42711','Mlačevo'],['42800','Grosuplje'],['42801','Šmarje-Sap'],['42802','Škofljica'],['42804','Ljubljana Rakovnik'],['42805','Ljubljana Vodmat'],['42901','Boštanj'],['42902','Jelovec'],['42903','Tržišče'],['42904','Pijavice'],['42905','Mokronog'],['42906','Šentrupert'],['42907','Mirna'],['42908','Gomila'],['42909','Trebnje Kamna Gora'],['43001','Rimske Toplice'],['43002','Laško'],['43100','Celje'],['43101','Štore'],['43102','Šentjur'],['43200','Grobelno'],['43201','Ponikva'],['43202','Dolga Gora'],['43203','Poljčane'],['43204','Slovenska Bistrica'],['43205','Ostrožno'],['43251','Šentvid pri Grobelnem'],['43252','Šmarje pri Jelšah'],['43300','Pragersko'],['43301','Rače'],['43302','Orehova vas'],['43303','Hoče'],['43304','Maribor Tezno'],['43351','Cirkovce'],['43352','Strnišče'],['43353','Kidričevo'],['43354','Hajdina'],['43355','Ptuj'],['43356','Moškanjci'],['43357','Osluševci'],['43358','Velika Nedelja'],['43359','Zamušani'],['43360','Šikole'],['43400','Maribor'],['43401','Maribor Studenci'],['43402','Limbuš'],['43403','Bistrica ob Dravi'],['43404','Ruše'],['43405','Fala'],['43406','Ruta'],['43407','Ožbalt'],['43408','Podvelka'],['43409','Vuhred elektrarna'],['43410','Vuhred'],['43411','Vuzenica'],['43412','Trbonje'],['43413','Maribor Tabor'],['43414','Marles'],['43415','Ruše tovarna'],['43416','Trbonjsko jezero'],['43417','Sveti Danijel'],['43418','Sveti Vid'],['43420','Maribor Sokolska'],['43451','Pesnica'],['43452','Cirknica'],['43453','Šentilj'],['43455','Košaki'],['43500','Dravograd'],['43501','Ravne na Koroškem'],['43502','Prevalje'],['43503','Holmec'],['43505','Podklanc'],['43506','Dobrije'],['43600','Ormož'],['43601','Pušenci'],['43602','Pavlovci'],['43603','Ivanjkovci'],['43604','Mekotnjak'],['43605','Ljutomer mesto'],['43651','Obrež'],['43652','Središče'],['43653','Frankovci'],['43700','Ljutomer'],['43701','Veržej'],['43702','Grlava'],['43703','Lipovci'],['43704','Murska Sobota'],['43771','Puconci'],['43774','Mačkovci'],['43775','Gornji Petrovci'],['43776','Šalovci'],['43777','Hodoš'],['43800','Stranje'],['43801','Mestinje'],['43802','Podplat'],['43803','Rogaška Slatina'],['43804','Rogatec'],['43805','Dobovec'],['43806','Sveti Rok ob Sotli'],['43807','Tekačevo'],['43808','Rjavica'],['43809','Vidina'],['43851','Pristava'],['43852','Sodna vas'],['43853','Podčetrtek'],['43854','Imeno'],['43855','Podčetrtek Toplice'],['43856','Atomske Toplice hotel'],['43901','Petrovče'],['43902','Žalec'],['43903','Šempeter v Savinjski dolini'],['43904','Polzela'],['43905','Šmartno ob Paki'],['43906','Paška vas'],['43907','Šoštanj'],['43909','Velenje Pesje'],['43910','Velenje'],['43911','Celje Lava'],['43912','Florjan'],['44001','Brezovica'],['44002','Notranje Gorice'],['44003','Preserje'],['44004','Borovnica'],['44005','Verd'],['44006','Logatec'],['44007','Planina'],['44008','Rakek'],['44009','Postojna'],['44010','Prestranek'],['44011','Ljubljana Tivoli'],['44100','Pivka'],['44101','Košana'],['44102','Gornje Ležeče'],['44200','Divača'],['44201','Rodik'],['44202','Hrpelje-Kozina'],['44251','Povir'],['44300','Prešnica'],['44301','Podgorje'],['44302','Zazid'],['44303','Rakitovec'],['44352','Koper'],['44356','Črnotiče'],['44357','Hrastovlje'],['44500','Sežana'],['44501','Kreplje'],['44502','Kopriva'],['44503','Štanjel'],['44504','Branik'],['44505','Steske'],['44506','Dornberk'],['44600','Prvačina'],['44601','Okroglica'],['44602','Volčja Draga'],['44603','Šempeter pri Gorici'],['44651','Batuje'],['44652','Ajdovščina'],['44653','Dornberk vas'],['44654','Kamnje'],['44655','Dobravlje'],['44656','Cesta'],['44700','Nova Gorica'],['44701','Solkan'],['44703','Plave'],['44704','Anhovo'],['44705','Kanal'],['44706','Avče'],['44707','Most na Soči'],['44708','Podmelec'],['44709','Grahovo'],['44710','Hudajužna'],['44711','Podbrdo'],['44712','Bohinjska Bistrica'],['44713','Nomenj'],['44715','Bohinjska Bela'],['44716','Bled Jezero'],['44717','Podhom'],['44718','Vintgar'],['44719','Kočna'],['44800','Dutovlje'],['44901','Narin'],['44902','Kilovče'],['44903','Ilirska Bistrica'],['99998','Ljubljana Moste (BTC)'] ];

var StationsInfoText = [];

var i=1;
for (i=0; i<StationsData.length; i++ )
{
    StationsInfoText.push( "Naslednja postaja : " + StationsData[i][1] + "<br/>" +
            "ID: " + StationsData[i][0] + "<br/>" +
            "Name: " + StationsData[i][1] +
            "Latitude:"+Stations[i].lat()+"<br/>"+
            "Longitude:"+Stations[i].lng()+"" );
}
