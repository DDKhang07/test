var arr = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
    ln = arr.reduce((a,b) => a > b.length ? a : b.length, 0);
const result = arr.filter(pl => pl.length == ln);
console.log(result);

