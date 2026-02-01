// --- 1. データ定義 ---
const menuItems = [
    { id: 1, name: '醤油ラーメン', price: 690, type: 'noodle' },
    { id: 2, name: '醤油ネギラーメン', price: 840, type: 'noodle' },
    { id: 3, name: '醤油ぴりネギラーメン', price: 840, type: 'noodle' },
    { id: 4, name: '醤油チャーシューラーメン', price: 980, type: 'noodle' },
    { id: 5, name: '醤油ネギチャーシューラーメン', price: 1130, type: 'noodle' },
    { id: 6, name: '醤油つけ麺', price: 840, type: 'noodle' },
    { id: 7, name: '味噌ラーメン', price: 690, type: 'noodle' },
    { id: 8, name: '味噌ネギラーメン', price: 840, type: 'noodle' },
    { id: 9, name: '味噌ぴりネギラーメン', price: 840, type: 'noodle' },
    { id: 10, name: '味噌チャーシューラーメン', price: 980, type: 'noodle' },
    { id: 11, name: '味噌ネギチャーシューラーメン', price: 1130, type: 'noodle' },
    { id: 12, name: '味噌つけ麺', price: 840, type: 'noodle' },
    { id: 13, name: '塩ラーメン', price: 690, type: 'noodle' },
    { id: 14, name: '塩ネギラーメン', price: 840, type: 'noodle' },
    { id: 15, name: '塩ぴりネギラーメン', price: 840, type: 'noodle' },
    { id: 16, name: '塩チャーシューラーメン', price: 980, type: 'noodle' },
    { id: 17, name: '塩ネギチャーシューラーメン', price: 1130, type: 'noodle' },
    { id: 18, name: '特製味噌ラーメン', price: 840, type: 'noodle' },
    { id: 19, name: '特製味噌ネギラーメン', price: 990, type: 'noodle' },
    { id: 20, name: '特製味噌ぴりネギラーメン', price: 990, type: 'noodle' },
    { id: 21, name: '特製味噌チャーシューラーメン', price: 1130, type: 'noodle' },
    { id: 22, name: '特製味噌ネギチャーシューラーメン', price: 1280, type: 'noodle' },
    { id: 23, name: '辛味噌ラーメン', price: 840, type: 'noodle' },
    { id: 24, name: '辛味噌ネギラーメン', price: 990, type: 'noodle' },
    { id: 25, name: '辛味噌ぴりネギラーメン', price: 990, type: 'noodle' },
    { id: 26, name: '辛味噌チャーシューラーメン', price: 1130, type: 'noodle' },
    { id: 27, name: '辛味噌ネギチャーシューラーメン', price: 1280, type: 'noodle' },
    { id: 28, name: '辛味噌つけ麺', price: 990, type: 'noodle' },
    { id: 29, name: 'コロチャーシュー丼', price: 370, type: 'rice' },
    { id: 30, name: 'チャーシュー丼', price: 370, type: 'rice' },
    { id: 31, name: 'ネギチャーシュー丼', price: 370, type: 'rice' },
    { id: 32, name: '特製餃子', price: 370, type: 'side' },
    { id: 33, name: 'チャーハン', price: 370, type: 'rice' },
    { id: 34, name: '卵かけごはん', price: 350, type: 'rice' },
    { id: 35, name: 'ライス', price: 220, type: 'rice' },
    { id: 36, name: '半ライス', price: 170, type: 'rice' },
    { id: 37, name: 'チャーシュー5枚', price: 370, type: 'side' },
    { id: 38, name: 'コロチャーシュー15個', price: 370, type: 'side' },
    { id: 39, name: 'コロチャーシュー6個', price: 150, type: 'side' },
    { id: 40, name: '味付玉子', price: 150, type: 'topping' },
    { id: 41, name: 'メンマ', price: 150, type: 'topping' },
    { id: 42, name: '穂先メンマ', price: 150, type: 'topping' },
    { id: 43, name: '薬味ネギ', price: 80, type: 'topping' },
    { id: 44, name: 'ホウレン草', price: 80, type: 'topping' },
    { id: 45, name: '青ネギ', price: 80, type: 'topping' },
    { id: 46, name: '白髪ネギ', price: 160, type: 'topping' },
    { id: 47, name: '海苔5枚', price: 150, type: 'topping' },
    { id: 48, name: '黒ばら海苔', price: 150, type: 'topping' },
    { id: 49, name: 'コーン', price: 80, type: 'topping' },
    { id: 50, name: 'バター', price: 80, type: 'topping' },
    { id: 51, name: '紅生姜', price: 50, type: 'topping' },
    { id: 52, name: '練り梅', price: 50, type: 'topping' },
    { id: 53, name: '背脂変更', price: 100, type: 'topping' },
];

