// script.js

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
    { id: 54, name: '中盛', price: 150, type: 'topping'},
    { id: 55, name: '大盛', price: 210, type: 'topping'},
];

const MAX_BUDGET = 1120; //上限金額の設定
let quantities = {};

const NOODLE_REQUIRED_TOPPING_IDS = [53, 54, 55]; // 背脂変更, 中盛, 大盛

function hasSelectedNoodle() {
    return menuItems.some(item => item.type === 'noodle' && quantities[item.id] > 0);
}

function isNoodleRequiredTopping(itemId) {
    return NOODLE_REQUIRED_TOPPING_IDS.includes(itemId);
}

// --- 2. 初期化処理 ---
document.addEventListener('DOMContentLoaded', () => {
    menuItems.forEach(item => { quantities[item.id] = 0; });
    renderMenu();
    updateUI();
});

function renderMenu() {
    const menuListEl = document.getElementById('menu-list');
    menuListEl.innerHTML = ''; 

    menuItems.forEach(item => {
        const html = `
            <div id="row-${item.id}" class="list-group-item d-flex justify-content-between align-items-center menu-item">
                <div>
                    <div class="fw-bold">
                        ${item.name}
                        
                        ${item.type === 'noodle' ? '<span class="badge bg-danger ms-1" style="font-size:0.7em">麺</span>' : ''}
                    </div>
                    <div class="text-secondary small">¥${item.price.toLocaleString()}</div>
                </div>
                
                <div class="counter-area">
                    <button class="btn btn-sm btn-outline-danger btn-minus" 
                            onclick="updateQuantity(${item.id}, -1)" id="minus-${item.id}">－</button>
                    
                    <span class="count-display" id="count-${item.id}">0</span>
                    
                    <button class="btn btn-sm btn-outline-primary btn-plus" 
                            onclick="updateQuantity(${item.id}, 1)" id="plus-${item.id}">＋</button>
                </div>
            </div>`;
        menuListEl.insertAdjacentHTML('beforeend', html);
    });
}

// --- 3. 数量変更時の処理 ---
function updateQuantity(id, change) {
    const currentQty = quantities[id];
    const newQty = currentQty + change;
    
    // アイテム情報を取得
    const item = menuItems.find(i => i.id === id);

    // 0未満にはしない
    if (newQty < 0) return;

    // 麺類なら「2個以上」にはできないようにする
    if (item.type === 'noodle' && newQty > 1) return;

    quantities[id] = newQty;
    document.getElementById(`count-${id}`).innerText = newQty;
    updateUI();
}

// --- 4. 計算と表示更新 ---
function updateUI() {
    let total = 0;

    menuItems.forEach(item => {
        const qty = quantities[item.id];
        total += item.price * qty;
    });

    const totalEl = document.getElementById('displayTotal');
    totalEl.textContent = total.toLocaleString();

    if (total > MAX_BUDGET) {
        totalEl.parentElement.classList.remove('text-dark');
        totalEl.parentElement.classList.add('text-danger');
    } else {
        totalEl.parentElement.classList.remove('text-danger');
        totalEl.parentElement.classList.add('text-dark');
    }

    const remainingBudget = MAX_BUDGET - total;
    const noodleSelected = hasSelectedNoodle();

    menuItems.forEach(item => {
        const qty = quantities[item.id];
        const minusBtn = document.getElementById(`minus-${item.id}`);
        const plusBtn = document.getElementById(`plus-${item.id}`);
        const row = document.getElementById(`row-${item.id}`);

        minusBtn.disabled = (qty <= 0);

        let disablePlus = false;

        // 予算オーバーするなら追加不可
        if (item.price > remainingBudget) {
            disablePlus = true;
        }

        // ラーメンは1個まで
        if (item.type === 'noodle' && qty >= 1) {
            disablePlus = true;
        }

        // 背脂変更・中盛・大盛は、ラーメン未選択なら追加不可
        if (isNoodleRequiredTopping(item.id) && !noodleSelected) {
            disablePlus = true;
        }

        plusBtn.disabled = disablePlus;

        // 行の見た目を初期化
        row.style.opacity = '1';
        row.style.backgroundColor = '#fff';
        row.classList.remove('noodle-required');

        // 予算不足で未選択なら薄くする
        if (qty === 0 && item.price > remainingBudget) {
            row.style.opacity = '0.5';
            row.style.backgroundColor = '#e9ecef';
        }

        // ラーメン必須トッピングで、まだラーメンが無い場合
        if (qty === 0 && isNoodleRequiredTopping(item.id) && !noodleSelected) {
            row.classList.add('noodle-required');
        }
    });
}

