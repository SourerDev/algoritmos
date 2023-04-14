# Three Sum

Dada una matriz de enteros nums, devuelve todas las tripletas `[nums[i], nums[j], nums[k]]` tales que `i != j`, `i != k`, y `j != k`, y `nums[i] + nums[j] + nums[k] == 0.`
Tenga en cuenta que el conjunto de soluciones no debe contener tripletas duplicadas.

## Ejemplo 1

```text
Entrada: nums = [-1,0,1,2,-1,-4]
Salida: [[-1,-1,2],[-1,0,1]]
Explicación: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
números[1] + números[2] + números[4] = 0 + 1 + (-1) = 0.
números[0] + números[3] + números[4] = (-1) + 2 + (-1) = 0.
Las tripletas distintas son [-1,0,1] y [-1,-1,2].
Observa que el orden de la salida y el orden de las tripletas no importa.
```

## Ejemplo 2

```text
Entrada: números = [0,1,1]
Salida: []
Explicación: La única tripleta posible no suma 0.
```

## Ejemplo 3

```text
Entrada: nums = [0,0,0]
Salida: [[0,0,0]]
Explicación: El único triplete posible suma 0.
```

[LeetCode](https://leetcode.com/problems/3sum/)