const MAX_BUDGET = 1120; // 上限金額

// --- 2. 初期化処理 ---
document.addEventListener('DOMContentLoaded', () => {
    const menuListEl = document.getElementById('menu-list');
    
    // HTML生成
    menuItems.forEach(item => {
        const html = `
            <label id="label-${item.id}" class="list-group-item d-flex justify-content-between align-items-center menu-item">
                <span>
                    <input class="form-check-input me-2 menu-checkbox" type="checkbox" 
                           id="check-${item.id}"
                           value="${item.id}" 
                           data-price="${item.price}" 
                           onchange="updateUI()">
                    ${item.name}
                </span>
                <span class="badge bg-secondary rounded-pill">¥${item.price.toLocaleString()}</span>
            </label>`;
        menuListEl.insertAdjacentHTML('beforeend', html);
    });
    
    updateUI(); // 初回計算（0円表示）
});

// --- 3. 計算と表示更新（今回の一番重要な部分） ---
function updateUI() {
    let total = 0;
    
    // 1. 現在の合計金額を計算
    const checkboxes = document.querySelectorAll('.menu-checkbox');
    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseInt(cb.dataset.price);
        }
    });

    // 2. 合計表示を更新
    const totalEl = document.getElementById('displayTotal');
    totalEl.textContent = total.toLocaleString();

    // 合計が上限を超えたら赤くするなどの装飾
    if (total > MAX_BUDGET) {
        totalEl.parentElement.classList.remove('text-dark');
        totalEl.parentElement.classList.add('text-danger');
    } else {
        totalEl.parentElement.classList.remove('text-danger');
        totalEl.parentElement.classList.add('text-dark');
    }

    // 3. 【新機能】予算オーバー判定（グレーアウト処理）
    const remainingBudget = MAX_BUDGET - total;

    checkboxes.forEach(cb => {
        const price = parseInt(cb.dataset.price);
        const label = document.getElementById('label-' + cb.value);

        // 「チェックされておらず」かつ「値段が残り予算より高い」場合
        if (!cb.checked && price > remainingBudget) {
            label.classList.add('dimmed'); // 暗くするクラスを追加
        } else {
            label.classList.remove('dimmed'); // 元に戻す
        }
    });
}

// リセット機能
function resetSelection() {
    document.querySelectorAll('.menu-checkbox').forEach(cb => cb.checked = false);
    updateUI();
}

// --- 4. ガチャ機能 ---
function runGacha(mode) {
    let currentTotal = 0;
    let selected = [];
    let candidates = [...menuItems].sort(() => Math.random() - 0.5);

    const addFirst = (type) => {
        const foundIndex = candidates.findIndex(item => item.type === type && currentTotal + item.price <= MAX_BUDGET);
        if (foundIndex !== -1) {
            const item = candidates[foundIndex];
            selected.push(item);
            currentTotal += item.price;
            candidates.splice(foundIndex, 1);
        }
    };

    if (mode === 'noodle') addFirst('noodle');
    else if (mode === 'rice_set') { addFirst('rice'); addFirst('side'); }
    else if (mode === 'topping') candidates = candidates.filter(item => item.type === 'topping');
    else if (mode === 'carb') { addFirst('noodle'); addFirst('rice'); }

    candidates.forEach(item => {
        if (currentTotal + item.price <= MAX_BUDGET) {
            selected.push(item);
            currentTotal += item.price;
        }
    });

    showModal(selected, currentTotal);
}

function showModal(items, total) {
    const listEl = document.getElementById('gacha-result-list');
    listEl.innerHTML = '';
    
    if (items.length === 0) {
        listEl.innerHTML = '<li class="list-group-item text-danger">条件に合う商品が見つかりませんでした</li>';
    } else {
        items.forEach(item => {
            let badgeClass = 'bg-secondary';
            if(item.type === 'noodle') badgeClass = 'bg-danger';
            if(item.type === 'rice') badgeClass = 'bg-primary';
            if(item.type === 'topping') badgeClass = 'bg-success';
            
            listEl.insertAdjacentHTML('beforeend', `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div><span class="badge ${badgeClass} me-2">${item.type}</span>${item.name}</div>
                    <span>¥${item.price.toLocaleString()}</span>
                </li>
            `);
        });
    }

    document.getElementById('gacha-total').textContent = total.toLocaleString();
    document.getElementById('gacha-budget-left').textContent = (MAX_BUDGET - total).toLocaleString();
    const myModal = new bootstrap.Modal(document.getElementById('resultModal'));
    myModal.show();
}