import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"

export function InputOTPPage() {
  const [value, setValue] = useState("")

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Input OTP</h2>
        <p className="text-muted-foreground mt-1">
          One-time password input for verification flows.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">6-digit code</h3>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          Value: {value || "—"}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">4-digit PIN</h3>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </section>
  )
}
