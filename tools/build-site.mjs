import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const outDir = process.cwd();

const site = {
  name: "Hufeng Zhou, PhD",
  shortName: "Hufeng Zhou",
  role: "Computational biologist and statistical geneticist",
  affiliation:
    "Research Scientist, Harvard T.H. Chan School of Public Health; former Instructor, Harvard Medical School and Brigham and Women's Hospital",
  email: "hufengzhou@g.harvard.edu",
  phone: "+1-617-903-8599",
  office: "677 Huntington Ave, Boston, MA 02115",
  cv: "HZHOU-CV-Jan24th2026.docx",
  portrait: "img/hufeng-zhou-portrait.jpg",
  github: "https://github.com/zhouhufeng",
  scholar: "https://scholar.google.com/citations?user=Ddw_B4EAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0001-9382-5674",
  pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=0000-0001-9382-5674"
};

const nav = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Publications", href: "publications.html" },
  {
    label: "Research",
    href: "projects.html",
    groups: [
      {
        label: "Population genetics",
        links: [
          { label: "Overview", href: "Population_Genetics.html" },
          { label: "FAVOR", href: "FAVOR.html" },
          { label: "STAAR", href: "STAAR.html" }
        ]
      },
      {
        label: "Epigenomics",
        links: [
          { label: "Overview", href: "Epigenomics.html" },
          { label: "EBV oncoproteins", href: "EBV_Oncoproteins.html" },
          { label: "Super enhancers", href: "EBV_Super_Enhancers.html" },
          { label: "EBV regulome", href: "EBV_Regulome.html" }
        ]
      },
      {
        label: "Protein interactions",
        links: [
          { label: "Overview", href: "PPIs.html" },
          { label: "Intra-species PPIs", href: "IntraPPIs.html" },
          { label: "Host-pathogen PPIs", href: "Host-Pathogen-PPIs.html" },
          { label: "Protein functions", href: "Protein-functions.html" }
        ]
      },
      {
        label: "AI and translation",
        links: [{ label: "AI genomics and pathology", href: "AI_Genomics.html" }]
      }
    ]
  },
  { label: "Software", href: "Software.html" },
  { label: "Contact", href: "contact.html" }
];

