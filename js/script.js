// Base de datos REAL de productos de Dreycom CON FORMATOS MIXTOS
const products = {
    "DRE001": {
        name: "360 CASE DISEÑO ESCARCHADO BORDE SILICONA GAMUZADO + POPSOCKET + MICA",
        price: "S/ 29.00",
        description: "Funda 360° con diseño escarchado, borde de silicona gamuzado, incluye popsocket y mica protectora.",
        models: ["IP 12", "IP 13 PRO", "ZTE V20 SMART", "MOTO G9 POWER", "SAM A32 4G", "SAM A22 5G", "REDMI 9C"],
        category: "Funda 360° Completa",
        image: "products/case1.webp"
    },
    "DRE002": {
        name: "360° CASE DISEÑO DIAMANTADO CON POLVO BORDE COLORES + POPSOCKET",
        price: "S/ 29.00",
        description: "Funda 360° con diseño diamantado, polvo de colores en el borde e incluye popsocket.",
        models: ["SAM A10S", "IP 12 PRO", "REALME C11 2021", "MOTO G50 5G", "ZTE A71"],
        category: "Funda 360° Diamantada",
        image: "products/case2.webp"
    },
    "DRE003": {
        name: "CASE BRILLO CON PROTECTOR DE CÁMARA COLOR + MICA",
        price: "S/ 29.00",
        description: "Funda con acabado brillo, protector de cámara color e incluye mica protectora.",
        models: ["SAM A52S", "IP XR", "MOTO G20", "REDMI 9", "NOTE 10 PRO", "ZTE A5 2020", "SAM A03S", "SAM A22 4G"],
        category: "Funda Brillo con Protector",
        image: "products/case3.webp"
    },
    "DRE004": {
        name: "CASE 3 EN 1 TRANSPARENTE COLOR + GAMUZA (Celeste)",
        price: "S/ 35.00",
        description: "Funda 3 en 1 transparente en color celeste con gamuza integrada.",
        models: ["SAM A21S", "REDMI 11 LITE 5G", "MOTO E20", "ZTE A51", "IP 13", "SAM A12"],
        category: "Funda 3 en 1 Transparente",
        image: "products/case4.webp"
    },
    "DRE005": {
        name: "CASE 3 EN 1 TRANSPARENTE COLOR + GAMUZA (Morado)",
        price: "S/ 35.00",
        description: "Funda 3 en 1 transparente en color morado con gamuza integrada.",
        models: ["MOTO E7 POWER", "REDMI 9A", "ZTE A3 2020", "MOTO G60S", "SAM A03S", "IP 12 PRO", "OPPO A16"],
        category: "Funda 3 en 1 Transparente",
        image: "products/case5.webp"
    },
    "DRE006": {
        name: "CASE 3 EN 1 PRO CAMERA DISEÑO + MICA",
        price: "S/ 35.00",
        description: "Funda 3 en 1 con diseño especial para cámara profesional e incluye mica.",
        models: ["IP 13 PRO", "REDMI 9C", "REALME C21 Y", "SAM A52S", "NOTE 10S"],
        category: "Funda 3 en 1 Pro Camera",
        image: "products/case6.webp"
    },
    "DRE007": {
        name: "CASE BRILLO PROTECTOR CÁMARA DISEÑO INTERIOR GAMUZADO + PULSERA + MICA (Var. A)",
        price: "S/ 29.00",
        description: "Funda brillo con protector de cámara, diseño interior gamuzado, incluye pulsera y mica.",
        models: ["MOTO G20", "IP 12", "SAM A22 4G", "ZTE V20 SMART", "SAM A10S", "REDMI 9", "SAM A32 4G", "REDMI 11 s/mica"],
        category: "Funda Brillo Completa",
        image: "products/case7.webp"
    },
    "DRE008": {
        name: "CASE BRILLO PROTECTOR CÁMARA DISEÑO INTERIOR GAMUZADO + PULSERA + MICA (Var. B)",
        price: "S/ 29.00",
        description: "Funda brillo con protector de cámara, diseño interior gamuzado, incluye pulsera y mica.",
        models: ["MOTO G50 5G", "ZTE A71", "IP XR", "SAM A12", "MOTO G9 POWER", "REDMI 11 LITE 5G"],
        category: "Funda Brillo Completa",
        image: "products/case8.jpg"
    },
    "DRE009": {
        name: "CASE BRILLO PROTECTOR CÁMARA DISEÑO INTERIOR GAMUZADO + PULSERA DE SILICONA SUAVE",
        price: "S/ 29.00",
        description: "Funda brillo con protector de cámara, diseño interior gamuzado e incluye pulsera de silicona suave.",
        models: ["REDMI 9A", "MOTO E7 POWER", "ZTE A5 2020", "NOTE 10 PRO", "SAM A21S", "IP 13", "ZTE A51"],
        category: "Funda Brillo con Pulsera",
        image: "products/case9.webp"
    },
    "DRE010": {
        name: "CASE BRILLO PROTECTOR CÁMARA DISEÑO INTERIOR GAMUZADO + PULSERA + MICA (Var. C)",
        price: "S/ 29.00",
        description: "Funda brillo con protector de cámara, diseño interior gamuzado, incluye pulsera y mica.",
        models: ["MOTO E20", "REALME C11 2021", "MOTO G60S", "ZTE A3 2020", "OPPO A16"],
        category: "Funda Brillo Completa",
        image: "products/case10.webp"
    },
    "DRE011": {
        name: "CASE BRILLO PROTECTOR CÁMARA DISEÑO INTERIOR GAMUZADO + PULSERA + MICA (Var. D)",
        price: "S/ 29.00",
        description: "Funda brillo con protector de cámara, diseño interior gamuzado, incluye pulsera y mica.",
        models: ["SAM A52S", "IP 13 PRO", "SAM A03S", "MOTO G20", "SAM A22 5G", "REDMI 11 s/mica", "ZTE V20 SMART", "NOTE 10S"],
        category: "Funda Brillo Completa",
        image: "products/case11.webp"
    },
    "DRE012": {
        name: "CASE 3 EN 1 BRILLANTE",
        price: "S/ 35.00",
        description: "Funda 3 en 1 con acabado brillante y diseño elegante.",
        models: ["SAM A32 4G", "REDMI 9C", "IP 12", "SAM A10S", "REALME C21 Y", "MOTO G9 POWER"],
        category: "Funda 3 en 1 Brillante",
        image: "products/case12.jpg"
    }
};

