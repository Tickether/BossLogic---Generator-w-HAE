const { ArtEngine, inputs, generators, renderers, exporters } = require('@hashlips-lab/art-engine')

const BASE_PATH = __dirname

const BossAE = new ArtEngine({
    cachePath: `${BASE_PATH}/cache`,
    outputPath: `${BASE_PATH}/output`,
    useCache: true,

    
    inputs: {
        //character 1
        aimee: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/AIMEE`,
        }),
        //character 2
        cypher: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/CYPHER`,
        }),
        //character 3
        deaf: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/DEAF`,
        }),
        //character 4
        draken: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/DRAKEN`,
        }),
        //character 5
        false: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/FALSE`,
        }),
        //character 6
        gospell: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/GOSPELL`,
        }),
        //character 7
        hush: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/HUSH`,
        }),
        //character 8
        immortal: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/IMMORTAL`,
        }),
        //character 9
        ingrim: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/INGRIM`,
        }),
        //character 10
        lgx: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/LGX`,
        }),
        //character 11
        lucied: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/LUCIED`,
        }),
        //character 12
        mel: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/MEL`,
        }),
        //character 13
        sindrome: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/SINDROME`,
        }),
        //character 14
        zen: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/data/ZEN`,
        })

    },

    generators: [
        //character 1
        new generators.ImageLayersAttributesGenerator({
            dataSet:'aimee',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 2
        new generators.ImageLayersAttributesGenerator({
            dataSet:'cypher',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 3
        new generators.ImageLayersAttributesGenerator({
            dataSet:'deaf',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 4
        new generators.ImageLayersAttributesGenerator({
            dataSet:'draken',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 5
        new generators.ImageLayersAttributesGenerator({
            dataSet:'false',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 6
        new generators.ImageLayersAttributesGenerator({
            dataSet:'gospell',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 7
        new generators.ImageLayersAttributesGenerator({
            dataSet:'hush',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 8
        new generators.ImageLayersAttributesGenerator({
            dataSet:'immortal',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 9
        new generators.ImageLayersAttributesGenerator({
            dataSet:'ingrim',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 10
        new generators.ImageLayersAttributesGenerator({
            dataSet:'lgx',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 11
        new generators.ImageLayersAttributesGenerator({
            dataSet:'lucied',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 12
        new generators.ImageLayersAttributesGenerator({
            dataSet:'mel',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 13
        new generators.ImageLayersAttributesGenerator({
            dataSet:'sindrome',
            startIndex: 1,
            endIndex: 3,
        }),
        //character 14
        new generators.ImageLayersAttributesGenerator({
            dataSet:'zen',
            startIndex: 1,
            endIndex: 3,
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