const publications = [
  {
    year: 2026,
    title:
      "Scalable and accurate rare-variant association tests for whole genome sequencing time-to-event analysis in large biobanks.",
    authors: "Song S, Li X, Zhou H, Li Z, Lin X.",
    venue: "Proc Natl Acad Sci U S A. 2026;123(9):e2525288123.",
    doi: "10.1073/pnas.2525288123",
    pmid: "41758668",
    highlight: true
  },
  {
    year: 2026,
    title:
      "Comparison of variant callers using 60,532 multi-ancestry whole genome sequences.",
    authors:
      "Zhou H, Li Z, Shyr D, Li X, Yang H, Dey R, Tang Y, Maier R, Boerwinkle E, Buyske S, Daly M, Felsenfeld A, Gibbs RA, Gupta N, Hall IM, Matise T, Metcalf GA, Smith A, Reeves C, Sofia HJ, Stitziel NO, Zody MC, NHGRI Genome Sequencing Program Consortium, Neale B, Lin X.",
    venue: "Brief Bioinform. 2026;27(2).",
    doi: "10.1093/bib/bbag130",
    pmid: "41894165",
    highlight: true
  },
  {
    year: 2026,
    title: "A multi-ancestry genetic reference for the Quebec population.",
    authors:
      "McClelland P, Femerling G, Laflamme R, Mejia-Garcia A, Sayahian Dehkordi M, Xiao H, Diaz-Papkovich A, Pelletier J, Grenier JC, Lo KS, Anderson-Trocme L, Bellavance J, Chapdelaine V, Gagnon G, De Mori A, Martinez G, Mohler K, de Malliard T, Labbe C, Labrecque M, Montpetit A, Spiegelman D, Rouleau GA, Theroux JF, Zhou H, Girard SL, Hussin JG, Laberge AM, Bherer C, Tetreault M, Gagliano Taliun SA, Taliun D, Gravel S, Lettre G.",
    venue: "Nat Commun. 2026;17(1):1319.",
    doi: "10.1038/s41467-026-68820-7",
    pmid: "41634041"
  },
  {
    year: 2026,
    title:
      "cellSTAAR: incorporating single-cell-sequencing-based functional data to boost power in rare variant association testing of noncoding regions.",
    authors:
      "Van Buren E, Zhang Y, Li X, Selvaraj MS, Li Z, Zhou H, Palmer ND, Arnett DK, Blangero J, Boerwinkle E, Cade BE, Carlson JC, Carson AP, Chen YI, Curran J, Duggirala R, Fornage M, Franceschini N, Graff M, Gu C, Guo X, He J, Heard-Cosa N, Hou L, Hung YJ, Kalyani RR, Kardia SLR, Kenny E, Kooperberg C, Kral BG, Lange L, Levy D, Li C, Liu S, Lloyd-Jones D, Loos RJF, Manichaikul AW, Martin LW, Mathias R, Minster RL, Mitchell BD, Mychaleckyj JC, Naseri T, North K, O'Connell J, Perry JA, Peyser PA, Psaty BM, Raffield LM, Vasan RS, Redline S, Reiner AP, Rich SS, Smith JA, Spitzer B, Tang H, Taylor KD, Tracy R, Viali S, Yanek L, Zhao W, NHLBI TOPMed Consortium, Rotter JI, Peloso GM, Natarajan P, Lin X.",
    venue: "Nat Methods. 2026;23(2):338-349.",
    doi: "10.1038/s41592-025-02919-5",
    pmid: "41476111",
    highlight: true
  },
  {
    year: 2026,
    title:
      "FAVOR 2.0: A reengineered functional annotation of variants online resource for interpreting genomic variation.",
    authors:
      "Zhou H, Verma V, Li X, Li Z, Shedd N, Li TC, Yang H, Zhang A, Borsari B, Buyske S, Gerstein M, Matise T, Zody MC, Neale B, Weng Z, Sunyaev SR, Lin X.",
    venue: "Nucleic Acids Res. 2026;54(D1):D1405-D1414.",
    doi: "10.1093/nar/gkaf1217",
    pmid: "41335103",
    highlight: true
  },
  {
    year: 2025,
    title:
      "Genome-wide association study of early-stage non-small cell lung cancer prognosis: a pooled analysis in the International Lung Cancer Consortium.",
    authors:
      "Dong M, Thakral A, Byrne KS, Bosse Y, Zhou H, Zhang Y, Atkins J, Haycock P, Brown MC, Murison K, Timens W, Sin DD, Kothari J, Gabriel AAG, Zaridze D, Savic M, Lissowska J, Swiatkowska B, Janout V, Holcatova I, Mukeria A, Fernandez-Tardon G, Davies MPA, Triplette M, Schabath MB, Andrew AS, Chen C, Taylor F, Field JK, Tardon A, Shete SS, Brennan P, Landi MT, McKay J, Amos CI, Lin X, Christiani DC, Hung RJ, Liu G, Xu W.",
    venue: "Carcinogenesis. 2025;46(2):bgaf031.",
    doi: "10.1093/carcin/bgaf031",
    pmid: "40746155"
  },
  {
    year: 2025,
    title:
      "A statistical framework for multi-trait rare variant analysis in large-scale whole-genome sequencing studies.",
    authors:
      "Li X, Chen H, Selvaraj MS, Van Buren E, Zhou H, Wang Y, Sun R, McCaw ZR, Yu Z, Jiang MZ, DiCorpo D, Gaynor SM, Dey R, Arnett DK, Benjamin EJ, Bis JC, Blangero J, Boerwinkle E, Bowden DW, Brody JA, Cade BE, Carson AP, Carlson JC, Chami N, Chen YI, Curran JE, de Vries PS, Fornage M, Franceschini N, Freedman BI, Gu C, Heard-Costa NL, He J, Hou L, Hung YJ, Irvin MR, Kaplan RC, Kardia SLR, Kelly TN, Konigsberg I, Kooperberg C, Kral BG, Li C, Li Y, Lin H, Liu CT, Loos RJF, Mahaney MC, Martin LW, Mathias RA, Mitchell BD, Montasser ME, Morrison AC, Naseri T, North KE, Palmer ND, Peyser PA, Psaty BM, Redline S, Reiner AP, Rich SS, Sitlani CM, Smith JA, Taylor KD, Tiwari HK, Vasan RS, Viali S, Wang Z, Wessel J, Yanek LR, Yu B, NHLBI TOPMed Consortium, Dupuis J, Meigs JB, Auer PL, Raffield LM, Manning AK, Rice KM, Rotter JI, Peloso GM, Natarajan P, Li Z, Liu Z, Lin X.",
    venue: "Nat Comput Sci. 2025;5(2):125-143.",
    doi: "10.1038/s43588-024-00764-8",
    pmid: "39920506",
    highlight: true
  },
  {
    year: 2024,
    title: "Deciphering the impact of genomic variation on function.",
    authors: "IGVF Consortium.",
    venue: "Nature. 2024;633(8028):47-57.",
    doi: "10.1038/s41586-024-07510-0",
    pmid: "39232149"
  },
  {
    year: 2024,
    title:
      "Whole-genome sequencing in 333,100 individuals reveals rare non-coding single variant and aggregate associations with height.",
    authors:
      "Hawkes G, Beaumont RN, Li Z, Mandla R, Li X, Albert CM, Arnett DK, Ashley-Koch AE, Ashrani AA, Barnes KC, Boerwinkle E, Brody JA, Carson AP, Chami N, Chen YI, Chung MK, Curran JE, Darbar D, Ellinor PT, Fornage M, Gordeuk VR, Guo X, He J, Hwu CM, Kalyani RR, Kaplan R, Kardia SLR, Kooperberg C, Loos RJF, Lubitz SA, Minster RL, Naseri T, Viali S, Mitchell BD, Murabito JM, Palmer ND, Psaty BM, Redline S, Shoemaker MB, Silverman EK, Telen MJ, Weiss ST, Yanek LR, Zhou H, NHLBI TOPMed Consortium, Liu CT, North KE, Justice AE, Locke JM, Owens N, Murray A, Patel K, Frayling TM, Wright CF, Wood AR, Lin X, Manning A, Weedon MN.",
    venue: "Nat Commun. 2024;15(1):8549.",
    doi: "10.1038/s41467-024-52579-w",
    pmid: "39362880"
  },
  {
    year: 2024,
    title:
      "FAVOR-GPT: a generative natural language interface to whole genome variant functional annotations.",
    authors:
      "Li TC, Zhou H, Verma V, Tang X, Shao Y, Van Buren E, Weng Z, Gerstein M, Neale B, Sunyaev SR, Lin X.",
    venue: "Bioinform Adv. 2024;4(1):vbae143.",
    doi: "10.1093/bioadv/vbae143",
    pmid: "39387060",
    highlight: true
  },
  {
    year: 2024,
    title:
      "Repurposing Type I-A CRISPR-Cas3 for a robust diagnosis of human papillomavirus (HPV).",
    authors: "Hu T, Ji Q, Ke X, Zhou H, Zhang S, Ma S, Yu C, Ju W, Lu M, Lin Y, Ou Y, Zhou Y, Xiao Y, Xu C, Hu C.",
    venue: "Commun Biol. 2024;7(1):858.",
    doi: "10.1038/s42003-024-06537-3",
    pmid: "39003402"
  },
  {
    year: 2023,
    title:
      "FAVOR: functional annotation of variants online resource and annotator for variation across the human genome.",
    authors:
      "Zhou H, Arapoglou T, Li X, Li Z, Zheng X, Moore J, Asok A, Kumar S, Blue EE, Buyske S, Cox N, Felsenfeld A, Gerstein M, Kenny E, Li B, Matise T, Philippakis A, Rehm HL, Sofia HJ, Snyder G, Weng Z, Neale B, Sunyaev SR, Lin X.",
    venue: "Nucleic Acids Res. 2023;51(D1):D1300-D1311.",
    doi: "10.1093/nar/gkac966",
    pmid: "36350676",
    highlight: true
  },
  {
    year: 2023,
    title:
      "Powerful, scalable and resource-efficient meta-analysis of rare variant associations in large whole genome sequencing studies.",
    authors: "Li X, Quick C, Zhou H, Gaynor SM, Liu Y, Chen H, Selvaraj MS, Sun R, Dey R, Arnett DK, Bielak LF, Bis JC, Blangero J, Boerwinkle E, Bowden DW, Brody JA, Cade BE, Correa A, Cupples LA, Curran JE, de Vries PS, Duggirala R, Freedman BI, Goring HH, Guo X, Haessler J, Kalyani RR, Kooperberg C, Kral BG, Lange LA, Manichaikul A, Martin LW, McGarvey ST, Mitchell BD, Montasser ME, Morrison AC, Naseri T, O'Connell JR, Palmer ND, Peyser PA, Psaty BM, Raffield LM, Redline S, Reiner AP, Reupena MS, Rice KM, Rich SS, Sitlani CM, Smith JA, Taylor KD, Vasan RS, Willer CJ, Wilson JG, Yanek LR, Zhao W, TOPMed Consortium, Rotter JI, Natarajan P, Peloso GM, Li Z, Lin X.",
    venue: "Nat Genet. 2023;55(1):154-164.",
    doi: "10.1038/s41588-022-01225-6",
    pmid: "36564505",
    highlight: true
  },
  {
    year: 2022,
    title:
      "A framework for detecting noncoding rare-variant associations of large-scale whole-genome sequencing studies.",
    authors:
      "Li Z, Li X, Zhou H, Gaynor SM, Selvaraj MS, Arapoglou T, Quick C, Liu Y, Chen H, Sun R, Dey R, Arnett DK, Auer PL, Bielak LF, Bis JC, Blackwell T, Blangero J, Boerwinkle E, Bowden DW, Brody JA, Cade BE, Conomos MP, Correa A, Cupples LA, Curran JE, de Vries PS, Duggirala R, Franceschini N, Freedman BI, Goring HH, Guo X, Kalyani RR, Kooperberg C, Kral BG, Lange L, Lin B, Manichaikul A, Manning A, Martin LW, Mathias R, Meigs JB, Mitchell BD, Montasser ME, Morrison AC, Naseri T, O'Connell J, Palmer ND, Peyser PA, Psaty BM, Raffield LM, Redline S, Reiner AP, Reupena MS, Rice KM, Rich S, Smith J, Taylor KD, Taub M, Vasan RS, Weeks D, Wilson J, Yanek L, Zhao W, TOPMed Group, Rotter J, Willer C, Natarajan P, Peloso G, Lin X.",
    venue: "Nat Methods. 2022;19:1599-1611.",
    doi: "10.1038/s41592-022-01640-x",
    highlight: true
  },
  {
    year: 2022,
    title:
      "A multi-dimensional integrative scoring framework for predicting functional variants in the human genome.",
    authors: "Li X, Yung G, Zhou H, Sun R, Li Z, Hou K, Zhang MJ, Liu Y, Arapoglou T, Wang C, Ionita-Laza I, Lin X.",
    venue: "Am J Hum Genet. 2022;109(3):446-456."
  },
  {
    year: 2022,
    title:
      "AFA: ancestry-specific allele frequency estimation in admixed populations: the Hispanic Community Health Study/Study of Latinos.",
    authors: "Granot-Hershkovitz E, Sun Q, Argos M, Zhou H, Lin X, Browning SR, Sofer T.",
    venue: "Hum Genet Genom Adv. 2022;3(2):100096."
  },
  {
    year: 2022,
    title:
      "Assessing the contribution of rare variants to complex trait heritability from whole-genome sequence data.",
    authors: "Wainschtein P, Jain D, Zheng Z, Cupples LA, Shadyab AH, McKnight B, Shoemaker BM, Mitchell BD, Psaty BM, Kooperberg C, Liu CT, et al.",
    venue: "Nat Genet. 2022;54(3):263-273."
  },
  {
    year: 2022,
    title:
      "Upregulated heme biosynthesis increases obstructive sleep apnea severity: a pathway-based Mendelian randomization study.",
    authors: "Wang H, Kurniansyah N, Cade BE, Goodman MO, Chen H, Gottlieb DJ, Gharib SA, Purcell SM, Lin X, Saxena R, Zhu X.",
    venue: "Sci Rep. 2022;12(1):1-11."
  },
  {
    year: 2021,
    title:
      "Integration of multiomic annotation data to prioritize and characterize inflammation and immune-related risk variants in squamous cell lung cancer.",
    authors: "Sun R, Xu M, Li X, Gaynor S, Zhou H, Li Z, Bosse Y, Lam S, Tsao MS, Tardon A, Chen C.",
    venue: "Genet Epidemiol. 2021;45(1):99-114."
  },
  {
    year: 2021,
    title:
      "Whole-genome association analyses of sleep-disordered breathing phenotypes in the NHLBI TOPMed program.",
    authors: "Cade BE, Lee J, Sofer T, Wang H, Zhang M, Chen H, Gharib SA, Gottlieb DJ, Guo X, Lane JM, Liang J, et al.",
    venue: "Genome Med. 2021;13(1):1-17."
  },
  {
    year: 2020,
    title:
      "Dynamic incorporation of multiple in silico functional annotations empowers rare variant association analysis of large whole-genome sequencing studies at scale.",
    authors:
      "Li X, Li Z, Zhou H, Gaynor SM, Liu Y, Chen H, Sun R, Dey R, Arnett DK, Aslibekyan S, Ballantyne CM, Bielak LF, Blangero J, Boerwinkle E, Bowden DW, Broome JG, Conomos MP, Correa A, Cupples LA, Curran JE, Freedman BI, Guo X, Hindy G, Irvin MR, Kardia SLR, Kathiresan S, Khan AT, Kooperberg CL, Laurie CC, Liu XS, Mahaney MC, Manichaikul AW, Martin LW, Mathias RA, McGarvey ST, Mitchell BD, Montasser ME, Moore J, Morrison AC, O'Connell JR, Palmer ND, Pampana A, Peralta JM, Peyser PA, Psaty BM, Redline S, Rice KM, Rich SS, Smith JA, Tiwari HK, Tsai MY, Vasan RS, Wang FF, Weeks DE, Weng Z, Wilson JG, Yanek LR, TOPMed Consortium, Neale BM, Sunyaev SR, Abecasis GR, Rotter JI, Willer CJ, Peloso GM, Natarajan P, Lin X.",
    venue: "Nat Genet. 2020;52(9):969-983.",
    highlight: true
  },
  {
    year: 2020,
    title:
      "Epstein-Barr virus episome physically interacts with active regions of the host genome in lymphoblastoid cells.",
    authors: "Wang L, Laing J, Yan B, Zhou H, Ke L, Wang C, Narita Y, Zhang Z, Olson MR, Afzali B, Zhao B.",
    venue: "J Virol. 2020;94(24):e01390-20."
  },
  {
    year: 2020,
    title:
      "De novo mutations across 1,465 diverse genomes reveal mutational insights and reductions in the Amish founder population.",
    authors: "Kessler MD, Loesch DP, Perry JA, Heard-Costa NL, Taliun D, Cade BE, Wang H, Daya M, Ziniti J, Datta S, Celedon JC, et al.",
    venue: "Proc Natl Acad Sci U S A. 2020;117(5):2560-2569."
  },
  {
    year: 2019,
    title:
      "Dynamic scan procedure for detecting rare-variant association regions in whole-genome sequencing studies.",
    authors: "Li Z, Li X, Liu Y, Shen J, Chen H, Zhou H, Morrison AC, Boerwinkle E, Lin X.",
    venue: "Am J Hum Genet. 2019;104(5):802-814."
  },
  {
    year: 2018,
    title:
      "Epstein-Barr Virus Nuclear Antigen Leader Protein coactivates EP300.",
    authors: "Wang C, Zhou H*, Xue Y, Liang J, Narita Y, Gerdt C, Zheng AY, Jiang R, Trudeau S, Peng CW, Gewurz BE.",
    venue: "J Virol. 2018;92(9):e02155-17.",
    highlight: true
  },
  {
    year: 2018,
    title:
      "Haemophilus parasuis infection disrupts adherens junctions and initializes EMT dependent on canonical Wnt/beta-catenin signaling pathway.",
    authors: "Hua K, Li Y, Zhou H, Hu X, Chen Y, He R, Luo R, Zhou R, Bi D, Jin H.",
    venue: "Front Cell Infect Microbiol. 2018;8:324."
  },
  {
    year: 2018,
    title:
      "Haemophilus parasuis infection activates NOD1/2-RIP2 signaling pathway in PK-15 cells.",
    authors: "Ma B, Hua K, Zhou S, Zhou H, Chen Y, Luo R, Bi D, Zhou R, He Q, Jin H.",
    venue: "Dev Comp Immunol. 2018;79:158-165."
  },
  {
    year: 2017,
    title: "The Epstein-Barr virus regulome in lymphoblastoid cells.",
    authors: "Jiang S, Zhou H*, Liang J, Gerdt C, Wang C, Ke L, Schmidt SC, Narita Y, Ma Y, Wang S, Colson T.",
    venue: "Cell Host Microbe. 2017;22(4):561-573.",
    highlight: true
  },
  {
    year: 2017,
    title:
      "Nasopharyngeal carcinoma super-enhancer-driven ETV6 correlates with prognosis.",
    authors: "Ke L, Zhou H, Wang C, Xiong G, Xiang Y, Ling Y, Khabir A, Tsao GS, Zeng Y, Zeng M, Busson P.",
    venue: "Proc Natl Acad Sci U S A. 2017;114(36):9683-9688."
  },
  {
    year: 2017,
    title:
      "Identification of a nucleoside analog active against adenosine kinase-expressing plasma cell malignancies.",
    authors: "Nayar U, Sadek J, Reichel J, Hernandez-Hopkins D, Akar G, Barelli PJ, Sahai MA, Zhou H, Totonchy J, Jayabalan D, Niesvizky R.",
    venue: "J Clin Invest. 2017;127(6):2066-2080."
  },
  {
    year: 2017,
    title:
      "Mouse model of Epstein-Barr virus LMP1- and LMP2A-driven germinal center B-cell lymphoproliferative disease.",
    authors: "Minamitani T, Ma Y, Zhou H, Kida H, Tsai CY, Obana M, Okuzaki D, Fujio Y, Kumanogoh A, Zhao B, Kikutani H.",
    venue: "Proc Natl Acad Sci U S A. 2017;114(18):4751-4756."
  },
  {
    year: 2016,
    title:
      "Epstein-Barr virus super-enhancer eRNAs are essential for MYC oncogene expression and lymphoblast proliferation.",
    authors: "Liang J, Zhou H, Gerdt C, Tan M, Colson T, Kaye KM, Kieff E, Zhao B.",
    venue: "Proc Natl Acad Sci U S A. 2016;113(49):14121-14126."
  },
  {
    year: 2015,
    title:
      "Epstein-Barr virus oncoprotein super-enhancers control B cell growth.",
    authors:
      "Zhou H, Schmidt SC, Jiang S, Willox B, Bernhardt K, Liang J, Johannsen EC, Kharchenko P, Gewurz BE, Kieff E, Zhao B.",
    venue: "Cell Host Microbe. 2015;17(2):205-216.",
    doi: "10.1016/j.chom.2014.12.013",
    pmid: "25639793",
    highlight: true
  },
  {
    year: 2015,
    title:
      "Evasion of affinity-based selection in germinal centers by Epstein-Barr virus LMP2A.",
    authors: "Minamitani T, Yasui T, Ma Y, Zhou H, Okuzaki D, Tsai CY, Sakakibara S, Gewurz BE, Kieff E, Kikutani H.",
    venue: "Proc Natl Acad Sci U S A. 2015;112(37):11612-11617."
  },
  {
    year: 2015,
    title:
      "The association between indwelling arterial catheters and mortality in hemodynamically stable patients with respiratory failure: a propensity score analysis.",
    authors: "Hsu DJ, Feng M, Kothari R, Zhou H, Chen KP, Celi LA.",
    venue: "Chest. 2015;148(6):1470-1476."
  },
  {
    year: 2015,
    title:
      "TRAF1 coordinates polyubiquitin signaling to enhance Epstein-Barr Virus LMP1-mediated growth and survival pathway activation.",
    authors: "Greenfeld H, Takasaki K, Walsh MJ, Ersing I, Bernhardt K, Ma Y, Fu B, Ashbaugh CW, Cabo J, Mollo SB, Zhou H, Li S, Gewurz BE.",
    venue: "PLoS Pathog. 2015;11(5):e1004890."
  },
  {
    year: 2015,
    title:
      "Epstein-Barr virus nuclear antigen 3A partially coincides with EBNA3C genome-wide and is tethered to DNA through BATF complexes.",
    authors: "Schmidt SC, Jiang S, Zhou H, Willox B, Holthaus AM, Kharchenko PV, Johannsen EC, Kieff E, Zhao B.",
    venue: "Proc Natl Acad Sci U S A. 2015;112(2):554-559."
  },
  {
    year: 2014,
    title: "The NF-kappaB genomic landscape in lymphoblastoid B cells.",
    authors: "Zhao B, Barrera LA, Ersing I, Willox B, Schmidt SC, Greenfeld H, Zhou H, Mollo SB, Shi TT, Takasaki K, Jiang S, Cahir-McFarland E, Kellis M, Bulyk ML, Kieff E, Gewurz BE.",
    venue: "Cell Rep. 2014;8(5):1595-1606."
  },
  {
    year: 2014,
    title:
      "Epstein-Barr virus infection in Chinese children: a retrospective study of age-specific prevalence.",
    authors: "Xiong G, Zhang B, Huang MY, Zhou H, Chen LZ, Feng QS, Luo X, Lin HJ, Zeng YX.",
    venue: "PLoS One. 2014;9(6):e99857."
  },
  {
    year: 2014,
    title:
      "Stringent homology-based prediction of H. sapiens-M. tuberculosis H37Rv protein-protein interactions.",
    authors: "Zhou H, Gao S, Nguyen NN, Fan M, Jin J, Liu B, Zhao L, Xiong G, Tan M, Li S, Wong L.",
    venue: "Biol Direct. 2014;9:5.",
    doi: "10.1186/1745-6150-9-5",
    highlight: true
  },
  {
    year: 2014,
    title:
      "Epstein-Barr virus nuclear antigen 3C binds to BATF/IRF4 or SPI1/IRF4 composite sites and recruits Sin3A to repress CDKN2A.",
    authors: "Jiang S, Willox B, Zhou H, Holthaus AM, Wang A, Shi TT, Maruo S, Kharchenko PV, Johannsen EC, Kieff E, Zhao B.",
    venue: "Proc Natl Acad Sci U S A. 2014;111(1):421-426."
  },
  {
    year: 2014,
    title: "LipidGO: database for lipid-related GO terms and applications.",
    authors: "Fan M, Low HS, Zhou H, Wenk MR, Wong L.",
    venue: "Bioinformatics. 2014;30(7):1043-1044."
  },
  {
    year: 2013,
    title:
      "Epstein-Barr virus nuclear antigen leader protein localizes to promoters and enhancers with cell transcription factors and EBNA2.",
    authors:
      "Portal D*, Zhou H*, Zhao B, Kharchenko PV, Lowry E, Wong L, Quackenbush J, Holloway D, Jiang S, Lu Y, Kieff E.",
    venue: "Proc Natl Acad Sci U S A. 2013;110(46):18537-18542.",
    doi: "10.1073/pnas.1317608110",
    pmid: "24167291",
    highlight: true
  },
  {
    year: 2013,
    title: "Progress in computational studies of host-pathogen interactions.",
    authors: "Zhou H, Jin J, Wong L.",
    venue: "J Bioinform Comput Biol. 2013;11(2):1230001."
  },
  {
    year: 2012,
    title:
      "IntPath: an integrated pathway gene relationship database for model organisms and important pathogens.",
    authors: "Zhou H, Jin J, Zhang H, Yi B, Wozniak M, Wong L.",
    venue: "BMC Syst Biol. 2012;6 Suppl 2:S2.",
    doi: "10.1186/1752-0509-6-S2-S2"
  },
  {
    year: 2011,
    title:
      "Comparative analysis and assessment of M. tuberculosis H37Rv protein-protein interaction datasets.",
    authors: "Zhou H, Wong L.",
    venue: "BMC Genomics. 2011;12 Suppl 3:S20."
  },
  {
    year: 2009,
    title:
      "Transcriptional responses of Haemophilus parasuis to iron-restriction stress in vitro.",
    authors: "Xie Q, Jin H, Luo R, Wan Y, Chu J, Zhou H, Shi B, Chen H, Zhou R.",
    venue: "Biometals. 2009;22(6):907-916."
  }
];

