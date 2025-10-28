// CONFIGURACIÓN MARCA DREYCOM
const dreycomBrand = {
    name: "DREYCOM",
    legalName: "DREYCOM ELECTRONIC'S S.A.C.",
    ruc: "20602272151",
    logo: "assets/logo.png",
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    accentColor: "#f59e0b",
    textColor: "#1f2937",
    backgroundColor: "#f8fafc",
    slogan: "Accesorios que conectan contigo",
    description: "Importación y distribución de accesorios tecnológicos",
    address: "Av. República de Argentina Nro. 500, Urb. Lima Industrial, Lima, Perú",
    website: "dreycom.com",
    mission: "Somos una empresa peruana, dedicada a la importación y distribución de accesorios para celulares, cómputo y productos de tecnología."
};

// Base de datos REAL de productos de Dreycom
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
let currentFacingMode = "environment";
let flashOn = false;
let currentStream = null;

// FUNCIONES DE PERSONALIZACIÓN DREYCOM
function applyBrandStyles() {
    console.log("🎨 Aplicando estilos Dreycom...");
    
    // Los estilos ya están aplicados en el CSS con variables CSS
    console.log("🟢 Estilos Dreycom aplicados correctamente");
}

function updateHeaderWithBrand() {
    const scannerHeader = document.querySelector('.scanner-header');
    if (scannerHeader) {
        scannerHeader.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <img src="${dreycomBrand.logo}" alt="${dreycomBrand.name}" 
                     style="height: 40px; width: auto; border-radius: 6px;" 
                     onerror="this.style.display='none'">
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: ${dreycomBrand.primaryColor};">
                        ${dreycomBrand.name} SCAN
                    </div>
                    <div style="font-size: 0.9rem; color: ${dreycomBrand.textColor}; margin-top: 0.25rem;">
                        ${dreycomBrand.slogan}
                    </div>
                </div>
            </div>
            <p style="margin-top: 1rem; color: #6b7280;">
                <strong>${dreycomBrand.description}</strong><br>
                <small>Escanea cualquier código de barras para ver información del producto</small>
            </p>
        `;
    }
}

function addDreycomFooter() {
    const footerHTML = `
        <div class="dreycom-footer">
            <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <img src="${dreycomBrand.logo}" alt="${dreycomBrand.name}" 
                     style="height: 24px; width: auto; border-radius: 4px;"
                     onerror="this.style.display='none'">
                <div>
                    <div style="font-weight: 700; color: ${dreycomBrand.textColor};">
                        ${dreycomBrand.legalName}
                    </div>
                    <div style="font-size: 0.75rem; color: #9ca3af;">
                        RUC: ${dreycomBrand.ruc} | ${dreycomBrand.address}
                    </div>
                </div>
            </div>
            <div style="margin-bottom: 0.5rem;">
                <strong style="color: ${dreycomBrand.primaryColor};">${dreycomBrand.slogan}</strong>
            </div>
            <div style="font-size: 0.8rem; color: #9ca3af; line-height: 1.4;">
                ${dreycomBrand.mission}
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.75rem; color: #6b7280;">
                Sistema de Autoservicio Dreycom &copy; ${new Date().getFullYear()} | 
                <a href="https://${dreycomBrand.website}" target="_blank" style="color: ${dreycomBrand.primaryColor}; text-decoration: none;">
                    ${dreycomBrand.website}
                </a>
            </div>
        </div>
    `;
    
    document.querySelectorAll('.page').forEach(page => {
        if (!page.querySelector('.dreycom-footer')) {
            page.insertAdjacentHTML('beforeend', footerHTML);
        }
    });
}

// CÓDIGO PRINCIPAL DE LA APLICACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log("🟢 DOM cargado - Iniciando aplicación Dreycom");
    
    // 🎨 APLICAR MARCA DREYCOM
    applyBrandStyles();
    updateHeaderWithBrand();
    addDreycomFooter();
    
    // Navegación entre páginas - MEJORADO
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pageId = this.getAttribute('data-page');
            const currentPage = document.querySelector('.page.active').id;
            
            // Evitar recargar la misma página
            if (currentPage === pageId) {
                console.log("🟡 Ya está en la página activa, ignorando...");
                return;
            }
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            if (pageId === 'scanner') {
                console.log("🟡 Navegando a escáner - iniciando cámara");
                // Esperar a que la transición de página termine
                setTimeout(() => {
                    if (!scannerActive) {
                        startCamera();
                    }
                }, 300);
            } else {
                console.log("🟡 Navegando fuera de escáner - deteniendo cámara");
                stopCamera();
            }
        });
    });

    // Event listeners para controles
    document.getElementById('toggle-camera').addEventListener('click', function() {
        console.log("🟡 Botón cambiar cámara clickeado");
        toggleCamera();
    });

    document.getElementById('toggle-flash').addEventListener('click', function() {
        console.log("🟡 Botón flash clickeado");
        toggleFlash();
    });

    document.getElementById('search-product').addEventListener('click', function() {
        const sku = document.getElementById('barcode-input').value.trim().toUpperCase();
        console.log("🟡 Búsqueda manual:", sku);
        
        if (sku) {
            searchProduct(sku);
        } else {
            alert('Por favor, ingresa un código SKU.');
        }
    });

    document.getElementById('simulate-scan').addEventListener('click', function() {
        console.log("🟡 Simular escaneo clickeado");
        const skus = Object.keys(products);
        const randomSku = skus[Math.floor(Math.random() * skus.length)];
        searchProduct(randomSku);
    });

    document.getElementById('back-to-scanner').addEventListener('click', function() {
        console.log("🟡 Volver a escáner clickeado");
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-page="scanner"]').classList.add('active');
        
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById('scanner').classList.add('active');
        
        document.getElementById('barcode-input').value = '';
        
        setTimeout(() => {
            startCamera();
        }, 300);
    });

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

// FUNCIONES DE CÁMARA Y ESCÁNER
function startCamera() {
    console.log("🔴 DEBUG: Intentando iniciar cámara...");
    
    if (scannerActive) {
        console.log("🔴 Cámara ya activa, ignorando");
        return;
    }
    
    // Verificar que estamos en la página correcta
    if (!document.getElementById('scanner').classList.contains('active')) {
        console.log("🔴 No estamos en página escáner, cancelando inicio de cámara");
        return;
    }
    
    const scannerView = document.getElementById('scanner-view');
    scannerView.innerHTML = '';
    
    // Mostrar estado de carga
    scannerView.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p>Iniciando cámara...</p>
        </div>
    `;
    
    const video = document.createElement('video');
    video.id = 'scanner-video';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.setAttribute('playsinline', 'true');
    video.setAttribute('autoplay', 'true');
    
    const overlay = document.createElement('div');
    overlay.className = 'scanner-overlay';
    overlay.innerHTML = `
        <div class="scanner-frame">
            <div class="scanner-line"></div>
        </div>
        <p>Apunte el código de barras hacia el marco</p>
    `;
    
    scannerView.innerHTML = '';
    scannerView.appendChild(video);
    scannerView.appendChild(overlay);
    
    const constraints = {
        video: {
            facingMode: currentFacingMode,
            width: { ideal: 1280 },
            height: { ideal: 720 }
        },
        audio: false
    };

    console.log("🔴 DEBUG: Solicitando permisos de cámara...");
    
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            console.log("🟢 Cámara accedida correctamente");
            currentStream = stream;
            video.srcObject = stream;
            scannerActive = true;
            
            video.addEventListener('loadedmetadata', function() {
                console.log("🟢 Video cargado - iniciando Quagga");
                // Pequeño delay para asegurar que el video esté listo
                setTimeout(() => {
                    startQuagga(video);
                }, 500);
            });
        })
        .catch(function(err) {
            console.error('❌ Error al acceder a la cámara:', err);
            handleCameraError(err);
        });
}

