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
        })
        
    },

    generators: [
        //character 1
        new generators.ImageLayersAttributesGenerator({
            dataSet:'aimee',
            startIndex: 1,
            endIndex: 10,
        }),
        
        //character 2
        new generators.ImageLayersAttributesGenerator({
            dataSet:'cypher',
            startIndex: 11,
            endIndex: 20,
        }),
        //character 3
        new generators.ImageLayersAttributesGenerator({
            dataSet:'deaf',
            startIndex: 21,
            endIndex: 30,
        }),
        //character 4
        new generators.ImageLayersAttributesGenerator({
            dataSet:'draken',
            startIndex: 31,
            endIndex: 40,
        }),
        //character 5
        new generators.ImageLayersAttributesGenerator({
            dataSet:'false',
            startIndex: 41,
            endIndex: 50,
        }),
        //character 6
        new generators.ImageLayersAttributesGenerator({
            dataSet:'gospell',
            startIndex: 51,
            endIndex: 60,
        }),
        //character 7
        new generators.ImageLayersAttributesGenerator({
            dataSet:'hush',
            startIndex: 61,
            endIndex: 70,
        }),
        //character 8
        new generators.ImageLayersAttributesGenerator({
            dataSet:'immortal',
            startIndex: 71,
            endIndex: 80,
        }),
        //character 9
        new generators.ImageLayersAttributesGenerator({
            dataSet:'ingrim',
            startIndex: 81,
            endIndex: 90,
        }),
        //character 10
        new generators.ImageLayersAttributesGenerator({
            dataSet:'lgx',
            startIndex: 91,
            endIndex: 100,
        }),
        //character 11
        new generators.ImageLayersAttributesGenerator({
            dataSet:'lucied',
            startIndex: 101,
            endIndex: 110,
        }),
        //character 12
        new generators.ImageLayersAttributesGenerator({
            dataSet:'mel',
            startIndex: 111,
            endIndex: 120,
        }),
        //character 13
        new generators.ImageLayersAttributesGenerator({
            dataSet:'sindrome',
            startIndex: 121,
            endIndex: 130,
        }),
        
        //character 14
        new generators.ImageLayersAttributesGenerator({
            dataSet:'zen',
            startIndex: 131,
            endIndex: 140,
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
        new exporters.ImagesExporter()
    ],


})

BossAE.run()