const researchAreas = [
  {
    title: "Population genetics and rare variants",
    href: "Population_Genetics.html",
    image: "img/STAARpipe.png",
    summary:
      "Scalable methods for large whole-genome sequencing studies, with emphasis on rare-variant association testing, noncoding regions, multi-trait analysis, time-to-event outcomes, and biobank-scale inference."
  },
  {
    title: "Variant annotation infrastructure",
    href: "FAVOR.html",
    image: "img/FAVOR.png",
    summary:
      "FAVOR, FAVOR 2.0, FAVORannotator, and FAVOR-GPT translate genome-wide functional annotation into searchable resources and analysis-ready formats for human genetics."
  },
  {
    title: "EBV epigenomics and gene regulation",
    href: "Epigenomics.html",
    image: "img/portfolio/EBVregulome.png",
    summary:
      "Integrative genomic studies of Epstein-Barr virus transcriptional regulation, super-enhancers, enhancer RNAs, viral oncoproteins, and host chromatin architecture."
  },
  {
    title: "AI agents, genomics, and digital pathology",
    href: "AI_Genomics.html",
    image: "img/STAARpipe2.png",
    summary:
      "Local, auditable AI agents plus machine-learning and deep-learning systems for variant interpretation, multi-omic integration, WGS quality control, and H&E pathology risk modeling."
  },
  {
    title: "Host-pathogen computational biology",
    href: "PPIs.html",
    image: "img/portfolio/Homology.png",
    summary:
      "Computational approaches for protein-protein interaction prediction, pathway data integration, microbial systems biology, and molecular diagnostic collaborations."
  },
  {
    title: "Scientific software and reproducible pipelines",
    href: "Software.html",
    image: "img/wgsagent.svg",
    summary:
      "Open software, AI agents, data resources, and analysis pipelines that turn statistical methods into practical tools for large consortia and biomedical collaborators."
  }
];

