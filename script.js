document.addEventListener('DOMContentLoaded', () => {
    const installationImages = [
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Canonbury_ mantel, tiled insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Corbel_ mantel, arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Corbel_ mantel, original arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Corbel_ mantel, original arch insert.JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Corbel_ mantel, original Georgian insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Corbel_ mantel, plain arch insert, bioethanol fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Carrara marble _Roundel_ mantel, original insert.JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Cast iron mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Cast iron mantel, original insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Cast iron original mantel, highlight tiled insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Green marble _Bolection_ mantel, polished basket.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Limestone _Corbel_ mantel, original arch insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Limestone _Flat Victorian_ mantel, _Better Hearth Arch_ insert.JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Limestone _Flat Victorian_ mantel, original insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Limestone _Flat Victorian_ mantel, tiled insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Limestone _Olvera_ mantel, basket.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Limestone _Vogue_ mantel, steel slips.png", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Nero Marquina _Flat Victorian_ mantel, original arch insert.JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Nero Marquina _Flat Victorian_ mantel, polished insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Nero Marquina _Roundel_ mantel, original insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Original cast iron mantel, _Huntingdon 30_ stove.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Original cast iron register (2).jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Original cast iron register.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Original tiled register (2).jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Original tiled register, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Original tiled register.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Plain cast iron arch, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Bolection_ mantel, original arch insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Canonbury_ mantel, _Better Hearth Arch_ insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Canonbury_ mantel, original insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Canonbury_ mantel, plain arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Canonbury_ mantel, polished insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Charlotte_ mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Corbel_ mantel, _Better Hearth Arch_ insert, gas fire.JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Corbel_ mantel, _Better Hearth Arch_ insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Corbel_ mantel, _Plain Arch_ insert (2).JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Corbel_ mantel, original arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Flat Victorian_ mantel, original arch insert (2).jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Flat Victorian_ mantel, original arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Flat Victorian_ mantel, original insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, _Cadogan_ basket.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, _Plain Arch_ insert.JPG", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, arch insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, basket, slate slips.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, original arch insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, original insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _Roundel_ mantel, polished basket.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _William IV_ mantel, original arch insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _William IV_ mantel, original polished arch insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble _William IV_ mantel, original tiled insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble ‘William IV’ mantel, highlight arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/White marble mantel, basket, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Flat Victorian_ mantel, _Better Hearth_ arch insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Flat Victorian_ mantel, _Logic HE_ gas fire, granite back panel.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Flat Victorian_ mantel, inset gas stove, slate back panel.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Roundel_ mantel, highlight tiled insert, Electric Fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Roundel_ mantel, original Georgian insert.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Roundel_ mantel, tiled insert (AFTER).jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Roundel_ mantel, tiled insert (BEFORE).jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden _Roundel_ mantel, tiled insert, gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden mantel, _Loft_ gas stove.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Antiques & Traditional Fireplaces/Wooden mantel, _Logic HE Designio_ gas fire.jpg", category: "Antiques & traditional fireplaces" },
        { src: "Bioethanol Fires/Carrara marble _Corbel_ mantel, plain arch insert, bioethanol fire.jpg", category: "Bioethanol fires" },
        { src: "Bioethanol Fires/Limestone _Canonbury_ mantel, basket, bioethanol fire.jpg", category: "Bioethanol fires" },
        { src: "Made to Measure Gas Fires/Carrara marble _Corbel_ mantel, arch insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Carrara marble _Corbel_ mantel, original arch insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Cast iron mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Cast iron mantel, original insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Customer_s original mantel, _Better Hearth_ arch inset, gas fire.JPG", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Customer_s original mantel, original tiled inset, gas fire.JPG", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Green marble _Bolection_ mantel, polished basket, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Nero Marquina _Flat Victorian_ mantel, polished insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Original tiled register, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Plain cast iron arch, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble _Canonbury_ mantel, plain arch insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble _Charlotte_ mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble _Corbel_ mantel, _Better Hearth Arch_ insert, gas fire.JPG", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble _Corbel_ mantel, original arch insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble _Flat Victorian_ mantel, original arch insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble _Roundel_ mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble ‘William IV’ mantel, highlight arch insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/White marble mantel, basket, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Wooden _Roundel_ mantel, tiled insert, gas fire.jpg", category: "Made to measure gas fires" },
        { src: "Made to Measure Gas Fires/Wooden mantel, original tiled inset, gas fire.JPG", category: "Made to measure gas fires" },
        { src: "Electric Fires/Capital Blackthorn, electric stove.png", category: "Electric fires" },
        { src: "Electric Fires/Carrara marble _Canonbury_ mantel, electric inset fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Carrara marble _Corbel_ mantel, _SLE 40i_ electric fire, slate back panel.jpg", category: "Electric fires" },
        { src: "Electric Fires/Carrara marble _Flat Victorian_ mantel, _eReflex 55RW_ electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Customer_s original mantel, _eReflex 55RW_ Electric Fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Customer_s original mantel, Wooden, _Iconic 450_ electric fire, cast iron front.JPG", category: "Electric fires" },
        { src: "Electric Fires/d.JPG", category: "Electric fires" },
        { src: "Electric Fires/Gazco eMotiv 84, electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Gazco eReflex 55RW, electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Gazco Huntingdon 30, electric stove.jpg", category: "Electric fires" },
        { src: "Electric Fires/Gazco Stockton 2 Medium, electric stove.jpg", category: "Electric fires" },
        { src: "Electric Fires/Iconic 450 Lombard, electric fire.png", category: "Electric fires" },
        { src: "Electric Fires/Limestone _Corbel_ mantel, _eReflex 55RW_ electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Mendip Woodland Ilektro, electric stove.png", category: "Electric fires" },
        { src: "Electric Fires/Onyx Avanti 110RW Milazzo Suite, electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Onyx Fusion, electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Solution SLE35i, electric fire.png", category: "Electric fires" },
        { src: "Electric Fires/Solution SLE40i, electric fire.png", category: "Electric fires" },
        { src: "Electric Fires/White marble _Canonbury_ mantel, _Provident_ electric fire arch.jpg", category: "Electric fires" },
        { src: "Electric Fires/Wooden _Bolection_ mantel, _eReflex 55RW_ electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Wooden _Corbel_ mantel, _Iconic 450_ electric fire, highlight cast iron front.jpeg", category: "Electric fires" },
        { src: "Electric Fires/Wooden _Flat Victorian_ mantel, _Better Hearth Arch_ insert, electric fire.jpg", category: "Electric fires" },
        { src: "Electric Fires/Wooden _Roundel_ mantel, highlight tiled insert, Electric Fire.jpg", category: "Electric fires" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/_Studio 2_ inset gas fire.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Carrara marble _Flat Victorian_ mantel, _Riva2 500_ inset gas fire, slate back panel.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Customer_s original mantel, _Stockton 5_ gas stove.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Limestone _Arts and Crafts_ mantel, inset gas fire, slate back panel.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Limestone _Bolection_ mantel, _Riva 2 600HL_ inset gas fire.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Limestone _Flat Victorian_ mantel, _Reflex 75T_ gas fire.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Limestone _Flat Victorian_ mantel, _Riva 2 600HL_ inset gas fire.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble _Charlotte_ mantel, _Riva2 500_ inset gas fire, slate back panel.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble _Corbel_ mantel, _Stockton 5 wide_ gas stove.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble _Flat Victorian_ mantel, _Bassington_ gas stove.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble _Flat Victorian_ mantel, _CL5_ gas stove.png", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble _Flat Victorian_ mantel, _Logic Chartwell_ insert gas fire, slate back panel.JPG", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White Marble _Louis XV_ mantel, _Riva2 500_ inset gas fire.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble _William IV_ mantel, _Riva 2 600HL_ inset gas fire.JPG", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/White marble mantel, _Vogue Midi T_ gas stove.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Wooden _Corbel_ mantel, _Bassington_ gas stove.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Wooden _Flat Victorian_ mantel, _Logic HE_ gas fire, granite back panel.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Wooden _Flat Victorian_ mantel, inset gas stove, slate back panel.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Wooden mantel, _Loft_ gas stove.jpg", category: "Inset gas fires & stoves" },
        { src: "Inset Gas Fires & Stoves-20261021T222837Z-1-001/Inset Gas Fires & Stoves/Wooden mantel, _Logic HE Designio_ gas fire.jpg", category: "Inset gas fires & stoves" },
        { src: "Mantels/adam-wood-mantel.webp", category: "Mantels" },
        { src: "Mantels/alban-limestone.webp", category: "Mantels" },
        { src: "Mantels/appledore-limestone.webp", category: "Mantels" },
        { src: "Mantels/balham-limestone.webp", category: "Mantels" },
        { src: "Mantels/bellingham-limestone.webp", category: "Mantels" },
        { src: "Mantels/bolection-limestone.webp", category: "Mantels" },
        { src: "Mantels/bolection-mantel-limestone-marble.webp", category: "Mantels" },
        { src: "Mantels/cannonbury-clarence-limestone.webp", category: "Mantels" },
        { src: "Mantels/cannonbury-limestone-marble.webp", category: "Mantels" },
        { src: "Mantels/cannonbury-limestone.webp", category: "Mantels" },
        { src: "Mantels/Carrara marble _Canonbury_ mantel, electric inset fire.jpg", category: "Mantels" },
        { src: "Mantels/Carrara marble _Corbel_ mantel, _Esse 105_ stove.jpg", category: "Mantels" },
        { src: "Mantels/Carrara marble _Corbel_ mantel, original arch insert.JPG", category: "Mantels" },
        { src: "Mantels/Carrara marble _Corbel_ mantel, original Georgian insert.jpg", category: "Mantels" },
        { src: "Mantels/Carrara marble _Flat Victorian_ mantel, _eReflex 55RW_ electric fire.jpg", category: "Mantels" },
        { src: "Mantels/Carrara marble _Flat Victorian_ mantel, _Riva2 40_ inset stove.jpg", category: "Mantels" },
        { src: "Mantels/Carrara marble _Reeded Roundel_ mantel, slate slips.jpg", category: "Mantels" },
        { src: "Mantels/Carrara marble _Roundel_ mantel, original insert.JPG", category: "Mantels" },
        { src: "Mantels/Cast iron mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/Cast iron mantel, _Norpeis Bergen_ stove.jpg", category: "Mantels" },
        { src: "Mantels/Cast iron mantel, original insert.jpg", category: "Mantels" },
        { src: "Mantels/Cast iron original mantel, highlight tiled insert.jpg", category: "Mantels" },
        { src: "Mantels/chatsworth-wood-mantel.webp", category: "Mantels" },
        { src: "Mantels/corbel-carraramarble.webp", category: "Mantels" },
        { src: "Mantels/corbel-limestone.webp", category: "Mantels" },
        { src: "Mantels/cushioned-bolection-limestone.webp", category: "Mantels" },
        { src: "Mantels/cushioned-bolection-marble-limestone.webp", category: "Mantels" },
        { src: "Mantels/flat-victorian-carramarble.webp", category: "Mantels" },
        { src: "Mantels/flat-victorian-limestone.webp", category: "Mantels" },
        { src: "Mantels/flat-victorian-stone-mantel-marble-limestone.webp", category: "Mantels" },
        { src: "Mantels/georgian-castiron-mantel.webp", category: "Mantels" },
        { src: "Mantels/Green marble _Bolection_ mantel, polished basket.jpg", category: "Mantels" },
        { src: "Mantels/grey-pembroke-mantel-wooden.webp", category: "Mantels" },
        { src: "Mantels/Limestone _Bolection_ mantel, _Riva 2 600HL_ inset gas fire.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Bolection_ mantel, slate slips.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Canonbury_ mantel.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Corbel_ mantel, _eReflex 55RW_ electric fire.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Corbel_ mantel.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Flat Victorian_ mantel, _Esse 500_ stove.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Flat Victorian_ mantel, _Esse 550_ stove.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Flat Victorian_ mantel, _Futura 5_ stove.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Flat Victorian_ mantel, _Reflex 75T_ gas fire.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Flat Victorian_ mantel, tiled insert.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Olvera_ mantel, basket.jpg", category: "Mantels" },
        { src: "Mantels/Limestone _Vogue_ mantel, steel slips.png", category: "Mantels" },
        { src: "Mantels/lingwood-limestone.webp", category: "Mantels" },
        { src: "Mantels/luxor-limestone.webp", category: "Mantels" },
        { src: "Mantels/marseilles-limestone.webp", category: "Mantels" },
        { src: "Mantels/mentmore-limestone.webp", category: "Mantels" },
        { src: "Mantels/Nero Marquina _Corbel_ mantel.jpg", category: "Mantels" },
        { src: "Mantels/Nero Marquina _Flat Victorian_ mantel, polished insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/Nero Marquina _Roundel_ mantel, original insert.jpg", category: "Mantels" },
        { src: "Mantels/Original cast iron mantel, _Huntingdon 30_ stove.jpg", category: "Mantels" },
        { src: "Mantels/products-page-mantels-black-marble-roundel.webp", category: "Mantels" },
        { src: "Mantels/regency-wood-mantel.webp", category: "Mantels" },
        { src: "Mantels/roseland-limestone.webp", category: "Mantels" },
        { src: "Mantels/roundel-carraramarble.webp", category: "Mantels" },
        { src: "Mantels/roundel-limestone.webp", category: "Mantels" },
        { src: "Mantels/roundel-stone-mantel-marble-limestone.webp", category: "Mantels" },
        { src: "Mantels/silsoe-cararramarble.webp", category: "Mantels" },
        { src: "Mantels/silsoe-limestone.webp", category: "Mantels" },
        { src: "Mantels/swinford-limestone.webp", category: "Mantels" },
        { src: "Mantels/trent-range-timber.webp", category: "Mantels" },
        { src: "Mantels/victorian-corbel-marble-limestone.webp", category: "Mantels" },
        { src: "Mantels/victorian-cutout-castiron.webp", category: "Mantels" },
        { src: "Mantels/washington-cararramarble.webp", category: "Mantels" },
        { src: "Mantels/White marble _Bolection_ mantel, original arch insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Canonbury_ mantel, _Better Hearth Arch_ insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Canonbury_ mantel, plain arch insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Canonbury_ mantel, polished insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Charlotte_ mantel, _Better Hearth Arch_ insert, has fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Charlotte_ mantel, _Riva2 500_ inset gas fire, slate back panel.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Corbel_ mantel, _Plain Arch_ insert (2).JPG", category: "Mantels" },
        { src: "Mantels/White marble _Corbel_ mantel, _Sheraton 5_ stove.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Corbel_ mantel, micromarble hearth, customer_s own electric fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Corbel_ mantel, original arch insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Corbel_ mantel, slate slips.png", category: "Mantels" },
        { src: "Mantels/White marble _Flat Victorian_ mantel (2).jpg", category: "Mantels" },
        { src: "Mantels/White marble _Pompadour_ mantel.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Rose Swag_ mantel, basket, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Roundel_ mantel, _Better Hearth Arch_ insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Roundel_ mantel, _Cadogan_ basket.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Roundel_ mantel, _Plain Arch_ insert.JPG", category: "Mantels" },
        { src: "Mantels/White marble _Roundel_ mantel, arch insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Roundel_ mantel, original insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble _Roundel_ mantel, polished basket.jpg", category: "Mantels" },
        { src: "Mantels/White marble _William IV_ mantel, _Nordpeis Bergen_ stove.jpg", category: "Mantels" },
        { src: "Mantels/White marble _William IV_ mantel, _Sheraton 5 wide_ stove.jpg", category: "Mantels" },
        { src: "Mantels/White marble _William IV_ mantel, original arch insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble _William IV_ mantel, original polished arch insert.jpg", category: "Mantels" },
        { src: "Mantels/White marble ‘William IV’ mantel, highlight arch insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/White marble ornate mantel (2).jpg", category: "Mantels" },
        { src: "Mantels/wilton-limestone.webp", category: "Mantels" },
        { src: "Mantels/wingfield-timber.webp", category: "Mantels" },
        { src: "Mantels/winterfold-timber.webp", category: "Mantels" },
        { src: "Mantels/Wooden _Bolection_ mantel, _eReflex 55RW_ electric fire.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Corbel_ mantel, _Bassington_ gas stove.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Corbel_ mantel, _Iconic 450_ electric fire, highlight cast iron front.jpeg", category: "Mantels" },
        { src: "Mantels/Wooden _Flat Victorian_ mantel, _Better Hearth Arch_ insert, electric fire.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Flat Victorian_ mantel, _Better Hearth_ arch insert, gas fire.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Flat Victorian_ mantel, inset gas stove, slate back panel.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Reeded Roundel_ mantel, _Stockton 5_ stove.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Reeded Roundel_ mantel.png", category: "Mantels" },
        { src: "Mantels/Wooden _Roundel_ mantel, highlight tiled insert.jpg", category: "Mantels" },
        { src: "Mantels/Wooden _Roundel_ mantel, tiled insert (AFTER).jpg", category: "Mantels" },
        { src: "Woodburning Stoves/_Bassington_ stove (2).jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Bassington_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Holsworthy_ freestanding stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Huntingdon 30_ stove, _Geocast_ faux-wood beam.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Sheraton 5_ Stove (2).jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Sheraton 5_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Studio 1 Edge_ inset stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Studio 3_ freestanding stove, stove bench.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Vega Edge_ white enamel stove.JPG", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Vue Landscape_ stove.JPG", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Vue Portrait_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/_Westfire Uniq_ freestanding stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Capital Bassington Eco, multifuel stove, warm white enamel.png", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Capital Bassington Eco, multifuel stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Capital Holsworthy, freestanding wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Capital Redbourn, inset wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Capital Woodrow 5, wood stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Carrara marble _Corbel_ mantel, _Esse 105_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Carrara marble _Flat Victorian_ mantel, _Chesterfield 5_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Carrara marble _Flat Victorian_ mantel, _Riva2 40_ inset stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Cast iron mantel, _Norpeis Bergen_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Customer_s original mantel, _Christon 550_ wood stove.JPG", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Customer_s original mantel, _Stockton 5 wide_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Esse 105, wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Esse 155, wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Esse 500, wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Esse 550, wood stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Esse 775F, wood stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/F2 Vue Landscape, multifuel stove.png", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Limestone _Flat Victorian_ mantel, _Esse 500_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Limestone _Flat Victorian_ mantel, _Esse 550_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Limestone _Flat Victorian_ mantel, _Futura 5_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Mendip Ashcott Wide, wood stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Mendip Woodland, multifuel stove, logstore.png", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Nordpeis Bergen, wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Stovax Futura 5, wood or multifuel stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Stovax Sheraton 5, wood or multifuel stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Stovax Stockton 5, wood or multifuel stove.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Stovax Studio 2, freestanding wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Stovax Vogue 700, inset wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Stovax Vogue Midi, wood or multifuel stove, logstore.jpeg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Westfire Uniq 36, wood stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _Canonbury_ mantel, _Bassington_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _Corbel_ mantel, _Sheraton 5_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _Flat Victorian_ mantel, _Sheraton 5_ stove (AFTER).jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _Flat Victorian_ mantel, _Sheraton 5_ stove (BEFORE).jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _Flat Victorian_ mantel.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _William IV_ mantel, _Nordpeis Bergen_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _William IV_ mantel, _Sheraton 5 wide_ stove (3).jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _William IV_ mantel, _Sheraton 5 wide_ stove (3).png", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/White marble _William IV_ mantel, _Sheraton 5 wide_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Wooden _Reeded Roundel_ mantel, _Stockton 5_ stove.jpg", category: "Woodburning stoves" },
        { src: "Woodburning Stoves/Wooden mantel, _Woodland_ stove.jpg", category: "Woodburning stoves" }
    ];

    const installationCategories = [
        {
            name: "Antiques & traditional fireplaces",
            matches: (title) => title.toLowerCase().includes("antiques")
        },
        {
            name: "Bioethanol fires",
            matches: (title) => title.toLowerCase().includes("bioethanol")
        },
        {
            name: "Made to measure gas fires",
            matches: (title) => title.toLowerCase().includes("made")
        },
        {
            name: "Electric fires",
            matches: (title) => title.toLowerCase().includes("electric")
        },
        {
            name: "Inset gas fires & stoves",
            matches: (title) => title.toLowerCase().includes("inset")
        },
        {
            name: "Mantels",
            matches: (title) => title.toLowerCase().includes("mantels")
        },
        {
            name: "Woodburning stoves",
            matches: (title) => title.toLowerCase().includes("woodburning")
        }
    ];

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    const slider = document.querySelector('.hero-slider');
    let currentSlide = 0;
    let slideInterval;

    document.querySelectorAll('.top-banner').forEach((topBanner) => {
        const menuButton = topBanner.querySelector('.mobile-menu-button');
        if (!menuButton) {
            return;
        }

        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.addEventListener('click', () => {
            const isOpen = topBanner.classList.toggle('mobile-menu-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        topBanner.querySelectorAll('.banner-button[href], .dropdown-item[href], .banner-logo-link[href]').forEach((link) => {
            link.addEventListener('click', () => {
                topBanner.classList.remove('mobile-menu-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open navigation menu');
            });
        });
    });

    function showSlide(index) {
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('active', slideIndex === index);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
        });

        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startSlider() {
        if (slides.length === 0) {
            return;
        }

        stopSlider();
        slideInterval = window.setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        if (slideInterval) {
            window.clearInterval(slideInterval);
        }
    }

    if (slides.length > 0 && dots.length > 0 && prevArrow && nextArrow && slider) {
        prevArrow.addEventListener('click', () => {
            prevSlide();
            startSlider();
        });

        nextArrow.addEventListener('click', () => {
            nextSlide();
            startSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                startSlider();
            });
        });

        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
        startSlider();
    }

    const installationItems = document.querySelectorAll('.installation-item');
    if (installationItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });

        installationItems.forEach((item) => observer.observe(item));
    }

    const installationsGrids = document.querySelectorAll('.installations-grid');
    const galleryModal = document.getElementById('galleryModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryCaption = document.getElementById('galleryCaption');
    const galleryCounter = document.getElementById('galleryCounter');
    const galleryActiveImage = document.getElementById('galleryActiveImage');
    const backToTopButton = document.getElementById('backToTopButton');
    let currentGalleryIndex = 0;

    function sentenceTitleLabel(text) {
        const label = text.replace(/\s+/g, ' ').trim().toLowerCase();
        return label ? label.charAt(0).toUpperCase() + label.slice(1) : label;
    }

    function getImageTitle(image) {
        const cardTitle = image.closest('.model-card')?.querySelector('.model-card-name')?.textContent;
        return (cardTitle || image.alt || '').trim();
    }

    function ensureImageLightbox() {
        let lightbox = document.getElementById('imageLightbox');
        if (lightbox) {
            return lightbox;
        }

        lightbox = document.createElement('div');
        lightbox.className = 'gallery-modal';
        lightbox.id = 'imageLightbox';
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.innerHTML = `
            <div class="modal-overlay" data-image-lightbox-close></div>
            <div class="modal-content gallery-modal-content" role="dialog" aria-modal="true" aria-labelledby="imageLightboxTitle">
                <button class="modal-close" type="button" data-image-lightbox-close aria-label="Close image">&times;</button>
                <div class="gallery-modal-header">
                    <h2 class="modal-title" id="imageLightboxTitle"></h2>
                </div>
                <div class="gallery-slider">
                    <div class="gallery-slides-container">
                        <div class="gallery-slide active">
                            <img src="" alt="" class="gallery-image" id="imageLightboxImage">
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelectorAll('[data-image-lightbox-close]').forEach((closeButton) => {
            closeButton.addEventListener('click', closeImageLightbox);
        });

        return lightbox;
    }

    function closeImageLightbox() {
        const lightbox = document.getElementById('imageLightbox');
        if (!lightbox) {
            return;
        }

        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function openImageLightbox(image) {
        const lightbox = ensureImageLightbox();
        const lightboxImage = lightbox.querySelector('#imageLightboxImage');
        const lightboxTitle = lightbox.querySelector('#imageLightboxTitle');
        const title = getImageTitle(image);

        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = title;
        lightboxTitle.textContent = title;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function ensureProductCardModal() {
        let modal = document.getElementById('productCardModal');
        if (modal) {
            return modal;
        }

        modal = document.createElement('div');
        modal.className = 'product-card-modal';
        modal.id = 'productCardModal';
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="product-card-modal-backdrop" data-product-card-close></div>
            <div class="product-card-modal-content" role="dialog" aria-modal="true" aria-label="Product details">
                <button class="product-card-modal-close" type="button" data-product-card-close aria-label="Close product details">&times;</button>
                <div class="product-card-modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelectorAll('[data-product-card-close]').forEach((closeButton) => {
            closeButton.addEventListener('click', closeProductCardModal);
        });

        return modal;
    }

    function closeProductCardModal() {
        const modal = document.getElementById('productCardModal');
        if (!modal) {
            return;
        }

        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function openProductCardModal(card) {
        const modal = ensureProductCardModal();
        const modalBody = modal.querySelector('.product-card-modal-body');
        const cardClone = card.cloneNode(true);

        cardClone.classList.remove('is-expanded');
        cardClone.classList.add('product-card-modal-card');
        cardClone.removeAttribute('tabindex');
        cardClone.removeAttribute('role');
        cardClone.removeAttribute('aria-expanded');
        cardClone.removeAttribute('aria-haspopup');
        cardClone.removeAttribute('aria-label');

        modalBody.innerHTML = '';
        modalBody.appendChild(cardClone);
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function setRandomProductHeroImage() {
        const productHeroImage = document.querySelector('.product-page > .product-image');
        const productImages = Array.from(document.querySelectorAll('.product-page .model-card-image img'));

        if (!productHeroImage || productImages.length === 0) {
            return;
        }

        const selectedImage = productImages[Math.floor(Math.random() * productImages.length)];
        productHeroImage.src = selectedImage.getAttribute('src');
        productHeroImage.alt = getImageTitle(selectedImage) || selectedImage.alt || productHeroImage.alt;
    }

    setRandomProductHeroImage();

    document.querySelectorAll('.product-image').forEach((image) => {
        image.classList.add('clickable-gallery-image');
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', `Open ${getImageTitle(image) || 'image'}`);
        image.addEventListener('click', () => openImageLightbox(image));
        image.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openImageLightbox(image);
            }
        });
    });

    document.querySelectorAll('.model-card').forEach((card) => {
        const cardName = card.querySelector('.model-card-name')?.textContent?.trim() || 'Product details';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-haspopup', 'dialog');
        card.setAttribute('aria-label', `View details for ${cardName}`);

        card.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                return;
            }

            openProductCardModal(card);
        });

        card.addEventListener('keydown', (event) => {
            if (event.target.closest('a')) {
                return;
            }

            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openProductCardModal(card);
            }
        });
    });

    document.querySelectorAll('.subcategory-page-select').forEach((select) => {
        select.addEventListener('change', () => {
            if (select.value) {
                window.location.href = select.value;
            }
        });
    });

    function formatInstallationTitle(fileName) {
        const imagePath = typeof fileName === 'string' ? fileName : fileName.src;
        const title = imagePath
            .split('/')
            .pop()
            .replace(/\.[^.]+$/, '')
            .replace(/\s*\(\d+\)\s*/g, ' ')
            .replace(/_/g, '')
            .replace(/\bhas fire\b/gi, 'gas fire')
            .replace(/\s+/g, ' ')
            .trim();

        return sentenceTitleLabel(title);
    }

    function updateGalleryImage(index) {
        const safeIndex = (index + installationImages.length) % installationImages.length;
        const installationImage = installationImages[safeIndex];
        const title = formatInstallationTitle(installationImage);

        currentGalleryIndex = safeIndex;
        galleryActiveImage.src = typeof installationImage === 'string' ? `Installation photos/${installationImage}` : installationImage.src;
        galleryActiveImage.alt = title;
        galleryTitle.textContent = title;
        galleryCaption.textContent = '';
        galleryCounter.textContent = `${safeIndex + 1} / ${installationImages.length}`;
    }

    function openGallery(index) {
        if (!galleryModal || !galleryActiveImage) {
            return;
        }

        updateGalleryImage(index);
        galleryModal.classList.add('active');
        galleryModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function createInstallationCard(installationImage, index) {
        const title = formatInstallationTitle(installationImage);
        const card = document.createElement('article');
        card.className = 'installations-grid-item';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'installation-grid-button';
        button.setAttribute('aria-label', `Open ${title}`);
        button.addEventListener('click', () => openGallery(index));

        const image = document.createElement('img');
        image.className = 'installation-grid-image';
        image.src = typeof installationImage === 'string' ? `Installation photos/${installationImage}` : installationImage.src;
        image.alt = title;
        image.loading = 'lazy';

        const label = document.createElement('span');
        label.className = 'installation-grid-label';
        label.textContent = title;

        button.appendChild(image);
        button.appendChild(label);
        card.appendChild(button);

        return card;
    }

    function getInstallationCategoryName(installationImage) {
        if (typeof installationImage !== 'string' && installationImage.category) {
            return installationImage.category;
        }

        const title = formatInstallationTitle(installationImage);
        const categoryPriority = ["Antiques & Traditional Fireplaces", "Bioethanol Fires", "Made to Measure Gas Fires", "Electric Fires", "Inset Gas Fires & Stoves", "Mantels", "Woodburning Stoves"];
        const category = categoryPriority
            .map((categoryName) => installationCategories.find((categoryItem) => categoryItem.name === categoryName))
            .find((categoryItem) => categoryItem && categoryItem.matches(title));

        return category ? category.name : "Mantels";
    }

    function getCategoryId(categoryName) {
        return `installation-category-${categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
    }

    function getInstallationCategoryPage(categoryName) {
        return `installations-${categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.html`;
    }

    function renderInstallationCategoryNav(categories, navigationMode = 'scroll') {
        const categoryNav = document.getElementById('installationCategoryNav');
        if (!categoryNav || categories.length === 0) {
            return;
        }

        categoryNav.innerHTML = '';

        const navLabel = document.createElement('label');
        navLabel.className = 'installation-category-nav-label';
        navLabel.setAttribute('for', 'installationCategorySelect');
        navLabel.textContent = 'Select category';
        categoryNav.appendChild(navLabel);

        const categorySelect = document.createElement('select');
        categorySelect.className = 'installation-category-select';
        categorySelect.id = 'installationCategorySelect';

        const placeholderOption = document.createElement('option');
        placeholderOption.value = '';
        placeholderOption.textContent = 'Choose a category';
        categorySelect.appendChild(placeholderOption);

        categories.forEach((category) => {
            const option = document.createElement('option');
            option.value = navigationMode === 'pages' ? getInstallationCategoryPage(category.name) : getCategoryId(category.name);
            option.textContent = category.name;
            if (navigationMode === 'pages' && window.location.pathname.endsWith(`/${option.value}`)) {
                option.selected = true;
            }
            categorySelect.appendChild(option);
        });

        categorySelect.addEventListener('change', () => {
            if (!categorySelect.value) {
                return;
            }

            if (navigationMode === 'pages') {
                window.location.href = categorySelect.value;
                return;
            }

            document.getElementById(categorySelect.value)?.scrollIntoView({ behavior: 'smooth' });
            categorySelect.value = '';
        });

        categoryNav.appendChild(categorySelect);
    }

    function renderCategorizedInstallations(gridElement) {
        const groupedImages = new Map(installationCategories.map((category) => [category.name, []]));

        installationImages.forEach((fileName, index) => {
            const categoryName = getInstallationCategoryName(fileName);
            groupedImages.get(categoryName).push({ installationImage: fileName, index });
        });

        const populatedCategories = installationCategories.filter((category) => {
            const categoryImages = groupedImages.get(category.name);
            return categoryImages && categoryImages.length > 0;
        });

        const targetCategoryName = gridElement.dataset.installationCategory;
        const navigationMode = gridElement.dataset.navigationOnly === 'true' || targetCategoryName ? 'pages' : 'scroll';
        renderInstallationCategoryNav(populatedCategories, navigationMode);

        if (gridElement.dataset.navigationOnly === 'true') {
            return;
        }

        const categoriesToRender = targetCategoryName
            ? populatedCategories.filter((category) => category.name === targetCategoryName)
            : populatedCategories;

        categoriesToRender.forEach((category) => {
            const categoryImages = groupedImages.get(category.name);

            const categorySection = document.createElement('section');
            categorySection.className = 'installation-category';
            categorySection.id = getCategoryId(category.name);

            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'installation-category-title';
            categoryTitle.textContent = category.name;

            const categoryGrid = document.createElement('div');
            categoryGrid.className = 'installations-grid installation-category-grid';

            categoryImages.forEach(({ installationImage, index }) => {
                categoryGrid.appendChild(createInstallationCard(installationImage, index));
            });

            categorySection.appendChild(categoryTitle);
            categorySection.appendChild(categoryGrid);
            gridElement.appendChild(categorySection);
        });
    }

    function closeGallery() {
        if (!galleryModal) {
            return;
        }

        galleryModal.classList.remove('active');
        galleryModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function renderInstallationsGrid(gridElement) {
        if (!gridElement) {
            return;
        }

        if (gridElement.dataset.categorized === 'true') {
            renderCategorizedInstallations(gridElement);
            return;
        }

        installationImages.forEach((fileName, index) => {
            gridElement.appendChild(createInstallationCard(fileName, index));
        });
    }

    function updatePreviewGridHeight(gridElement) {
        if (gridElement.dataset.categorized === 'true') {
            return;
        }

        const previewRows = Number(gridElement.dataset.previewRows || 0);
        if (!previewRows) {
            return;
        }

        const firstItem = gridElement.querySelector('.installations-grid-item');
        if (!firstItem) {
            return;
        }

        const itemHeight = firstItem.getBoundingClientRect().height;
        const gridStyles = window.getComputedStyle(gridElement);
        const rowGap = Number.parseFloat(gridStyles.rowGap || gridStyles.gap || '0');
        const previewHeight = (itemHeight * previewRows) + (rowGap * (previewRows - 1));

        gridElement.style.maxHeight = `${previewHeight}px`;
    }

    if (installationsGrids.length > 0 && galleryModal && modalClose && modalOverlay && galleryPrev && galleryNext && galleryTitle && galleryCaption && galleryCounter && galleryActiveImage) {
        installationsGrids.forEach((gridElement) => {
            renderInstallationsGrid(gridElement);
            updatePreviewGridHeight(gridElement);
        });

        modalClose.addEventListener('click', closeGallery);
        modalOverlay.addEventListener('click', closeGallery);
        galleryPrev.addEventListener('click', () => updateGalleryImage(currentGalleryIndex - 1));
        galleryNext.addEventListener('click', () => updateGalleryImage(currentGalleryIndex + 1));

        window.addEventListener('resize', () => {
            installationsGrids.forEach((gridElement) => updatePreviewGridHeight(gridElement));
        });

        document.addEventListener('keydown', (event) => {
            if (!galleryModal.classList.contains('active')) {
                return;
            }

            if (event.key === 'Escape') {
                closeGallery();
            } else if (event.key === 'ArrowLeft') {
                updateGalleryImage(currentGalleryIndex - 1);
            } else if (event.key === 'ArrowRight') {
                updateGalleryImage(currentGalleryIndex + 1);
            }
        });
    }

    if (backToTopButton) {
        const toggleBackToTopButton = () => {
            backToTopButton.classList.toggle('visible', window.scrollY > 500);
        };

        toggleBackToTopButton();
        window.addEventListener('scroll', toggleBackToTopButton, { passive: true });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeImageLightbox();
            closeProductCardModal();
        }
    });
});

