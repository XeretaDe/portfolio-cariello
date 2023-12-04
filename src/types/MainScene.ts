import type { Vector3 } from "three";
import { GLTF } from "three-stdlib";
import {
  AnimationAction,
  AnimationClip,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from "three";

export type ObjectProps = {
  name: string;
  position: Vector3;
};

interface GLTFAction extends AnimationClip {
  name: ActionName;
}

//#region GltfTypes

export type GLTFResult = GLTF & {
  nodes: {
    Cube014: THREE.Mesh;
    PecasMetal: THREE.Mesh;
    Grades: THREE.Mesh;
    PCPartes: THREE.Mesh;
    Fios: THREE.Mesh;
    Grades2: THREE.Mesh;
    Case001: THREE.Mesh;
    Case: THREE.Mesh;
    Grades3: THREE.Mesh;
    PecasPC: THREE.Mesh;
    Parafusos: THREE.Mesh;
    Parafusos2: THREE.Mesh;
    PecasPe: THREE.Mesh;
    Leds: THREE.Mesh;
    SSD: THREE.Mesh;
    Entradas: THREE.Mesh;
    EntradasUsb: THREE.Mesh;
    EntradasPc: THREE.Mesh;
    EntradasPC2: THREE.Mesh;
    EntradasPC3: THREE.Mesh;
    EntradaEthernet: THREE.Mesh;
    Parafusos2001: THREE.Mesh;
    Pinos: THREE.Mesh;
    VidroPc: THREE.Mesh;
    Plane035: THREE.Mesh;
    Plane035_1: THREE.Mesh;
    Plane035_2: THREE.Mesh;
    Plane035_3: THREE.Mesh;
    Plane035_4: THREE.Mesh;
    Plane035_5: THREE.Mesh;
    Plane035_6: THREE.Mesh;
    Plane035_7: THREE.Mesh;
    Plane035_8: THREE.Mesh;
    Plane035_9: THREE.Mesh;
    Plane035_10: THREE.Mesh;
    Plane035_11: THREE.Mesh;
    Plane035_12: THREE.Mesh;
    Plane035_13: THREE.Mesh;
    Plane035_14: THREE.Mesh;
    Plane035_15: THREE.Mesh;
    Plane035_16: THREE.Mesh;
    Plane035_17: THREE.Mesh;
    Plane035_18: THREE.Mesh;
    Plane035_19: THREE.Mesh;
    Plane035_20: THREE.Mesh;
    Plane035_21: THREE.Mesh;
    Plane035_22: THREE.Mesh;
    Plane035_23: THREE.Mesh;
    Plane035_24: THREE.Mesh;
    Plane035_25: THREE.Mesh;
    Plane035_26: THREE.Mesh;
    Plane035_27: THREE.Mesh;
    Plane035_28: THREE.Mesh;
    Plane035_29: THREE.Mesh;
    Plane035_30: THREE.Mesh;
    Plane035_31: THREE.Mesh;
    Plane035_32: THREE.Mesh;
    Plane035_33: THREE.Mesh;
    Plane035_34: THREE.Mesh;
    Plane035_35: THREE.Mesh;
    Plane035_36: THREE.Mesh;
    Plane035_37: THREE.Mesh;
    Plane035_38: THREE.Mesh;
    Plane035_39: THREE.Mesh;
    Plane035_40: THREE.Mesh;
    Plane035_41: THREE.Mesh;
    Plane035_42: THREE.Mesh;
    Plane077: THREE.Mesh;
    Plane077_1: THREE.Mesh;
    Plane077_2: THREE.Mesh;
    Plane077_3: THREE.Mesh;
    Plane077_4: THREE.Mesh;
    Plane077_5: THREE.Mesh;
    Plane077_6: THREE.Mesh;
    Plane077_7: THREE.Mesh;
    Plane077_8: THREE.Mesh;
    Plane077_9: THREE.Mesh;
    Plane077_10: THREE.Mesh;
    Plane077_11: THREE.Mesh;
    Plane077_12: THREE.Mesh;
    Plane077_13: THREE.Mesh;
    Plane077_14: THREE.Mesh;
    Plane077_15: THREE.Mesh;
    Plane077_16: THREE.Mesh;
    Plane077_17: THREE.Mesh;
    Plane077_18: THREE.Mesh;
    Plane077_19: THREE.Mesh;
    Plane077_20: THREE.Mesh;
    Plane077_21: THREE.Mesh;
    Plane077_22: THREE.Mesh;
    Plane077_23: THREE.Mesh;
    Plane077_24: THREE.Mesh;
    Plane077_25: THREE.Mesh;
    Plane077_26: THREE.Mesh;
    Plane077_27: THREE.Mesh;
    Plane077_28: THREE.Mesh;
    Plane077_29: THREE.Mesh;
    Plane077_30: THREE.Mesh;
    Plane077_31: THREE.Mesh;
    Plane077_32: THREE.Mesh;
    Plane077_33: THREE.Mesh;
    Plane077_34: THREE.Mesh;
    Plane077_35: THREE.Mesh;
    Plane077_36: THREE.Mesh;
    Plane077_37: THREE.Mesh;
    Plane077_38: THREE.Mesh;
    Plane077_39: THREE.Mesh;
    Plane077_40: THREE.Mesh;
    Plane077_41: THREE.Mesh;
    Plane077_42: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    Cube012_2: THREE.Mesh;
    Cube012_3: THREE.Mesh;
    Cube012_4: THREE.Mesh;
    Livro6: THREE.Mesh;
    LivroCima: THREE.Mesh;
    LivroCima2: THREE.Mesh;
    Livro3: THREE.Mesh;
    Livro4: THREE.Mesh;
    Livro5: THREE.Mesh;
    BookStack4: THREE.Mesh;
    BookStack1: THREE.Mesh;
    BookStack2: THREE.Mesh;
    BookStack3: THREE.Mesh;
    BookStack5: THREE.Mesh;
    MousePad: THREE.Mesh;
    MonitorBotao: THREE.Mesh;
    MonitorAtras1: THREE.Mesh;
    MonitorAtras2: THREE.Mesh;
    MonitorAtras3: THREE.Mesh;
    MonitorAtras4: THREE.Mesh;
    PeMonitor: THREE.Mesh;
    PeMonitor2: THREE.Mesh;
    PeMonitor3: THREE.Mesh;
    FerroMonitor: THREE.Mesh;
    HoldMonitor: THREE.Mesh;
    HoldMonitorAtras: THREE.Mesh;
    Tela: THREE.Mesh;
    AcerHold: THREE.Mesh;
    FerrinhoTelaEmbaixo: THREE.Mesh;
    MoldeTela: THREE.Mesh;
    MoldeTela2: THREE.Mesh;
    KeyBoard: THREE.Mesh;
    Object_6004: THREE.Mesh;
    Object_6004_1: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    HolderVitrola: THREE.Mesh;
    Circle_0: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    Circle_3: THREE.Mesh;
    Circle_4: THREE.Mesh;
    Circle_5: THREE.Mesh;
    Cama: THREE.Mesh;
    MoldeTeclado: THREE.Mesh;
    Mesh016: THREE.Mesh;
    Mesh016_1: THREE.Mesh;
    Mesh017: THREE.Mesh;
    Mesh017_1: THREE.Mesh;
    VolumeSlider: THREE.Mesh;
    Mesh021: THREE.Mesh;
    Mesh021_1: THREE.Mesh;
    Mesh036: THREE.Mesh;
    Mesh036_1: THREE.Mesh;
    Mesh022: THREE.Mesh;
    Mesh022_1: THREE.Mesh;
    C3: THREE.Mesh;
    B2: THREE.Mesh;
    A2: THREE.Mesh;
    G2: THREE.Mesh;
    F2: THREE.Mesh;
    E2: THREE.Mesh;
    D2: THREE.Mesh;
    C2: THREE.Mesh;
    B1: THREE.Mesh;
    A1: THREE.Mesh;
    G1: THREE.Mesh;
    F1: THREE.Mesh;
    E1: THREE.Mesh;
    D1: THREE.Mesh;
    C1: THREE.Mesh;
    D3: THREE.Mesh;
    E3: THREE.Mesh;
    F3: THREE.Mesh;
    G3: THREE.Mesh;
    A3: THREE.Mesh;
    B3: THREE.Mesh;
    C4: THREE.Mesh;
    D4: THREE.Mesh;
    E4: THREE.Mesh;
    F4: THREE.Mesh;
    ["A#2"]: THREE.Mesh;
    ["G#2"]: THREE.Mesh;
    ["F#2"]: THREE.Mesh;
    ["D#2"]: THREE.Mesh;
    ["C#2"]: THREE.Mesh;
    ["A#1"]: THREE.Mesh;
    ["G#1"]: THREE.Mesh;
    ["F#1"]: THREE.Mesh;
    ["D#1"]: THREE.Mesh;
    ["C#1"]: THREE.Mesh;
    ["A#3"]: THREE.Mesh;
    ["C#3"]: THREE.Mesh;
    ["C#4"]: THREE.Mesh;
    ["D#3"]: THREE.Mesh;
    ["D#4"]: THREE.Mesh;
    ["F#3"]: THREE.Mesh;
    ["G#3"]: THREE.Mesh;
    Prateleira: THREE.Mesh;
    Prateleira002: THREE.Mesh;
    BookBack: THREE.Mesh;
    Plane029: THREE.Mesh;
    Plane029_1: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Page1: THREE.Mesh;
    Page2: THREE.Mesh;
    Page3: THREE.Mesh;
    Page4: THREE.Mesh;
    Page8: THREE.Mesh;
    Page7: THREE.Mesh;
    Page6: THREE.Mesh;
    Page5: THREE.Mesh;
    Page13: THREE.Mesh;
    Page14: THREE.Mesh;
    Page15: THREE.Mesh;
    Page16: THREE.Mesh;
    Page12: THREE.Mesh;
    Page11: THREE.Mesh;
    Page10: THREE.Mesh;
    Page9: THREE.Mesh;
    Page25: THREE.Mesh;
    Page26: THREE.Mesh;
    Page27: THREE.Mesh;
    Page28: THREE.Mesh;
    Page32: THREE.Mesh;
    Page31: THREE.Mesh;
    Page30: THREE.Mesh;
    Page29: THREE.Mesh;
    Page21: THREE.Mesh;
    Page22: THREE.Mesh;
    Page23: THREE.Mesh;
    Page24: THREE.Mesh;
    Page20: THREE.Mesh;
    Page19: THREE.Mesh;
    Page18: THREE.Mesh;
    Page17: THREE.Mesh;
    Page49LastFlip: THREE.Mesh;
    Page56: THREE.Mesh;
    Page55: THREE.Mesh;
    Page61: THREE.Mesh;
    Page62: THREE.Mesh;
    Page63: THREE.Mesh;
    Page64: THREE.Mesh;
    Page60: THREE.Mesh;
    Page59: THREE.Mesh;
    Page58: THREE.Mesh;
    Page57: THREE.Mesh;
    Page41: THREE.Mesh;
    Page42: THREE.Mesh;
    Page43: THREE.Mesh;
    Page44: THREE.Mesh;
    Page48: THREE.Mesh;
    Page47: THREE.Mesh;
    Page46: THREE.Mesh;
    Page45: THREE.Mesh;
    Page37: THREE.Mesh;
    Page38: THREE.Mesh;
    Page39: THREE.Mesh;
    Page40: THREE.Mesh;
    Page36: THREE.Mesh;
    Page35: THREE.Mesh;
    Page34: THREE.Mesh;
    Page33: THREE.Mesh;
    Page65: THREE.Mesh;
    Page66: THREE.Mesh;
    Page67: THREE.Mesh;
    Page68: THREE.Mesh;
    Page72: THREE.Mesh;
    Page71: THREE.Mesh;
    Page70: THREE.Mesh;
    Page69: THREE.Mesh;
    Page77: THREE.Mesh;
    Page78: THREE.Mesh;
    Page79: THREE.Mesh;
    Page80: THREE.Mesh;
    Page76: THREE.Mesh;
    Page75: THREE.Mesh;
    Page74: THREE.Mesh;
    Page73: THREE.Mesh;
    Page89: THREE.Mesh;
    Page90: THREE.Mesh;
    Page91: THREE.Mesh;
    Page92: THREE.Mesh;
    Page96: THREE.Mesh;
    Page95: THREE.Mesh;
    Page94: THREE.Mesh;
    Page93: THREE.Mesh;
    Page85: THREE.Mesh;
    Page86: THREE.Mesh;
    Page87: THREE.Mesh;
    Page88: THREE.Mesh;
    Page84: THREE.Mesh;
    Page83: THREE.Mesh;
    Page82: THREE.Mesh;
    Page81: THREE.Mesh;
    Page99: THREE.Mesh;
    Page98: THREE.Mesh;
    Page97: THREE.Mesh;
    Page50: THREE.Mesh;
    Page51: THREE.Mesh;
    Page52: THREE.Mesh;
    Page53: THREE.Mesh;
    Page54: THREE.Mesh;
    Mesh019: THREE.Mesh;
    Mesh019_1: THREE.Mesh;
    ["Wood_W-L"]: THREE.Mesh;
    ["Wood_W-R"]: THREE.Mesh;
    BotoesVitrola: THREE.Mesh;
    DetalhePlastico: THREE.Mesh;
    DetalheVitrola: THREE.Mesh;
    HolderAgulha: THREE.Mesh;
    HolderVara: THREE.Mesh;
    MoldeVitrola: THREE.Mesh;
    PecasPlasticoPretoVitrola: THREE.Mesh;
    TampaVitrola: THREE.Mesh;
    Mesh033: THREE.Mesh;
    Mesh033_1: THREE.Mesh;
    Mesh033_2: THREE.Mesh;
    Mesh034: THREE.Mesh;
    Mesh034_1: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    //PaletteMaterial001: THREE.LineBasicMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial;
    aiStandardSurface14SG: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    aiStandardSurface9SG: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
    ["LED Stripe"]: THREE.MeshStandardMaterial;
    PaletteMaterial005: THREE.MeshPhysicalMaterial;
    LeftWallMaterial: THREE.MeshStandardMaterial;
    MiddleWallMaterial: THREE.MeshStandardMaterial;
    RightWallMaterial: THREE.MeshStandardMaterial;
    FloorMaterial: THREE.MeshStandardMaterial;
    Books: THREE.MeshStandardMaterial;
    PropBooksMaterial2: THREE.MeshStandardMaterial;
    PropBookMaterial: THREE.MeshStandardMaterial;
    MousePadMaterial: THREE.MeshStandardMaterial;
    BotoesMonitorImg: THREE.MeshStandardMaterial;
    BackMonitorMaterial: THREE.MeshStandardMaterial;
    ["achter.ribbel.001"]: THREE.MeshStandardMaterial;
    ["logo.coutout.smooth.001"]: THREE.MeshStandardMaterial;
    ["logo.coutout.smooth"]: THREE.MeshStandardMaterial;
    PeMonitorMaterial2: THREE.MeshStandardMaterial;
    AcerLoogo: THREE.MeshStandardMaterial;
    VoltaMonitorMaterial: THREE.MeshStandardMaterial;
    TecladoMaterial: THREE.MeshStandardMaterial;
    centerVitrola: THREE.MeshStandardMaterial;
    Indoor_Plant_pot: THREE.MeshStandardMaterial;
    FlorMaterial: THREE.MeshStandardMaterial;
    Indoor_Plant: THREE.MeshStandardMaterial;
    Indoor_Plant_ground: THREE.MeshStandardMaterial;
    BedMaterial: THREE.MeshStandardMaterial;
    PaletteMaterial007: THREE.MeshStandardMaterial;
    PaletteMaterial008: THREE.MeshStandardMaterial;
    PaletteMaterial009: THREE.MeshStandardMaterial;
    BookCover: THREE.MeshStandardMaterial;
    PaletteMaterial010: THREE.MeshStandardMaterial;
    MoldeVidroMaterial: THREE.MeshStandardMaterial;
    PaletteMaterial012: THREE.MeshStandardMaterial;
    vitrolaWood: THREE.MeshStandardMaterial;
    PaletteMaterial006: THREE.MeshStandardMaterial;
    PaletteMaterial011: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "AgulhaFirstTrackAction"
  | "AgulhaFirstTrackActionToFinish"
  | "AgulhaFourthToEndAction"
  | "AgulhaFourthTrackAction"
  | "AgulhaSecondTrackAction"
  | "AgulhaThirdTrackAction"
  | "DiscAction"
  | "C3PressAction"
  | "B2PressAction"
  | "A2PressAction"
  | "G2PressAction"
  | "F2PressAction"
  | "E2PressAction"
  | "D2PressAction"
  | "C2PressAction"
  | "B1PressAction"
  | "A1PressAction"
  | "G1PressAction"
  | "F1PressAction"
  | "E1PressAction"
  | "D1PressAction"
  | "C1PressAction"
  | "D3PressAction"
  | "E3PressAction"
  | "F3PressAction"
  | "G3PressAction"
  | "A3PressAction"
  | "B3PressAction"
  | "C4PressAction"
  | "D4PressAction"
  | "E4PressAction"
  | "F4PressAction"
  | "A#2PressAction"
  | "G#2PressAction"
  | "F#2PressAction"
  | "D#2PressAction"
  | "C#2PressAction"
  | "A#1PressAction"
  | "G#1PressAction"
  | "F#1PressAction"
  | "D#1PressAction"
  | "C#1Press"
  | "A#3PressAction"
  | "C#3PressAction"
  | "C#4PressAction"
  | "D#3PressAction"
  | "D#4PressAction"
  | "F#3PressAction"
  | "G#3PressAction"
  | "BookFace"
  | "BookSide"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "SplitPagesAction"
  | "RotacaoFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "OpeningPageRightMove"
  | "RotacaoRightFirstMove"
  | "FlipPage1"
  | "AjustePageOpening"
  | "RotacaoPageOneToLeft"
  | "RotacaoPageOneRight"
  | "FlipPage2"
  | "Page2AdjustmentOpen"
  | "Page2Rotation"
  | "Page2RotacaoAdjustment"
  | "FlipPage3"
  | "AjusteOpeningPage4"
  | "Page3Rotacao"
  | "RotacaoAjusteOpen"
  | "FlipPage4"
  | "RotacaoPagina4"
  | "OpeningRotacaoPage4"
  | "FlipPage5"
  | "AjusteOpeningPage5"
  | "RotacaoP5"
  | "RotacaoFirstMovePage5"
  | "RightWindowAction"
  | "TesteBrincadeira"
  | "LeftWindowTrack";
export type GLTFActions = Record<ActionName, THREE.AnimationAction>;