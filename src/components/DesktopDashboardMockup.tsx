import React, { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Search, 
  Plus, 
  Filter, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Bell, 
  Check, 
  Eye,
  Menu,
  Database,
  Smartphone,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Play,
  Pause,
  HelpCircle,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Interfaces for Dashboard State
interface Resident {
  id: string;
  name: string;
  purok: string;
  category: 'Senior' | 'Single Parent' | 'General' | 'Bedridden';
  status: 'Verified' | 'Pending';
  lastActive: string;
}

interface DocumentRequest {
  id: string;
  residentName: string;
  type: 'Barangay Clearance' | 'Certificate of Indigency' | 'Residency';
  purok: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  timestamp: string;
}

interface LuponDispute {
  id: string;
  complainant: string;
  respondent: string;
  nature: string;
  status: 'Scheduled Mediation' | 'Resolved' | 'Ongoing';
  dateFiled: string;
}

export default function DesktopDashboardMockup() {
  // Active Tab status within the simulated laptop screen
  const [activeScreenTab, setActiveScreenTab] = useState<'overview' | 'residents' | 'documents' | 'lupon' | 'alerts'>('overview');

  // Simulated live database states
  const [residents, setResidents] = useState<Resident[]>([
    { id: '1', name: 'Aling Corazon Mendoza', purok: 'Purok 1', category: 'Senior', status: 'Verified', lastActive: '2 mins ago' },
    { id: '2', name: 'Tatay Cardo Dalisay', purok: 'Purok 4', category: 'General', status: 'Verified', lastActive: '10 mins ago' },
    { id: '3', name: 'Maria Rowena Santos', purok: 'Purok 2', category: 'Single Parent', status: 'Verified', lastActive: '1 hr ago' },
    { id: '4', name: 'Tatay Lito Lapid', purok: 'Purok 3', category: 'Bedridden', status: 'Verified', lastActive: 'Yesterday' },
    { id: '5', name: 'Juan Carlos Cruz', purok: 'Purok 1', category: 'General', status: 'Pending', lastActive: 'Just registered' },
  ]);

  const [docRequests, setDocRequests] = useState<DocumentRequest[]>([
    { id: 'req_1', residentName: 'Maria Rowena Santos', type: 'Barangay Clearance', purok: 'Purok 2', status: 'Pending', timestamp: '10 mins ago' },
    { id: 'req_2', residentName: 'Tatay Cardo Dalisay', type: 'Certificate of Indigency', purok: 'Purok 4', status: 'Pending', timestamp: '25 mins ago' },
    { id: 'req_3', residentName: 'Andres Bonifacio', type: 'Residency', purok: 'Purok 5', status: 'Approved', timestamp: '2 hrs ago' },
    { id: 'req_4', residentName: 'Emilio Aguinaldo', type: 'Barangay Clearance', purok: 'Purok 1', status: 'Approved', timestamp: '4 hrs ago' },
  ]);

  const [disputes, setDisputes] = useState<LuponDispute[]>([
    { id: 'dsp_1', complainant: 'Mang Ramon', respondent: 'Kuya Tonyo', nature: 'Noise / Boundary Tree dispute', status: 'Scheduled Mediation', dateFiled: 'Yesterday' },
    { id: 'dsp_2', complainant: 'Aling Nena', respondent: 'Sari-Sari Store noisy freezer', status: 'Resolved', dateFiled: '3 days ago' },
    { id: 'dsp_3', complainant: 'Purok 3 Youth Association', respondent: 'Basketball Court booking overlap', status: 'Ongoing', dateFiled: '5 days ago' },
  ]);

  // Simulated ticking timer
  const [secondsElapsed, setSecondsElapsed] = useState(5048); // Initial time 01:24:08
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (sec: number) => {
    const hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    const mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // Action feedback feedback states
  const [signatureLoading, setSignatureLoading] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);
  const [systemAlertLevel, setSystemAlertLevel] = useState<'NORMAL' | 'TYPHOON_WARNING'>('NORMAL');
  const [alertBroadcasting, setAlertBroadcasting] = useState(false);
  const [selectedPurokFilter, setSelectedPurokFilter] = useState<string>('all');
  const [residentSearchQuery, setResidentSearchQuery] = useState('');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [activeChartMetric, setActiveChartMetric] = useState<'all' | 'clearance' | 'disputes'>('all');

  // Triggering document approval simulation
  const approveDocument = (id: string, residentName: string) => {
    setSignatureLoading(id);
    setTimeout(() => {
      setDocRequests(prev => 
        prev.map(r => r.id === id ? { ...r, status: 'Approved' } : r)
      );
      setSignatureLoading(null);
      triggerToast(`Successfully digitally signed & generated clearance code for ${residentName}. Resident notified via SMS.`);
    }, 1200);
  };

  // Resolve Dispute
  const resolveDispute = (id: string, complainant: string) => {
    setDisputes(prev => 
      prev.map(d => d.id === id ? { ...d, status: 'Resolved' } : d)
    );
    triggerToast(`Mediation Agreement Digitized for ${complainant}'s dispute. Peace agreement certified.`);
  };

  // Broadcast Alert Simulated Trigger
  const triggerEmergencyBroadcast = () => {
    setAlertBroadcasting(true);
    setTimeout(() => {
      setSystemAlertLevel('TYPHOON_WARNING');
      setAlertBroadcasting(false);
      triggerToast('CRITICAL: Flood warning broadcasted to 842 residents of Purok 3 & 4. SMS queue cleared successfully!');
    }, 2000);
  };

  // Reset Alert level
  const clearEmergencyLevel = () => {
    setSystemAlertLevel('NORMAL');
    triggerToast('Emergency alert cancelled. All resident screens restored to normal.');
  };

  // Toast builder
  const triggerToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 5000);
  };

  // Count active stats helper
  const pendingDocsCount = docRequests.filter(r => r.status === 'Pending').length;
  const verifiedResidentsCount = residents.filter(r => r.status === 'Verified').length;
  const scheduledMediationCount = disputes.filter(d => d.status !== 'Resolved').length;

  return (
    <section className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white border-b border-vintage-sand/80 overflow-hidden relative" id="desktop-dashboard-demo">
      
      {/* Decorative ambiance elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[500px] h-96 bg-brand-accent/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern high-hierarchy tag and heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-coral uppercase px-3 py-1 rounded-full bg-brand-coral/5 border border-brand-coral/15 inline-block">
            BARANGAY HEADQUARTERS COMMAND CENTER
          </span>
          <h2 className="mt-4 font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-charcoal tracking-tight">
            The Interactive Command Portal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed font-body">
            Empower Barangay officials with an all-in-one administrative terminal. Click around our simulated, live desktop software mockup to experience how easy digitized governance feels.
          </p>
        </div>

        {/* --- LAPTOP BODY SKELETON (Widescreen High-Fidelity Dribbble View) --- */}
        <div className="relative mx-auto max-w-[1040px] w-full mt-6 px-1 md:px-4">
          
          {/* Laptop Screen & Bezel */}
          <div className="bg-[#121316] rounded-[24px] sm:rounded-[32px] p-2.5 sm:p-4 pb-2 relative border border-white/10 shadow-[0_24px_70px_-15px_rgba(30,40,36,0.35)]">
            
            {/* Top Bezel Notch with Camera Lens & Live Indicator Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 sm:w-36 bg-[#121316] rounded-b-xl flex items-center justify-center gap-2 z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" title="Camera/Live Portal online" />
              <div className="w-1 h-1 rounded-full bg-blue-500/80" />
            </div>
            
            {/* Glowing inner bezel border */}
            <div className="absolute inset-[1px] rounded-[23px] sm:rounded-[31px] border border-white/5 pointer-events-none z-10" />

            {/* Simulated Desktop Glass Screen */}
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2DFD2] relative aspect-[14/9] sm:aspect-[16/10] w-full shadow-inner">
              
              {/* Inner screen grid layout */}
              <div className="w-full h-full flex flex-row text-xs font-sans text-brand-charcoal">
                
                 {/* 1. SIDEBAR NAVIGATION CONTROLS (Dribbble Forest Dark Canvas Theme) */}
                <aside className="w-[50px] sm:w-[195px] bg-[#071F19] text-slate-300 flex flex-col justify-between py-5 select-none flex-shrink-0 z-20 transition-all duration-300 relative border-r border-[#051713]">
                  <div className="space-y-7">
                    {/* Brand Identifier in premium layout */}
                    <div className="px-3 sm:px-5 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1E5649] to-[#3FC1A4] flex items-center justify-center text-[11px] font-extrabold text-white shadow-[0_4px_12px_rgba(30,220,164,0.15)] flex-shrink-0 font-sans">
                        KB
                      </div>
                      <span className="hidden sm:inline font-sans font-black text-sm tracking-tight text-white">
                        kabarangay<span className="text-[#3FC1A4]">.io</span>
                      </span>
                    </div>

                    {/* Nav Items */}
                    <nav className="space-y-1.5 px-1 sm:px-2.5">
                      <button 
                        id="btn-mock-overview"
                        onClick={() => setActiveScreenTab('overview')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                          activeScreenTab === 'overview' 
                            ? 'bg-[#1E5649]/20 text-white font-bold border-l-4 border-[#3FC1A4]' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-850'
                        }`}
                      >
                        <TrendingUp className="w-4 h-4 flex-shrink-0" />
                        <span className="hidden sm:inline text-left text-xs">Dashboard</span>
                      </button>

                      <button 
                        id="btn-mock-residents"
                        onClick={() => setActiveScreenTab('residents')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                          activeScreenTab === 'residents' 
                            ? 'bg-[#1E5649]/20 text-white font-bold border-l-4 border-[#3FC1A4]' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-850'
                        }`}
                      >
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span className="hidden sm:inline text-left flex-grow text-xs">Households</span>
                        <span className="hidden sm:inline-block px-1.5 py-0.5 text-[8px] bg-emerald-500/10 text-[#3FC1A4] rounded font-mono font-extrabold">
                          {verifiedResidentsCount}
                        </span>
                      </button>

                      <button 
                        id="btn-mock-documents"
                        onClick={() => setActiveScreenTab('documents')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all relative ${
                          activeScreenTab === 'documents' 
                            ? 'bg-[#1E5649]/20 text-white font-bold border-l-4 border-[#3FC1A4]' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-850'
                        }`}
                      >
                        <FileText className="w-4 h-4 flex-shrink-0" />
                        <span className="hidden sm:inline text-left flex-grow text-xs">Certificates</span>
                        {pendingDocsCount > 0 && (
                          <span className="absolute sm:static top-1.5 right-1.5 w-4 h-4 sm:w-auto sm:px-1.5 sm:py-0.5 text-[9px] bg-brand-coral text-white rounded-full flex items-center justify-center font-bold font-mono shadow-sm">
                            {pendingDocsCount}
                          </span>
                        )}
                      </button>

                      <button 
                        id="btn-mock-lupon"
                        onClick={() => setActiveScreenTab('lupon')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                          activeScreenTab === 'lupon' 
                            ? 'bg-[#1E5649]/20 text-white font-bold border-l-4 border-[#3FC1A4]' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-850'
                        }`}
                      >
                        <Scale className="w-4 h-4 flex-shrink-0" />
                        <span className="hidden sm:inline text-left flex-grow font-body text-xs">Lupon Disputes</span>
                        {scheduledMediationCount > 0 && (
                          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[8px] bg-amber-500/20 text-amber-300 rounded font-mono font-bold">
                            {scheduledMediationCount}
                          </span>
                        )}
                      </button>

                      <button 
                        id="btn-mock-alerts"
                        onClick={() => setActiveScreenTab('alerts')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                          activeScreenTab === 'alerts' 
                            ? 'bg-red-500/10 text-red-200 font-bold border-l-4 border-red-400' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-850'
                        }`}
                      >
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span className="hidden sm:inline text-left text-xs">Crisis Portal</span>
                        {systemAlertLevel !== 'NORMAL' && (
                          <span className="absolute sm:static top-1.5 right-1.5 w-2 h-2 sm:w-auto sm:px-1.5 sm:py-0.5 bg-brand-coral rounded-full text-white sm:text-[9px] animate-pulse font-mono font-bold shadow-sm">
                            LIVE
                          </span>
                        )}
                      </button>
                    </nav>
                  </div>

                  {/* Sidebar Bottom Banner & Profile Details */}
                  <div className="px-1.5 sm:px-3 space-y-4">
                    
                    {/* Harvest/Aeux style Interactive Microcard element */}
                    <div className="hidden sm:block p-3 rounded-xl bg-gradient-to-br from-[#1E5649]/40 to-[#0A2E24] border border-[#1E5649]/30 text-left">
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#3FC1A4] animate-pulse" />
                        <span className="text-[10px] uppercase font-bold text-slate-100 font-mono tracking-wider">LGU Citizen App</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed font-body">Generate instant clearance requests over cellular towers.</p>
                      <button 
                        onClick={() => triggerToast("Initiated kabarangay offline API gateway. Demo QR and APK bundle sent.")}
                        className="w-full mt-2 py-1 text-center bg-[#3FC1A4] hover:bg-[#32af93] text-[#051713] text-[9px] font-bold rounded-lg transition-colors cursor-pointer border-0"
                      >
                        Get Companion App
                      </button>
                    </div>

                    {/* Active User node info */}
                    <div className="hidden sm:flex items-center gap-2 pt-3 border-t border-[#1C3A32]">
                      <img 
                        src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Amado" 
                        alt="Avatar" 
                        className="w-7 h-7 rounded-xl bg-teal-900 border border-[#3FC1A4]/30" 
                      />
                      <div className="truncate min-w-0">
                        <p className="font-semibold text-white truncate text-[11px] leading-tight select-none">Sec. Amado S.</p>
                        <p className="text-[9px] text-[#3FC1A4] truncate select-none font-mono">amado.s@brgy.gov</p>
                      </div>
                    </div>
                    <div className="text-[9px] text-slate-500 hidden sm:block text-center font-mono">
                      SYSTEM ID: #AMADO-60
                    </div>
                  </div>
                </aside>

                {/* 2. MAIN DISPLAY WINDOW */}
                <main className="flex-grow flex flex-col bg-[#FAF9F5] overflow-y-auto relative z-10 text-brand-charcoal" id="laptop-main-screen">
                  
                  {/* Digital Top Utility Banner (Pristine Bento Header layout) */}
                  <div className="h-14 border-b border-[#EADEC9] bg-white px-5 flex items-center justify-between select-none flex-shrink-0">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex gap-1.5 h-3">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-inner hover:brightness-75 transition-all cursor-pointer" />
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-inner hover:brightness-75 transition-all cursor-pointer" />
                        <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-inner hover:brightness-75 transition-all cursor-pointer" />
                      </div>
                      <span className="h-5 w-px bg-[#EADEC9]" />
                      
                      {/* Premium Glass Search Box matching Dribbble details */}
                      <div className="relative max-w-xs md:max-w-sm w-full flex-grow hidden sm:block">
                        <Search className="w-3.5 h-3.5 text-brand-charcoal/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input 
                          type="text" 
                          placeholder="Search records or tasks... (Press ⌘K)" 
                          onClick={() => triggerToast("Search query activated. Typing 'Purok' will filter your households instantly.")}
                          className="w-full bg-[#FCFAF7] border border-[#E2DFD2] rounded-xl text-[11px] pl-9 pr-12 py-1.5 focus:outline-none focus:border-[#1E5649] transition-all font-sans text-brand-charcoal animate-none"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono text-brand-charcoal/40 border border-[#E2DFD2] bg-white px-1.5 py-0.5 rounded-md font-bold">
                          ⌘ K
                        </span>
                      </div>
                    </div>

                    {/* Quick Live Indicators & Notification Elements */}
                    <div className="flex items-center gap-4 text-[11px] font-medium text-brand-charcoal/80">
                      <button 
                        onClick={() => triggerToast("No new administrative messages.")} 
                        className="p-1 px-1.5 hover:bg-slate-50 relative border-0 bg-transparent text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#3FC1A4] rounded-full" />
                      </button>

                      <button 
                        onClick={() => triggerToast("System diagnostics: SMS relays normal. Cloud synchronization running.")} 
                        className="p-1 px-1.5 hover:bg-slate-50 relative border-0 bg-transparent text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-brand-coral rounded-full" />
                      </button>

                      <span className="h-5 w-px bg-[#EADEC9]" />

                      <div className="flex items-center gap-1.5 text-[#1E5649] font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                        SECURE HOST
                      </div>
                    </div>
                  </div>

                  {/* 3. SCROLLABLE SCREEN CONTENT AREA */}
                  <div className="flex-grow p-4 sm:p-6 overflow-y-auto min-h-0 space-y-6">
                    
                    {/* TYPHOON ACTIVE ALARM FLOOD WARNING HEADER BANNER */}
                    {systemAlertLevel === 'TYPHOON_WARNING' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center justify-between shadow-sm animate-pulse"
                      >
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-sans font-bold text-rose-950">ACTIVE EMERGENCY DISASTER BROADCAST</h4>
                            <p className="text-[10px] text-rose-800">Purok 3 (Lowland Creek Area) ordered for preemptive evacuation. Rescue squads alerted.</p>
                          </div>
                        </div>
                        <button 
                          onClick={clearEmergencyLevel} 
                          className="bg-rose-600 hover:bg-rose-700 text-white border-0 font-mono text-[10px] font-bold px-2 py-1 rounded inline-block cursor-pointer transition-colors shadow-sm"
                        >
                          DEACTIVATE SIGNAL
                        </button>
                      </motion.div>
                    )}

                    {/* ACTIVE TAB CONTENT CHANGER */}
                    {activeScreenTab === 'overview' && (
                      <div className="space-y-6">
                        
                        {/* KPI STAT CARDS */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {/* Card 1: Households */}
                          <div className="bg-gradient-to-br from-[#0c2f25] to-[#124b3b] text-white p-4 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all border border-[#061814]">
                            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/85">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-extrabold block">Household Census</span>
                              <h3 className="text-2xl font-black mt-2 leading-none">12,480</h3>
                              <div className="flex items-center gap-1 mt-2 text-[9px] text-[#3FC1A4] font-bold">
                                <span>▲ +8.3% increase in registrations</span>
                              </div>
                            </div>
                          </div>

                          {/* Card 2: Clearances */}
                          <div className="bg-white p-4 rounded-2xl relative overflow-hidden group hover:shadow-md transition-all border border-[#EADEC9]">
                            {pendingDocsCount > 0 && (
                              <span className="absolute top-3 right-3 px-2 py-0.5 text-[8px] bg-red-500 text-white rounded-full font-bold font-mono animate-pulse">URGENT</span>
                            )}
                            <div>
                              <span className="text-[10px] uppercase font-mono tracking-wider text-[#5C6561] font-extrabold block">Pending clearances</span>
                              <h3 className={`text-2xl font-black mt-2 leading-none ${pendingDocsCount > 0 ? 'text-amber-600' : 'text-slate-750'}`}>{pendingDocsCount}</h3>
                              <p className="text-[9px] text-[#5C6561] mt-2 font-semibold">Ready for signature authentication</p>
                            </div>
                          </div>

                          {/* Card 3: Mediations */}
                          <div className="bg-white p-4 rounded-2xl relative overflow-hidden group hover:shadow-md transition-all border border-[#EADEC9]">
                            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs">
                              <Scale className="w-3.5 h-3.5 text-indigo-600" />
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-mono tracking-wider text-[#5C6561] font-extrabold block">ACTIVE DISPUTES</span>
                              <h3 className="text-2xl font-black mt-2 leading-none text-slate-800">{scheduledMediationCount}</h3>
                              <p className="text-[9px] text-emerald-700 font-semibold mt-2">🕊️ 98.4% local peaceful resolutions</p>
                            </div>
                          </div>

                          {/* Card 4: Connectivity */}
                          <div className="bg-white p-4 rounded-2xl relative overflow-hidden group hover:shadow-md transition-all border border-[#EADEC9]">
                            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs">
                              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-mono tracking-wider text-[#5C6561] font-extrabold block">CONNECTED CELLS</span>
                              <h3 className="text-2xl font-black mt-2 leading-none text-slate-800">84.2%</h3>
                              <p className="text-[9px] text-[#1E5649] font-semibold mt-2">Fallback SMS channels operational</p>
                            </div>
                          </div>
                        </div>

                        {/* WIDESCREEN BENTO STRUCTURE */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                          
                          {/* COLUMN LEFT: GRAPH & QUEUES (8 COLS) */}
                          <div className="lg:col-span-8 space-y-5">
                            
                            {/* Graphic Chart */}
                            <div className="bg-white border border-[#EADEC9] p-4 rounded-2xl">
                              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                                <div>
                                  <h4 className="font-sans font-extrabold text-xs text-brand-charcoal uppercase tracking-wider">operations analytics flow</h4>
                                  <p className="text-[9px] text-[#5C6561] mt-0.5 font-mono">Statistical pulse of certificates fulfilled vs local disputes resolved</p>
                                </div>
                                <div className="flex bg-[#FCFAF7] border border-[#E2DFD2] p-1 rounded-lg gap-1">
                                  {(['all', 'clearance', 'disputes'] as const).map((m) => (
                                    <button
                                      key={m}
                                      onClick={() => setActiveChartMetric(m)}
                                      className={`px-2 py-0.5 text-[8px] font-mono rounded font-bold cursor-pointer transition-all ${
                                        activeChartMetric === m
                                          ? 'bg-[#1E5649] text-white shadow-sm'
                                          : 'text-brand-charcoal/70 hover:text-[#1E5649]'
                                      }`}
                                    >
                                      {m === 'all' ? 'ALL' : m === 'clearance' ? 'FILING' : 'LUPON'}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* CHART CONTAINER */}
                              <div className="relative w-full aspect-[22/9] select-none bg-[#FCFAF7] border border-[#EADEC9] p-2.5 rounded-xl">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 140" preserveAspectRatio="none">
                                  <defs>
                                    <linearGradient id="clearanceGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#1E5649" stopOpacity="0.32" />
                                      <stop offset="100%" stopColor="#1E5649" stopOpacity="0.0" />
                                    </linearGradient>
                                    <linearGradient id="disputesGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#E9C46A" stopOpacity="0.32" />
                                      <stop offset="100%" stopColor="#E9C46A" stopOpacity="0.0" />
                                    </linearGradient>
                                  </defs>
                                  {[20, 50, 80, 110].map((y) => (
                                    <line key={y} x1="30" y1={y} x2="475" y2={y} stroke="#EDEDE4" strokeWidth="1" strokeDasharray="2 3" />
                                  ))}
                                  <line x1="30" y1="120" x2="475" y2="120" stroke="#DDD8C4" strokeWidth="1" />
                                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                                    <text key={i} x={35 + i * 85} y="132" textAnchor="middle" fill="#6B7280" className="text-[8px] font-mono font-bold">{month.toUpperCase()}</text>
                                  ))}
                                  {activeChartMetric !== 'disputes' && (
                                    <>
                                      <path d="M35,90 L120,80 L205,60 L290,70 L375,40 L460,20 L460,120 L35,120 Z" fill="url(#clearanceGradient)" />
                                      <path d="M35,90 L120,80 L205,60 L290,70 L375,40 L460,20" fill="none" stroke="#1E5649" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </>
                                  )}
                                  {activeChartMetric !== 'clearance' && (
                                    <>
                                      <path d="M35,80 L120,95 L205,55 L290,38 L375,76 L460,50 L460,120 L35,120 Z" fill="url(#disputesGradient)" className="opacity-70" />
                                      <path d="M35,80 L120,95 L205,55 L290,38 L375,76 L460,50" fill="none" stroke="#E9C46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </>
                                  )}
                                  {hoveredPoint !== null && (
                                    <>
                                      <line x1={35 + hoveredPoint * 85} y1="20" x2={35 + hoveredPoint * 85} y2="120" stroke="#90A198" strokeWidth="1.5" strokeDasharray="3 3" />
                                      <circle cx={35 + hoveredPoint * 85} cy={hoveredPoint === 0 ? 90 : hoveredPoint === 1 ? 80 : hoveredPoint === 2 ? 60 : hoveredPoint === 3 ? 70 : hoveredPoint === 4 ? 40 : 20} r="4" fill="#1E5649" stroke="white" strokeWidth="1.5" />
                                    </>
                                  )}
                                  {[0, 1, 2, 3, 4, 5].map((idx) => (
                                    <rect key={idx} x={15 + idx * 85} y="15" width="45" height="110" fill="transparent" className="cursor-pointer" onMouseEnter={() => setHoveredPoint(idx)} onMouseLeave={() => setHoveredPoint(null)} />
                                  ))}
                                </svg>
                              </div>

                              <div className="h-8 flex items-center justify-center font-mono text-[8.5px] uppercase mt-2.5 px-3 py-1.5 bg-[#FAF9F5] border border-[#EBEAE3] rounded-lg">
                                {hoveredPoint === null ? (
                                  <span className="text-slate-400 font-sans animate-none flex items-center gap-1">💡 Hover graph dots to view monthly performance.</span>
                                ) : (
                                  <div className="flex items-center gap-4 text-brand-charcoal font-bold">
                                    <span className="text-[#1E5649]">{['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE'][hoveredPoint]}</span>
                                    <span className="h-3 w-px bg-slate-200" />
                                    <span>📁 Clearances Fulfillments: <code className="text-[#1E5649] bg-[#EAE7DF] px-1 py-0.5 rounded font-mono">{[85, 110, 145, 130, 195, 240][hoveredPoint]}</code></span>
                                    <span>⚖️ Disputes Resolved: <code className="text-amber-600 bg-[#FAF1E3] px-1 py-0.5 rounded font-mono">{[12, 8, 18, 24, 14, 21][hoveredPoint]}</code></span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* PENDING DOCUMENT QUEUE QUEUE */}
                            <div className="bg-white border border-[#EADEC9] p-4 rounded-2xl">
                              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 mb-3.5">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-[#1E5649]" />
                                  <h4 className="font-sans font-extrabold text-xs text-brand-charcoal uppercase tracking-wider">Pending clearances requests</h4>
                                </div>
                                <button onClick={() => setActiveScreenTab('documents')} className="text-[10px] font-bold text-[#1E5649] hover:underline flex items-center gap-0.5 border-0 bg-transparent cursor-pointer">
                                  All Queues <ChevronRight className="w-3 h-3" />
                                </button>
                              </div>

                              <div className="space-y-2.5">
                                {docRequests.filter(r => r.status === 'Pending').length === 0 ? (
                                  <div className="text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                                    <p className="font-bold text-[11px] text-slate-700 mt-1">Fulfillment Dashboard Clear!</p>
                                  </div>
                                ) : (
                                  docRequests.filter(r => r.status === 'Pending').slice(0, 2).map((req) => (
                                    <div key={req.id} className="bg-[#FCFAF7] border border-[#EADEC9] p-3 rounded-xl flex items-center justify-between hover:shadow-xs transition-shadow duration-200">
                                      <div>
                                        <p className="font-extrabold text-brand-charcoal text-[11px]">{req.residentName}</p>
                                        <p className="text-[9px] text-[#1E5649] font-mono mt-0.5">{req.type} • {req.purok}</p>
                                      </div>
                                      <button 
                                        onClick={() => approveDocument(req.id, req.residentName)}
                                        disabled={signatureLoading === req.id}
                                        className="bg-[#1E5649] hover:bg-[#12382f] text-white border-0 font-bold text-[9px] uppercase px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer"
                                      >
                                        {signatureLoading === req.id ? (
                                          <span className="w-2.5 h-2.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                          <ShieldCheck className="w-3.5 h-3.5" />
                                        )}
                                        <span>Sign & Dispatch</span>
                                      </button>
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>

                            {/* LUPON DISPUTE MONITOR LIST */}
                            <div className="bg-white border border-[#EADEC9] p-4 rounded-2xl">
                              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 mb-3.5">
                                <div className="flex items-center gap-2">
                                  <Scale className="w-4 h-4 text-indigo-700" />
                                  <h4 className="font-sans font-extrabold text-xs text-brand-charcoal uppercase tracking-wider">Active dispute cases mediation</h4>
                                </div>
                                <button onClick={() => setActiveScreenTab('lupon')} className="text-[10px] font-bold text-[#1E5649] hover:underline flex items-center gap-0.5 border-0 bg-transparent cursor-pointer">
                                  All Cases <ChevronRight className="w-3 h-3" />
                                </button>
                              </div>

                              <div className="space-y-2.5">
                                {disputes.slice(0, 2).map((dsp) => (
                                  <div key={dsp.id} className="bg-[#FCFAF7] border border-[#EADEC9] p-3 rounded-xl flex items-center justify-between hover:shadow-xs transition-shadow duration-205">
                                    <div>
                                      <p className="font-extrabold text-brand-charcoal text-[11px]">⚖️ {dsp.complainant} vs {dsp.respondent}</p>
                                      <p className="text-[9px] text-slate-500 mt-0.5 font-mono">{dsp.nature} • Filed {dsp.dateFiled}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[8px] px-1.5 py-0.5 font-mono bg-amber-50 text-amber-700 border border-amber-200 rounded-md font-bold uppercase">{dsp.status}</span>
                                      {dsp.status !== 'Resolved' && (
                                        <button 
                                          onClick={() => resolveDispute(dsp.id, dsp.complainant)}
                                          className="text-[#1E5649] hover:text-[#12382f] bg-emerald-50 hover:bg-emerald-100 font-bold border border-emerald-250 font-mono text-[9px] px-2.5 py-1 rounded-md transition-all cursor-pointer"
                                        >
                                          Seal
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>

                          {/* COLUMN RIGHT: PREMIUM DRIBBBLE WIDGET CONTAINER (4 COLS) */}
                          <div className="lg:col-span-4 space-y-5">
                            
                            {/* WIDGET 1: DRIBBBLE REMINDERS (Reddish/Teal event block) */}
                            <div className="bg-white border border-[#EADEC9] p-4 rounded-2xl relative overflow-hidden">
                              <div className="flex justify-between items-center mb-3">
                                <span className="font-sans font-extrabold text-[11px] text-brand-charcoal uppercase tracking-wider block">Upcoming Assembly</span>
                                <span className="text-[9px] bg-red-100 text-red-600 font-bold font-mono px-1.5 py-0.5 rounded-md">LGU EVENT</span>
                              </div>
                              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3 text-left">
                                <p className="font-extrabold text-rose-950 text-xs">Purok 3 Assembly Meeting</p>
                                <p className="text-[10px] text-rose-800 font-mono mt-1">Time: Today • 02:00 PM</p>
                                <p className="text-[9px] text-slate-500 mt-1.5 leading-relaxed font-body">Review flood protection levies and fallback satellite devices network alerts.</p>
                                <button 
                                  onClick={() => triggerToast("Weekly assembly commencing signal issued. All residents notified.")}
                                  className="w-full mt-3 py-1.5 text-center bg-rose-600 hover:bg-rose-700 text-white font-bold text-[9px] rounded-lg transition-colors border-0 cursor-pointer"
                                >
                                  Begin Assembly Session
                                </button>
                              </div>
                            </div>

                            {/* WIDGET 2: PROJECT PROGRESS RADIAL WHEEL GAUGE */}
                            <div className="bg-white border border-[#EADEC9] p-4 rounded-2xl">
                              <span className="font-sans font-extrabold text-[11px] text-[#5C6561] uppercase tracking-wider block mb-3 pl-1">Digitalization Index</span>
                              
                              <div className="flex items-center gap-4 bg-[#FCFAF7] p-3 rounded-xl border border-slate-100">
                                {/* SVG Ring */}
                                <div className="relative w-16 h-16 flex-shrink-0">
                                  <svg className="w-full h-full rotate-[-95deg]" viewBox="0 0 36 36">
                                    <path className="text-slate-150" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-[#1E5649]" strokeDasharray="92, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                                    <span className="text-[11px] font-black leading-none text-[#1E5649]">92%</span>
                                    <span className="text-[6px] font-mono font-bold text-slate-400">INDEX</span>
                                  </div>
                                </div>
                                
                                <div className="text-left min-w-0">
                                  <p className="font-extrabold text-[11px] text-brand-charcoal truncate">Digitally Swapped</p>
                                  <p className="text-[9px] text-[#5C6561] leading-tight mt-1">92% of households have scanned & verified profiles</p>
                                </div>
                              </div>
                            </div>

                            {/* WIDGET 3: LIVE OPERATIONAL TIC TICK LOGS (Dribbble dark timer card) */}
                            <div className="bg-gradient-to-br from-[#0A2E24] via-[#08221b] to-[#04130f] border border-[#041511] p-4 rounded-2xl text-white relative overflow-hidden shadow-inner">
                              <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-[#3FC1A4]/10 rounded-full blur-xl pointer-events-none" />
                              
                              <div className="flex items-center justify-between mb-3 text-white/90">
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5 text-[#3FC1A4] animate-spin" style={{ animationDuration: '6s' }} />
                                  <span className="text-[9px] uppercase font-mono font-black tracking-widest text-[#3FC1A4]">TIME TRACKER</span>
                                </div>
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              </div>

                              <p className="text-[9px] text-slate-400">Current Administrative Session Elapsed:</p>
                              
                              {/* Glowing digital ticker */}
                              <div className="text-2xl font-black mt-2 font-mono tracking-widest text-slate-100 flex items-center justify-center py-2.5 px-3 bg-[#030e0b]/50 rounded-xl border border-white/5 shadow-inner">
                                {formatTimer(secondsElapsed)}
                              </div>

                              <div className="flex gap-2 mt-3 justify-center">
                                <button 
                                  onClick={() => {
                                    setIsTimerRunning(!isTimerRunning);
                                    triggerToast(`Administrative live chronometer ${isTimerRunning ? 'PAUSED' : 'RESUMED'}.`);
                                  }}
                                  className="px-2.5 py-1 bg-[#3FC1A4] hover:bg-[#32af93] text-[#051713] text-[9.5px] border-0 rounded font-bold flex items-center gap-1 transition-colors cursor-pointer"
                                >
                                  {isTimerRunning ? (
                                    <>
                                      <Pause className="w-2.5 h-2.5 fill-current" />
                                      <span>Pause Track</span>
                                    </>
                                  ) : (
                                    <>
                                      <Play className="w-2.5 h-2.5 fill-current" />
                                      <span>Resume</span>
                                    </>
                                  )}
                                </button>
                                <button 
                                  onClick={() => {
                                    setSecondsElapsed(0);
                                    triggerToast("Session chronometer successfully resetted.");
                                  }}
                                  className="px-2.5 py-1 bg-transparent hover:bg-white/5 text-slate-300 border border-white/20 hover:text-white text-[9.5px] rounded font-bold transition-colors cursor-pointer"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>
                    )}

                                          {/* RESIDENTS REGISTRY SCREEN */}
                    {activeScreenTab === 'residents' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-[#EADEC9] p-3 rounded-2xl shadow-xs">
                          <div className="relative flex-grow max-w-sm">
                            <Search className="w-3.5 h-3.5 text-brand-charcoal/50 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input 
                              type="text" 
                              placeholder="Search household names or tags... (e.g. Mendoza)" 
                              value={residentSearchQuery}
                              onChange={(e) => setResidentSearchQuery(e.target.value)}
                              className="w-full bg-[#FCFAF7] border border-[#E2DFD2] rounded-xl text-[11px] pl-8.5 pr-3 py-1.5 text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-[#1E5649] transition-colors"
                            />
                          </div>
                          
                          {/* Purok Filter Buttons */}
                          <div className="flex flex-wrap gap-1.5 items-center">
                            <span className="text-[10px] text-brand-charcoal/60 font-mono flex items-center gap-1 font-bold">
                              <Filter className="w-3 h-3 text-[#1E5649]" /> PUROK FILE:
                            </span>
                            {['all', 'Purok 1', 'Purok 2', 'Purok 3', 'Purok 4'].map(purok => (
                              <button 
                                key={purok}
                                onClick={() => setSelectedPurokFilter(purok)}
                                className={`px-2.5 py-1 text-[10px] rounded-lg font-mono border transition-all cursor-pointer ${
                                  selectedPurokFilter === purok 
                                    ? 'bg-[#1E5649] text-white border-transparent font-bold shadow-xs' 
                                    : 'bg-white text-brand-charcoal/70 border-[#E2DFD2] hover:text-[#1E5649] hover:bg-slate-50'
                                  }`}
                              >
                                {purok.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Resident Table inside laptop screen */}
                        <div className="bg-white border border-[#EADEC9] rounded-2xl overflow-x-auto shadow-sm">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-[#FCFAF7] border-b border-[#EADEC9] text-[10px] text-brand-charcoal/70 font-mono">
                                <th className="px-5 py-3">RESIDENT NAME</th>
                                <th className="px-5 py-3">SECTOR CLUSTER</th>
                                <th className="px-5 py-3">VULNERABILITY CATEGORY</th>
                                <th className="px-5 py-3">SECURITY STATUS</th>
                                <th className="px-5 py-3 text-right">METRIC LOGS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(() => {
                                const list = residents
                                  .filter(r => selectedPurokFilter === 'all' || r.purok === selectedPurokFilter)
                                  .filter(r => r.name.toLowerCase().includes(residentSearchQuery.toLowerCase()) || 
                                               r.category.toLowerCase().includes(residentSearchQuery.toLowerCase()));
                                
                                if (list.length === 0) {
                                  return (
                                    <tr>
                                      <td colSpan={5} className="text-center py-10">
                                        <div className="max-w-xs mx-auto">
                                          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto stroke-1" />
                                          <p className="font-extrabold text-[#1E5649] mt-2 text-[12px] uppercase tracking-wide">No Barangay Records Found</p>
                                          <p className="text-[10px] text-[#5C6561] mt-0.5 leading-relaxed">No registered citizens match the current criteria "{residentSearchQuery}" in filter.</p>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                }

                                return list.map(res => (
                                  <tr key={res.id} className="border-b border-[#F5F0E4] hover:bg-[#FAF9F5] transition-colors">
                                    <td className="px-5 py-3.5 font-semibold text-brand-charcoal text-[11.5px]">{res.name}</td>
                                    <td className="px-5 py-3.5 font-mono text-brand-charcoal/80 text-[10.5px]">{res.purok}</td>
                                    <td className="px-5 py-3.5">
                                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold ${
                                        res.category === 'Senior' 
                                          ? 'bg-[#E9C46A]/20 text-[#7D5A12] border border-[#E9C46A]/35' 
                                          : res.category === 'Single Parent' 
                                            ? 'bg-pink-50 text-pink-700 border border-pink-150/50' 
                                            : res.category === 'Bedridden' 
                                              ? 'bg-rose-50 text-rose-700 border border-rose-150/50 animate-pulse' 
                                              : 'bg-slate-100 text-slate-700'
                                      }`}>
                                        {res.category}
                                      </span>
                                    </td>
                                    <td className="px-5 py-3.5">
                                      <span className={`inline-flex items-center gap-1 text-[9px] font-semibold ${
                                        res.status === 'Verified' ? 'text-emerald-700' : 'text-amber-700'
                                      }`}>
                                        <Check className={`w-3 h-3 ${res.status === 'Verified' ? 'text-emerald-600' : 'text-amber-600'}`} />
                                        {res.status}
                                      </span>
                                    </td>
                                    <td className="px-5 py-3.5 text-right font-mono text-brand-charcoal/50 text-[10px]">{res.lastActive}</td>
                                  </tr>
                                ));
                              })()}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* DOCUMENT REQUESTS SCREEN */}
                    {activeScreenTab === 'documents' && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#E2DFD2] p-4 rounded-xl flex items-center justify-between shadow-sm">
                          <div>
                            <h3 className="font-sans font-extrabold text-sm text-brand-charcoal uppercase tracking-wide">DIGITAL SIGNATURE FULFILLMENT PANEL</h3>
                            <p className="text-[10px] text-brand-charcoal/60">Review, digitally sign, and issue verified official municipal QR codes to applicants. Eliminates line queues.</p>
                          </div>
                          <span className="px-3 py-1 font-mono text-[10px] bg-[#1E5649]/10 text-[#1E5649] border border-[#1E5649]/20 rounded font-bold">
                            SECURE KEY ALIVE: SEC-7801-AMADO
                          </span>
                        </div>

                        <div className="space-y-3">
                          {docRequests.map(req => (
                            <div key={req.id} className="bg-white border border-[#E2DFD2] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-brand-charcoal text-[12px]">{req.residentName}</h4>
                                  <span className="text-[9px] font-mono text-brand-charcoal/70 bg-[#FCFAF7] border border-[#E5E1D5] px-1.5 py-0.5 rounded">{req.purok}</span>
                                </div>
                                <p className="text-[11px] text-[#1E5649] font-semibold mt-1">{req.type}</p>
                                <p className="text-[10px] text-brand-charcoal/50 font-mono mt-0.5 font-bold">Application ID: #{req.id.toUpperCase()} • Received {req.timestamp}</p>
                              </div>

                              <div className="flex items-center gap-3">
                                {req.status === 'Approved' ? (
                                  <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-250 text-[10px] font-bold">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    SIGNED & TRANSMITTED (SMS)
                                  </div>
                                ) : (
                                  <>
                                    <button
                                      onClick={() => approveDocument(req.id, req.residentName)}
                                      disabled={signatureLoading === req.id}
                                      className="bg-[#1E5649] hover:bg-[#153D34] text-white border-0 font-bold text-[10px] uppercase px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                                    >
                                      {signatureLoading === req.id ? (
                                        <>
                                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                          SIGNING LGU CRYPTO KEY...
                                        </>
                                      ) : (
                                        <>
                                          <ShieldCheck className="w-3.5 h-3.5 text-white" />
                                          Approve with Sign
                                        </>
                                      )}
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* LUPON DISPUTE MANAGEMENT */}
                    {activeScreenTab === 'lupon' && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#E2DFD2] p-4 rounded-xl shadow-sm">
                          <h3 className="font-sans font-extrabold text-sm text-brand-charcoal uppercase tracking-wide font-body">LUPON TAGAPAMAYAPA CASE TRACKER</h3>
                          <p className="text-[10px] text-brand-charcoal/60">Record peaceful localized conflict mediations of the local barangay council, keeping neighborhood peace intact without loading municipal courts.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {disputes.map(dsp => (
                            <div key={dsp.id} className="bg-white border border-[#E2DFD2] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-100">CASE CONTROVERSY</span>
                                  <span className="text-[9px] text-brand-charcoal/50 font-mono">ID: #{dsp.id.toUpperCase()}</span>
                                </div>
                                <h4 className="font-semibold text-brand-charcoal text-[12px] mt-1">{dsp.complainant} vs. {dsp.respondent}</h4>
                                <p className="text-[11px] text-[#5C6561] mt-1 font-mono">Dispute Matter: {dsp.nature}</p>
                                <p className="text-[9px] text-brand-charcoal/40 font-mono mt-0.5">Filed: {dsp.dateFiled}</p>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${
                                  dsp.status === 'Resolved' 
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                                    : dsp.status === 'Scheduled Mediation' 
                                      ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                                      : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                                }`}>
                                  {dsp.status}
                                </span>

                                {dsp.status !== 'Resolved' && (
                                  <button
                                    onClick={() => resolveDispute(dsp.id, dsp.complainant)}
                                    className="bg-slate-100 hover:bg-slate-200 text-brand-charcoal border border-[#E2DFD2] font-mono text-[9px] font-bold px-3 py-1.5 rounded transition-all cursor-pointer"
                                  >
                                    Mediation Sealed
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* EMERGENCY CRISIS SMS ALERT PANEL */}
                    {activeScreenTab === 'alerts' && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#E2DFD2] p-4 rounded-xl shadow-sm">
                          <h3 className="font-sans font-extrabold text-sm text-brand-charcoal uppercase tracking-wide">Emergency Crisis Alert Broadcasting</h3>
                          <p className="text-[10px] text-brand-charcoal/60">Broadcast warning SMS alerts instantly to all registered cellular numbers. Works even on legacy phones offline.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          
                          {/* Alert Composer Mock */}
                          <div className="bg-[#FCFAF7] border border-[#E2DFD2] p-4 rounded-xl space-y-4 shadow-sm">
                            <h4 className="font-sans font-bold text-xs text-brand-charcoal uppercase tracking-wide">Crisis Broadcast Settings</h4>
                            
                            <div className="space-y-2">
                              <label className="text-[9px] font-mono text-brand-charcoal/60 block uppercase font-bold">ALERT MASS CHANNELS</label>
                              <div className="bg-white border border-[#E5E1D5] p-3 rounded-lg flex items-center justify-between text-[11px] text-[#2D3A37]">
                                <span>🚨 SMS Mobile Gateway Pool</span>
                                <span className="text-emerald-700 font-bold font-mono">ACTIVE (842 RESIDENTS)</span>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-mono text-brand-charcoal/60 block uppercase font-bold">Alert Message Text (Tagalog/Ingles)</label>
                              <textarea 
                                readOnly 
                                value="[KABARANGAY EMERGENCY ALERT] Purok 3 Lowland Creek Area warning. Ang tubig sa ilog ay umaapaw na. Mangyaring lumikas nang mahinahon patungo sa Brgy Silangan Covered Court evacuation. Squad Flatboats are on standby." 
                                className="w-full h-24 bg-white border border-[#E5E1D5] rounded-lg p-2.5 text-[11px] text-red-800 select-all focus:outline-none resize-none font-body"
                              />
                            </div>

                            <div className="flex gap-2.5 pt-2">
                              <button
                                onClick={triggerEmergencyBroadcast}
                                disabled={alertBroadcasting || systemAlertLevel === 'TYPHOON_WARNING'}
                                className={`flex-grow border font-bold text-[10px] uppercase py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer ${
                                  systemAlertLevel === 'TYPHOON_WARNING'
                                    ? 'bg-red-50 text-red-400 border-red-100 cursor-not-allowed'
                                    : 'bg-red-600 hover:bg-red-700 text-white border-0 shadow-sm'
                                }`}
                              >
                                {alertBroadcasting ? (
                                  <>
                                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    TRANSMITTING TO CELL TOWERS...
                                  </>
                                ) : (
                                  <>
                                    <AlertTriangle className="w-4 h-4 text-white" />
                                    BROADCAST TO ALL PHONES
                                  </>
                                )}
                              </button>

                              {systemAlertLevel === 'TYPHOON_WARNING' && (
                                <button 
                                  onClick={clearEmergencyLevel}
                                  className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 font-bold text-[10px] uppercase px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                                >
                                  Clear Incident
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Live Evacuation Cluster Tracker */}
                          <div className="bg-[#FCFAF7] border border-[#E2DFD2] p-4 rounded-xl space-y-3.5 flex flex-col justify-between shadow-sm">
                            <div>
                              <h4 className="font-sans font-bold text-xs text-brand-charcoal uppercase tracking-wide">Vulnerable Sector Heatmap</h4>
                              <p className="text-[10px] text-brand-charcoal/60">Auto-calculated evacuation priorities based on verified census demographics.</p>
                              
                              <div className="space-y-2 mt-3">
                                <div>
                                  <div className="flex justify-between text-[10px] font-mono mb-1 text-brand-charcoal/80">
                                    <span>Elderly Citizens (Purok 3)</span>
                                    <span className="text-brand-coral font-bold font-sans">18 Bedridden • 42 Senior</span>
                                  </div>
                                  <div className="w-full bg-[#EAE7DF] h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-500 h-full rounded-full" style={{ width: '85%' }} />
                                  </div>
                                </div>

                                <div>
                                  <div className="flex justify-between text-[10px] font-mono mb-1 text-brand-charcoal/80">
                                    <span>Single Parents with infants (Purok 4)</span>
                                    <span className="text-pink-600 font-bold font-sans">12 Mothers</span>
                                  </div>
                                  <div className="w-full bg-[#EAE7DF] h-2 rounded-full overflow-hidden">
                                    <div className="bg-pink-500 h-full rounded-full" style={{ width: '60%' }} />
                                  </div>
                                </div>

                                <div>
                                  <div className="flex justify-between text-[10px] font-mono mb-1 text-brand-charcoal/80">
                                    <span>Evacuation Center Capacity</span>
                                    <span className="text-brand-primary font-bold font-sans">45% Filled</span>
                                  </div>
                                  <div className="w-full bg-[#EAE7DF] h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#59CD90] h-full rounded-full" style={{ width: '45%' }} />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white border border-[#E2DFD2] p-2.5 rounded-lg text-brand-charcoal/70 text-[10px] leading-relaxed">
                              💡 <strong>Offline Protocol:</strong> If towers/internet lines crash due to high wind, residents can text <code className="text-brand-primary bg-[#FAF8F5] px-1 py-0.5 rounded font-mono border border-[#E2DFD2]">SOS 112</code> to open an SMS packet tracker.
                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                  </div>
                </main>

              </div>

              {/* SUCCESS TOAST NOTIFIER INSIDE SCREEN */}
              <AnimatePresence>
                {successToast && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-md bg-[#FCFAF5] border-2 border-[#1E5649] text-brand-charcoal px-4 py-3.5 rounded-xl shadow-[0_15px_30px_rgba(30,40,36,0.15)] flex items-start gap-3 z-50 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1E5649] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-brand-charcoal">System Signal Succeeded</p>
                      <p className="text-[#5C6561] mt-1 pr-4">{successToast}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Laptop Base, Keyboard deck bezel, Trackpad Hinge */}
          <div className="relative">
            {/* The precise Macbook style keyboard base structure */}
            <div className="bg-gradient-to-b from-[#2E3039] via-[#3C3E4B] to-[#16171B] h-3.5 sm:h-5 w-[112%] ml-[-6%] rounded-b-[18px] sm:rounded-b-[24px] relative shadow-[0_15px_45px_10px_rgba(0,0,0,0.22)] border-x border-[#1A1B22] border-b border-t border-white/5 z-20">
              
              {/* Central Trackpad and Lid Opening Indentation Wedge */}
              <div className="mx-auto w-24 sm:w-36 h-1 sm:h-1.5 bg-black/60 rounded-b-md relative border-t border-white/10" />
            </div>

            {/* Simulated Desktop ambient drop shadows & reflection under the Laptop */}
            <div className="absolute top-1 left-[-4%] right-[-4%] h-12 bg-black/35 blur-2xl rounded-full -z-10 pointer-events-none opacity-90" />
            <div className="absolute top-3 left-[-2%] right-[-2%] h-6 bg-black/15 blur-md rounded-full -z-10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
