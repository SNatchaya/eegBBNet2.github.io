---
layout: default
title: SVM
parent: Models
nav_order: 1
---

# Support Vector Machine (SVM)
{: .no_toc }

[<img src="./images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## SVM class
The implementation is based on [sklearn.svm.SVC](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html) The configuration of this mathod is shown below.

```py
EEGBBNet.model.SVM()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |

---

### Fit method
Fit the SVM model according to the given training data. 

```py
SVM.fit(X_train,
        y_train)
```

**Arguments**

| Arguments | Description |
|:---|:----|
|X_train   | `ndarray` Training EEG signals, where shape: (*#trial*, *#features*) | 
|y_train   | `ndarray` Class label of training set, where shape: (*#trial*) |

---

### Predict method
Return the output predictions and classification accuracy on samples in X_test.

```py
SVM.predict(X_test, 
            y_test)
```
 
 **Arguments**

| Arguments | Description |
|:---|:----|
|X_test     | `ndarray` Testing EEG signals, where shape: (*#trial*, *#features*)   | 
|y_test     | `ndarray` Class labels of testing set, where shape (*#trial*)         |
|**Return {y_pred,acc}** | `ndarray` **y_pred** : {Predicted label}, and **acc** : {Classification accuracy}| for samples in X_test and y_test    |
---

## Example

```py
from EEGBBNet.model import SVM
import numpy as np

model = SVM()
model.fit(X_train, y_train)
y_pred,acc = model.predict(X_test, y_test)
```