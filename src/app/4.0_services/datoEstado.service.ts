import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class datosService{
    private placeholderEstado = {
  "banco": "Banco Cuscatlán S.A.",
  "sucursal": "San Salvador - Centro",
  "statement_id": "CUSC-AHO-202509-001",
  "tipo_cuenta": "AHORRO",
  "moneda": "USD",
  "numero_cuenta": "****5678",
  "titular": {
    "nombre": "JUAN PÉREZ",
    "dui": "****-****-*",
    "direccion": "Col. Escalón, San Salvador, El Salvador"
  },
  "periodo": {
    "desde": "2025-09-01",
    "hasta": "2025-09-30"
  },
  "fecha_emision": "2025-10-01",
  "saldo_al_inicio": 1250.00,
  "saldo_al_cierre": 1923.00,
  "totales": {
    "total_debitos": 1029.08,
    "total_creditos": 1702.08,
    "intereses_acreditados": 2.08,
    "comisiones_cobradas": 3.62
  },
  "transacciones": [
    {
      "fecha": "2025-09-02",
      "descripcion": "Depósito Ahorros - Agencia",
      "tipo": "CRÉDITO",
      "monto": 500.00,
      "balance": 1750.00,
      "referencia": "DEP-20250902-001",
      "canal": "AGENCIA"
    },
    {
      "fecha": "2025-09-04",
      "descripcion": "Retiro Cajero ATM",
      "tipo": "DÉBITO",
      "monto": 100.00,
      "balance": 1650.00,
      "referencia": "ATM-0904-78A",
      "canal": "CAJERO"
    },
    {
      "fecha": "2025-09-06",
      "descripcion": "Pago Servicio - ELEKTRA S.A.",
      "tipo": "DÉBITO",
      "monto": 65.32,
      "balance": 1584.68,
      "referencia": "PAG-20250906-4421",
      "canal": "DOMICILIACIÓN"
    },
    {
      "fecha": "2025-09-09",
      "descripcion": "Transferencia recibida - DE: MARÍA LOPEZ",
      "tipo": "CRÉDITO",
      "monto": 250.00,
      "balance": 1834.68,
      "referencia": "TRF-IN-20250909-990",
      "canal": "TRANSFERENCIA"
    },
    {
      "fecha": "2025-09-10",
      "descripcion": "Compra con tarjeta POS - RESTAURANT LA PLATA",
      "tipo": "DÉBITO",
      "monto": 45.50,
      "balance": 1789.18,
      "referencia": "POS-0910-556",
      "canal": "POS"
    },
    {
      "fecha": "2025-09-12",
      "descripcion": "Interés mensual acreditado",
      "tipo": "CRÉDITO",
      "monto": 1.23,
      "balance": 1790.41,
      "referencia": "INT-20250912-01",
      "canal": "INTERÉS"
    },
    {
      "fecha": "2025-09-15",
      "descripcion": "Compra POS - SUPERMERCADO",
      "tipo": "DÉBITO",
      "monto": 120.75,
      "balance": 1669.66,
      "referencia": "POS-0915-778",
      "canal": "POS"
    },
    {
      "fecha": "2025-09-18",
      "descripcion": "Transferencia enviada - PARA: CUENTA 1234****",
      "tipo": "DÉBITO",
      "monto": 300.00,
      "balance": 1369.66,
      "referencia": "TRF-OUT-20250918-441",
      "canal": "TRANSFERENCIA"
    },
    {
      "fecha": "2025-09-20",
      "descripcion": "Depósito cheque - #CHK-5521",
      "tipo": "CRÉDITO",
      "monto": 800.00,
      "balance": 2169.66,
      "referencia": "CHK-20250920-5521",
      "canal": "AGENCIA"
    },
    {
      "fecha": "2025-09-21",
      "descripcion": "Comisión por mantenimiento de cuenta",
      "tipo": "DÉBITO",
      "monto": 3.50,
      "balance": 2166.16,
      "referencia": "COM-20250921-01",
      "canal": "COMISIÓN"
    },
    {
      "fecha": "2025-09-22",
      "descripcion": "Pago Teléfono - MOVILTEL",
      "tipo": "DÉBITO",
      "monto": 38.90,
      "balance": 2127.26,
      "referencia": "PAG-20250922-330",
      "canal": "DOMICILIACIÓN"
    },
    {
      "fecha": "2025-09-24",
      "descripcion": "Compra Online - E-COMMERCE",
      "tipo": "DÉBITO",
      "monto": 15.00,
      "balance": 2112.26,
      "referencia": "WEB-20250924-77",
      "canal": "E-COMMERCE"
    },
    {
      "fecha": "2025-09-25",
      "descripcion": "Transferencia enviada - PAGO A PROVEEDOR",
      "tipo": "DÉBITO",
      "monto": 200.00,
      "balance": 1912.26,
      "referencia": "TRF-OUT-20250925-667",
      "canal": "TRANSFERENCIA"
    },
    {
      "fecha": "2025-09-26",
      "descripcion": "Depósito caja - efectivo",
      "tipo": "CRÉDITO",
      "monto": 150.00,
      "balance": 2062.26,
      "referencia": "CAJ-20250926-19",
      "canal": "AGENCIA"
    },
    {
      "fecha": "2025-09-27",
      "descripcion": "Retiro Cajero ATM",
      "tipo": "DÉBITO",
      "monto": 50.00,
      "balance": 2012.26,
      "referencia": "ATM-0927-03B",
      "canal": "CAJERO"
    },
    {
      "fecha": "2025-09-28",
      "descripcion": "Compra con tarjeta - TIENDA ROPA",
      "tipo": "DÉBITO",
      "monto": 89.99,
      "balance": 1922.27,
      "referencia": "POS-0928-884",
      "canal": "POS"
    },
    {
      "fecha": "2025-09-29",
      "descripcion": "Ajuste: interés diario acreditado",
      "tipo": "CRÉDITO",
      "monto": 0.85,
      "balance": 1923.12,
      "referencia": "INT-20250929-ADJ",
      "canal": "INTERÉS"
    },
    {
      "fecha": "2025-09-30",
      "descripcion": "Ajuste final - redondeo",
      "tipo": "DÉBITO",
      "monto": 0.12,
      "balance": 1923.00,
      "referencia": "ADJ-20250930-00",
      "canal": "AJUSTE"
    }
  ],
  "notas": "Este estado de cuenta es un ejemplo generado como placeholder. Los montos, nombres y referencias son ficticios y sólo con fines demostrativos."
};
    private placeholderEstadoCredito = {
  "banco": "Finanzas Global S.A.",
  "statement_id": "CC-202509-774a91",
  "titular": "Cliente Anónimo",
  "numero_tarjeta": "**** **** **** 4321",
  "tipo_cuenta": "Tarjeta de Crédito Clásica",
  "moneda": "USD",
  "periodo": {
    "desde": "2025-09-01",
    "hasta": "2025-09-30"
  },
  "fecha_corte": "2025-09-30",
  "fecha_pago": "2025-10-15",
  "limite_credito": 2000.00,
  "saldo_anterior": 875.25,
  "pagos_recibidos": 400.00,
  "compras_del_mes": 650.40,
  "intereses": 15.35,
  "comisiones": 5.00,
  "saldo_actual": 1145.00,
  "saldo_disponible": 855.00,
  "pago_minimo": 57.25,
  "pago_total": 1145.00,
  "totales": {
    "total_cargos": 670.75,
    "total_abonos": 400.00,
    "numero_transacciones": 9
  },
  "transacciones": [
    {
      "fecha": "2025-09-02",
      "descripcion": "Pago recibido - Gracias",
      "tipo": "abono",
      "monto": 400.00,
      "referencia": "PAY-0902-0001",
      "balance": 475.25,
      "categoria": "Pago"
    },
    {
      "fecha": "2025-09-03",
      "descripcion": "Supermercado El Ahorro",
      "tipo": "cargo",
      "monto": 120.50,
      "referencia": "POS-0903-199",
      "balance": 595.75,
      "categoria": "Compras"
    },
    {
      "fecha": "2025-09-06",
      "descripcion": "Restaurante El Patio",
      "tipo": "cargo",
      "monto": 34.80,
      "referencia": "POS-0906-512",
      "balance": 630.55,
      "categoria": "Restaurantes"
    },
    {
      "fecha": "2025-09-10",
      "descripcion": "Suscripción Spotify Premium",
      "tipo": "cargo",
      "monto": 10.99,
      "referencia": "SUB-0910-888",
      "balance": 641.54,
      "categoria": "Entretenimiento"
    },
    {
      "fecha": "2025-09-12",
      "descripcion": "Compra en Amazon",
      "tipo": "cargo",
      "monto": 199.90,
      "referencia": "ECOM-0912-220",
      "balance": 841.44,
      "categoria": "Compras en línea"
    },
    {
      "fecha": "2025-09-18",
      "descripcion": "Farmacia Central",
      "tipo": "cargo",
      "monto": 22.75,
      "referencia": "POS-0918-440",
      "balance": 864.19,
      "categoria": "Salud"
    },
    {
      "fecha": "2025-09-22",
      "descripcion": "Gasolinera PetroMax",
      "tipo": "cargo",
      "monto": 85.00,
      "referencia": "POS-0922-553",
      "balance": 949.19,
      "categoria": "Transporte"
    },
    {
      "fecha": "2025-09-28",
      "descripcion": "Intereses del período",
      "tipo": "cargo",
      "monto": 15.35,
      "referencia": "INT-0928",
      "balance": 964.54,
      "categoria": "Finanzas"
    },
    {
      "fecha": "2025-09-30",
      "descripcion": "Comisión por mantenimiento",
      "tipo": "cargo",
      "monto": 5.00,
      "referencia": "FEE-0930",
      "balance": 969.54,
      "categoria": "Comisiones"
    }
  ],
  "mensajes": [
    "Su pago mínimo vence el 15 de octubre de 2025.",
    "Evite cargos por mora pagando al menos el monto mínimo antes de la fecha límite.",
    "Gracias por preferir nuestros servicios."
  ],
  "notas": "Estado de cuenta simulado para fines de demostración. Todos los datos son ficticios."
    }
    constructor(){

    }

    transaccionesCuenta():Transaccion[]{
        const transacciones  = this.placeholderEstado.transacciones.map((t:any)  =>{
            return {
                fecha: t.fecha,
                descripcion: t.descripcion,
                tipo: t.tipo,
                monto: t.monto,
                balance: t.balance,
                canal: t.canal,
                referencia: t.referencia
            }
        })
        return transacciones;
    }
    transaccionesTiposGrafica(): Agrupacion[]{
        const resultado: Agrupacion[] = [];

        const tipos = [...new Set(this.placeholderEstado.transacciones.map(t => t.tipo))];

        tipos.forEach(tipo => {
            const costos = this.placeholderEstado.transacciones
            .filter(t => t.tipo === tipo)
            .map(t => t.monto);

            resultado.push({ tipo, costos });
        });

        return resultado;
    }

    transaccionesCategoriasGrafica(): AgrupacionDias[]{
      const categorias: Record<string, { costos: number; dias: string[] }> = {};

        this.placeholderEstado.transacciones.forEach(t => {
            let categoria = "otros";
            let costosTotales = 0;
            const desc = t.descripcion.toLowerCase();

            if (desc.includes("compra")) categoria = "compras";
            else if (desc.includes("depósito")) categoria = "depositos";
            else if (desc.includes("transferencia")) categoria = "transferencias";
            else if (desc.includes("retiro")) categoria = "retiros";
            else if (desc.includes("interés")) categoria = "intereses";
            else if (desc.includes("comisión")) categoria = "comisiones";
            else if (desc.includes("pago")) categoria = "pagos";

            if (!categorias[categoria]) categorias[categoria] = { costos: 0, dias: [] };

            categorias[categoria].costos = categorias[categoria].costos + t.monto;
            categorias[categoria].dias.push(t.fecha);
        });

        return Object.entries(categorias).map(([tipo, data]) => ({
            tipo,
            costos: data.costos,
            dias: data.dias
        }));
    }
   /*-----RESUMEN--------*/
    
    obtenerResumen() {
    const transacciones = this.placeholderEstado.transacciones as Transaccion[];
    const creditos = transacciones.filter(t => t.tipo === "CRÉDITO");
    const debitos = transacciones.filter(t => t.tipo === "DÉBITO");

    const totalCreditos = creditos.reduce((acc, t) => acc + t.monto, 0);
    const totalDebitos = debitos.reduce((acc, t) => acc + t.monto, 0);

    return {
      totalCreditos,
      totalDebitos,
      cantidadCreditos: creditos.length,
      cantidadDebitos: debitos.length,
      promedioCredito: totalCreditos / (creditos.length || 1),
      promedioDebito: totalDebitos / (debitos.length || 1)
    };
  }
  obtenerFrecuencia() {
    const transacciones = this.placeholderEstado.transacciones as Transaccion[];
    const fechas = transacciones.map(t => new Date(t.fecha).getTime()).sort((a, b) => a - b);
    const diferencias = fechas.slice(1).map((f, i) => (f - fechas[i]) / (1000 * 3600 * 24));
    const promedioDias = diferencias.reduce((a, b) => a + b, 0) / (diferencias.length || 1);

    return {
      diasEntreTransacciones: parseFloat(promedioDias.toFixed(2)),
      totalTransacciones: transacciones.length
    };
  }
  obtenerPatronCreditos() {
    const transacciones = this.placeholderEstado.transacciones as Transaccion[];
    const creditos = transacciones.filter(t => t.tipo === "CRÉDITO");
    const porCanal = this.agruparPorCanal(creditos);

    return {
      totalCreditos: creditos.reduce((acc, t) => acc + t.monto, 0),
      cantidad: creditos.length,
      canales: porCanal
    };
  }
  obtenerPatronDebitos() {
    const transacciones = this.placeholderEstado.transacciones as Transaccion[];
    const debitos = transacciones.filter(t => t.tipo === "DÉBITO");
    const porCanal = this.agruparPorCanal(debitos);

    return {
      totalDebitos: debitos.reduce((acc, t) => acc + t.monto, 0),
      cantidad: debitos.length,
      canales: porCanal
    };
  }
  obtenerCanalesUso() {
    const transacciones = this.placeholderEstado.transacciones as Transaccion[];
    return this.agruparPorCanal(transacciones);
  }
  obtenerTendenciaSaldo() {
    const transacciones = this.placeholderEstado.transacciones as Transaccion[];
    if (transacciones.length === 0) return null;

    const saldoInicial = this.placeholderEstado.saldo_al_inicio;
    const saldoFinal = this.placeholderEstado.saldo_al_cierre;
    const variacion = saldoFinal - saldoInicial;

    return {
      saldoInicial,
      saldoFinal,
      variacion: parseFloat(variacion.toFixed(2)),
      tendencia: variacion >= 0 ? "POSITIVA" : "NEGATIVA"
    };
  }
  obtenerResumenCompleto() {
    return {
      resumen: this.obtenerResumen(),
      frecuencia: this.obtenerFrecuencia(),
      creditos: this.obtenerPatronCreditos(),
      debitos: this.obtenerPatronDebitos(),
      canales: this.obtenerCanalesUso(),
      tendenciaSaldo: this.obtenerTendenciaSaldo()
    };
  }
  private agruparPorCanal(transacciones: Transaccion[]) {
    const canales: { [key: string]: { cantidad: number; montoTotal: number } } = {};
    transacciones.forEach(t => {
      if (!canales[t.canal]) canales[t.canal] = { cantidad: 0, montoTotal: 0 };
      canales[t.canal].cantidad++;
      canales[t.canal].montoTotal += t.monto;
    });
    return canales;
  }

}