const software = [
  {
    title: "IGVFagent",
    href: "AI_Genomics.html",
    image: "img/igvfagent.svg",
    summary:
      "A local, auditable AI agent for discovering, retrieving, and analyzing data from the IGVF Portal, Catalog, Knowledge Graph, ENCODE, FAVOR, and related public resources."
  },
  {
    title: "FAVOR",
    href: "FAVOR.html",
    image: "img/portfolio/FAVORannotator.png",
    summary:
      "Functional Annotation of Variants Online Resource, including FAVOR 2.0, FAVORannotator, and FAVOR-GPT for genome-wide variant annotation, search, batch analysis, and interpretation."
  },
  {
    title: "STAAR",
    href: "https://github.com/li-lab-genetics/STAAR",
    image: "img/STAAR.png",
    summary:
      "Annotation-informed rare-variant association testing for whole-genome sequencing studies."
  },
  {
    title: "STAARpipeline",
    href: "https://github.com/xihaoli/STAARpipeline",
    image: "img/STAARpipe.png",
    summary:
      "A scalable pipeline for coding, noncoding, gene-centric, and region-based rare-variant association analysis."
  },
  {
    title: "WGSagent",
    href: "AI_Genomics.html",
    image: "img/wgsagent.svg",
    summary:
      "An autonomous AI agent for end-to-end whole-genome sequencing analysis, coordinating QC, ancestry and relatedness modeling, annotation, rare-variant testing, meta-analysis, cell-type-aware interpretation, eGASS storage, and human review."
  },
  {
    title: "cellSTAAR",
    href: "STAAR.html",
    image: "img/portfolio/STAARpipeline.png",
    summary:
      "Single-cell-informed rare-variant association testing for noncoding regions, integrating functional data to improve power in whole-genome sequencing studies."
  },
  {
    title: "IntPath",
    href: "Protein-functions.html",
    image: "img/portfolio/intpath1.png",
    summary:
      "Integrated pathway gene relationship database for model organisms and important pathogens."
  },
  {
    title: "PPI prediction tools",
    href: "Host-Pathogen-PPIs.html",
    image: "img/portfolio/mtbppi1.png",
    summary:
      "Computational prediction and evaluation of intra-species and host-pathogen protein-protein interactions."
  }
];

