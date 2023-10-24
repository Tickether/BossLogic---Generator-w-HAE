const { ArtEngine, inputs, generators, renderers, exporters } = require('@hashlips-lab/art-engine')

const BASE_PATH = __dirname

const BossAE = new ArtEngine({
    cachePath: `${BASE_PATH}/cache`,
    outputPath: `${BASE_PATH}/output`,
    useCache: true,

    
    inputs: {
        //character 1
        aimee: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/AIMEE`,
        }),
        //character 2
        cypher: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/CYPHER`,
        }),
        //character 3
        deaf: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/DEAF`,
        }),
        
        //character 4
        draken: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/DRAKEN`,
        }),
        //character 5
        false: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/FALSE`,
        }),
        //character 6
        gospell: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/GOSPELL`,
        }),
        //character 7
        hush: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/HUSH`,
        }),
        //character 8
        immortal: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/IMMORTAL`,
        }),
        //character 9
        ingrim: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/INGRIM`,
        }),
        //character 10
        lgx: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LGX`,
        }),
        //character 11
        lucied: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LUCIED`,
        }),
        
        //character 12
        mel: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/MEL`,
        }),
        //character 13
        sindrome: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/SINDROME`,
        }),
        //character 14
        zen: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/ZEN`,
        }),
        //fluro
        fluro: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LEG`,
        }),
        //golden
        golden: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LEG-I`,
        }),
        //ignites
        ignites: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LEG-II`,
        }),
        //shadows
        shadows: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LEG-III`,
        }),
        //soulless
        soulless: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data_img/LEG-IV`,
        }),
    },

    generators: [
        //character 1 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'aimee',
            startIndex: 1,
            endIndex: 710,
        }),
        //character 2 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'cypher',
            startIndex: 711,
            endIndex: 1420,
        }),
        //character 3 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'deaf',
            startIndex: 1421,
            endIndex: 2130,
        }),
        //character 4 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'draken',
            startIndex: 2131,
            endIndex: 2840,
        }),
        //character 5 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'false',
            startIndex: 2841,
            endIndex: 3550,
        }),
        //character 6 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'gospell',
            startIndex: 3551,
            endIndex: 4260,
        }),
        //character 7 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'hush',
            startIndex: 4261,
            endIndex: 4970,
        }),
        //character 8 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'immortal',
            startIndex: 4971,
            endIndex: 5680,
        }),
        //character 9 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'ingrim',
            startIndex: 5681,
            endIndex: 6390,
        }),
        //character 10 //700
        new generators.ImageLayersAttributesGenerator({
            dataSet:'lgx',
            startIndex: 6391,
            endIndex: 7090,
        }),
        //character 11 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'lucied',
            startIndex: 7091,
            endIndex: 7800,
        }),
        //character 12 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'mel',
            startIndex: 7801,
            endIndex: 8510,
        }),
        //character 13 //710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'sindrome',
            startIndex: 8511,
            endIndex: 9220,
        }),
        //character 14/ /710
        new generators.ImageLayersAttributesGenerator({
            dataSet:'zen',
            startIndex: 9221,
            endIndex: 9930,
        }),
        new generators.ImageLayersAttributesGenerator({
            dataSet:'fluro',
            startIndex: 9931,
            endIndex: 9944,
        }),
        new generators.ImageLayersAttributesGenerator({
            dataSet:'golden',
            startIndex: 9945,
            endIndex: 9958,
        }),
        new generators.ImageLayersAttributesGenerator({
            dataSet:'ignites',
            startIndex: 9959,
            endIndex: 9972,
        }),
        new generators.ImageLayersAttributesGenerator({
            dataSet:'shadows',
            startIndex: 9973,
            endIndex: 9986,
        }),
        new generators.ImageLayersAttributesGenerator({
            dataSet:'soulless',
            startIndex: 9987,
            endIndex: 10000,
        }),
    ],

    
    renderers: [
        new renderers.ItemAttributesRenderer({
            name:``,
            description:``,
        }),
        new renderers.ImageLayersRenderer({
            width: 2800,
            height: 2800,
        })
    ],

    
    exporters: [ 
        new exporters.ImagesExporter(),
        new exporters.Erc721MetadataExporter({
            imageUriPrefix: `ipfs://CID/`
        })
    ],


})

BossAE.run()