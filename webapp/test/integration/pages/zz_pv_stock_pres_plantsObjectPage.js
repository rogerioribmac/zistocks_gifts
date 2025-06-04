sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ep.zistocksgifts',
            componentId: 'zz_pv_stock_pres_plantsObjectPage',
            contextPath: '/zz_pv_stock_pres_materials/_plant'
        },
        CustomPageDefinitions
    );
});