const projectDetails = [
  {
    file: "Population_Genetics.html",
    active: "projects.html",
    title: "Population Genetics",
    kicker: "Biobank-scale human genetics",
    image: "img/STAARpipe.png",
    description:
      "Research on scalable whole-genome sequencing analysis, rare-variant association testing, functional annotation, and genetic discovery in diverse populations.",
    body:
      "Large whole-genome sequencing studies now measure rare coding and noncoding variation at a scale that requires statistical, computational, and data-infrastructure advances. My work develops and applies annotation-informed methods that increase power, preserve rigorous control of population structure and relatedness, and make variant interpretation practical for large consortia.",
    highlights: [
      "STAAR and STAARpipeline for annotation-informed rare-variant association testing.",
      "metaSTAAR for powerful and resource-efficient meta-analysis across large WGS and WES studies.",
      "MultiSTAAR and cellSTAAR for multi-trait and single-cell-informed rare-variant analysis.",
      "Cross-consortium applications in TOPMed, GSP, lung cancer, sleep, lipids, and multi-ancestry resources."
    ],
    related: ["STAAR.html", "FAVOR.html"],
    publications: [
      "Scalable and accurate rare-variant association tests for whole genome sequencing time-to-event analysis in large biobanks.",
      "A statistical framework for multi-trait rare variant analysis in large-scale whole-genome sequencing studies.",
      "cellSTAAR: incorporating single-cell-sequencing-based functional data to boost power in rare variant association testing of noncoding regions."
    ]
  },
  {
    file: "FAVOR.html",
    active: "projects.html",
    title: "FAVOR",
    kicker: "Variant annotation and interpretation",
    image: "img/FAVOR.png",
    description:
      "FAVOR is a functional annotation resource and software ecosystem for interpreting human genetic variation across the genome.",
    body:
      "FAVOR brings variant annotation, interactive search, batch analysis, and downloadable resources into one accessible system. FAVOR 2.0 expands the annotation landscape and modernizes the infrastructure, while FAVOR-GPT explores natural-language access to complex annotation results.",
    highlights: [
      "Open-access portal for functional annotation of human genetic variants.",
      "FAVOR 2.0 expands annotations, web interface capabilities, API infrastructure, and visualization.",
      "FAVORannotator integrates annotation data with genotype data into analysis-ready aGDS files.",
      "FAVOR-GPT provides a natural-language interface for exploring and interpreting annotation results."
    ],
    links: [
      { label: "FAVOR portal", href: "https://favor.genohub.org/" },
      { label: "Documentation", href: "https://docs.genohub.org/" },
      { label: "Google Scholar profile", href: site.scholar }
    ],
    publications: [
      "FAVOR 2.0: A reengineered functional annotation of variants online resource for interpreting genomic variation.",
      "FAVOR-GPT: a generative natural language interface to whole genome variant functional annotations.",
      "FAVOR: functional annotation of variants online resource and annotator for variation across the human genome."
    ]
  },
  {
    file: "STAAR.html",
    active: "projects.html",
    title: "STAAR Methods",
    kicker: "Rare-variant association testing",
    image: "img/STAAR.png",
    description:
      "STAAR and its extensions use functional annotation to improve rare-variant association analysis for whole-genome sequencing studies.",
    body:
      "The STAAR family of methods combines statistical genetics and functional genomics so rare variants can be tested in biologically meaningful sets. The ecosystem spans single-study analysis, biobank-scale pipelines, meta-analysis, multi-trait analysis, single-cell-informed noncoding tests, and time-to-event outcomes.",
    highlights: [
      "Annotation principal components and dynamic annotation weighting.",
      "Scalable analysis for very large WGS cohorts with continuous and binary traits.",
      "Extensions for meta-analysis, multi-trait discovery, cell-type-informed noncoding regions, and survival outcomes.",
      "Software implementations designed for consortium-scale genetic studies."
    ],
    links: [
      { label: "STAAR GitHub", href: "https://github.com/li-lab-genetics/STAAR" },
      { label: "STAARpipeline GitHub", href: "https://github.com/xihaoli/STAARpipeline" },
      { label: "metaSTAAR GitHub", href: "https://github.com/xihaoli/metaSTAAR" }
    ],
    publications: [
      "Dynamic incorporation of multiple in silico functional annotations empowers rare variant association analysis of large whole-genome sequencing studies at scale.",
      "Powerful, scalable and resource-efficient meta-analysis of rare variant associations in large whole genome sequencing studies.",
      "A framework for detecting noncoding rare-variant associations of large-scale whole-genome sequencing studies."
    ]
  },
  {
    file: "Epigenomics.html",
    active: "projects.html",
    title: "Epigenomics",
    kicker: "EBV-associated cancer biology",
    image: "img/portfolio/EBVregulome.png",
    description:
      "Integrative functional genomics of Epstein-Barr virus regulation, host chromatin, and cancer-relevant transcriptional programs.",
    body:
      "This research connects viral oncoproteins, host transcription factors, super-enhancers, enhancer RNAs, and three-dimensional chromatin organization to explain how EBV remodels B-cell regulatory programs.",
    highlights: [
      "Mapped EBV oncoprotein super-enhancers that control B-cell growth.",
      "Built an EBV regulome linking viral and host regulatory elements to target genes.",
      "Studied enhancer RNAs and long-range regulatory interactions that support MYC expression and lymphoblast proliferation.",
      "Integrated ChIP-seq, RNA-seq, enhancer maps, and chromatin conformation data."
    ],
    related: ["EBV_Oncoproteins.html", "EBV_Super_Enhancers.html", "EBV_Regulome.html"],
    publications: [
      "The Epstein-Barr virus regulome in lymphoblastoid cells.",
      "Epstein-Barr virus oncoprotein super-enhancers control B cell growth.",
      "Epstein-Barr virus super-enhancer eRNAs are essential for MYC oncogene expression and lymphoblast proliferation."
    ]
  },
  {
    file: "EBV_Oncoproteins.html",
    active: "projects.html",
    title: "EBV Oncoproteins",
    kicker: "Viral transcriptional regulation",
    image: "img/portfolio/EBNALP.png",
    description:
      "Genome-wide studies of EBV nuclear antigens and latent membrane proteins that rewire B-cell transcription.",
    body:
      "EBV oncoproteins coordinate with host transcription factors to activate promoters and enhancers, alter chromatin states, and support lymphoblastoid cell growth. This project area focuses on the regulatory logic of EBNA-LP, EBNA2, EBNA3 proteins, and LMP1/LMP2A-driven programs.",
    highlights: [
      "EBNA-LP localization to promoters and enhancers with cell transcription factors and EBNA2.",
      "EBNA3A and EBNA3C occupancy through BATF/IRF4 composite sites.",
      "LMP1-mediated signaling through NF-kappaB and TRAF1 pathways.",
      "Mouse and cell-line systems for EBV-driven lymphoproliferative biology."
    ],
    publications: [
      "Epstein-Barr Virus Nuclear Antigen Leader Protein coactivates EP300.",
      "Epstein-Barr virus nuclear antigen leader protein localizes to promoters and enhancers with cell transcription factors and EBNA2.",
      "Mouse model of Epstein-Barr virus LMP1- and LMP2A-driven germinal center B-cell lymphoproliferative disease."
    ]
  },
  {
    file: "EBV_Super_Enhancers.html",
    active: "projects.html",
    title: "EBV Super Enhancers",
    kicker: "Enhancer control of oncogenic growth",
    image: "img/portfolio/EBV_Super_Enhancers.png",
    description:
      "Studies of EBV-activated super-enhancers, enhancer RNAs, and oncogene regulation in lymphoblastoid cells.",
    body:
      "Super-enhancers are clusters of regulatory elements with unusually strong transcription-factor and histone-acetylation signals. In EBV-transformed cells, viral and host transcription factors organize super-enhancers near genes such as MYC and BCL2, helping establish growth and survival programs.",
    highlights: [
      "Identified EBV oncoprotein super-enhancers in lymphoblastoid cells.",
      "Linked EBV super-enhancer activity to B-cell growth and survival genes.",
      "Studied enhancer RNAs from EBV super-enhancers and their role in MYC expression.",
      "Connected viral transcriptional programs with host enhancer biology."
    ],
    publications: [
      "Epstein-Barr virus oncoprotein super-enhancers control B cell growth.",
      "Epstein-Barr virus super-enhancer eRNAs are essential for MYC oncogene expression and lymphoblast proliferation.",
      "Nasopharyngeal carcinoma super-enhancer-driven ETV6 correlates with prognosis."
    ]
  },
  {
    file: "EBV_Regulome.html",
    active: "projects.html",
    title: "EBV Regulome",
    kicker: "3D genome and regulatory networks",
    image: "img/portfolio/EBVregulome.png",
    description:
      "A systems-level view of how EBV regulatory elements, host enhancers, genes, and chromatin contacts coordinate lymphoblastoid cell programs.",
    body:
      "The EBV regulome integrates enhancer maps, transcription factor occupancy, chromatin conformation, and gene expression to connect viral and host regulatory elements with target genes. This work helps explain how EBV reshapes host gene control and identifies regulatory dependencies in transformed B cells.",
    highlights: [
      "Constructed a comprehensive EBV regulome in lymphoblastoid cells.",
      "Linked viral and cellular genes with enhancers through 3D genome organization.",
      "Connected EBV enhancer looping with MYC regulatory control.",
      "Provided a network view of EBV-associated transcriptional dependencies."
    ],
    publications: [
      "The Epstein-Barr virus regulome in lymphoblastoid cells.",
      "Epstein-Barr virus episome physically interacts with active regions of the host genome in lymphoblastoid cells.",
      "Epstein-Barr virus oncoprotein super-enhancers control B cell growth."
    ]
  },
  {
    file: "AI_Genomics.html",
    active: "projects.html",
    title: "AI Genomics and Digital Pathology",
    kicker: "Machine learning for biomedical data",
    image: "img/STAARpipe2.png",
    description:
      "AI agents and machine-learning systems for pathogenic variant annotation, IGVF ecosystem analysis, large-scale WGS quality control, multi-omic integration, and digital pathology risk prediction.",
    body:
      "This direction builds local, auditable AI agents for biomedical discovery while staying grounded in statistical genetics, functional genomics, and disease biology. IGVFagent is a concrete example: an agent for discovering, retrieving, and analyzing data from the IGVF Portal, Catalog, Knowledge Graph, and related resources such as ENCODE and FAVOR through a Plan-Action-Results-Evaluation loop.",
    highlights: [
      "IGVFagent: a local, auditable agent for structured knowledge-graph queries, portal and catalog retrieval, public-resource integration, analysis, tool use, and evidence checking.",
      "Agent orchestration that makes the reasoning path inspectable through Plan, Action, Results, and Evaluation stages.",
      "Pathogenic noncoding variant annotation using statistical and neural-network models that integrate epigenetic marks, conservation, microRNA binding, and other multi-omic data.",
      "Automated WGS quality-control pipelines with variant-level and sample-level filters, anomaly detection, and batch-effect checks.",
      "Digital pathology work using H&E whole-slide images for tumor-region localization and 10-year progression-risk stratification in ER-positive, lymph-node-negative breast cancer.",
      "Graph-based and machine-learning approaches for regulatory-network reconstruction, protein-protein interaction modeling, pathway enrichment, and clinical multi-omic analysis."
    ],
    publications: [
      "Deciphering the impact of genomic variation on function.",
      "FAVOR-GPT: a generative natural language interface to whole genome variant functional annotations.",
      "A multi-dimensional integrative scoring framework for predicting functional variants in the human genome."
    ]
  },
  {
    file: "PPIs.html",
    active: "projects.html",
    title: "Protein-Protein Interactions",
    kicker: "Computational systems biology",
    image: "img/portfolio/Homology.png",
    description:
      "Computational prediction, assessment, and biological interpretation of protein-protein interaction networks.",
    body:
      "Protein interaction networks provide hypotheses for biological function, host-pathogen mechanisms, and drug-target discovery. This project area includes homology-based and domain-domain-interaction approaches, quality assessment of interaction datasets, and pathway-level integration.",
    highlights: [
      "Predicted H. sapiens-M. tuberculosis H37Rv host-pathogen interactions using stringent homology-based methods.",
      "Evaluated M. tuberculosis H37Rv protein interaction datasets for reliability and utility.",
      "Developed domain-informed approaches to improve PPI prediction specificity.",
      "Integrated pathway and functional data through IntPath and related tools."
    ],
    related: ["IntraPPIs.html", "Host-Pathogen-PPIs.html", "Protein-functions.html"],
    publications: [
      "Stringent homology-based prediction of H. sapiens-M. tuberculosis H37Rv protein-protein interactions.",
      "Comparative analysis and assessment of M. tuberculosis H37Rv protein-protein interaction datasets.",
      "Progress in computational studies of host-pathogen interactions."
    ]
  },
  {
    file: "IntraPPIs.html",
    active: "projects.html",
    title: "Intra-Species PPIs",
    kicker: "Network quality and functional inference",
    image: "img/portfolio/mtbppi1.png",
    description:
      "Assessment and use of protein interaction networks within organisms, with emphasis on M. tuberculosis H37Rv datasets.",
    body:
      "Intra-species protein interaction maps are valuable but variable in quality. This work evaluates benchmark consistency, precision, recall, and network properties so downstream biological inference rests on better-characterized evidence.",
    highlights: [
      "Compared major M. tuberculosis H37Rv PPI datasets against benchmark interactions.",
      "Analyzed overlap, precision, recall, and network structure across predicted datasets.",
      "Supported more careful use of PPI datasets in functional studies.",
      "Connected interaction networks with pathway-level biological interpretation."
    ],
    publications: [
      "Comparative analysis and assessment of M. tuberculosis H37Rv protein-protein interaction datasets.",
      "Progress in computational studies of host-pathogen interactions."
    ]
  },
  {
    file: "Host-Pathogen-PPIs.html",
    active: "projects.html",
    title: "Host-Pathogen PPIs",
    kicker: "Interfaces between infection and computation",
    image: "img/portfolio/DDI.png",
    description:
      "Prediction of interactions between host and pathogen proteins to generate hypotheses about infection mechanisms and potential targets.",
    body:
      "Host-pathogen interaction prediction is difficult because protein interfaces, evolutionary distance, and pathogen-specific biology all matter. This work emphasizes stringent prediction rules and interpretable network analysis for H. sapiens-M. tuberculosis interactions.",
    highlights: [
      "Developed stringent homology-based prediction of human-M. tuberculosis protein interactions.",
      "Incorporated differences between eukaryotic and prokaryotic proteins and between inter-species and intra-species interaction interfaces.",
      "Analyzed host and pathogen hub proteins in predicted interaction networks.",
      "Generated hypotheses for infection biology and target prioritization."
    ],
    publications: [
      "Stringent homology-based prediction of H. sapiens-M. tuberculosis H37Rv protein-protein interactions.",
      "Progress in computational studies of host-pathogen interactions."
    ]
  },
  {
    file: "Protein-functions.html",
    active: "projects.html",
    title: "Protein Functions and Pathways",
    kicker: "Pathway data integration",
    image: "img/portfolio/intpath1.png",
    description:
      "Integrated pathway and gene relationship resources that support systems-level interpretation across model organisms and pathogens.",
    body:
      "Pathway databases often differ in identifiers, relationship types, organism coverage, and data formats. IntPath was designed to improve compatibility and comprehensiveness for pathway gene relationships, enabling broader computational biology applications.",
    highlights: [
      "Built IntPath as an integrated pathway gene relationship database.",
      "Unified pathway data across model organisms and important pathogens.",
      "Supported downstream analysis for computational biology and systems medicine.",
      "Connected pathway relationships with protein function and interaction networks."
    ],
    publications: [
      "IntPath: an integrated pathway gene relationship database for model organisms and important pathogens.",
      "LipidGO: database for lipid-related GO terms and applications.",
      "Progress in computational studies of host-pathogen interactions."
    ]
  }
];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function link(href, label, className = "") {
  const external = /^https?:/.test(href);
  const attrs = external ? ' target="_blank" rel="noopener"' : "";
  const cls = className ? ` class="${className}"` : "";
  return `<a href="${escapeHtml(href)}"${cls}${attrs}>${escapeHtml(label)}</a>`;
}