// Variables globales
let scannerActive = false;
let currentFacingMode = "environment"; // Cámara trasera por defecto
let flashOn = false;
let currentStream = null;

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log("🟢 DOM cargado - Iniciando aplicación");
    
    // Navegación entre páginas
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Actualizar enlace activo
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar página correspondiente
            const pageId = this.getAttribute('data-page');
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            // Iniciar cámara automáticamente si vamos a la página del escáner
            if (pageId === 'scanner') {
                console.log("🟡 Navegando a escáner - iniciando cámara");
                setTimeout(() => {
                    startCamera();
                }, 500);
            } else {
                console.log("🟡 Navegando fuera de escáner - deteniendo cámara");
                stopCamera();
            }
        });
    });

    // Cambiar cámara
    document.getElementById('toggle-camera').addEventListener('click', function() {
        console.log("🟡 Botón cambiar cámara clickeado");
        toggleCamera();
    });

    // Toggle flash
    document.getElementById('toggle-flash').addEventListener('click', function() {
        console.log("🟡 Botón flash clickeado");
        toggleFlash();
    });

    // Búsqueda de producto
    document.getElementById('search-product').addEventListener('click', function() {
        const sku = document.getElementById('barcode-input').value.trim().toUpperCase();
        console.log("🟡 Búsqueda manual:", sku);
        
        if (sku) {
            searchProduct(sku);
        } else {
            alert('Por favor, ingresa un código SKU.');
        }
    });

    // Simular escaneo
    document.getElementById('simulate-scan').addEventListener('click', function() {
        console.log("🟡 Simular escaneo clickeado");
        // Seleccionar un SKU aleatorio de la base de datos
        const skus = Object.keys(products);
        const randomSku = skus[Math.floor(Math.random() * skus.length)];
        
        searchProduct(randomSku);
    });

    // Volver al escáner
    document.getElementById('back-to-scanner').addEventListener('click', function() {
        console.log("🟡 Volver a escáner clickeado");
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-page="scanner"]').classList.add('active');
        
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById('scanner').classList.add('active');
        
        // Limpiar input
        document.getElementById('barcode-input').value = '';
        
        // Reiniciar cámara
        setTimeout(() => {
            startCamera();
        }, 500);
    });

    // Permitir búsqueda con Enter
    document.getElementById('barcode-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-product').click();
        }
    });

    // Iniciar cámara automáticamente si estamos en la página del escáner
    if (document.getElementById('scanner').classList.contains('active')) {
        console.log("🟢 Página escáner activa - iniciando cámara automática");
        setTimeout(() => {
            startCamera();
        }, 1000);
    }
});

