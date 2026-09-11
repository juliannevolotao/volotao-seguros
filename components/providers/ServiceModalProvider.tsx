"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { scrollToId } from "@/lib/scroll";

type ServiceModalContextValue = {
  selectedService: string | null;
  openService: (name: string) => void;
  closeService: () => void;
  /** The proposal form's "Tipo de seguro" field lives here, so a service card or the modal can set it directly. */
  formService: string;
  setFormService: (name: string) => void;
  /** Puts the currently open service into the proposal form's "Tipo de seguro" field, closes the modal, and scrolls to the form. */
  useServiceInForm: () => void;
};

const ServiceModalContext = createContext<ServiceModalContextValue | null>(null);

export function ServiceModalProvider({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formService, setFormService] = useState("");

  const openService = useCallback((name: string) => setSelectedService(name), []);
  const closeService = useCallback(() => setSelectedService(null), []);

  const useServiceInForm = useCallback(() => {
    setSelectedService((current) => {
      if (current) setFormService(current);
      return null;
    });
    setTimeout(() => scrollToId("proposta", 70), 40);
  }, []);

  const value = useMemo(
    () => ({ selectedService, openService, closeService, formService, setFormService, useServiceInForm }),
    [selectedService, openService, closeService, formService, useServiceInForm]
  );

  return <ServiceModalContext.Provider value={value}>{children}</ServiceModalContext.Provider>;
}

export function useServiceModal() {
  const ctx = useContext(ServiceModalContext);
  if (!ctx) throw new Error("useServiceModal must be used within a ServiceModalProvider");
  return ctx;
}
