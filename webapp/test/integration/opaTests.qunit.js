sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ep/zistocksgifts/test/integration/FirstJourney',
		'com/ep/zistocksgifts/test/integration/pages/zz_pv_stock_pres_materialsList',
		'com/ep/zistocksgifts/test/integration/pages/zz_pv_stock_pres_materialsObjectPage',
		'com/ep/zistocksgifts/test/integration/pages/zz_pv_stock_pres_plantsObjectPage'
    ],
    function(JourneyRunner, opaJourney, zz_pv_stock_pres_materialsList, zz_pv_stock_pres_materialsObjectPage, zz_pv_stock_pres_plantsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ep/zistocksgifts') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezz_pv_stock_pres_materialsList: zz_pv_stock_pres_materialsList,
					onThezz_pv_stock_pres_materialsObjectPage: zz_pv_stock_pres_materialsObjectPage,
					onThezz_pv_stock_pres_plantsObjectPage: zz_pv_stock_pres_plantsObjectPage
                }
            },
            opaJourney.run
        );
    }
);