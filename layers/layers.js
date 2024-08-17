var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_matara_gnd_hh_detaildata_1 = new ol.format.GeoJSON();
var features_matara_gnd_hh_detaildata_1 = format_matara_gnd_hh_detaildata_1.readFeatures(json_matara_gnd_hh_detaildata_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matara_gnd_hh_detaildata_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matara_gnd_hh_detaildata_1.addFeatures(features_matara_gnd_hh_detaildata_1);
var lyr_matara_gnd_hh_detaildata_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matara_gnd_hh_detaildata_1, 
                style: style_matara_gnd_hh_detaildata_1,
                popuplayertitle: "matara_gnd_hh_detaildata",
                interactive: true,
                title: '<img src="styles/legend/matara_gnd_hh_detaildata_1.png" /> matara_gnd_hh_detaildata'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_matara_gnd_hh_detaildata_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_matara_gnd_hh_detaildata_1];
lyr_matara_gnd_hh_detaildata_1.set('fieldAliases', {'GND_N': 'GND_N', });
lyr_matara_gnd_hh_detaildata_1.set('fieldImages', {'GND_N': 'TextEdit', });
lyr_matara_gnd_hh_detaildata_1.set('fieldLabels', {'GND_N': 'no label', });
lyr_matara_gnd_hh_detaildata_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});