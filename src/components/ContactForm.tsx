import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

type State = 'idle' | 'pending' | 'success' | 'error'

// Web3Forms access key (public by design). Submissions are emailed to the address it was created with.
const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY'

export const SERVICES = ['ספר תורה', 'תפילין', 'מזוזות', 'בדיקת מזוזות ותפילין', 'אחר'] as const

const field =
  'w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/30'

export function ContactForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    // Honeypot: real visitors never see this field, so a filled value means a bot
    if (data['bot-field']) {
      form.reset()
      setState('success')
      return
    }
    delete data['bot-field']
    // Drop empty optional fields (e.g. no email) so the form service doesn't reject them
    for (const key of Object.keys(data)) if (!data[key]?.trim()) delete data[key]
    setState('pending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `פנייה חדשה מהאתר: ${data.service || 'כללי'}`,
          from_name: 'אתר נהורא',
          ...data,
        }),
        signal: AbortSignal.timeout(15000),
      })
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null
      if (!response.ok || !result?.success) throw new Error('Submission failed')
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white/70 p-10 text-center" role="status">
        <CheckCircle2 className="size-14 text-gold" strokeWidth={1.5} />
        <h3 className="mt-4 font-serif text-2xl font-bold">תודה, פנייתכם התקבלה</h3>
        <p className="mt-2 text-ink/70">נחזור אליכם בהקדם, בדרך כלל עוד באותו יום עסקים.</p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-6 text-sm font-medium text-ink underline decoration-gold underline-offset-4 hover:text-gold"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
    >
      <p hidden>
        <label>
          נא לא למלא
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">פרטי התקשרות</legend>
        <label className="grid gap-1.5 text-sm font-medium">
          שם מלא
          <input name="name" autoComplete="name" required maxLength={100} className={field} placeholder="ישראל ישראלי" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          טלפון
          <input
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            required
            maxLength={20}
            pattern="[0-9+\-\s]{9,20}"
            className={`${field} text-right`}
            placeholder="050-0000000"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          דוא״ל <span className="font-normal text-ink/50">(לא חובה)</span>
          <input
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            maxLength={254}
            className={`${field} text-right`}
            placeholder="name@example.com"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          במה נוכל לעזור?
          <select name="service" required defaultValue="" className={field}>
            <option value="" disabled>
              בחרו שירות
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
          הודעה
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            className={`${field} resize-none`}
            placeholder="לדוגמה: מעוניין בבדיקת 6 מזוזות בדירה בירושלים"
          />
        </label>
        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-medium text-parchment shadow-lg shadow-ink/20 transition hover:bg-ink-soft disabled:opacity-60"
          >
            {state === 'pending' && <Loader2 className="size-4 animate-spin" />}
            {state === 'pending' ? 'שולח…' : 'שליחת פנייה'}
          </button>
          {state === 'error' && (
            <p className="text-sm text-red-700" role="alert">
              השליחה לא הצליחה. נסו שוב או התקשרו אלינו ישירות.
            </p>
          )}
        </div>
      </fieldset>
    </form>
  )
}