function isActive(active, href) {
  return active === href || (!active && href === "index.html");
}

function renderNav(active) {
  const items = nav
    .map((item) => {
      if (!item.groups) {
        const activeClass = isActive(active, item.href) ? " active" : "";
        return `<li>${link(item.href, item.label, `nav-link${activeClass}`)}</li>`;
      }
      const groupHtml = item.groups
        .map(
          (group) => `
            <li class="subhead">${escapeHtml(group.label)}</li>
            ${group.links
              .map((child) => `<li>${link(child.href, child.label, isActive(active, child.href) ? "active" : "")}</li>`)
              .join("")}`
        )
        .join("");
      const activeClass = active === item.href || item.groups.some((g) => g.links.some((l) => isActive(active, l.href))) ? " active" : "";
      return `<li><a class="nav-parent${activeClass}" href="${item.href}">${escapeHtml(item.label)}</a><ul class="dropdown">${groupHtml}</ul></li>`;
    })
    .join("");

  return `
    <header class="site-header">
      <nav class="container nav" aria-label="Main navigation">
        <a class="brand" href="index.html" aria-label="Hufeng Zhou home">
          <span class="brand-mark">HZ</span>
          <span class="brand-text">${escapeHtml(site.shortName)}<span>Computational Biology</span></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">Menu</button>
        <ul class="nav-list" id="site-nav">${items}</ul>
      </nav>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h2>${escapeHtml(site.shortName)}</h2>
          <p>${escapeHtml(site.role)}. ${escapeHtml(site.affiliation)}.</p>
          <p>Copyright 2026 Hufeng Zhou. Built as a static GitHub Pages site.</p>
        </div>
        <div>
          <h3>Connect</h3>
          <div class="footer-links">
            ${link(site.cv, "CV")}
            ${link(`mailto:${site.email}`, "Email")}
            ${link(site.github, "GitHub")}
            ${link(site.scholar, "Google Scholar")}
            ${link(site.orcid, "ORCID")}
            ${link(site.pubmed, "PubMed")}
          </div>
        </div>
      </div>
    </footer>
    <script>
      const toggle = document.querySelector(".nav-toggle");
      const nav = document.querySelector(".nav-list");
      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          const open = nav.classList.toggle("open");
          document.body.classList.toggle("nav-open", open);
          toggle.setAttribute("aria-expanded", String(open));
        });
      }
    </script>`;
}

function layout({ file, title, description, active, body }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)} | ${escapeHtml(site.shortName)}</title>
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="css/site.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  ${renderNav(active || file)}
  <main id="main">
    ${body}
  </main>
  ${renderFooter()}
</body>
</html>
`;
}

function pageHero(title, kicker, description) {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="kicker">${escapeHtml(kicker)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </div>
    </section>`;
}

function sectionHeading(kicker, title, text, center = false) {
  return `
    <div class="section-heading${center ? " center" : ""}">
      <div class="eyebrow-line"></div>
      <p class="kicker">${escapeHtml(kicker)}</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </div>`;
}

function renderPublication(pub) {
  const links = [
    pub.doi ? link(`https://doi.org/${pub.doi}`, "DOI") : "",
    pub.pmid ? link(`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`, "PubMed") : ""
  ]
    .filter(Boolean)
    .join("");

  return `
    <article class="publication${pub.highlight ? " pub-highlight" : ""}">
      <div class="pub-year">${pub.year}</div>
      <div>
        <h3>${escapeHtml(pub.title)}</h3>
        <p class="authors">${escapeHtml(pub.authors)}</p>
        <p class="venue">${escapeHtml(pub.venue)}</p>
        ${links ? `<div class="links">${links}</div>` : ""}
      </div>
    </article>`;
}

function projectCard(project) {
  return `
    <article class="card project-card">
      <a class="thumb" href="${escapeHtml(project.href || project.file)}"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}"></a>
      <div class="body">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary || project.description)}</p>
        ${link(project.href || project.file, "Explore project", "card-link")}
      </div>
    </article>`;
}

function softwareCard(item) {
  return `
    <article class="card project-card">
      <a class="thumb" href="${escapeHtml(item.href)}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}"></a>
      <div class="body">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        ${link(item.href, /^https?:/.test(item.href) ? "Open resource" : "Learn more", "card-link")}
      </div>
    </article>`;
}

function publicationsForTitles(titles) {
  return titles
    .map((title) => publications.find((pub) => pub.title === title))
    .filter(Boolean)
    .map(renderPublication)
    .join("");
}

