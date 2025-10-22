import type { NextPage } from "next";
import Section from "../components/FirstPage/Sections";
import { ResumeCardData, ExperienceData } from "../utils/3d_cards/data";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    AnimatePresence,
    type MotionValue,
} from "framer-motion";
import Introduction from "../components/FirstPage/IntroductionSection";
import MainLayout from "../components/Layout/MainLayout";
import { HotBar } from "../components/GlobalUI/hotbar/HotBar";
import Header from "../components/GlobalUI/Header";
import ToggleColorMode from "../components/GlobalUI/ToggleColorMode";
import { GrowingCircleDiv } from "../components/GlobalUI/DivGrowingCircle";
import LanguageDropdown from "../components/GlobalUI/LanguageSelector";

const MERGE_AT = 0.38;
const DOCK_START = 0.52;
const DOCK_END = 0.74;
const FINAL_HEADER_FONT_SIZE_PX = 24;
const TOP_CENTER_Y_RATIO = -0.36;
const END_Y_EM = { R: -0.08, C: 0.16 };
const END_X_SWAP_EM = { R: -0.57, C: 4.5 };

const DisappearingWord = ({
    word,
    progress,
    x,
    y,
}: {
    word: string;
    progress: MotionValue<number>;
    x?: MotionValue<string>;
    y?: MotionValue<string>;
}) => {
    const chars = useMemo(() => word.split(""), [word]);
    const L = chars.length;
    const charsToKeep = useTransform(progress, [0, 1], [L, 1]);

    const [currentCharsToKeep, setCurrentCharsToKeep] = useState(L);
    useMotionValueEvent(charsToKeep, "change", (latest) => {
        setCurrentCharsToKeep(latest);
    });

    return (
        <>
            {chars.map((char, i) => {
                if (i === 0) {
                    return (
                        <motion.span
                            key={i}
                            style={{ x, y, display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    );
                }

                const visibility = Math.max(0, Math.min(1, currentCharsToKeep - i));
                return (
                    <motion.span
                        key={i}
                        style={{
                            display: "inline-block",
                            opacity: visibility,
                            scale: 0.5 + visibility * 0.5,
                            y: `${(1 - visibility) * 0.4}em`,
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </>
    );
};

const CollapsingAcronym = ({
    scrollYProgress,
    endY = END_Y_EM,
    endX = END_X_SWAP_EM,
}: {
    scrollYProgress: MotionValue<number>;
    endY?: { R: number; C: number };
    endX?: { R: number; C: number };
}) => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const [headerScale, setHeaderScale] = useState(0.1);
    const [startScale, setStartScale] = useState(1.2);
    useLayoutEffect(() => {
        const measureAndSetScales = () => {
            if (textRef.current && typeof window !== "undefined") {
                const initialHeight = textRef.current.offsetHeight;
                if (initialHeight > 0) {
                    const calculatedHeaderScale = FINAL_HEADER_FONT_SIZE_PX / initialHeight;
                    setHeaderScale(calculatedHeaderScale);
                }
                const initialWidth = textRef.current.offsetWidth;
                const windowWidth = window.innerWidth;
                const TARGET_WIDTH_PERCENT = 0.9;
                if (initialWidth > 0) {
                    const calculatedStartScale = (windowWidth * TARGET_WIDTH_PERCENT) / initialWidth;
                    setStartScale(Math.min(calculatedStartScale, 1.5));
                }
            }
        };
        measureAndSetScales();
        window.addEventListener("resize", measureAndSetScales);
        return () => window.removeEventListener("resize", measureAndSetScales);
    }, []);

    const trimT = useTransform(scrollYProgress, [0, MERGE_AT], [0, 1]);
    const gap = useTransform(trimT, [0, 0.5, 1], ["3.2vw", "1vw", "-1vw"]);

    const yRodrigo = useTransform(scrollYProgress, [MERGE_AT, DOCK_START], ["0em", `${endY.R}em`]);
    const yCariello = useTransform(scrollYProgress, [MERGE_AT, DOCK_START], ["0em", `${endY.C}em`]);
    const xRodrigo = useTransform(scrollYProgress, [MERGE_AT, DOCK_START], ["0em", `${endX.R}em`]);
    const xCariello = useTransform(scrollYProgress, [MERGE_AT, DOCK_START], ["0em", `${endX.C}em`]);

    const scale = useTransform(scrollYProgress, [0, MERGE_AT], [startScale, headerScale]);

    return (
        <motion.div style={{ scale }}>
            <motion.div
                ref={textRef}
                aria-live="polite"
                className="flex items-baseline px-4 text-center font-rubik italic text-[10vw] font-bold leading-none md:text-[8vw]"
                style={{ gap }}
            >
                <span>
                    <DisappearingWord
                        word="RODRIGO"
                        progress={trimT}
                        y={yRodrigo}
                        x={xCariello}
                    />
                </span>
                <span>
                    <DisappearingWord
                        word="CARIELLO"
                        progress={trimT}
                        y={yCariello}
                        x={xRodrigo}
                    />
                </span>
            </motion.div>
        </motion.div>
    );
};

const Home: NextPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) return;
        const t = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(t);
    }, [loading]);

    const heroRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

    const brandSlotRef = useRef<HTMLDivElement | null>(null);
    const [dockX, setDockX] = useState(0);
    const [dockY, setDockY] = useState(0);
    const [topCenterY, setTopCenterY] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const el = brandSlotRef.current;
            if (!el || typeof window === "undefined") return;
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            setDockX(cx - window.innerWidth / 2);
            setDockY(cy - window.innerHeight / 2);
            setTopCenterY(TOP_CENTER_Y_RATIO * window.innerHeight);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const [isHeroAnimationComplete, setIsHeroAnimationComplete] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsHeroAnimationComplete(latest >= DOCK_END);
    });
    const overlayY = useTransform(
        scrollYProgress,
        [0, MERGE_AT, DOCK_START, DOCK_END],
        [0, topCenterY, dockY, dockY]
    );

    const overlayX = useTransform(scrollYProgress, [0, DOCK_START, DOCK_END], [0, 0, dockX]);

    const headerOpacity = useTransform(scrollYProgress, [DOCK_START, DOCK_END], [0, 1]);
    const headerClip = useTransform(
        scrollYProgress,
        [DOCK_START, DOCK_END],
        ["inset(0% 50% 0% 50% round 16px)", "inset(0% 0% 0% 0% round 16px)"]
    );

    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsHeaderVisible(latest >= DOCK_END);
    });


    const navOpacity = useTransform(scrollYProgress, [DOCK_START + 0.06, DOCK_END], [0, 1]);
    const navY = useTransform(scrollYProgress, [DOCK_START + 0.06, DOCK_END], [8, 0]);

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const midY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
    const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

    return (
        <MainLayout>
            <GrowingCircleDiv></GrowingCircleDiv>

            {/* <Header></Header> Vai ser utilizado na 3d view */}
            <HotBar opacityValue={navOpacity}></HotBar>

            {/* header de verdade */}
            <motion.div
                style={{ opacity: headerOpacity }}
                className="fixed top-3 inset-x-0 z-50 pointer-events-none"
            >
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex items-center rounded-2xl border dark:border-white/10 dark:bg-white/5 border-slate-400/5 bg-slate-500/10 h-10 pointer-events-auto">
                        <div className="relative h-6 w-16" />

                        <nav className="flex w-full h-full justify-end p-3 items-center">
                            <LanguageDropdown />
                            <ToggleColorMode />
                        </nav>
                    </div>
                </div>
            </motion.div>

            {/*header de animação */}
            <div className="relative min-h-screen overflow-x-clip dark:bg-dark-mode dark:text-white top-0">
                <div className="top-3 fixed inset-0 z-40 pointer-events-none">
                    <motion.div className="absolute inset-x-0 top-0" style={{ opacity: headerOpacity }}>
                        <div className="mx-auto max-w-7xl px-4">
                            <motion.div
                                style={{ clipPath: headerClip }}
                                className="flex rounded-2xl border dark:border-white/10 dark:bg-white/5 border-slate-400/5 bg-slate-500/10 h-10 backdrop-blur-xl"
                            >
                                <div ref={brandSlotRef} className="relative h-6 w-16" />
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 grid place-items-center"
                        style={{ x: overlayX, y: overlayY, transformOrigin: "center" }}
                    >
                        <CollapsingAcronym
                            scrollYProgress={scrollYProgress}
                            endY={END_Y_EM}
                            endX={END_X_SWAP_EM}
                        />
                    </motion.div>
                </div>

                <section ref={heroRef} className="relative h-[200vh]">
                    <div className="sticky top-0 h-screen">
                        <motion.div style={{ y: bgY }} className=" absolute inset-0 -z-10" aria-hidden>
                            <div className="absolute inset-0 
                            dark:bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.12),transparent_70%)]
                             bg-[radial-gradient(80%_60%_at_50%_40%,rgba(0,0,0,0),transparent_70%)]"/>
                            <div className="absolute -inset-[20%] dark:opacity-30 opacity-45
                            dark:[background:conic-gradient(from_200deg_at_50%_50%,#22d3ee,transparent_10%,#a78bfa_60%,transparent_70%)]
                            [background:conic-gradient(from_200deg_at_50%_50%,#1c0e33,transparent_10%,#a54359_30%,transparent_70%)] 
                            dark:blur-3xl blur-xl"  />
                        </motion.div>

                        <motion.div style={{ y: midY }} className="absolute inset-0 grid place-items-center">
                            <div className="h-[46vh] w-[46vh] rounded-full bg-white/10 blur-2xl" />
                        </motion.div>

                        <motion.div style={{ y: fgY }} className="relative z-10 h-full" />

                        <motion.div
                            className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center"
                            style={{ opacity: useTransform(scrollYProgress, [0, DOCK_START - 0.02, DOCK_START], [1, 1, 0]) }}
                        >
                            <motion.div
                                initial={{ y: 0, opacity: 0.7 }}
                                animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                                className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/70 backdrop-blur"
                            >
                                Don't forget to scroll!
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <main className="relative z-0 mx-auto max-w-6xl space-y-24 px-4 pb-32">
                    <Introduction></Introduction>
                    <Section {...ResumeCardData}></Section>
                    <Section {...ExperienceData}></Section>
                </main>

                <AnimatePresence>
                    {loading && (
                        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-dark-mode">
                            <div className="font-wave text-2xl">Loading…</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </MainLayout>
    );
};
export default Home;