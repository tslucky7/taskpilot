# TaskPilot 学習README

## Week 1（A05）：this / prototype をアプリ実装で理解する

> 目的：
> - this が「どう決まるか」を、イベントハンドラで体験する
> - prototypeメソッドと、インスタンスに生える関数の違いを観察する

---

### ✅ 0. 起動確認（最初にここ）
- [ ] `cd web && npm run dev` で起動できる

---

### ✅ 1. ドメインモデルを作る（model）
- [ ] `src/model/task.ts` を作成
  - Task型（id, title）
  - `createTask(title)` を作り、IDを採番する（雑でOK：連番 or Date.now）

<!-- 実装メモ：
- Taskは「値」なので interface/type を使う
- ID生成は今週は簡易でOK（来週以降改善）
-->

---

### ✅ 2. Storeを作る（状態と操作）
- [ ] `src/store/taskStore.ts` を作成
  - `TaskStore` クラスを作る
  - `add(title)`, `remove(id)`, `clear()`, `all()` を持たせる
  - まずはメモリ配列だけで管理（永続化は後の週）

<!-- A05ポイント：
- クラスメソッドは prototype 上に生える
- state（tasks配列）はインスタンスに生える
-->

---

### ✅ 3. UIクラスを作る（this の罠を踏む）
- [ ] `src/ui/TaskApp.ts` を作成
  - constructorでDOM要素を取得して保持
  - `mount()` でイベントを登録
  - `render()` でテーブル描画
  - まず **わざと** `this` が壊れる書き方をして、壊れたことを確認する

<!-- ここが今週のメイン：
1) form.addEventListener('submit', this.onSubmit);
   → この時、onSubmit内の this は TaskApp ではなくなる（または undefined）
2) console.log(this) を入れて確認
3) 修正：
   - this.onSubmit = this.onSubmit.bind(this) を constructor で実行
   or
   - onSubmit を arrow function のプロパティにする（= インスタンスに生える）
-->

---

### ✅ 4. prototype 観察ボタンを実装する
- [ ] `prototype観察` ボタンを押すと、以下を表示する
  - `Object.getPrototypeOf(appInstance)` の結果
  - `appInstance.onSubmit` がどこに生えているか
    - bind方式 → prototype
    - arrow方式 → instance

<!-- チェック観点：
- class method は prototype
- arrow property は instance（毎回関数が作られる）
-->

---

### ✅ 5. 仕上げ：DoD（完了条件）
- [ ] タスク追加・削除・全削除が動く
- [ ] `this` が壊れる現象を体験し、修正できる
- [ ] 「prototypeメソッド」と「インスタンスのarrow関数」の違いを説明できる

---

## 来週以降（予告：詳細は依頼されたら生成）
- Week 2：例外設計 / Result型 / バリデーション（A06）
- Week 3：非同期 / fetch / APIクライアント（B07-B09）
- Week 4：Node API（Express）追加（N系）
- Week 5：型共有 / テスト / CI（T/P系）