function homePage() {
  const recent = publications.filter((pub) => pub.highlight).slice(0, 5);
  return layout({
    file: "index.html",
    title: "Academic Job Market Homepage",
    description:
      "Hufeng Zhou, PhD, computational biologist and statistical geneticist working on human genetics, functional annotation, epigenomics, and biomedical software.",
    body: `
      <section class="hero" style="background-image: url('img/hero-mountains.jpg')">
        <div class="container hero-content">
          <div class="hero-copy">
            <p class="kicker">Academic job market candidate</p>
            <h1>${escapeHtml(site.name)}</h1>
            <p class="lede">I build statistical methods, functional annotation resources, and production-quality software for understanding human genetic variation and disease mechanisms at whole-genome scale.</p>
            <div class="actions">
              ${link("publications.html", "View Publications", "button secondary")}
              ${link(site.cv, "Download CV", "button secondary")}
              ${link("projects.html", "Research Program", "button outline")}
              ${link(site.github, "GitHub", "button outline")}
              ${link(`mailto:${site.email}`, "Contact", "button outline")}
            </div>
            <dl class="hero-metrics">
              <div><dt>45+</dt><dd>peer-reviewed publications</dd></div>
              <div><dt>15+</dt><dd>years in computational biology</dd></div>
              <div><dt>3</dt><dd>editorial service roles</dd></div>
              <div><dt>2026</dt><dd>CV and publications updated</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container profile-strip">
          <img class="portrait" src="${escapeHtml(site.portrait)}" alt="Hufeng Zhou">
          <div>
            ${sectionHeading("Profile", "Computational biology for genomic medicine", "My work connects statistical genetics, functional genomics, and robust software systems so large-scale sequencing studies can move from raw variants to biological insight.")}
            <p>${escapeHtml(site.affiliation)}.</p>
            <p>I focus on annotation-informed rare-variant association methods, functional annotation resources such as FAVOR, EBV-associated cancer epigenomics, biomedical AI agents, AI-driven genomic and pathology data science, host-pathogen computational biology, and software infrastructure that helps research consortia analyze large sequencing datasets.</p>
            <div class="topic-list">
              <span class="tag">Statistical genetics</span>
              <span class="tag">Whole-genome sequencing</span>
              <span class="tag">Functional annotation</span>
              <span class="tag">Biomedical AI agents</span>
              <span class="tag">AI and digital pathology</span>
              <span class="tag">EBV epigenomics</span>
              <span class="tag">Scientific software</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section ai-agent-section">
        <div class="container agent-feature">
          <div>
            <p class="kicker">Biomedical AI agents</p>
            <h2>Local, auditable agents for genomic discovery</h2>
            <p>I am creating AI agents for biomedical research applications, including <strong>IGVFagent</strong>, a local and auditable agent for discovering, retrieving, and analyzing data from the IGVF ecosystem and related public resources.</p>
            <p>IGVFagent is designed to work across the IGVF Portal, Catalog, Knowledge Graph, ENCODE, FAVOR, publications, assay data, and analysis tools while keeping the reasoning path inspectable through a Plan &rarr; Action &rarr; Results &rarr; Evaluation loop.</p>
            <div class="actions">
              ${link("AI_Genomics.html", "AI agent research", "button secondary")}
              ${link(site.github, "GitHub", "button outline")}
            </div>
          </div>
          <div class="agent-panel" aria-label="IGVFagent workflow">
            <div class="agent-sources">
              <span>IGVF Portal</span>
              <span>IGVF Catalog</span>
              <span>Knowledge Graph</span>
              <span>ENCODE</span>
              <span>FAVOR</span>
            </div>
            <div class="agent-core">
              <span class="agent-icon">AI</span>
              <strong>IGVFagent</strong>
              <em>local, auditable, evidence-aware</em>
            </div>
            <div class="agent-flow">
              <span>Plan</span>
              <span>Action</span>
              <span>Results</span>
              <span>Evaluation</span>
            </div>
            <ul class="agent-usecases">
              <li>Variant scoring and interpretation</li>
              <li>Multi-omic integration and enhancer-gene mapping</li>
              <li>Fine-mapping, trajectory inference, and cross-tissue analysis</li>
              <li>Evidence cross-checking, provenance, and human feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          ${sectionHeading("Research", "A coherent program from methods to mechanisms", "These areas connect statistical genetics, functional annotation, AI, epigenomics, software infrastructure, and host-pathogen systems biology.", true)}
          <div class="grid three">
            ${researchAreas.map(projectCard).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${sectionHeading("Recent publications", "Updated publication record", "Recent papers now include 2024-2026 publications from PubMed/ORCID and publisher-indexed records.")}
          <div class="publication-list">
            ${recent.map(renderPublication).join("")}
          </div>
          <div class="actions">
            ${link("publications.html", "Full publication list", "button")}
            ${link(site.scholar, "Google Scholar", "button outline")}
          </div>
        </div>
      </section>

      <section class="section dark">
        <div class="container feature">
          <div>
            <p class="kicker">Software and resources</p>
            <h2>Tools that make genome-scale studies usable</h2>
            <p>FAVOR, FAVORannotator, STAAR, STAARpipeline, WGSagent, and cellSTAAR show a consistent thread: methods that are not only statistically rigorous, but usable by large collaborations.</p>
            <div class="actions">${link("Software.html", "Software portfolio", "button secondary")}</div>
          </div>
          <div class="media-frame"><img src="img/FAVOR.png" alt="FAVOR interface and annotation resource"></div>
        </div>
      </section>
    `
  });
}

function aboutPage() {
  return layout({
    file: "about.html",
    title: "About",
    description: "About Hufeng Zhou's research profile, training, and scientific focus.",
    body: `
      ${pageHero("About", "Research profile", "A computational biologist and engineer working across statistical genetics, functional genomics, and biomedical software.")}
      <section class="section">
        <div class="container feature">
          <div>
            ${sectionHeading("Biography", "From biological questions to scalable computation", "My research is driven by a practical question: how can we turn increasingly massive genomic datasets into interpretable biological and medical discoveries?")}
            <p>Dr. Hufeng Zhou is a Research Scientist in the Department of Biostatistics at the Harvard T.H. Chan School of Public Health and previously served as an Instructor/Junior Faculty Member at Harvard Medical School and Brigham and Women's Hospital. His work spans human population genetics, functional annotation of genetic variants, EBV-associated cancer epigenomics, pathway data integration, protein-protein interaction prediction, AI-driven genomic analysis, digital pathology, and scientific software engineering.</p>
            <p>Across these areas, the common theme is building rigorous computational methods and usable research infrastructure for complex biological data. This includes rare-variant association methods for whole-genome sequencing studies, annotation resources such as FAVOR, and integrative genomic analyses of viral and host regulatory programs.</p>
            <div class="actions">${link(site.cv, "Download CV", "button")}</div>
          </div>
          <div class="media-frame photo"><img src="${escapeHtml(site.portrait)}" alt="Hufeng Zhou portrait"></div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          ${sectionHeading("Research agenda", "What I am building next", "The research program is organized around methods, translation, and reusable infrastructure for genomic medicine.")}
          <div class="grid three">
            <article class="card"><h3>Methods</h3><p>Develop scalable and interpretable statistical methods for rare variants, multi-ancestry sequencing studies, functional annotation, and biobank-scale outcomes.</p></article>
            <article class="card"><h3>AI and translation</h3><p>Apply machine learning and deep learning to variant annotation, WGS quality control, multi-omic integration, and H&E whole-slide pathology analysis.</p></article>
            <article class="card"><h3>Infrastructure</h3><p>Build open, maintainable tools and databases that help scientists query, annotate, visualize, and analyze genome-scale data.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${sectionHeading("Expertise", "Technical and scientific strengths", "Core areas of expertise across computation, genomics, software engineering, and collaborative biomedical science.")}
          <div class="grid two">
            <article class="card"><h3>Computational biology</h3><p>Whole-genome sequencing, variant annotation, population genetics, rare-variant association, multi-omics integration, and disease genomics.</p></article>
            <article class="card"><h3>Functional genomics</h3><p>Epigenomics, enhancer biology, transcriptional regulation, EBV-associated cancers, 3D genome organization, and regulome construction.</p></article>
            <article class="card"><h3>Software engineering</h3><p>Research databases, web portals, command-line tools, R packages, data pipelines, visualization systems, and production-minded scientific workflows.</p></article>
            <article class="card"><h3>Collaborative science</h3><p>Consortium-scale analyses across TOPMed, GSP, population studies, cancer genetics, sleep genomics, and biomedical informatics collaborations.</p></article>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          ${sectionHeading("Career", "Appointments, education, service, and honors", "A concise view of training, Harvard appointments, editorial service, and honors.")}
          <div class="timeline">
            <article class="timeline-item"><div class="timeline-date">2018-present</div><div><h3>Research Scientist</h3><p>Harvard T.H. Chan School of Public Health, Department of Biostatistics. Supervisor: Prof. Xihong Lin.</p></div></article>
            <article class="timeline-item"><div class="timeline-date">2015-2018</div><div><h3>Instructor / Junior Faculty Member</h3><p>Harvard Medical School and Brigham and Women's Hospital. Supervisor: Prof. Elliott Kieff.</p></div></article>
            <article class="timeline-item"><div class="timeline-date">2013-2015</div><div><h3>Postdoctoral Research Fellow</h3><p>Harvard Medical School and Brigham and Women's Hospital. Supervisor: Prof. Elliott Kieff.</p></div></article>
            <article class="timeline-item"><div class="timeline-date">2009-2013</div><div><h3>PhD in Computational Biology</h3><p>National University of Singapore, School of Computing and NUS Graduate School for Integrative Sciences and Engineering. Supervisor: Prof. Limsoon Wong.</p></div></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${sectionHeading("Recognition", "Awards and editorial service", "These details help round out the job-market profile beyond publications alone.")}
          <div class="grid two">
            <article class="card"><h3>Awards and honors</h3><p>Career Development Grant Fellow, Leukemia & Lymphoma Society, 2015-2018. NGS Scholarship, National University of Singapore, 2009-2013.</p></article>
            <article class="card"><h3>Editorial service</h3><p>Genetics Section Editor-in-Chief, Heliyon, Cell Press. Editor, BMC Genomics Data, Springer Nature. Editor, Microbial Immunology, Frontiers in Immunology.</p></article>
          </div>
        </div>
      </section>
    `
  });
}

