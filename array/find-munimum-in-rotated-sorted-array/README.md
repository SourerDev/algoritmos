# Find Minimum in Rotated Sorted Array

Supongamos que una matriz de longitud n ordenada de forma ascendente se gira entre 1 y n veces. Por ejemplo, la matriz `nums = [0,1,2,4,5,6,7]` podría convertirse en:

```text
[4,5,6,7,0,1,2] si se gira 4 veces.
[0,1,2,4,5,6,7] si se gira 7 veces.
```

Observa que girar una matriz `[a[0], a[1], a[2], ..., a[n-1]]` 1 vez da como resultado la matriz `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Dada la matriz rotada ordenada nums de elementos únicos, devuelva el elemento mínimo de esta matriz.
Debes escribir un algoritmo que se ejecute en tiempo O(log n).

## Ejemplo 1

```text
Entrada: nums = [3,4,5,1,2]
Salida: 1
Explicación: El array original era [1,2,3,4,5] rotado 3 veces.
```

## Ejemplo 2

```text
Entrada: nums = [4,5,6,7,0,1,2]
Salida: 0
Explicación: El array original era [0,1,2,4,5,6,7] y fue rotado 4 veces.
```

## Ejemplo 3

```text
Entrada: nums = [11,13,15,17]
Salida: 11
Explicación: El array original era [11,13,15,17] y fue rotado 4 veces.
```

[LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
