import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Snackbar from "../../../Components/Snackbar";

interface Flash {
  success?: string;
  error?: string;
}

export default function FlashSnackbar() {
  const { props } = usePage();
  const flash = props.flash as Flash;
  
  const [snack, setSnack] = useState<{ id: number; message: string; type: "success" | "error" } | null>(null);

  // Show snackbar on flash message
  useEffect(() => {
    if (flash?.success) {
      setSnack({ id: Date.now(), message: flash.success, type: "success" });
      // clear flash so next request works
      props.flash.success = null; 
    }
    if (flash?.error) {
      setSnack({ id: Date.now(), message: flash.error, type: "error" });
      props.flash.error = null;
    }
  }, [flash]);

  // Clear after 3 seconds
  useEffect(() => {
    if (snack) {
      const timer = setTimeout(() => setSnack(null), 3000); // adjust duration
      return () => clearTimeout(timer);
    }
  }, [snack]);

  return (
    <>
      {snack && (
        <Snackbar 
          key={snack.id} 
          message={snack.message} 
          type={snack.type} 
          onClose={() => setSnack(null)} 
        />
      )}
    </>
  );
}