function startQuagga(video) {
    console.log("🔴 DEBUG: Iniciando Quagga...");
    
    // Verificar que estamos en la página correcta
    if (!document.getElementById('scanner').classList.contains('active')) {
        console.log("🔴 No estamos en página escáner, cancelando Quagga");
        return;
    }
    
    try {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: video,
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: currentFacingMode
                },
                willReadFrequently: true // SOLUCIÓN PARA LA ADVERTENCIA
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
            locate: true,
            frequency: 10 // Reduce la frecuencia para mejor rendimiento
        }, function(err) {
            if (err) {
                console.error('❌ Error al iniciar Quagga:', err);
                return;
            }
            console.log("🟢 Quagga iniciado correctamente");
            Quagga.start();
        });

        Quagga.onDetected(function(result) {
            if (result && result.codeResult && result.codeResult.code) {
                const code = result.codeResult.code;
                console.log("🟢 Código detectado:", code);
                
                // Detener temporalmente Quagga para evitar múltiples detecciones
                Quagga.stop();
                
                searchProduct(code);
                
                // Feedback táctil
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }
                
                // Reanudar Quagga después de un breve delay
                setTimeout(() => {
                    if (scannerActive) {
                        Quagga.start();
                    }
                }, 2000);
            }
        });
    } catch (error) {
        console.error('❌ Error crítico en Quagga:', error);
    }
}

