// Data produk contoh
const products = [
{ id: 1, name: 'Gelang Kerang Aestetic', price: 15000, img: 'https://i.pinimg.com/736x/a0/a4/db/a0a4dbb7b5dc2dc23f5b7d875063285d.jpg', stok: 20 },
{ id: 2, name: 'Liontin Biru Safir', price: 30000, img: 'https://i.pinimg.com/736x/2a/b3/be/2ab3beb72fdd2dc65a0c406312f1f67b.jpg', stok: 10 },
{ id: 3, name: 'Anting Berlian', price: 20000, img: 'https://i.pinimg.com/736x/03/ab/76/03ab76f4b9a9b9b224b35c5deb9291ae.jpg', stok: 15 },
{ id: 4, name: 'Nail Art Blue', price: 17000, img: 'https://i.pinimg.com/1200x/5f/69/1b/5f691b9c73705fa924ef60aef902ba53.jpg', stok: 8 },
{ id: 5, name: 'Cincin Couple', price: 45000, img: 'https://i.pinimg.com/736x/9b/c2/cb/9bc2cbbcef59cc6031e74471b7b81556.jpg', stok: 30 },
{ id: 6, name: 'Perfect islamic dress', price: 200000, img: 'https://i.pinimg.com/736x/e3/68/47/e36847021768f65eda8c82ba9a746207.jpg', stok: 7},
{ id: 7, name: 'Dres terbaru', price: 250000, img: 'https://i.pinimg.com/736x/86/e1/1a/86e11a4964f38253e6ab929c55b479a8.jpg', stok: 3},
{ id: 8, name: 'Simple dress', price: 180000, img: 'https://i.pinimg.com/1200x/cb/d8/de/cbd8dec0b795af1f305e739f397d7e92.jpg', stok: 6},
{ id: 9, name: 'Blueair crown', price: 120000, img: 'https://i.pinimg.com/736x/00/ac/77/00ac77063da0a8ec1c1b66d6e1b36056.jpg', stok: 5},
{ id:10, name: 'Whitediamond crown', price: 150000, img: 'https://i.pinimg.com/736x/8e/37/2e/8e372eca8a1a07c12d4bc539bd07e904.jpg', stok: 5},
{ id:11, name: 'Simple crown', price: 100000, img: 'https://i.pinimg.com/1200x/02/43/61/024361f80190bf62efdef10d767dbc47.jpg', stok: 9},
{ id:12, name: 'White gown', price: 12000000, img: 'https://i.pinimg.com/1200x/f5/2b/a8/f52ba8d706436361d91e644eec667d3d.jpg', stok: 2},
{ id:13, name: 'Royal GoldGown', price: 15000000, img: 'https://i.pinimg.com/736x/a6/5f/49/a65f498e163d4a8c3502d549cdd8d4f7.jpg', stok: 1},
{ id:14, name: 'Blueair Gown', price: 15000000, img: 'https://i.pinimg.com/736x/9c/0a/df/9c0adf3545f6d420f5c823e8bed03947.jpg', stok: 2},
{ id:15, name: 'Blackdiamond Gown', price: 30000000, img: 'https://i.pinimg.com/736x/50/2c/68/502c681604c8dac6b272b8796304772f.jpg', stok: 1},
{ id:16, name: 'Heels whitediamond', price: 20000000, img: 'https://i.pinimg.com/1200x/26/e3/37/26e337e29bc45a0d3f769f9324ee695c.jpg', stok: 3},
{ id:17, name: 'H-Simple white', price: 2500000, img: 'https://i.pinimg.com/736x/31/18/49/311849af0515f2c11b77fb3329092fbf.jpg', stok: 2},
{ id:18, name: 'G-Simple dress', price: 10000000, img: 'https://i.pinimg.com/736x/98/f5/16/98f516774ce5ab3705df4c7e21b688e8.jpg', stok: 3},
{ id:19, name: 'Set-blue', price: 40000000, img: 'https://i.pinimg.com/736x/a9/b2/81/a9b281f1adbf34ff978e7c8b6c461d24.jpg', stok: 1},
{ id:20, name: 'Necklace superQueen', price: 25000000, img: 'https://i.pinimg.com/736x/0c/57/df/0c57dfafbdc8e8bbb8dc44543ba5bdb4.jpg', stok: 1},
{ id:21, name: 'Braceled Diamond', price: 25000000, img: 'https://i.pinimg.com/736x/9b/82/ac/9b82ac018eab70af1720e589a601daae.jpg', stok: 3},
{ id:22, name: 'Set-birusafir', price: 180000000, img: 'https://i.pinimg.com/1200x/3c/16/ec/3c16ecfaa001d301f31e72f17205e8b7.jpg', stok: 1},
{ id:23, name: 'Set-whitediamond', price: 120000000, img: 'https://i.pinimg.com/736x/b5/42/93/b542933bc3c23c3c1d7df801f81c0c15.jpg', stok: 2},
{ id:24, name: 'Whitecrown', price: 15000000, img: 'https://i.pinimg.com/736x/cc/b1/c6/ccb1c6394d5f8c2b4bb8b6e1495717cf.jpg', stok: 3},
{ id:25, name: 'Golddiamond crown', price: 12000000, img: 'https://i.pinimg.com/736x/1d/c0/a8/1dc0a8ed01982835773b9c2ea4ebc9ee.jpg', stok: 4},
{ id:26, name: 'Hairdecoration', price: 1200000, img: 'https://i.pinimg.com/736x/ba/7f/14/ba7f141aef1d57619b66f9aa01e6d9ad.jpg', stok: 2},
{ id:27, name: 'Royalhair Decoration', price: 150000, img: 'https://i.pinimg.com/736x/ff/c7/ff/ffc7ff1de96ac5aeb7645e3eb7345858.jpg', stok: 1},
];


