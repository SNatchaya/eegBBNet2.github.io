---
layout: default
title: EEGBBnet.models.SVM
parent: Models
grand_parent: API reference
nav_order: 1
---

# SVM
{: .no_toc }

Support Vector Machine

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## SVM class
The configuration of this mathod is shown below. The implementation is based on [sklearn.svm.SVC](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html).

```py
EEGBBNet.models.SVM()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
| random_state  | `int` RandomState instance.                   | `42` |

---

### Fit method
Fit the SVM model according to the given training set *(X_train, y_train)*. 

```py
SVM.fit(X_train,
        y_train)
```

**Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.        | `(subject*trial, feature)` |
|y_train   | `ndarray` Class label of training set. | `(subject*trial, )`              |

---

### Predict method
Return the output predictions and evaluation on samples in testing set `(X_test, y_test)`.

```py
SVM.evaluate(X_test, 
             y_test)
```
 
 **Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `(subjetc*trial, feature)`    |
|y_test     | `ndarray` Class labels of testing set.    | `(subjetc*trial, )`              |

**Returns** : *{y_pred, acc}* 

| Arguments | Description |
|:---|:---|
|y_pred | `ndarray` Predicted label of testing set.     |
|acc    | `int` Classification accuracy of model.       |

---

## Example

```py
from EEGBBNet.models import SVM
import numpy as np

model = SVM()
model.fit(X_train, 
          y_train)
y_pred,acc = model.evaluate(X_test, 
                            y_test)
```