function stopCamera() {
    console.log("🔴 Deteniendo cámara...");
    
    // Detener stream de cámara
    if (currentStream) {
        currentStream.getTracks().forEach(track => {
            track.stop();
        });
        currentStream = null;
    }
    
    // Detener Quagga solo si está activo
    try {
        if (scannerActive && typeof Quagga !== 'undefined') {
            Quagga.stop();
        }
    } catch (e) {
        console.log("Quagga ya estaba detenido");
    }
    
    scannerActive = false;
}

function toggleCamera() {
    console.log("🔴 Cambiando cámara...");
    stopCamera();
    currentFacingMode = currentFacingMode === "environment" ? "user" : "environment";
    setTimeout(() => {
        startCamera();
    }, 500);
}

function toggleFlash() {
    if (currentFacingMode !== "environment") {
        alert('El flash solo está disponible en la cámara trasera');
        return;
    }
    
    flashOn = !flashOn;
    document.getElementById('toggle-flash').textContent = `Flash: ${flashOn ? 'ON' : 'OFF'}`;
    console.log('Flash:', flashOn ? 'ON' : 'OFF');
    
    // Nota: Para controlar el flash necesitarías una API específica
    // Esta función actualmente solo cambia el texto del botón
}

function searchProduct(sku) {
    console.log("🔴 Buscando producto:", sku);
    
    let cleanSku = sku.toString()
        .replace(/\*/g, '')
        .trim()
        .toUpperCase();
    
    console.log("🔴 SKU limpio:", cleanSku);
    
    const product = products[cleanSku];
    
    if (product) {
        console.log("🟢 Producto encontrado:", product.name);
        stopCamera();
        
        // Actualizar interfaz con información del producto
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-code').textContent = `SKU: ${cleanSku}`;
        document.getElementById('product-category').textContent = `Tipo: ${product.category}`;
        
        // Actualizar imagen del producto
        const productImage = document.querySelector('.product-image');
        if (product.image) {
            productImage.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)" />`;
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
        alert(`Producto con SKU "${cleanSku}" no encontrado. Prueba con DRE001 a DRE012.`);
        
        // Si no estamos en el escáner, volver al escáner
        if (!document.getElementById('scanner').classList.contains('active')) {
            document.querySelector('[data-page="scanner"]').click();
        } else if (!scannerActive) {
            startCamera();
        }
    }
}

function handleCameraError(err) {
    const scannerView = document.getElementById('scanner-view');
    scannerView.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #666; background: #f8f9fa; border-radius: 12px;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
            <h3 style="margin-bottom: 1rem; color: #dc2626;">Error al acceder a la cámara</h3>
            <p style="margin-bottom: 1rem; color: #6b7280;">${err.message || 'No se pudo acceder a la cámara'}</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="startCamera()">Reintentar</button>
                <button class="btn btn-secondary" onclick="document.querySelector('[data-page=\\'producto\\']').click()">
                    Usar búsqueda manual
                </button>
            </div>
        </div>
    `;
}

function handleImageError(img) {
    console.log("❌ Error cargando imagen");
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.textContent = '📱';
    placeholder.style.display = 'flex';
    img.parentElement.appendChild(placeholder);
}