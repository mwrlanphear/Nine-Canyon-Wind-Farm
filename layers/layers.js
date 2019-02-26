var wms_layers = [];

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_uswtdb_v1_3_20190107_1 = new ol.format.GeoJSON();
var features_uswtdb_v1_3_20190107_1 = format_uswtdb_v1_3_20190107_1.readFeatures(json_uswtdb_v1_3_20190107_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uswtdb_v1_3_20190107_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uswtdb_v1_3_20190107_1.addFeatures(features_uswtdb_v1_3_20190107_1);var lyr_uswtdb_v1_3_20190107_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uswtdb_v1_3_20190107_1, 
                style: style_uswtdb_v1_3_20190107_1,
                title: '<img src="styles/legend/uswtdb_v1_3_20190107_1.png" /> uswtdb_v1_3_20190107'
            });

lyr_uswtdb_v1_3_20190107_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_uswtdb_v1_3_20190107_1];
lyr_uswtdb_v1_3_20190107_1.set('fieldAliases', {'case_id': 'case_id', 'faa_ors': 'faa_ors', 'faa_asn': 'faa_asn', 'usgs_pr_id': 'usgs_pr_id', 't_state': 't_state', 't_county': 't_county', 't_fips': 't_fips', 'p_name': 'p_name', 'p_year': 'p_year', 'p_tnum': 'p_tnum', 'p_cap': 'p_cap', 't_manu': 't_manu', 't_model': 't_model', 't_cap': 't_cap', 't_hh': 't_hh', 't_rd': 't_rd', 't_rsa': 't_rsa', 't_ttlh': 't_ttlh', 't_conf_atr': 't_conf_atr', 't_conf_loc': 't_conf_loc', 't_img_date': 't_img_date', 't_img_srce': 't_img_srce', 'xlong': 'xlong', 'ylat': 'ylat', });
lyr_uswtdb_v1_3_20190107_1.set('fieldImages', {'case_id': 'TextEdit', 'faa_ors': 'TextEdit', 'faa_asn': 'TextEdit', 'usgs_pr_id': 'TextEdit', 't_state': 'TextEdit', 't_county': 'TextEdit', 't_fips': 'TextEdit', 'p_name': 'TextEdit', 'p_year': 'TextEdit', 'p_tnum': 'TextEdit', 'p_cap': 'TextEdit', 't_manu': 'TextEdit', 't_model': 'TextEdit', 't_cap': 'TextEdit', 't_hh': 'TextEdit', 't_rd': 'TextEdit', 't_rsa': 'TextEdit', 't_ttlh': 'TextEdit', 't_conf_atr': 'TextEdit', 't_conf_loc': 'TextEdit', 't_img_date': 'DateTime', 't_img_srce': 'TextEdit', 'xlong': 'TextEdit', 'ylat': 'TextEdit', });
lyr_uswtdb_v1_3_20190107_1.set('fieldLabels', {'case_id': 'no label', 'faa_ors': 'no label', 'faa_asn': 'no label', 'usgs_pr_id': 'no label', 't_state': 'no label', 't_county': 'no label', 't_fips': 'no label', 'p_name': 'no label', 'p_year': 'no label', 'p_tnum': 'no label', 'p_cap': 'no label', 't_manu': 'no label', 't_model': 'no label', 't_cap': 'no label', 't_hh': 'no label', 't_rd': 'no label', 't_rsa': 'no label', 't_ttlh': 'no label', 't_conf_atr': 'no label', 't_conf_loc': 'no label', 't_img_date': 'no label', 't_img_srce': 'no label', 'xlong': 'no label', 'ylat': 'no label', });
lyr_uswtdb_v1_3_20190107_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});