function resetSelection() {
    menuItems.forEach(item => {
        quantities[item.id] = 0;
        document.getElementById(`count-${item.id}`).innerText = 0;
    });
    updateUI();
}

function runGacha(mode) {
    resetSelection();
    let currentTotal = 0;
    let selectedIds = [];
    let candidates = [...menuItems].sort(() => Math.random() - 0.5);

    const addFirst = (type) => {
        const foundIndex = candidates.findIndex(item => item.type === type && currentTotal + item.price <= MAX_BUDGET);
        if (foundIndex !== -1) {
            const item = candidates[foundIndex];
            selectedIds.push(item.id);
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
            selectedIds.push(item.id);
            currentTotal += item.price;
        }
    });

    selectedIds.forEach(id => {
        quantities[id] = 1;
        document.getElementById(`count-${id}`).innerText = 1;
    });
    updateUI();
    showModal(selectedIds, currentTotal);
}

function showModal(ids, total) {
    const listEl = document.getElementById('gacha-result-list');
    listEl.innerHTML = '';
    
    if (ids.length === 0) {
        listEl.innerHTML = '<li class="list-group-item text-danger">条件に合う商品が見つかりませんでした</li>';
    } else {
        ids.forEach(id => {
            const item = menuItems.find(i => i.id === id);
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

function showReceiptModal() {
    const selectedItems = menuItems.filter(item => quantities[item.id] > 0);
    const receiptEmptyEl = document.getElementById('receipt-empty');
    const receiptContentEl = document.getElementById('receipt-content');
    const receiptItemsEl = document.getElementById('receipt-items');
    const receiptTotalEl = document.getElementById('receipt-total');
    const receiptBudgetMessageEl = document.getElementById('receipt-budget-message');
    const receiptSuggestionEl = document.getElementById('receipt-suggestion');

    if (selectedItems.length === 0) {
        receiptEmptyEl.classList.remove('d-none');
        receiptContentEl.classList.add('d-none');
        return;
    }

    receiptEmptyEl.classList.add('d-none');
    receiptContentEl.classList.remove('d-none');
    receiptItemsEl.innerHTML = '';

    let total = 0;

    selectedItems.forEach(item => {
        const qty = quantities[item.id];
        const subtotal = item.price * qty;
        total += subtotal;

        receiptItemsEl.insertAdjacentHTML('beforeend', `
            <div class="receipt-row">
                <div class="receipt-name">${item.name}</div>
                <div class="receipt-qty">×${qty}</div>
                <div class="receipt-price">¥${item.price.toLocaleString()}</div>
                <div class="receipt-subtotal">¥${subtotal.toLocaleString()}</div>
            </div>
        `);
    });

    receiptTotalEl.textContent = total.toLocaleString();

    const remainingBudget = MAX_BUDGET - total;

    if (total > MAX_BUDGET) {
        receiptBudgetMessageEl.innerHTML = `<span class="text-danger">予算オーバー: ¥${(total - MAX_BUDGET).toLocaleString()}</span>`;
        receiptSuggestionEl.innerHTML = '';
    } else {
        receiptBudgetMessageEl.innerHTML = `<span class="text-success">残り予算: ¥${remainingBudget.toLocaleString()}</span>`;

        const affordableItems = getAffordableItems(remainingBudget);

        if (affordableItems.length === 0) {
            receiptSuggestionEl.innerHTML = `
                <div class="alert alert-secondary mt-3 mb-0">
                    残り金額で買える商品はありません。
                </div>
            `;
        } else {
            const bestItem = affordableItems[0];
            const itemNames = affordableItems
                .slice(0, 6)
                .map(item => item.name)
                .join(' / ');

            receiptSuggestionEl.innerHTML = `
                <div class="alert alert-info mt-3 mb-0">
                    <div class="fw-bold mb-1">残りの金額で買えるよ！</div>
                    <div class="mb-2">おすすめ: <strong>${bestItem.name}</strong>（¥${bestItem.price.toLocaleString()}）</div>
                    <div class="small text-muted">候補: ${itemNames}</div>
                </div>
            `;
        }
    }

    const receiptModal = new bootstrap.Modal(document.getElementById('receiptModal'));
    receiptModal.show();
}

function getAffordableItems(remainingBudget) {
    return menuItems
        .filter(item => 
            item.price <= remainingBudget &&
            !NOODLE_REQUIRED_TOPPING_IDS.includes(item.id) // ←これ追加
        )
        .sort((a, b) => b.price - a.price);
}