var wms_layers = [];
var format_Sambas_0 = new ol.format.GeoJSON();
var features_Sambas_0 = format_Sambas_0.readFeatures(json_Sambas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sambas_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sambas_0.addFeatures(features_Sambas_0);var lyr_Sambas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sambas_0, 
                style: style_Sambas_0,
    title: 'Sambas<br />\
    <img src="styles/legend/Sambas_0_0.png" /> BASE<br />\
    <img src="styles/legend/Sambas_0_1.png" /> CA<br />\
    <img src="styles/legend/Sambas_0_2.png" /> HL<br />\
    <img src="styles/legend/Sambas_0_3.png" /> HP<br />\
    <img src="styles/legend/Sambas_0_4.png" /> HPT<br />\
    <img src="styles/legend/Sambas_0_5.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/Sambas_0_6.png" /> Peruntukan Perkebunan<br />\
    <img src="styles/legend/Sambas_0_7.png" /> <br />'
        });

lyr_Sambas_0.setVisible(true);
var layersList = [lyr_Sambas_0];
lyr_Sambas_0.set('fieldAliases', {'KET_PETA': 'KET_PETA', 'KABUPATEN': 'KABUPATEN', 'Luasan': 'Luasan', });
lyr_Sambas_0.set('fieldImages', {'KET_PETA': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Luasan': 'TextEdit', });
lyr_Sambas_0.set('fieldLabels', {'KET_PETA': 'no label', 'KABUPATEN': 'no label', 'Luasan': 'no label', });
lyr_Sambas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});