---
sidebarDepth: 4
---
# P2734 [USACO3.3] 游戏 A Game
## 题面
### 题目背景

有如下一个双人游戏：$N (2 \leq N \leq 100)$ 个正整数的序列放在一个游戏平台上，游戏由玩家 $1$ 开始，两人轮流从序列的任意一端取一个数，取数后该数字被去掉并累加到本玩家的得分中，当数取尽时，游戏结束。以最终得分多者为胜。

### 题目描述

编一个执行最优策略的程序，最优策略就是使玩家在与最好的对手对弈时，能得到的在当前情况下最大的可能的总分的策略。你的程序要始终为第二位玩家执行最优策略。

### 输入格式

第一行: 正整数 $N$，表示序列中正整数的个数。

第二行至末尾: 用空格分隔的 $N$ 个正整数（大小为 $1-200$）。

### 输出格式

只有一行，用空格分隔的两个整数: 依次为玩家一和玩家二最终的得分。

### 样例 #1

#### 样例输入 #1

```
6 
4 7 2 9 5 2
```

#### 样例输出 #1

```
18 11
```

### 提示

题目翻译来自 NOCOW。

USACO Training Section 3.3

## 思路

这道题目可以通过 $dfs$ 剪枝完成(实际上就是一种变形的 $dp$ ).

对于考虑到 $[l,r]$ 时的所能产生的最大值 $cost_{[l,r]}$，下一个的选手 ，由于下一次是另一边的对手进行选取数字，所以有如下公式：

$$
cost{[l,r]} = max
\begin{cases}
    s_r - s_l - cost_{[l + 1,r]} + a_l\\
    s_{r - 1} - s_{l - 1} - cost_{[l,r - 1]} + a_r
\end{cases}
$$

其中
$$
s_x = \sum_{i=1}^{x} a_i
$$

那么可以使用 $dfs$ + 剪枝计算 $cost$ 数组，最后的答案为
1. $s_n - cost_{[1,n]}$
2. $cost_{[1,n]}$

## 代码
```cpp
#include<iostream>
#define MAXN 101
using namespace std;
int cost[MAXN][MAXN],a[MAXN],s[MAXN],n;
int dfs(int l,int r){
	if(cost[l][r])return cost[l][r];//剪枝，提前计算以减少重复次数，详细见刘汝佳《算法竞赛，入门经典》 
	if(l > r)return 0;//超过了就直接退出 
	if(l == r)return a[l];
	cost[l][r] = max(
		s[r]-s[l]-dfs(l+1,r)+a[l],
		s[r-1]-s[l-1]-dfs(l,r-1)+a[r]
	);
	return cost[l][r];
} 
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		s[i]=s[i-1] + a[i];
	}
	int ans = dfs(1,n);
	cout<<ans<<" "<<s[n]-ans;
}
```