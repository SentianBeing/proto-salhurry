'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  CPL_BENCHMARKS,
  calculateLeadEstimates,
  LeadEstimateResult
} from '@/lib/cpl-benchmarks';
import { MetaIcon, GoogleIcon } from '@/components/brand-icons';
import {
  Sliders,
  AlertTriangle,
  Zap,
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Layers,
  Star
} from 'lucide-react';
import { useContactModal } from '@/context/contact-modal-context';

export default function PackageCustomizer() {
  const { openModal } = useContactModal();

  // Step 1 — Business basics
  const [industry, setIndustry] = useState<string>('real_estate');
  const [adBudget, setAdBudget] = useState<number>(20000);

  // Step 2 — Platform selection
  const [platform, setPlatform] = useState<'meta' | 'google' | 'both' | 'none'>('both');

  // Step 3 — Creative volume
  const [creatives, setCreatives] = useState<'4' | '8-10' | '15+'>('8-10');

  // Step 4 — Video/reels
  const [reels, setReels] = useState<'none' | '1' | '4' | '4-6pro'>('4');

  // Step 5 — Add-ons
  const [seo, setSeo] = useState<'none' | 'basic' | 'advanced'>('basic');
  const [webMaint, setWebMaint] = useState<'none' | 'minor' | 'full'>('minor');
  const [productShoot, setProductShoot] = useState<boolean>(false);
  const [brandGuidance, setBrandGuidance] = useState<boolean>(false);
  const [landingPage, setLandingPage] = useState<boolean>(false);
  const [dedicatedManager, setDedicatedManager] = useState<boolean>(false);

  // Calculate pricing
  const pricingDetails = useMemo(() => {
    let monthlyFee = 6000; // Base management fee

    // Platform modifier
    if (platform === 'google' || platform === 'meta') {
      monthlyFee += 2500;
    } else if (platform === 'both') {
      monthlyFee += 5000;
    }

    // Creative modifier
    if (creatives === '4') monthlyFee += 1500;
    else if (creatives === '8-10') monthlyFee += 4500;
    else if (creatives === '15+') monthlyFee += 8000;

    // Video modifier
    if (reels === '1') monthlyFee += 2000;
    else if (reels === '4') monthlyFee += 6000;
    else if (reels === '4-6pro') monthlyFee += 9500;

    // Add-on modifiers
    if (seo === 'basic') monthlyFee += 3000;
    else if (seo === 'advanced') monthlyFee += 7000;

    if (webMaint === 'minor') monthlyFee += 2000;
    else if (webMaint === 'full') monthlyFee += 5000;

    if (productShoot) monthlyFee += 6000;
    if (brandGuidance) monthlyFee += 4000;
    if (dedicatedManager) monthlyFee += 5000;

    let oneTimeFee = 0;
    if (landingPage) {
      oneTimeFee = 12000;
    }

    // Check exact standard package presets to snap cleanly:
    const isStarterPreset =
      (platform === 'meta' || platform === 'google') &&
      creatives === '4' &&
      reels === 'none' &&
      seo === 'none' &&
      webMaint === 'none' &&
      !productShoot &&
      !brandGuidance &&
      !landingPage &&
      !dedicatedManager;

    const isBusinessGrowthPreset =
      platform === 'both' &&
      creatives === '8-10' &&
      reels === '4' &&
      seo === 'basic' &&
      webMaint === 'minor' &&
      !productShoot &&
      !brandGuidance &&
      !landingPage &&
      !dedicatedManager;

    const isPremiumBrandPreset =
      platform === 'both' &&
      creatives === '15+' &&
      reels === '4-6pro' &&
      seo === 'advanced' &&
      webMaint === 'full' &&
      productShoot &&
      brandGuidance &&
      landingPage &&
      dedicatedManager;

    let matchedTierName: string | null = null;

    if (isStarterPreset) {
      monthlyFee = 9999;
      matchedTierName = 'Starter Package';
    } else if (isBusinessGrowthPreset) {
      monthlyFee = 19999;
      matchedTierName = 'Business Growth Package';
    } else if (isPremiumBrandPreset) {
      monthlyFee = 29999;
      oneTimeFee = 0; // Waived / bundled in Premium Brand
      matchedTierName = 'Premium Brand Package';
    } else {
      // Floor limit: Never go below Starter (₹9,999)
      if (monthlyFee < 9999) {
        monthlyFee = 9999;
      }
    }

    return {
      monthlyFee,
      oneTimeFee,
      matchedTierName,
    };
  }, [
    platform,
    creatives,
    reels,
    seo,
    webMaint,
    productShoot,
    brandGuidance,
    landingPage,
    dedicatedManager,
  ]);

  // Calculate Lead Estimates
  const leadEstimates: LeadEstimateResult | null = useMemo(() => {
    return calculateLeadEstimates(industry, adBudget, platform);
  }, [industry, adBudget, platform]);

  return (
    <div className="bg-[#F9FAFB] border border-gray-200 rounded-[40px] p-6 sm:p-10 shadow-xl relative overflow-hidden text-gray-900">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A3E635]/20 text-black text-xs uppercase tracking-widest font-bold mb-3">
          <Sliders className="w-3.5 h-3.5" /> Pick & Mix Pricing Engine
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Custom Package Builder & Lead Estimator
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm">
          Customize your channels, content volume, and add-ons to see live transparent fees and directional lead projections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs (8 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: BUSINESS BASICS */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-[#A3E635] text-black flex items-center justify-center text-xs font-bold">1</span>
              Business Basics & Ad Spend
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Select Your Industry / Category
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:border-[#A3E635] transition-colors"
              >
                {Object.values(CPL_BENCHMARKS).map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-700">
                  Monthly Ad Budget (Paid directly to Google/Meta)
                </label>
                <span className="text-sm font-extrabold text-[#A3E635] bg-black px-3 py-1 rounded-lg">
                  ₹{adBudget.toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={adBudget}
                onChange={(e) => setAdBudget(Number(e.target.value))}
                className="w-full accent-[#A3E635] cursor-pointer bg-gray-200 rounded-lg h-2"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>₹5,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
                <span>₹2,00,000+</span>
              </div>
            </div>

            {/* Low budget warning */}
            {adBudget < 5000 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-amber-800 text-xs font-medium">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <span>
                  This budget may be too low to generate meaningful data for optimization — we recommend a minimum of ₹10,000/month for reliable results.
                </span>
              </div>
            )}
          </div>

          {/* STEP 2: PLATFORM SELECTION WITH BRAND LOGO ICONS */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-[#A3E635] text-black flex items-center justify-center text-xs font-bold">2</span>
              Platform Channels
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'meta', label: 'Meta Ads', icon: <MetaIcon className="w-4 h-4 text-[#0084FF] shrink-0" />, sub: 'Instagram & FB' },
                { id: 'google', label: 'Google Ads', icon: <GoogleIcon className="w-4 h-4 shrink-0" />, sub: 'Search & YouTube' },
                { id: 'both', label: 'Both Platforms', icon: <div className="flex items-center gap-1 shrink-0"><MetaIcon className="w-3.5 h-3.5 text-[#0084FF]" /><GoogleIcon className="w-3.5 h-3.5" /></div>, sub: 'Meta + Google (+₹5K)' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPlatform(item.id as any)}
                  className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    platform === item.id
                      ? 'bg-[#A3E635] text-black border-[#A3E635] font-bold shadow-sm'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <div className={`text-[10px] ${platform === item.id ? 'text-black/80' : 'text-gray-500'}`}>
                    {item.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3 & 4: CREATIVE & VIDEO VOLUME */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 space-y-6 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#A3E635] text-black flex items-center justify-center text-xs font-bold">3</span>
                Static Creative Posters
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: '4', label: '4 Creatives/mo', desc: 'Basic setup' },
                  { id: '8-10', label: '8–10 Creatives/mo', desc: 'Active campaigns' },
                  { id: '15+', label: '15+ Creatives/mo', desc: 'High frequency' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCreatives(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      creatives === item.id
                        ? 'bg-[#A3E635] text-black border-[#A3E635] font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#A3E635] text-black flex items-center justify-center text-xs font-bold">4</span>
                Reels & Video Content
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'none', label: 'None' },
                  { id: '1', label: '1 Reel/mo' },
                  { id: '4', label: '4 Reels/mo' },
                  { id: '4-6pro', label: '4–6 Pro Reels/mo' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setReels(item.id as any)}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                      reels === item.id
                        ? 'bg-[#A3E635] text-black border-[#A3E635] font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 5: ADD-ONS */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-[#A3E635] text-black flex items-center justify-center text-xs font-bold">5</span>
              Add-ons & Technical Services
            </div>

            <div className="space-y-3">
              {/* SEO options */}
              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-gray-900">SEO Optimization</div>
                  <div className="text-[10px] text-gray-500">Search engine visibility & groundwork</div>
                </div>
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setSeo('none')}
                    className={`px-3 py-1.5 rounded-lg border ${seo === 'none' ? 'bg-gray-200 text-gray-900 font-bold border-gray-300' : 'text-gray-500 border-gray-200'}`}
                  >
                    None
                  </button>
                  <button
                    onClick={() => setSeo('basic')}
                    className={`px-3 py-1.5 rounded-lg border ${seo === 'basic' ? 'bg-[#A3E635] text-black font-bold border-[#A3E635]' : 'text-gray-500 border-gray-200'}`}
                  >
                    Basic (+₹3k)
                  </button>
                  <button
                    onClick={() => setSeo('advanced')}
                    className={`px-3 py-1.5 rounded-lg border ${seo === 'advanced' ? 'bg-[#A3E635] text-black font-bold border-[#A3E635]' : 'text-gray-500 border-gray-200'}`}
                  >
                    Advanced (+₹7k)
                  </button>
                </div>
              </div>

              {/* Website Maint options */}
              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-gray-900">Website Maintenance</div>
                  <div className="text-[10px] text-gray-500">Content updates & technical fixes</div>
                </div>
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setWebMaint('none')}
                    className={`px-3 py-1.5 rounded-lg border ${webMaint === 'none' ? 'bg-gray-200 text-gray-900 font-bold border-gray-300' : 'text-gray-500 border-gray-200'}`}
                  >
                    None
                  </button>
                  <button
                    onClick={() => setWebMaint('minor')}
                    className={`px-3 py-1.5 rounded-lg border ${webMaint === 'minor' ? 'bg-[#A3E635] text-black font-bold border-[#A3E635]' : 'text-gray-500 border-gray-200'}`}
                  >
                    Minor (+₹2k)
                  </button>
                  <button
                    onClick={() => setWebMaint('full')}
                    className={`px-3 py-1.5 rounded-lg border ${webMaint === 'full' ? 'bg-[#A3E635] text-black font-bold border-[#A3E635]' : 'text-gray-500 border-gray-200'}`}
                  >
                    Full (+₹5k)
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              {[
                { state: productShoot, set: setProductShoot, title: 'Product / Model Shoot', price: '+₹6,000/mo' },
                { state: brandGuidance, set: setBrandGuidance, title: 'Brand Identity Guidance & Tone', price: '+₹4,000/mo' },
                { state: dedicatedManager, set: setDedicatedManager, title: 'Dedicated Account Manager', price: '+₹5,000/mo' },
                { state: landingPage, set: setLandingPage, title: '3-Page Inquiry Landing Page Build', price: '+₹12,000 one-time' }
              ].map((item, idx) => (
                <label
                  key={idx}
                  className="p-3 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.state}
                      onChange={(e) => item.set(e.target.checked)}
                      className="w-4 h-4 accent-[#A3E635] rounded cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-gray-800">{item.title}</span>
                  </div>
                  <span className="text-xs font-bold text-black bg-[#A3E635]/20 px-2.5 py-1 rounded-lg">{item.price}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Panel (5 cols Sticky, High Contrast Dark Container) */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          {/* PRICING DISPLAY BOX */}
          <div className="bg-[#1A1A1A] text-white border-2 border-[#A3E635] rounded-3xl p-6 shadow-2xl space-y-6">
            {pricingDetails.matchedTierName && (
              <div className="bg-[#A3E635] text-black text-center font-extrabold text-xs uppercase tracking-widest py-1.5 rounded-xl flex items-center justify-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-black text-black" /> Matches {pricingDetails.matchedTierName}
              </div>
            )}

            <div className="space-y-4">
              {/* Box 1: SalHurry Management Fee */}
              <div className="bg-[#121212] rounded-2xl p-4 border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                  Our Management Fee (Paid to SalHurry)
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    ₹{pricingDetails.monthlyFee.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-400">/month</span>
                </div>

                {pricingDetails.oneTimeFee > 0 && (
                  <div className="mt-2 text-xs font-semibold text-[#A3E635] border-t border-white/10 pt-2 flex items-center justify-between">
                    <span>One-time Landing Page Fee:</span>
                    <span>+₹{pricingDetails.oneTimeFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              {/* Box 2: Recommended Ad Budget (SEPARATE DISPLAY RULE) */}
              <div className="bg-[#121212] rounded-2xl p-4 border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                  Your Recommended Ad Budget
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#A3E635]">
                    ₹{adBudget.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-400">/month</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 italic">
                  (Paid directly to Google/Meta on your company ad account — 100% transparent)
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() =>
                openModal(
                  `Custom Scope (Management Fee: ₹${pricingDetails.monthlyFee}/mo, Ad Budget: ₹${adBudget}/mo)`
                )
              }
              className="w-full py-4 bg-[#A3E635] text-black font-bold rounded-full text-sm hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Request Proposal for This Scope <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* LEAD ESTIMATOR DISPLAY BOX */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-black font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#A3E635]" /> Lead Generation Forecast
              </span>
              <span className="text-[10px] bg-gray-100 font-semibold px-2.5 py-1 rounded-full text-gray-700">
                {CPL_BENCHMARKS[industry]?.name || 'General'}
              </span>
            </div>

            {platform === 'none' ? (
              <div className="text-center py-6 text-xs text-gray-500 italic">
                Please select at least 1 ad platform to calculate lead estimates.
              </div>
            ) : leadEstimates ? (
              <div className="space-y-4">
                {/* Highlight Range */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">
                    Estimated Monthly Leads
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {leadEstimates.conservative} – {leadEstimates.optimistic}{' '}
                    <span className="text-xs font-normal text-gray-500">leads/mo</span>
                  </div>
                  <p className="text-xs text-black font-semibold mt-1">
                    Typically around <strong className="text-[#A3E635] bg-black px-2 py-0.5 rounded">{leadEstimates.realistic} leads</strong> once campaigns optimize (Month 2+)
                  </p>
                </div>

                {/* 3 Scenario Cards */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[9px] text-gray-500 uppercase font-bold">Conservative</div>
                    <div className="text-sm font-bold text-gray-900">{leadEstimates.conservative}</div>
                  </div>
                  <div className="p-2.5 bg-[#A3E635]/20 rounded-xl border border-[#A3E635]/40">
                    <div className="text-[9px] text-black uppercase font-extrabold">Realistic</div>
                    <div className="text-sm font-bold text-gray-900">{leadEstimates.realistic}</div>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[9px] text-gray-500 uppercase font-bold">Optimistic</div>
                    <div className="text-sm font-bold text-gray-900">{leadEstimates.optimistic}</div>
                  </div>
                </div>

                {/* Fixed Disclaimer Requirement */}
                <p className="text-[10px] text-gray-500 leading-relaxed italic border-t border-gray-100 pt-3">
                  * Actual results vary based on industry competition, offer strength, landing page quality, and seasonality. Figures are directional, not guaranteed.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
