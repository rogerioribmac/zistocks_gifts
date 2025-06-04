sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ep.zistocksgifts',
            componentId: 'zz_pv_stock_pres_materialsList',
            contextPath: '/zz_pv_stock_pres_materials'
        },
        CustomPageDefinitions
    );
});