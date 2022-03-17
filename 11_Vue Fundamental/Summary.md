# VUE FUNDAMENTAL #
Hal2 yang di pelajari pada Vue fundamental
1. Pengenalan vue
2. Dasar dasar vue
3. Vue Directive
4. Events and method
5. Cumputed properties and watchers
6. Component 

# 1. Pengenalan Vue
Vue adalah framework dari javascript untuk mengembangkan tampilan pada website yang lebih interaktif dan dinamis. 

Kenapa vue?
Karna mudah membuat aplikasi frontend dan website, Mudah dipelajari dan menyenangkan, dokumentasi yang lengkap dan rapi, ramping dan cepat. 

Cara kerja vue ada 2 tapi yang di bahas dimateri ini yaitu Vue CDN. Apa itu vue CDN? Vue CDN adalah vue yang dapat digunakan langsung di file html. 

# 2. Dasar-dasar vue
• Vue instance yaitu setiap aplikasi vue dimulai dengan membuat vue instance yang baru dengan fungsi vue.
• Vue data binding, ada 3 jenis data binding pada vue yaitu didalam konten, diatribut element dan di element html.
• Vue reactivity, vue instance memiliki property bernama data jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus di muat ulang. 

# 3. Vue Directive
Yaitu atribut khusus yang diawali dengan v-. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript di dalam atribut. 

Macam-macam vue directive dan yang harus di ingat:
1. v-bind (Directif data binding)
2. v-model (Directif data binding)
3. v-if, v-else dan else-if (Directif conditional rendering)
4. v-on (Directif event)
5. v-for(Directive perulangan) 

# 4. Events and Method 
Memantau event kita dapat menggunakan direktif v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa javascript saat di picu. 

Menggunakan methods
Methods adalah fungsi, yang dapat di akses secara langsung pada instance VM, atau menggunakan nya dalam ekspresi direktif. 

Semua metode akan memiliki konteks 'this' secara otomatis terikat pada instance vue. 

# 5. Computed Properties and watchers
Computed properties memberikan terlalu banyak logika secara langsung di template dapat menyebabkan menjadi berat dan susah untuk di pelihara. 

Watchers di vue.js adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah. 

# 6. Component
Komponen adalah vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai custom element didalam instance root vue yang dibuat dengan new vue. 

# TASK
Pada task kali ini kita membuat todo list dengan vue cdn, dan juga menggunakan beberapa vitur seperti v-model,v-if,dan yang lain2nya.