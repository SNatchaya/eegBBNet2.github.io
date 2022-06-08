---
layout: default
title: GCNN
parent: Models
nav_order: 5
---

# GCNN
{: .no_toc }
This method is Graph Convolutional Neural Network from [this paper](https://ieeexplore.ieee.org/document/8716699). If you use the GCNN model in your research, please cite the following paper:

```
@ARTICLE{8716699,  
         author={Wang, Min and El-Fiqi, Heba and Hu, Jiankun and Abbass, Hussein A.},  
         journal={IEEE Transactions on Information Forensics and Security},   
         title={Convolutional Neural Networks Using Dynamic Functional Connectivity for EEG-Based Person Identification in Diverse Human States},   
         year={2019},  
         volume={14},  
         number={12},  
         pages={3259-3272},  
         doi={10.1109/TIFS.2019.2916403}}
```
[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## GCNN class
The configuration of this mathod is shown below. The implementation is based on [tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model).

```py
EEGBBNet.model.GCNN()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
| xxx | `int` xxx                   | `None`    |

---

### Build method
(?) Build the model that group layers into an object with training and inference features.

```py
GCNN.build()
```

---

### Fit method
Fit the GCNN model according to the given training set *(X_train, y_train)* and validation set *(X_val, y_val)*. This method is implemented based on [tf.keras.Model.fit()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#fit).

```py
GCNN.fit(X_train,
         y_train,
         x_val,
         y_val)
```
**Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.        | `xxx`        |
|y_train   | `ndarray` Class label of training set. | `xxx`           |

---

### Predict method
Return the output predictions and evaluation on samples in testing set *(X_test, y_test)*. This method is implemented based on [tf.keras.Model.predict()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#predict) and [tf.keras.Model.evaluate()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#evaluate)

```py
GCNN.evaluation(X_test, 
                y_test)
```

 **Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `xxx`    |
|y_test     | `ndarray` Class labels of testing set.    | `xxx`    |

**Return** : the loss value & metrics values for the model in test mode.

---

## Example

```py
from EEGBBNet.model import GCNN
import numpy as np

model = GCNN(input_shape=(x, y, z), 
             num_class=2, 
             monitor='val_loss', 
             shuffle=True)
model.fit(X_train, 
          y_train, 
          X_val, 
          y_val)

Y, evaluation = model.predict(X_test, 
                              y_test)
```