// Función para iniciar la cámara
function startCamera() {
    console.log("🔴 DEBUG: Intentando iniciar cámara...");
    
    if (scannerActive) {
        console.log("🔴 Cámara ya activa, ignorando");
        return;
    }
    
    const scannerView = document.getElementById('scanner-view');
    
    // Limpiar contenido anterior
    scannerView.innerHTML = '';
    
    // Crear elemento de video
    const video = document.createElement('video');
    video.id = 'scanner-video';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.setAttribute('playsinline', 'true');
    video.setAttribute('autoplay', 'true');
    
    // Crear overlay con el marco de escaneo
    const overlay = document.createElement('div');
    overlay.className = 'scanner-overlay';
    overlay.innerHTML = `
        <div class="scanner-frame">
            <div class="scanner-line"></div>
        </div>
        <p>Apunte el código de barras hacia el marco</p>
    `;
    
    scannerView.appendChild(video);
    scannerView.appendChild(overlay);
    
    // Configurar constraints para la cámara
    const constraints = {
        video: {
            facingMode: currentFacingMode,
            width: { ideal: 1280 },
            height: { ideal: 720 }
        },
        audio: false
    };

    console.log("🔴 DEBUG: Solicitando permisos de cámara...");
    
    // Acceder a la cámara
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            console.log("🟢 Cámara accedida correctamente");
            currentStream = stream;
            video.srcObject = stream;
            scannerActive = true;
            
            // Iniciar Quagga después de que el video esté listo
            video.addEventListener('loadedmetadata', function() {
                console.log("🟢 Video cargado - iniciando Quagga");
                startQuagga(video);
            });
        })
        .catch(function(err) {
            console.error('❌ Error al acceder a la cámara:', err);
            scannerView.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <div class="scanner-frame" style="margin: 0 auto;">
                        <div class="scanner-line"></div>
                    </div>
                    <p>Error al acceder a la cámara</p>
                    <p style="font-size: 0.9rem;">${err.message}</p>
                    <button class="btn btn-primary" onclick="startCamera()" style="margin-top: 1rem;">Reintentar</button>
                </div>
            `;
        });
}

// Función para iniciar Quagga
function startQuagga(video) {
    console.log("🔴 DEBUG: Iniciando Quagga...");
    
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: video,
            constraints: {
                width: 640,
                height: 480,
                facingMode: currentFacingMode
            }
        },
        decoder: {
            readers: [
                "code_128_reader",
                "ean_reader",
                "ean_8_reader",
                "code_39_reader",
                "code_39_vin_reader",
                "codabar_reader",
                "upc_reader",
                "upc_e_reader"
            ]
        },
        locate: true
    }, function(err) {
        if (err) {
            console.error('❌ Error al iniciar Quagga:', err);
            return;
        }
        console.log("🟢 Quagga iniciado correctamente");
        Quagga.start();
    });

    // Detectar códigos de barras
    Quagga.onDetected(function(result) {
        if (result && result.codeResult && result.codeResult.code) {
            const code = result.codeResult.code;
            
            // Buscar producto con el código escaneado
            searchProduct(code);
            
            // Pequeña vibración (si está disponible)
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
        }
    });
}

// Función para detener la cámara
function stopCamera() {
    console.log("🔴 Deteniendo cámara...");
    if (currentStream) {
        currentStream.getTracks().forEach(track => {
            track.stop();
        });
        currentStream = null;
    }
    
    if (scannerActive) {
        Quagga.stop();
        scannerActive = false;
    }
}

// Función para cambiar entre cámaras
function toggleCamera() {
    console.log("🔴 Cambiando cámara...");
    stopCamera();
    currentFacingMode = currentFacingMode === "environment" ? "user" : "environment";
    setTimeout(() => {
        startCamera();
    }, 500);
}

// Función para toggle flash (solo en cámara trasera)
function toggleFlash() {
    if (currentFacingMode !== "environment") {
        alert('El flash solo está disponible en la cámara trasera');
        return;
    }
    
    // En una implementación real, aquí controlarías el flash
    // Por ahora, solo cambiamos el texto del botón
    flashOn = !flashOn;
    document.getElementById('toggle-flash').textContent = `Flash: ${flashOn ? 'ON' : 'OFF'}`;
    
    // Aquí iría el código para controlar el flash nativo
    console.log('Flash:', flashOn ? 'ON' : 'OFF');
}

// Función para buscar producto
function searchProduct(sku) {
    console.log("🔴 Buscando producto:", sku);
    
    // Limpiar el código
    let cleanSku = sku.toString()
        .replace(/\*/g, '')  // Eliminar asteriscos
        .trim()              // Eliminar espacios
        .toUpperCase();      // Convertir a mayúsculas
    
    console.log("🔴 SKU limpio:", cleanSku);
    
    const product = products[cleanSku];
    
    if (product) {
        console.log("🟢 Producto encontrado:", product.name);
        // Detener cámara temporalmente
        stopCamera();
        
        // Actualizar información del producto
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-code').textContent = `SKU: ${cleanSku}`;
        document.getElementById('product-category').textContent = `Tipo: ${product.category}`;
        
        // Actualizar imagen del producto
        const productImage = document.querySelector('.product-image');
        if (product.image) {
            productImage.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)" />`;
            const placeholder = productImage.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        } else {
            productImage.innerHTML = '<div class="image-placeholder">📱</div>';
        }
        
        // Actualizar modelos compatibles
        const modelsContainer = document.getElementById('compatible-models');
        modelsContainer.innerHTML = '';
        product.models.forEach(model => {
            const modelTag = document.createElement('span');
            modelTag.className = 'model-tag';
            modelTag.textContent = model;
            modelsContainer.appendChild(modelTag);
        });
        
        // Navegar a la página del producto
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-page="producto"]').classList.add('active');
        
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById('producto').classList.add('active');
    } else {
        console.log("❌ Producto no encontrado");
        
        // Mantener el escáner activo
        if (!scannerActive) {
            startCamera();
        }
    }
}

// Función para manejar errores de imagen
function handleImageError(img) {
    console.log("❌ Error cargando imagen");
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.textContent = '📱';
    placeholder.style.display = 'flex';
    img.parentElement.appendChild(placeholder);
}