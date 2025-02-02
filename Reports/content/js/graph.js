/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 271.0, "minX": 0.0, "maxY": 2296.0, "series": [{"data": [[0.0, 271.0], [0.1, 273.0], [0.2, 274.0], [0.3, 274.0], [0.4, 274.0], [0.5, 275.0], [0.6, 275.0], [0.7, 275.0], [0.8, 275.0], [0.9, 276.0], [1.0, 276.0], [1.1, 276.0], [1.2, 276.0], [1.3, 277.0], [1.4, 277.0], [1.5, 277.0], [1.6, 277.0], [1.7, 277.0], [1.8, 277.0], [1.9, 277.0], [2.0, 277.0], [2.1, 278.0], [2.2, 278.0], [2.3, 278.0], [2.4, 278.0], [2.5, 278.0], [2.6, 278.0], [2.7, 279.0], [2.8, 279.0], [2.9, 279.0], [3.0, 279.0], [3.1, 279.0], [3.2, 279.0], [3.3, 279.0], [3.4, 279.0], [3.5, 279.0], [3.6, 279.0], [3.7, 279.0], [3.8, 279.0], [3.9, 279.0], [4.0, 280.0], [4.1, 280.0], [4.2, 280.0], [4.3, 280.0], [4.4, 280.0], [4.5, 280.0], [4.6, 280.0], [4.7, 280.0], [4.8, 280.0], [4.9, 280.0], [5.0, 280.0], [5.1, 280.0], [5.2, 280.0], [5.3, 281.0], [5.4, 281.0], [5.5, 281.0], [5.6, 281.0], [5.7, 281.0], [5.8, 281.0], [5.9, 281.0], [6.0, 281.0], [6.1, 281.0], [6.2, 281.0], [6.3, 281.0], [6.4, 281.0], [6.5, 281.0], [6.6, 282.0], [6.7, 282.0], [6.8, 282.0], [6.9, 282.0], [7.0, 282.0], [7.1, 282.0], [7.2, 282.0], [7.3, 282.0], [7.4, 282.0], [7.5, 282.0], [7.6, 282.0], [7.7, 282.0], [7.8, 282.0], [7.9, 282.0], [8.0, 283.0], [8.1, 283.0], [8.2, 283.0], [8.3, 283.0], [8.4, 283.0], [8.5, 283.0], [8.6, 283.0], [8.7, 283.0], [8.8, 283.0], [8.9, 283.0], [9.0, 283.0], [9.1, 283.0], [9.2, 283.0], [9.3, 283.0], [9.4, 283.0], [9.5, 283.0], [9.6, 283.0], [9.7, 283.0], [9.8, 284.0], [9.9, 284.0], [10.0, 284.0], [10.1, 284.0], [10.2, 284.0], [10.3, 284.0], [10.4, 284.0], [10.5, 284.0], [10.6, 284.0], [10.7, 284.0], [10.8, 284.0], [10.9, 284.0], [11.0, 284.0], [11.1, 284.0], [11.2, 284.0], [11.3, 285.0], [11.4, 285.0], [11.5, 285.0], [11.6, 285.0], [11.7, 285.0], [11.8, 285.0], [11.9, 285.0], [12.0, 285.0], [12.1, 285.0], [12.2, 285.0], [12.3, 285.0], [12.4, 285.0], [12.5, 285.0], [12.6, 285.0], [12.7, 285.0], [12.8, 285.0], [12.9, 285.0], [13.0, 285.0], [13.1, 285.0], [13.2, 285.0], [13.3, 285.0], [13.4, 285.0], [13.5, 285.0], [13.6, 286.0], [13.7, 286.0], [13.8, 286.0], [13.9, 286.0], [14.0, 286.0], [14.1, 286.0], [14.2, 286.0], [14.3, 286.0], [14.4, 286.0], [14.5, 286.0], [14.6, 286.0], [14.7, 286.0], [14.8, 286.0], [14.9, 286.0], [15.0, 286.0], [15.1, 286.0], [15.2, 286.0], [15.3, 286.0], [15.4, 286.0], [15.5, 287.0], [15.6, 287.0], [15.7, 287.0], [15.8, 287.0], [15.9, 287.0], [16.0, 287.0], [16.1, 287.0], [16.2, 287.0], [16.3, 287.0], [16.4, 287.0], [16.5, 287.0], [16.6, 287.0], [16.7, 287.0], [16.8, 287.0], [16.9, 287.0], [17.0, 287.0], [17.1, 287.0], [17.2, 287.0], [17.3, 287.0], [17.4, 287.0], [17.5, 288.0], [17.6, 288.0], [17.7, 288.0], [17.8, 288.0], [17.9, 288.0], [18.0, 288.0], [18.1, 288.0], [18.2, 288.0], [18.3, 288.0], [18.4, 288.0], [18.5, 288.0], [18.6, 288.0], [18.7, 288.0], [18.8, 288.0], [18.9, 288.0], [19.0, 288.0], [19.1, 288.0], [19.2, 288.0], [19.3, 288.0], [19.4, 288.0], [19.5, 288.0], [19.6, 288.0], [19.7, 289.0], [19.8, 289.0], [19.9, 289.0], [20.0, 289.0], [20.1, 289.0], [20.2, 289.0], [20.3, 289.0], [20.4, 289.0], [20.5, 289.0], [20.6, 289.0], [20.7, 289.0], [20.8, 289.0], [20.9, 289.0], [21.0, 289.0], [21.1, 289.0], [21.2, 289.0], [21.3, 289.0], [21.4, 289.0], [21.5, 290.0], [21.6, 290.0], [21.7, 290.0], [21.8, 290.0], [21.9, 290.0], [22.0, 290.0], [22.1, 290.0], [22.2, 290.0], [22.3, 290.0], [22.4, 290.0], [22.5, 290.0], [22.6, 290.0], [22.7, 290.0], [22.8, 290.0], [22.9, 290.0], [23.0, 290.0], [23.1, 290.0], [23.2, 290.0], [23.3, 290.0], [23.4, 290.0], [23.5, 290.0], [23.6, 291.0], [23.7, 291.0], [23.8, 291.0], [23.9, 291.0], [24.0, 291.0], [24.1, 291.0], [24.2, 291.0], [24.3, 291.0], [24.4, 291.0], [24.5, 291.0], [24.6, 291.0], [24.7, 291.0], [24.8, 291.0], [24.9, 291.0], [25.0, 291.0], [25.1, 291.0], [25.2, 291.0], [25.3, 291.0], [25.4, 291.0], [25.5, 291.0], [25.6, 291.0], [25.7, 291.0], [25.8, 292.0], [25.9, 292.0], [26.0, 292.0], [26.1, 292.0], [26.2, 292.0], [26.3, 292.0], [26.4, 292.0], [26.5, 292.0], [26.6, 292.0], [26.7, 292.0], [26.8, 292.0], [26.9, 292.0], [27.0, 292.0], [27.1, 292.0], [27.2, 292.0], [27.3, 292.0], [27.4, 293.0], [27.5, 293.0], [27.6, 293.0], [27.7, 293.0], [27.8, 293.0], [27.9, 293.0], [28.0, 293.0], [28.1, 293.0], [28.2, 293.0], [28.3, 293.0], [28.4, 293.0], [28.5, 293.0], [28.6, 293.0], [28.7, 293.0], [28.8, 293.0], [28.9, 293.0], [29.0, 293.0], [29.1, 293.0], [29.2, 293.0], [29.3, 294.0], [29.4, 294.0], [29.5, 294.0], [29.6, 294.0], [29.7, 294.0], [29.8, 294.0], [29.9, 294.0], [30.0, 294.0], [30.1, 294.0], [30.2, 294.0], [30.3, 294.0], [30.4, 294.0], [30.5, 294.0], [30.6, 294.0], [30.7, 294.0], [30.8, 294.0], [30.9, 294.0], [31.0, 294.0], [31.1, 295.0], [31.2, 295.0], [31.3, 295.0], [31.4, 295.0], [31.5, 295.0], [31.6, 295.0], [31.7, 295.0], [31.8, 295.0], [31.9, 295.0], [32.0, 295.0], [32.1, 295.0], [32.2, 295.0], [32.3, 295.0], [32.4, 295.0], [32.5, 295.0], [32.6, 295.0], [32.7, 295.0], [32.8, 295.0], [32.9, 295.0], [33.0, 296.0], [33.1, 296.0], [33.2, 296.0], [33.3, 296.0], [33.4, 296.0], [33.5, 296.0], [33.6, 296.0], [33.7, 296.0], [33.8, 296.0], [33.9, 296.0], [34.0, 296.0], [34.1, 296.0], [34.2, 296.0], [34.3, 296.0], [34.4, 296.0], [34.5, 296.0], [34.6, 297.0], [34.7, 297.0], [34.8, 297.0], [34.9, 297.0], [35.0, 297.0], [35.1, 297.0], [35.2, 297.0], [35.3, 297.0], [35.4, 297.0], [35.5, 297.0], [35.6, 297.0], [35.7, 297.0], [35.8, 297.0], [35.9, 297.0], [36.0, 297.0], [36.1, 297.0], [36.2, 297.0], [36.3, 297.0], [36.4, 298.0], [36.5, 298.0], [36.6, 298.0], [36.7, 298.0], [36.8, 298.0], [36.9, 298.0], [37.0, 298.0], [37.1, 298.0], [37.2, 298.0], [37.3, 298.0], [37.4, 298.0], [37.5, 298.0], [37.6, 298.0], [37.7, 298.0], [37.8, 298.0], [37.9, 298.0], [38.0, 298.0], [38.1, 299.0], [38.2, 299.0], [38.3, 299.0], [38.4, 299.0], [38.5, 299.0], [38.6, 299.0], [38.7, 299.0], [38.8, 299.0], [38.9, 299.0], [39.0, 299.0], [39.1, 299.0], [39.2, 299.0], [39.3, 299.0], [39.4, 299.0], [39.5, 299.0], [39.6, 299.0], [39.7, 299.0], [39.8, 299.0], [39.9, 300.0], [40.0, 300.0], [40.1, 300.0], [40.2, 300.0], [40.3, 300.0], [40.4, 300.0], [40.5, 300.0], [40.6, 300.0], [40.7, 300.0], [40.8, 300.0], [40.9, 300.0], [41.0, 300.0], [41.1, 300.0], [41.2, 301.0], [41.3, 301.0], [41.4, 301.0], [41.5, 301.0], [41.6, 301.0], [41.7, 301.0], [41.8, 301.0], [41.9, 301.0], [42.0, 301.0], [42.1, 301.0], [42.2, 301.0], [42.3, 301.0], [42.4, 302.0], [42.5, 302.0], [42.6, 302.0], [42.7, 302.0], [42.8, 302.0], [42.9, 302.0], [43.0, 302.0], [43.1, 302.0], [43.2, 302.0], [43.3, 302.0], [43.4, 302.0], [43.5, 302.0], [43.6, 302.0], [43.7, 302.0], [43.8, 303.0], [43.9, 303.0], [44.0, 303.0], [44.1, 303.0], [44.2, 303.0], [44.3, 303.0], [44.4, 303.0], [44.5, 303.0], [44.6, 303.0], [44.7, 303.0], [44.8, 303.0], [44.9, 304.0], [45.0, 304.0], [45.1, 304.0], [45.2, 304.0], [45.3, 304.0], [45.4, 304.0], [45.5, 304.0], [45.6, 304.0], [45.7, 304.0], [45.8, 304.0], [45.9, 305.0], [46.0, 305.0], [46.1, 305.0], [46.2, 305.0], [46.3, 305.0], [46.4, 305.0], [46.5, 305.0], [46.6, 305.0], [46.7, 305.0], [46.8, 305.0], [46.9, 305.0], [47.0, 305.0], [47.1, 306.0], [47.2, 306.0], [47.3, 306.0], [47.4, 306.0], [47.5, 306.0], [47.6, 306.0], [47.7, 306.0], [47.8, 306.0], [47.9, 307.0], [48.0, 307.0], [48.1, 307.0], [48.2, 307.0], [48.3, 307.0], [48.4, 307.0], [48.5, 307.0], [48.6, 307.0], [48.7, 307.0], [48.8, 307.0], [48.9, 307.0], [49.0, 307.0], [49.1, 308.0], [49.2, 308.0], [49.3, 308.0], [49.4, 308.0], [49.5, 308.0], [49.6, 308.0], [49.7, 308.0], [49.8, 308.0], [49.9, 308.0], [50.0, 308.0], [50.1, 308.0], [50.2, 309.0], [50.3, 309.0], [50.4, 309.0], [50.5, 309.0], [50.6, 309.0], [50.7, 309.0], [50.8, 309.0], [50.9, 309.0], [51.0, 310.0], [51.1, 310.0], [51.2, 310.0], [51.3, 310.0], [51.4, 310.0], [51.5, 310.0], [51.6, 310.0], [51.7, 311.0], [51.8, 311.0], [51.9, 311.0], [52.0, 311.0], [52.1, 311.0], [52.2, 311.0], [52.3, 312.0], [52.4, 312.0], [52.5, 312.0], [52.6, 312.0], [52.7, 312.0], [52.8, 312.0], [52.9, 312.0], [53.0, 313.0], [53.1, 313.0], [53.2, 313.0], [53.3, 313.0], [53.4, 313.0], [53.5, 313.0], [53.6, 313.0], [53.7, 314.0], [53.8, 314.0], [53.9, 314.0], [54.0, 314.0], [54.1, 314.0], [54.2, 314.0], [54.3, 315.0], [54.4, 315.0], [54.5, 315.0], [54.6, 315.0], [54.7, 315.0], [54.8, 316.0], [54.9, 316.0], [55.0, 316.0], [55.1, 316.0], [55.2, 316.0], [55.3, 316.0], [55.4, 316.0], [55.5, 317.0], [55.6, 317.0], [55.7, 317.0], [55.8, 317.0], [55.9, 318.0], [56.0, 318.0], [56.1, 318.0], [56.2, 318.0], [56.3, 319.0], [56.4, 319.0], [56.5, 319.0], [56.6, 319.0], [56.7, 319.0], [56.8, 320.0], [56.9, 320.0], [57.0, 320.0], [57.1, 320.0], [57.2, 320.0], [57.3, 320.0], [57.4, 321.0], [57.5, 321.0], [57.6, 321.0], [57.7, 321.0], [57.8, 322.0], [57.9, 322.0], [58.0, 322.0], [58.1, 322.0], [58.2, 323.0], [58.3, 323.0], [58.4, 323.0], [58.5, 323.0], [58.6, 324.0], [58.7, 324.0], [58.8, 324.0], [58.9, 325.0], [59.0, 325.0], [59.1, 325.0], [59.2, 325.0], [59.3, 326.0], [59.4, 326.0], [59.5, 326.0], [59.6, 326.0], [59.7, 326.0], [59.8, 327.0], [59.9, 327.0], [60.0, 327.0], [60.1, 328.0], [60.2, 328.0], [60.3, 328.0], [60.4, 328.0], [60.5, 329.0], [60.6, 329.0], [60.7, 330.0], [60.8, 330.0], [60.9, 330.0], [61.0, 331.0], [61.1, 331.0], [61.2, 331.0], [61.3, 332.0], [61.4, 332.0], [61.5, 332.0], [61.6, 333.0], [61.7, 333.0], [61.8, 333.0], [61.9, 334.0], [62.0, 334.0], [62.1, 334.0], [62.2, 335.0], [62.3, 335.0], [62.4, 335.0], [62.5, 336.0], [62.6, 337.0], [62.7, 337.0], [62.8, 337.0], [62.9, 338.0], [63.0, 338.0], [63.1, 339.0], [63.2, 339.0], [63.3, 340.0], [63.4, 340.0], [63.5, 341.0], [63.6, 342.0], [63.7, 342.0], [63.8, 342.0], [63.9, 343.0], [64.0, 343.0], [64.1, 344.0], [64.2, 344.0], [64.3, 344.0], [64.4, 345.0], [64.5, 347.0], [64.6, 347.0], [64.7, 348.0], [64.8, 348.0], [64.9, 349.0], [65.0, 349.0], [65.1, 350.0], [65.2, 351.0], [65.3, 351.0], [65.4, 352.0], [65.5, 352.0], [65.6, 353.0], [65.7, 355.0], [65.8, 356.0], [65.9, 356.0], [66.0, 357.0], [66.1, 357.0], [66.2, 359.0], [66.3, 360.0], [66.4, 360.0], [66.5, 361.0], [66.6, 363.0], [66.7, 363.0], [66.8, 364.0], [66.9, 365.0], [67.0, 365.0], [67.1, 366.0], [67.2, 367.0], [67.3, 368.0], [67.4, 370.0], [67.5, 370.0], [67.6, 372.0], [67.7, 372.0], [67.8, 373.0], [67.9, 375.0], [68.0, 376.0], [68.1, 376.0], [68.2, 377.0], [68.3, 378.0], [68.4, 380.0], [68.5, 381.0], [68.6, 384.0], [68.7, 385.0], [68.8, 386.0], [68.9, 388.0], [69.0, 389.0], [69.1, 391.0], [69.2, 393.0], [69.3, 395.0], [69.4, 396.0], [69.5, 398.0], [69.6, 399.0], [69.7, 402.0], [69.8, 402.0], [69.9, 403.0], [70.0, 404.0], [70.1, 404.0], [70.2, 405.0], [70.3, 405.0], [70.4, 406.0], [70.5, 406.0], [70.6, 407.0], [70.7, 407.0], [70.8, 407.0], [70.9, 408.0], [71.0, 408.0], [71.1, 409.0], [71.2, 409.0], [71.3, 409.0], [71.4, 410.0], [71.5, 410.0], [71.6, 410.0], [71.7, 411.0], [71.8, 411.0], [71.9, 411.0], [72.0, 412.0], [72.1, 412.0], [72.2, 412.0], [72.3, 412.0], [72.4, 412.0], [72.5, 412.0], [72.6, 413.0], [72.7, 413.0], [72.8, 413.0], [72.9, 413.0], [73.0, 413.0], [73.1, 413.0], [73.2, 413.0], [73.3, 414.0], [73.4, 414.0], [73.5, 414.0], [73.6, 414.0], [73.7, 414.0], [73.8, 414.0], [73.9, 415.0], [74.0, 415.0], [74.1, 415.0], [74.2, 415.0], [74.3, 415.0], [74.4, 416.0], [74.5, 416.0], [74.6, 416.0], [74.7, 416.0], [74.8, 416.0], [74.9, 416.0], [75.0, 417.0], [75.1, 417.0], [75.2, 417.0], [75.3, 417.0], [75.4, 417.0], [75.5, 418.0], [75.6, 418.0], [75.7, 418.0], [75.8, 418.0], [75.9, 418.0], [76.0, 418.0], [76.1, 418.0], [76.2, 418.0], [76.3, 418.0], [76.4, 419.0], [76.5, 419.0], [76.6, 419.0], [76.7, 419.0], [76.8, 419.0], [76.9, 419.0], [77.0, 420.0], [77.1, 420.0], [77.2, 420.0], [77.3, 420.0], [77.4, 420.0], [77.5, 420.0], [77.6, 420.0], [77.7, 421.0], [77.8, 421.0], [77.9, 421.0], [78.0, 421.0], [78.1, 421.0], [78.2, 421.0], [78.3, 422.0], [78.4, 422.0], [78.5, 422.0], [78.6, 422.0], [78.7, 422.0], [78.8, 422.0], [78.9, 422.0], [79.0, 423.0], [79.1, 423.0], [79.2, 423.0], [79.3, 424.0], [79.4, 424.0], [79.5, 424.0], [79.6, 424.0], [79.7, 424.0], [79.8, 425.0], [79.9, 425.0], [80.0, 425.0], [80.1, 425.0], [80.2, 425.0], [80.3, 425.0], [80.4, 426.0], [80.5, 426.0], [80.6, 426.0], [80.7, 426.0], [80.8, 427.0], [80.9, 427.0], [81.0, 427.0], [81.1, 427.0], [81.2, 428.0], [81.3, 428.0], [81.4, 429.0], [81.5, 429.0], [81.6, 429.0], [81.7, 429.0], [81.8, 430.0], [81.9, 430.0], [82.0, 430.0], [82.1, 430.0], [82.2, 431.0], [82.3, 431.0], [82.4, 432.0], [82.5, 432.0], [82.6, 432.0], [82.7, 432.0], [82.8, 433.0], [82.9, 433.0], [83.0, 433.0], [83.1, 434.0], [83.2, 434.0], [83.3, 434.0], [83.4, 435.0], [83.5, 435.0], [83.6, 436.0], [83.7, 437.0], [83.8, 437.0], [83.9, 438.0], [84.0, 439.0], [84.1, 439.0], [84.2, 440.0], [84.3, 440.0], [84.4, 441.0], [84.5, 442.0], [84.6, 442.0], [84.7, 443.0], [84.8, 444.0], [84.9, 444.0], [85.0, 445.0], [85.1, 445.0], [85.2, 446.0], [85.3, 447.0], [85.4, 448.0], [85.5, 449.0], [85.6, 450.0], [85.7, 452.0], [85.8, 453.0], [85.9, 455.0], [86.0, 457.0], [86.1, 460.0], [86.2, 462.0], [86.3, 464.0], [86.4, 465.0], [86.5, 466.0], [86.6, 468.0], [86.7, 470.0], [86.8, 471.0], [86.9, 473.0], [87.0, 477.0], [87.1, 480.0], [87.2, 482.0], [87.3, 483.0], [87.4, 486.0], [87.5, 488.0], [87.6, 490.0], [87.7, 492.0], [87.8, 494.0], [87.9, 496.0], [88.0, 500.0], [88.1, 501.0], [88.2, 503.0], [88.3, 505.0], [88.4, 510.0], [88.5, 514.0], [88.6, 515.0], [88.7, 519.0], [88.8, 521.0], [88.9, 524.0], [89.0, 528.0], [89.1, 532.0], [89.2, 534.0], [89.3, 540.0], [89.4, 545.0], [89.5, 549.0], [89.6, 555.0], [89.7, 561.0], [89.8, 566.0], [89.9, 570.0], [90.0, 575.0], [90.1, 577.0], [90.2, 580.0], [90.3, 590.0], [90.4, 594.0], [90.5, 600.0], [90.6, 603.0], [90.7, 609.0], [90.8, 611.0], [90.9, 614.0], [91.0, 620.0], [91.1, 625.0], [91.2, 632.0], [91.3, 637.0], [91.4, 642.0], [91.5, 649.0], [91.6, 654.0], [91.7, 659.0], [91.8, 665.0], [91.9, 667.0], [92.0, 670.0], [92.1, 674.0], [92.2, 677.0], [92.3, 682.0], [92.4, 683.0], [92.5, 691.0], [92.6, 699.0], [92.7, 706.0], [92.8, 711.0], [92.9, 720.0], [93.0, 726.0], [93.1, 735.0], [93.2, 748.0], [93.3, 755.0], [93.4, 758.0], [93.5, 760.0], [93.6, 761.0], [93.7, 763.0], [93.8, 763.0], [93.9, 765.0], [94.0, 766.0], [94.1, 766.0], [94.2, 767.0], [94.3, 767.0], [94.4, 768.0], [94.5, 770.0], [94.6, 771.0], [94.7, 772.0], [94.8, 773.0], [94.9, 773.0], [95.0, 774.0], [95.1, 776.0], [95.2, 777.0], [95.3, 778.0], [95.4, 781.0], [95.5, 783.0], [95.6, 785.0], [95.7, 786.0], [95.8, 788.0], [95.9, 790.0], [96.0, 797.0], [96.1, 801.0], [96.2, 805.0], [96.3, 807.0], [96.4, 816.0], [96.5, 820.0], [96.6, 825.0], [96.7, 829.0], [96.8, 835.0], [96.9, 843.0], [97.0, 856.0], [97.1, 866.0], [97.2, 889.0], [97.3, 897.0], [97.4, 902.0], [97.5, 906.0], [97.6, 908.0], [97.7, 918.0], [97.8, 925.0], [97.9, 933.0], [98.0, 952.0], [98.1, 962.0], [98.2, 978.0], [98.3, 1001.0], [98.4, 1016.0], [98.5, 1038.0], [98.6, 1102.0], [98.7, 1128.0], [98.8, 1144.0], [98.9, 1198.0], [99.0, 1248.0], [99.1, 1300.0], [99.2, 1322.0], [99.3, 1382.0], [99.4, 1431.0], [99.5, 1532.0], [99.6, 1606.0], [99.7, 1740.0], [99.8, 1899.0], [99.9, 2000.0]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1993.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 2.0], [600.0, 106.0], [700.0, 173.0], [200.0, 1993.0], [800.0, 66.0], [900.0, 46.0], [1000.0, 15.0], [1100.0, 16.0], [300.0, 1489.0], [1200.0, 9.0], [1300.0, 13.0], [1400.0, 4.0], [1500.0, 8.0], [400.0, 916.0], [1600.0, 5.0], [1700.0, 2.0], [1800.0, 4.0], [1900.0, 4.0], [500.0, 126.0], [2000.0, 2.0]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4401.0, "series": [{"data": [[0.0, 4401.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 571.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 28.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.7385165E12, "maxY": 2.1137724550898205, "series": [{"data": [[1.73851746E12, 1.119760479041916], [1.73851776E12, 1.2048192771084336], [1.73851686E12, 1.2634730538922152], [1.73851716E12, 2.1137724550898205], [1.73851656E12, 1.4550898203592821], [1.73851758E12, 1.343373493975904], [1.73851788E12, 1.2108433734939759], [1.73851818E12, 1.2095808383233528], [1.73851698E12, 1.1445783132530116], [1.73851728E12, 2.0239520958083843], [1.7385183E12, 1.0], [1.73851668E12, 1.3734939759036142], [1.7385177E12, 1.5688622754491024], [1.738518E12, 1.3192771084337347], [1.7385171E12, 1.9457831325301207], [1.7385174E12, 1.5808383233532937], [1.7385165E12, 1.453987730061349], [1.73851812E12, 1.3373493975903619], [1.7385168E12, 1.520958083832336], [1.73851782E12, 1.4011976047904195], [1.73851722E12, 2.042168674698793], [1.73851752E12, 1.1856287425149703], [1.73851662E12, 1.3173652694610787], [1.73851692E12, 1.1686746987951804], [1.73851794E12, 1.3952095808383222], [1.73851734E12, 2.030120481927711], [1.73851824E12, 1.191616766467066], [1.73851764E12, 1.2694610778443116], [1.73851674E12, 1.4311377245508976], [1.73851704E12, 1.1785714285714277], [1.73851806E12, 1.3869047619047619]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7385183E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 300.47988505747134, "minX": 1.0, "maxY": 2275.5, "series": [{"data": [[2.0, 473.6262195121951], [1.0, 300.47988505747134], [4.0, 1224.5937500000002], [5.0, 1591.0], [3.0, 775.1952662721893], [6.0, 1924.3999999999999], [7.0, 2275.5]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}, {"data": [[1.439200000000006, 387.1410000000007]], "isOverall": false, "label": "Demo_Capacity_Testing-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 7.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5.95, "minX": 1.7385165E12, "maxY": 5939.033333333334, "series": [{"data": [[1.73851746E12, 5894.4], [1.73851776E12, 5872.433333333333], [1.73851686E12, 5902.85], [1.73851716E12, 5904.833333333333], [1.73851656E12, 5895.233333333334], [1.73851758E12, 5866.05], [1.73851788E12, 5868.283333333334], [1.73851818E12, 5896.683333333333], [1.73851698E12, 5861.616666666667], [1.73851728E12, 5904.016666666666], [1.7385183E12, 105.8], [1.73851668E12, 5870.883333333333], [1.7385177E12, 5899.65], [1.738518E12, 5866.2], [1.7385171E12, 5872.066666666667], [1.7385174E12, 5897.233333333334], [1.7385165E12, 5752.8], [1.73851812E12, 5869.916666666667], [1.7385168E12, 5899.183333333333], [1.73851782E12, 5905.066666666667], [1.73851722E12, 5877.316666666667], [1.73851752E12, 5905.166666666667], [1.73851662E12, 5896.75], [1.73851692E12, 5868.866666666667], [1.73851794E12, 5896.233333333334], [1.73851734E12, 5874.333333333333], [1.73851824E12, 5904.383333333333], [1.73851764E12, 5905.083333333333], [1.73851674E12, 5902.133333333333], [1.73851704E12, 5939.033333333334], [1.73851806E12, 5934.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73851746E12, 331.21666666666664], [1.73851776E12, 329.23333333333335], [1.73851686E12, 331.21666666666664], [1.73851716E12, 331.21666666666664], [1.73851656E12, 331.21666666666664], [1.73851758E12, 329.23333333333335], [1.73851788E12, 329.23333333333335], [1.73851818E12, 331.21666666666664], [1.73851698E12, 329.23333333333335], [1.73851728E12, 331.21666666666664], [1.7385183E12, 5.95], [1.73851668E12, 329.23333333333335], [1.7385177E12, 331.21666666666664], [1.738518E12, 329.23333333333335], [1.7385171E12, 329.23333333333335], [1.7385174E12, 331.21666666666664], [1.7385165E12, 323.28333333333336], [1.73851812E12, 329.23333333333335], [1.7385168E12, 331.21666666666664], [1.73851782E12, 331.21666666666664], [1.73851722E12, 329.23333333333335], [1.73851752E12, 331.21666666666664], [1.73851662E12, 331.21666666666664], [1.73851692E12, 329.23333333333335], [1.73851794E12, 331.21666666666664], [1.73851734E12, 329.23333333333335], [1.73851824E12, 331.21666666666664], [1.73851764E12, 331.21666666666664], [1.73851674E12, 331.21666666666664], [1.73851704E12, 333.2], [1.73851806E12, 333.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7385183E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 301.6666666666667, "minX": 1.7385165E12, "maxY": 482.1197604790419, "series": [{"data": [[1.73851746E12, 311.8802395209581], [1.73851776E12, 340.10843373493987], [1.73851686E12, 351.62275449101804], [1.73851716E12, 482.1197604790419], [1.73851656E12, 409.35928143712573], [1.73851758E12, 369.5602409638553], [1.73851788E12, 337.7590361445784], [1.73851818E12, 342.8143712574851], [1.73851698E12, 327.234939759036], [1.73851728E12, 440.6586826347304], [1.7385183E12, 301.6666666666667], [1.73851668E12, 379.7951807228915], [1.7385177E12, 450.7125748502996], [1.738518E12, 373.76506024096386], [1.7385171E12, 441.08433734939774], [1.7385174E12, 433.5508982035928], [1.7385165E12, 411.73006134969324], [1.73851812E12, 375.2048192771084], [1.7385168E12, 436.48502994011983], [1.73851782E12, 406.9520958083833], [1.73851722E12, 453.42771084337375], [1.73851752E12, 338.4311377245508], [1.73851662E12, 366.68263473053906], [1.73851692E12, 332.22891566265054], [1.73851794E12, 406.9700598802395], [1.73851734E12, 460.44578313253], [1.73851824E12, 347.8982035928146], [1.73851764E12, 357.55089820359274], [1.73851674E12, 404.90419161676635], [1.73851704E12, 337.2321428571428], [1.73851806E12, 388.07142857142844]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7385183E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 301.3333333333333, "minX": 1.7385165E12, "maxY": 481.39520958083847, "series": [{"data": [[1.73851746E12, 311.5928143712576], [1.73851776E12, 339.7168674698791], [1.73851686E12, 351.2395209580838], [1.73851716E12, 481.39520958083847], [1.73851656E12, 408.9520958083832], [1.73851758E12, 369.03012048192755], [1.73851788E12, 337.3554216867471], [1.73851818E12, 342.45508982035915], [1.73851698E12, 326.8313253012049], [1.73851728E12, 439.79041916167654], [1.7385183E12, 301.3333333333333], [1.73851668E12, 379.3072289156628], [1.7385177E12, 450.3532934131737], [1.738518E12, 373.40963855421694], [1.7385171E12, 439.6746987951808], [1.7385174E12, 433.1916167664671], [1.7385165E12, 411.43558282208596], [1.73851812E12, 374.7048192771083], [1.7385168E12, 435.7065868263474], [1.73851782E12, 406.47305389221555], [1.73851722E12, 453.12650602409633], [1.73851752E12, 338.059880239521], [1.73851662E12, 366.20359281437123], [1.73851692E12, 331.9578313253013], [1.73851794E12, 406.53293413173645], [1.73851734E12, 459.6325301204819], [1.73851824E12, 347.58083832335353], [1.73851764E12, 357.10778443113776], [1.73851674E12, 403.1497005988024], [1.73851704E12, 336.8333333333334], [1.73851806E12, 387.77976190476187]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7385183E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 15.826347305389229, "minX": 1.7385165E12, "maxY": 107.82530120481928, "series": [{"data": [[1.73851746E12, 15.826347305389229], [1.73851776E12, 20.180722891566266], [1.73851686E12, 21.886227544910174], [1.73851716E12, 101.55089820359281], [1.73851656E12, 26.664670658682645], [1.73851758E12, 20.861445783132528], [1.73851788E12, 21.1144578313253], [1.73851818E12, 26.17365269461078], [1.73851698E12, 20.24698795180722], [1.73851728E12, 101.81437125748506], [1.7385183E12, 22.333333333333332], [1.73851668E12, 19.415662650602407], [1.7385177E12, 21.718562874251482], [1.738518E12, 20.578313253012052], [1.7385171E12, 93.5602409638554], [1.7385174E12, 28.353293413173645], [1.7385165E12, 22.325153374233132], [1.73851812E12, 20.331325301204814], [1.7385168E12, 20.550898203592816], [1.73851782E12, 20.40718562874251], [1.73851722E12, 107.82530120481928], [1.73851752E12, 20.005988023952103], [1.73851662E12, 19.19760479041916], [1.73851692E12, 19.066265060240962], [1.73851794E12, 20.233532934131727], [1.73851734E12, 104.289156626506], [1.73851824E12, 19.808383233532943], [1.73851764E12, 26.473053892215574], [1.73851674E12, 21.742514970059872], [1.73851704E12, 19.744047619047606], [1.73851806E12, 25.32738095238096]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7385183E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 271.0, "minX": 1.7385165E12, "maxY": 2296.0, "series": [{"data": [[1.73851746E12, 773.0], [1.73851776E12, 807.0], [1.73851686E12, 835.0], [1.73851716E12, 1863.0], [1.73851656E12, 1801.0], [1.73851758E12, 1280.0], [1.73851788E12, 797.0], [1.73851818E12, 1300.0], [1.73851698E12, 828.0], [1.73851728E12, 1029.0], [1.7385183E12, 306.0], [1.73851668E12, 1319.0], [1.7385177E12, 2142.0], [1.738518E12, 1395.0], [1.7385171E12, 928.0], [1.7385174E12, 1825.0], [1.7385165E12, 1198.0], [1.73851812E12, 1248.0], [1.7385168E12, 2000.0], [1.73851782E12, 2296.0], [1.73851722E12, 1431.0], [1.73851752E12, 890.0], [1.73851662E12, 1594.0], [1.73851692E12, 1231.0], [1.73851794E12, 2255.0], [1.73851734E12, 925.0], [1.73851824E12, 1369.0], [1.73851764E12, 1328.0], [1.73851674E12, 1322.0], [1.73851704E12, 1408.0], [1.73851806E12, 1927.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73851746E12, 345.4000000000001], [1.73851776E12, 490.3], [1.73851686E12, 521.0000000000002], [1.73851716E12, 668.6000000000001], [1.73851656E12, 691.4000000000015], [1.73851758E12, 567.9000000000001], [1.73851788E12, 428.8000000000003], [1.73851818E12, 444.8000000000006], [1.73851698E12, 376.50000000000006], [1.73851728E12, 453.20000000000005], [1.7385183E12, 306.0], [1.73851668E12, 653.0000000000001], [1.7385177E12, 795.6000000000005], [1.738518E12, 725.9000000000003], [1.7385171E12, 493.2000000000003], [1.7385174E12, 762.0000000000001], [1.7385165E12, 770.2], [1.73851812E12, 732.0000000000005], [1.7385168E12, 782.2], [1.73851782E12, 668.2000000000002], [1.73851722E12, 503.4000000000001], [1.73851752E12, 446.4000000000004], [1.73851662E12, 521.6000000000001], [1.73851692E12, 389.80000000000007], [1.73851794E12, 651.8000000000003], [1.73851734E12, 572.8000000000001], [1.73851824E12, 451.00000000000034], [1.73851764E12, 524.2000000000002], [1.73851674E12, 758.4000000000001], [1.73851704E12, 426.79999999999995], [1.73851806E12, 767.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73851746E12, 770.28], [1.73851776E12, 804.99], [1.73851686E12, 815.9599999999998], [1.73851716E12, 1637.9199999999978], [1.73851656E12, 1668.3999999999987], [1.73851758E12, 1253.2000000000005], [1.73851788E12, 797.0], [1.73851818E12, 1029.3599999999974], [1.73851698E12, 813.9300000000003], [1.73851728E12, 955.5599999999993], [1.7385183E12, 306.0], [1.73851668E12, 1201.7500000000023], [1.7385177E12, 2067.879999999999], [1.738518E12, 1211.4200000000035], [1.7385171E12, 903.2100000000005], [1.7385174E12, 1606.7199999999978], [1.7385165E12, 1104.559999999998], [1.73851812E12, 1089.8800000000028], [1.7385168E12, 1720.5199999999973], [1.73851782E12, 2067.5199999999977], [1.73851722E12, 1097.3400000000063], [1.73851752E12, 842.3999999999995], [1.73851662E12, 1370.2799999999977], [1.73851692E12, 1086.9500000000028], [1.73851794E12, 2072.7599999999984], [1.73851734E12, 920.98], [1.73851824E12, 1220.7599999999984], [1.73851764E12, 1321.1999999999998], [1.73851674E12, 1206.3999999999987], [1.73851704E12, 1236.8800000000006], [1.73851806E12, 1347.400000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73851746E12, 428.5999999999999], [1.73851776E12, 715.3000000000009], [1.73851686E12, 763.6], [1.73851716E12, 902.0], [1.73851656E12, 890.5999999999998], [1.73851758E12, 786.0], [1.73851788E12, 641.6500000000002], [1.73851818E12, 723.5999999999999], [1.73851698E12, 552.45], [1.73851728E12, 577.0], [1.7385183E12, 306.0], [1.73851668E12, 782.7], [1.7385177E12, 1490.9999999999995], [1.738518E12, 793.9500000000002], [1.7385171E12, 651.3000000000002], [1.7385174E12, 916.9999999999999], [1.7385165E12, 909.5999999999999], [1.73851812E12, 776.65], [1.7385168E12, 919.3999999999999], [1.73851782E12, 1092.8], [1.73851722E12, 672.1500000000001], [1.73851752E12, 667.1999999999998], [1.73851662E12, 752.1999999999999], [1.73851692E12, 581.5], [1.73851794E12, 925.9999999999998], [1.73851734E12, 681.0000000000001], [1.73851824E12, 667.1999999999996], [1.73851764E12, 776.8], [1.73851674E12, 845.9999999999998], [1.73851704E12, 773.55], [1.73851806E12, 859.1999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.73851746E12, 272.0], [1.73851776E12, 276.0], [1.73851686E12, 275.0], [1.73851716E12, 399.0], [1.73851656E12, 273.0], [1.73851758E12, 275.0], [1.73851788E12, 273.0], [1.73851818E12, 273.0], [1.73851698E12, 274.0], [1.73851728E12, 399.0], [1.7385183E12, 297.0], [1.73851668E12, 273.0], [1.7385177E12, 275.0], [1.738518E12, 274.0], [1.7385171E12, 280.0], [1.7385174E12, 274.0], [1.7385165E12, 274.0], [1.73851812E12, 277.0], [1.7385168E12, 271.0], [1.73851782E12, 274.0], [1.73851722E12, 404.0], [1.73851752E12, 274.0], [1.73851662E12, 276.0], [1.73851692E12, 273.0], [1.73851794E12, 276.0], [1.73851734E12, 402.0], [1.73851824E12, 274.0], [1.73851764E12, 274.0], [1.73851674E12, 275.0], [1.73851704E12, 274.0], [1.73851806E12, 277.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73851746E12, 289.0], [1.73851776E12, 300.5], [1.73851686E12, 298.0], [1.73851716E12, 422.0], [1.73851656E12, 313.0], [1.73851758E12, 302.0], [1.73851788E12, 299.0], [1.73851818E12, 298.0], [1.73851698E12, 297.5], [1.73851728E12, 419.0], [1.7385183E12, 302.0], [1.73851668E12, 311.5], [1.7385177E12, 301.0], [1.738518E12, 297.0], [1.7385171E12, 424.0], [1.7385174E12, 321.0], [1.7385165E12, 308.0], [1.73851812E12, 300.0], [1.7385168E12, 313.0], [1.73851782E12, 306.0], [1.73851722E12, 423.5], [1.73851752E12, 299.0], [1.73851662E12, 308.0], [1.73851692E12, 293.0], [1.73851794E12, 308.0], [1.73851734E12, 425.0], [1.73851824E12, 300.0], [1.73851764E12, 300.0], [1.73851674E12, 322.0], [1.73851704E12, 290.5], [1.73851806E12, 304.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7385183E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 305.0, "minX": 1.0, "maxY": 1356.0, "series": [{"data": [[2.0, 308.0], [4.0, 417.0], [1.0, 324.5], [8.0, 1356.0], [5.0, 691.0], [3.0, 305.0], [6.0, 1186.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 304.0, "minX": 1.0, "maxY": 1356.0, "series": [{"data": [[2.0, 308.0], [4.0, 416.5], [1.0, 319.0], [8.0, 1356.0], [5.0, 691.0], [3.0, 304.0], [6.0, 1186.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.7385165E12, "maxY": 2.783333333333333, "series": [{"data": [[1.73851746E12, 2.783333333333333], [1.73851776E12, 2.7666666666666666], [1.73851686E12, 2.7666666666666666], [1.73851716E12, 2.783333333333333], [1.73851656E12, 2.783333333333333], [1.73851758E12, 2.7666666666666666], [1.73851788E12, 2.7666666666666666], [1.73851818E12, 2.783333333333333], [1.73851698E12, 2.783333333333333], [1.73851728E12, 2.783333333333333], [1.7385183E12, 0.05], [1.73851668E12, 2.7666666666666666], [1.7385177E12, 2.783333333333333], [1.738518E12, 2.783333333333333], [1.7385171E12, 2.783333333333333], [1.7385174E12, 2.783333333333333], [1.7385165E12, 2.7333333333333334], [1.73851812E12, 2.7666666666666666], [1.7385168E12, 2.783333333333333], [1.73851782E12, 2.783333333333333], [1.73851722E12, 2.7666666666666666], [1.73851752E12, 2.783333333333333], [1.73851662E12, 2.783333333333333], [1.73851692E12, 2.783333333333333], [1.73851794E12, 2.783333333333333], [1.73851734E12, 2.7666666666666666], [1.73851824E12, 2.7666666666666666], [1.73851764E12, 2.783333333333333], [1.73851674E12, 2.783333333333333], [1.73851704E12, 2.7666666666666666], [1.73851806E12, 2.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7385183E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.7385165E12, "maxY": 2.8, "series": [{"data": [[1.73851746E12, 2.783333333333333], [1.73851776E12, 2.7666666666666666], [1.73851686E12, 2.783333333333333], [1.73851716E12, 2.783333333333333], [1.73851656E12, 2.783333333333333], [1.73851758E12, 2.7666666666666666], [1.73851788E12, 2.7666666666666666], [1.73851818E12, 2.783333333333333], [1.73851698E12, 2.7666666666666666], [1.73851728E12, 2.783333333333333], [1.7385183E12, 0.05], [1.73851668E12, 2.7666666666666666], [1.7385177E12, 2.783333333333333], [1.738518E12, 2.7666666666666666], [1.7385171E12, 2.7666666666666666], [1.7385174E12, 2.783333333333333], [1.7385165E12, 2.716666666666667], [1.73851812E12, 2.7666666666666666], [1.7385168E12, 2.783333333333333], [1.73851782E12, 2.783333333333333], [1.73851722E12, 2.7666666666666666], [1.73851752E12, 2.783333333333333], [1.73851662E12, 2.783333333333333], [1.73851692E12, 2.7666666666666666], [1.73851794E12, 2.783333333333333], [1.73851734E12, 2.7666666666666666], [1.73851824E12, 2.783333333333333], [1.73851764E12, 2.783333333333333], [1.73851674E12, 2.783333333333333], [1.73851704E12, 2.8], [1.73851806E12, 2.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7385183E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.7385165E12, "maxY": 2.8, "series": [{"data": [[1.73851746E12, 2.783333333333333], [1.73851776E12, 2.7666666666666666], [1.73851686E12, 2.783333333333333], [1.73851716E12, 2.783333333333333], [1.73851656E12, 2.783333333333333], [1.73851758E12, 2.7666666666666666], [1.73851788E12, 2.7666666666666666], [1.73851818E12, 2.783333333333333], [1.73851698E12, 2.7666666666666666], [1.73851728E12, 2.783333333333333], [1.7385183E12, 0.05], [1.73851668E12, 2.7666666666666666], [1.7385177E12, 2.783333333333333], [1.738518E12, 2.7666666666666666], [1.7385171E12, 2.7666666666666666], [1.7385174E12, 2.783333333333333], [1.7385165E12, 2.716666666666667], [1.73851812E12, 2.7666666666666666], [1.7385168E12, 2.783333333333333], [1.73851782E12, 2.783333333333333], [1.73851722E12, 2.7666666666666666], [1.73851752E12, 2.783333333333333], [1.73851662E12, 2.783333333333333], [1.73851692E12, 2.7666666666666666], [1.73851794E12, 2.783333333333333], [1.73851734E12, 2.7666666666666666], [1.73851824E12, 2.783333333333333], [1.73851764E12, 2.783333333333333], [1.73851674E12, 2.783333333333333], [1.73851704E12, 2.8], [1.73851806E12, 2.8]], "isOverall": false, "label": "Demo_Capacity_Testing-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7385183E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.7385165E12, "maxY": 2.8, "series": [{"data": [[1.73851746E12, 2.783333333333333], [1.73851776E12, 2.7666666666666666], [1.73851686E12, 2.783333333333333], [1.73851716E12, 2.783333333333333], [1.73851656E12, 2.783333333333333], [1.73851758E12, 2.7666666666666666], [1.73851788E12, 2.7666666666666666], [1.73851818E12, 2.783333333333333], [1.73851698E12, 2.7666666666666666], [1.73851728E12, 2.783333333333333], [1.7385183E12, 0.05], [1.73851668E12, 2.7666666666666666], [1.7385177E12, 2.783333333333333], [1.738518E12, 2.7666666666666666], [1.7385171E12, 2.7666666666666666], [1.7385174E12, 2.783333333333333], [1.7385165E12, 2.716666666666667], [1.73851812E12, 2.7666666666666666], [1.7385168E12, 2.783333333333333], [1.73851782E12, 2.783333333333333], [1.73851722E12, 2.7666666666666666], [1.73851752E12, 2.783333333333333], [1.73851662E12, 2.783333333333333], [1.73851692E12, 2.7666666666666666], [1.73851794E12, 2.783333333333333], [1.73851734E12, 2.7666666666666666], [1.73851824E12, 2.783333333333333], [1.73851764E12, 2.783333333333333], [1.73851674E12, 2.783333333333333], [1.73851704E12, 2.8], [1.73851806E12, 2.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7385183E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