// Helper format harga (Rupiah)
function formatRp(n){
  return 'Rp' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// State keranjang
let cart = JSON.parse(localStorage.getItem('makinfashion_cart') || '[]');

// DOM refs
const productsEl = document.getElementById('products');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const cartModalTotalEl = document.getElementById('cartModalTotal');
const cartItemsEl = document.getElementById('cartItems');
const viewCartBtn = document.getElementById('viewCartBtn');
const cartBtn = document.getElementById('cartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const modalCheckoutBtn = document.getElementById('modalCheckoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const searchInput = document.getElementById('searchInput');

// Render daftar produk
function renderProducts(list){
  productsEl.innerHTML = '';
  list.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4';
    col.innerHTML = `
      <div class="card product-card">
        <img src="${p.img}" class="card-img-top product-img" alt="${p.name}" style="cunsor:pointer">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="price">${formatRp(p.price)}</p>
          <p class="small-muted">Stok: ${p.stok}</p>
          <div class="d-flex align-items-center gap-2 mt-2">
            <input type="number" min="1" max="${p.stok}" value="1" class="form-control qty-input" style="width:100px">
            <button class="btn btn-primary addBtn">Tambah</button>
          </div>
        </div>
      </div>
    `;
    // event handlers
    col.querySelector('.product-img').addEventListener('click', () => {
      localStorange.setItem('selectedProduct', JSON.stringify(p));
      window.location.href = 'produk.html';
    });
    col.querySelector('.addBtn').addEventListener('click', ()=>{
      const qty = parseInt(col.querySelector('.qty-input').value) || 1;
      addToCart(p.id, qty);
    });
    productsEl.appendChild(col);
  });

}

// Tambah ke keranjang
function addToCart(productId, qty){
  const product = products.find(p=>p.id===productId);
  if(!product) return alert('Produk tidak ditemukan');
  const existing = cart.find(i=>i.id===productId);
  if(existing){
    const newQty = existing.qty + qty;
    if(newQty > product.stok) return alert('Jumlah melebihi stok tersedia');
    existing.qty = newQty;
  }else{
    if(qty > product.stok) return alert('Jumlah melebihi stok tersedia');
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty });
  }
  saveCart();
  renderCartCount();
  showToast(`${product.name} ditambahkan ke keranjang`);
}

// Save ke localStorage
function saveCart(){
  localStorage.setItem('makinfashion_cart', JSON.stringify(cart));
}

// Render jumlah item di header dan total
function renderCartCount(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  cartCountEl.textContent = count;
  cartTotalEl.textContent = formatRp(cart.reduce((s,i)=>s + i.qty * i.price, 0));
}