function publicationsPage() {
  const selected = publications.filter((pub) => pub.highlight);
  return layout({
    file: "publications.html",
    title: "Publications",
    description: "Updated publication list for Hufeng Zhou, including 2024-2026 records.",
    body: `
      ${pageHero("Publications", "Updated May 2026", "Peer-reviewed publications across statistical genetics, functional annotation, EBV epigenomics, host-pathogen biology, and biomedical data science.")}
      <section class="section">
        <div class="container">
          <div class="callout">
            <p><strong>Update note.</strong> The recent publication list was refreshed from PubMed records associated with ORCID 0000-0001-9382-5674, publisher-indexed records, and the existing site bibliography. Google Scholar remains linked for live citation metrics.</p>
            <p class="source-note">${link(site.scholar, "Google Scholar profile")} ${link(site.orcid, "ORCID")} ${link(site.pubmed, "PubMed search")}</p>
          </div>
        </div>
      </section>
      <section class="section tight">
        <div class="container">
          ${sectionHeading("Selected", "Representative publications", "A short list for search committees and collaborators who need the main signal first.")}
          <div class="publication-list">${selected.map(renderPublication).join("")}</div>
        </div>
      </section>
      <section class="section alt">
        <div class="container">
          ${sectionHeading("Full list", "Chronological bibliography", "Recent peer-reviewed records appear first, followed by earlier publications across genomics, epigenomics, and computational biology.")}
          <div class="publication-list">${publications.map(renderPublication).join("")}</div>
        </div>
      </section>
    `
  });
}

function projectsPage() {
  const detailCards = projectDetails
    .filter((project) => ["Population_Genetics.html", "FAVOR.html", "STAAR.html", "AI_Genomics.html", "Epigenomics.html", "PPIs.html"].includes(project.file))
    .map((project) => ({
      ...project,
      href: project.file,
      summary: project.description
    }));
  return layout({
    file: "projects.html",
    title: "Research",
    description: "Research program and project pages for Hufeng Zhou.",
    body: `
      ${pageHero("Research", "Projects and research directions", "A clearer map of the research program, with each major area connected to publications, software, and project detail pages.")}
      <section class="section">
        <div class="container">
          ${sectionHeading("Overview", "Connected research areas", "Each project area links methods, biological questions, representative publications, and software or data resources.")}
          <div class="grid three">${detailCards.map(projectCard).join("")}</div>
        </div>
      </section>
      <section class="section alt">
        <div class="container feature">
          <div class="media-frame"><img src="img/portfolio/STAARpipeline.png" alt="STAARpipeline research figure"></div>
          <div>
            <p class="kicker">From methods to software</p>
            <h2>Designed for real sequencing studies</h2>
            <p>The research program connects method development, statistical inference, functional genomics, scalable software, and public resources. That makes the portfolio legible as both a scientific agenda and an engineering record.</p>
            <div class="actions">${link("Software.html", "View software", "button")}</div>
          </div>
        </div>
      </section>
    `
  });
}

function softwarePage() {
  return layout({
    file: "Software.html",
    title: "Software",
    description: "Software, databases, and computational tools by Hufeng Zhou.",
    body: `
      ${pageHero("Software", "Tools and resources", "Open and consortium-facing software for variant annotation, rare-variant association testing, pathway integration, and protein interaction analysis.")}
      <section class="section">
        <div class="container">
          ${sectionHeading("Portfolio", "Scientific software with research impact", "These tools support auditable AI agents, variant annotation, rare-variant association testing, pathway integration, and protein interaction analysis.")}
          <div class="grid four">${software.map(softwareCard).join("")}</div>
        </div>
      </section>
      <section class="section alt">
        <div class="container">
          ${sectionHeading("Principles", "What the tools are built to do", "For a job-market page, software is framed as a research contribution rather than a side project.")}
          <div class="grid three">
            <article class="card"><h3>Scale</h3><p>Handle whole-genome sequencing data, large cohorts, consortium meta-analysis, and annotation resources that exceed ordinary desktop workflows.</p></article>
            <article class="card"><h3>Interpretability</h3><p>Use auditable agent loops, functional annotation, visualization, and searchable resources so variant-level results become biologically meaningful.</p></article>
            <article class="card"><h3>Reusability</h3><p>Package methods as tools, portals, and reproducible workflows that collaborators can adopt in real studies.</p></article>
          </div>
        </div>
      </section>
    `
  });
}

function contactPage() {
  return layout({
    file: "contact.html",
    title: "Contact",
    description: "Contact Hufeng Zhou.",
    body: `
      ${pageHero("Contact", "Get in touch", "For research collaborations, seminar invitations, faculty searches, and software or publication questions.")}
      <section class="section">
        <div class="container contact-grid">
          <article class="contact-card">
            <strong>Email</strong>
            <p>${link(`mailto:${site.email}`, site.email)}</p>
          </article>
          <article class="contact-card">
            <strong>Office</strong>
            <p>${escapeHtml(site.office)}</p>
          </article>
          <article class="contact-card">
            <strong>Phone</strong>
            <p>${escapeHtml(site.phone)}</p>
          </article>
          <article class="contact-card">
            <strong>Profiles</strong>
            <p>${link(site.github, "GitHub")} ${link(site.scholar, "Google Scholar")} ${link(site.orcid, "ORCID")} ${link(site.pubmed, "PubMed")}</p>
          </article>
          <article class="contact-card">
            <strong>CV</strong>
            <p>${link(site.cv, "Download current CV")}</p>
          </article>
        </div>
        <div class="container" style="margin-top: 2rem;">
          <div class="callout">
            <p>Research statement, teaching statement, and additional software details are available upon request. Email is the most reliable contact path.</p>
            <div class="actions">${link(`mailto:${site.email}?subject=Homepage%20inquiry`, "Send email", "button")} ${link(site.cv, "Download CV", "button outline")}</div>
          </div>
        </div>
      </section>
    `
  });
}

function projectDetailPage(project) {
  const relatedLinks = (project.related || [])
    .map((href) => {
      const target = projectDetails.find((item) => item.file === href);
      return target ? link(href, target.title, "tag") : "";
    })
    .join("");

  const externalLinks = (project.links || [])
    .map((item) => link(item.href, item.label, "button outline"))
    .join("");

  return layout({
    file: project.file,
    active: project.active,
    title: project.title,
    description: project.description,
    body: `
      ${pageHero(project.title, project.kicker, project.description)}
      <section class="section">
        <div class="container feature">
          <div>
            ${sectionHeading("Overview", project.title, project.body)}
            ${project.highlights ? `<ul>${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
            ${relatedLinks ? `<div class="topic-list">${relatedLinks}</div>` : ""}
            ${externalLinks ? `<div class="actions">${externalLinks}</div>` : ""}
          </div>
          <div class="media-frame"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} figure"></div>
        </div>
      </section>
      <section class="section alt">
        <div class="container">
          ${sectionHeading("Publications", "Related work", "Representative publications connected to this project.")}
          <div class="publication-list">${publicationsForTitles(project.publications || [])}</div>
        </div>
      </section>
    `
  });
}

const pages = [
  ["index.html", homePage()],
  ["about.html", aboutPage()],
  ["publications.html", publicationsPage()],
  ["projects.html", projectsPage()],
  ["Software.html", softwarePage()],
  ["contact.html", contactPage()],
  ...projectDetails.map((project) => [project.file, projectDetailPage(project)])
];

mkdirSync(path.join(outDir, "tools"), { recursive: true });
for (const [file, html] of pages) {
  writeFileSync(path.join(outDir, file), html, "utf8");
}

console.log(`Generated ${pages.length} pages.`);
