

const __all__ = ['AdaptiveConcatPool2d', 'BCEWithLogitsFlat', 'BCEFlat', 'MSELossFlat', 'CrossEntropyFlat', 'Debugger',
'Flatten', 'Lambda', 'PoolFlatten', 'View', 'ResizeBatch', 'bn_drop_lin', 'conv2d', 'conv2d_trans', 'conv_layer',
'embedding', 'simple_cnn', 'NormType', 'relu', 'batchnorm_2d', 'trunc_normal_', 'PixelShuffle_ICNR', 'icnr',
'NoopLoss', 'WassersteinLoss', 'SelfAttention', 'SequentialEx', 'MergeLayer', 'res_block', 'sigmoid_range',
'SigmoidRange', 'PartialLayer', 'FlattenedLoss', 'BatchNorm1dFlat', 'LabelSmoothingCrossEntropy', 'PooledSelfAttention2d']

const fastaiMetas = [
    {
        "name": "MergeLayer",
        "schema": {
            "attributes": [
                {
                    "default": false,
                    "name": "dense"
                }
            ],
            "category": "Layer",
            "package": "fastai"
        }
    },
    {
        "name": "Resnet101",
        "schema": {
            "package": "ModelZoom"
        }
    },
    {
        "name": "Vgg16",
        "schema": {
            "package": "ModelZoom"
        }
    }
]

export {fastaiMetas}