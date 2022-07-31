---
layout: default
title: EEGBBnet.models.RF
parent: Models
grand_parent: API reference
nav_order: 2
---

# RF
{: .no_toc }

Random Forest

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## RF class
The configuration of this mathod is shown below. The implementation is based on [sklearn.ensemble.RandomForestClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html).

```py
EEGBBNet.models.RF()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
|n_estimator    | `int` The number of trees in the forest.      | `100`     |
|max_depth      | `int` The maximum depth of the tree.          | `None`    |
|criterion      | `{'gini', 'entropy', 'log_loss'}` The function to measure the quality of a split | `gini` |
| random_state  | `int` RandomState instance.                   | `42`      |

---

### Fit method
Fit the RF model according to the given training set `(X_train, y_train)`. 

```py
RF.fit(X_train,
        y_train)
```

**Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.        | `(subject*trial, feature)`       |
|y_train   | `ndarray` Class label of training set. | `(subject*trial, )`              |

---

### Predict method
Return the output predictions and evaluation on samples in testing set `(X_test, y_test)`.

```py
RF.evaluate(X_test, 
            y_test)
```
 
 **Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `(subjetc*trial, feature)`      |
|y_test     | `ndarray` Class labels of testing set.    | `(subjetc*trial,)`              |

**Returns** : *{y_pred, acc}* 

| Arguments | Description |
|:---|:---|
|y_pred | `ndarray` Predicted label of testing set.     |
|acc    | `int` Classification accuracy of model.       |

---

## Example

```py
from EEGBBNet.models import RF
import numpy as np

model = RF()
model.fit(X_train, 
          y_train)
y_pred,acc = model.evaluate(X_test, 
                            y_test)
```