// Render isi keranjang di modal
function renderCartModal(){
  if(cart.length===0){
    cartItemsEl.innerHTML = '<p class="text-center small-muted">Keranjang kosong</p>';
    cartModalTotalEl.textContent = formatRp(0);
    return;
  }
  cartItemsEl.innerHTML = '';
  cart.forEach(item=>{
    const row = document.createElement('div');
    row.className = 'd-flex gap-3 align-items-center mb-3';
    row.innerHTML = `
      <img src="${item.img}" width="80" height="80" style="object-fit:cover; border-radius:6px">
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <strong>${item.name}</strong>
            <div class="small-muted">${formatRp(item.price)}</div>
          </div>
          <div>
            <button class="btn btn-sm btn-outline-danger removeBtn">Hapus</button>
          </div>
        </div>
        <div class="mt-2 d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary decBtn">-</button>
          <input type="number" class="form-control qtyControl" value="${item.qty}" style="width:70px">
          <button class="btn btn-sm btn-outline-secondary incBtn">+</button>
        </div>
      </div>
    `;
    // handlers
    row.querySelector('.removeBtn').addEventListener('click', ()=>{
      cart = cart.filter(c=>c.id!==item.id);
      saveCart(); renderCartModal(); renderCartCount();
    });
    row.querySelector('.decBtn').addEventListener('click', ()=>{
      changeQty(item.id, item.qty - 1);
    });
    row.querySelector('.incBtn').addEventListener('click', ()=>{
      changeQty(item.id, item.qty + 1);
    });
    row.querySelector('.qtyControl').addEventListener('change', (e)=>{
      const v = parseInt(e.target.value)||1; changeQty(item.id, v);
    });

    cartItemsEl.appendChild(row);
  });
  cartModalTotalEl.textContent = formatRp(cart.reduce((s,i)=>s + i.qty * i.price,0));
}

// Ubah qty di keranjang dengan validasi stok
function changeQty(productId, newQty){
  const product = products.find(p=>p.id===productId);
  if(newQty < 1) newQty = 1;
  if(newQty > product.stok) return alert('Jumlah melebihi stok');
  cart = cart.map(i=> i.id===productId ? {...i, qty: newQty} : i);
  saveCart(); renderCartModal(); renderCartCount();
}

// Clear cart
function clearCart(){
  if(!confirm('Kosongkan keranjang?')) return;
  cart = [];
  saveCart(); renderCartModal(); renderCartCount();
}

// Show toast sederhana (bootstrap native toast bisa diganti)
function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast align-items-center show position-fixed top-0 end-0 m-3';
  t.style.zIndex = 9999; t.innerHTML = `<div class="d-flex"><div class="toast-body">${msg}</div><button class="btn-close me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button></div>`;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 2200);
}

// Checkout flow: buka modal checkout dan isi ringkasan
function openCheckout(){
  if(cart.length===0) return alert('Keranjang kosong');
  const summary = document.getElementById('checkoutSummary');
  summary.innerHTML = '';
  cart.forEach(i=>{
    const p = document.createElement('div');
    p.className = 'd-flex justify-content-between mb-2';
    p.innerHTML = `<div>${i.name} x ${i.qty}</div><div>${formatRp(i.qty * i.price)}</div>`;
    summary.appendChild(p);
  });
  const total = cart.reduce((s,i)=>s + i.qty * i.price,0);
  const totEl = document.createElement('div');
  totEl.className = 'd-flex justify-content-between mt-3 border-top pt-2 fw-bold';
  totEl.innerHTML = `<div>Total</div><div>${formatRp(total)}</div>`;
  summary.appendChild(totEl);
  cartModal.hide();
  checkoutModal.show();
}

// Place order: simulate pembayaran, unduh JSON order, dan kosongkan keranjang
function placeOrder(formData){
  const order = {
    id: 'ORD' + Date.now(),
    createdAt: new Date().toISOString(),
    customer: {
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      note: formData.get('note')
    },
    items: cart,
    total: cart.reduce((s,i)=>s + i.qty * i.price,0)
  };
  // Generate file download
  const blob = new Blob([JSON.stringify(order, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${order.id}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);

  alert('Pesanan berhasil dibuat!');
  cart = [];
  saveCart(); renderCartCount(); checkoutModal.hide();
}

// Bind events
viewCartBtn.addEventListener('click', ()=>{ renderCartModal(); cartModal.show(); });
cartBtn.addEventListener('click', ()=>{ renderCartModal(); cartModal.show(); });
clearCartBtn.addEventListener('click', clearCart);
checkoutBtn.addEventListener('click', openCheckout);
modalCheckoutBtn.addEventListener('click', openCheckout);

// Search
searchInput.addEventListener('input', (e)=>{
  const q = e.target.value.trim().toLowerCase();
  const filtered = products.filter(p=> p.name.toLowerCase().includes(q));
  renderProducts(filtered);
});

// Checkout form submit
document.getElementById('checkoutForm').addEventListener('submit', function(e){
  e.preventDefault();
  // simple bootstrap validation
  if(!this.checkValidity()){
    this.classList.add('was-validated');
    return;
  }
  const fd = new FormData(this);
  placeOrder(fd);
});

// Initial render
renderProducts(products);
renderCartCount();