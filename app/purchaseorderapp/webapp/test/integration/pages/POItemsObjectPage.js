sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ust.dhanush.purchaseorderapp',
            componentId: 'POItemsObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});