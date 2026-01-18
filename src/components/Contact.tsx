import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SendIcon } from "lucide-react";
import ArrowIcon from "../assets/icons/arrow-icon";
import {
  useEffect,
  useReducer,
  useRef,
  useState,
  type FormEventHandler,
} from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SOCIAL_MEDIA } from "../utils/constants";
import { captureEvent } from "../utils/posthog";
import ReCAPTCHA from "react-google-recaptcha";

const STATIC_FORMS_API_KEY = import.meta.env.PUBLIC_STATIC_FORMS_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;

type FormType = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [data, setData] = useReducer(
    (prev: FormType, state: Partial<FormType>) => ({ ...prev, ...state }),
    { name: "", email: "", message: "" },
  );
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [ref] = useAutoAnimate();

  const isLoading = status === "loading";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("error");
      setMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("accessKey", STATIC_FORMS_API_KEY);
    formData.append("g-recaptcha-response", captchaToken);

    captureEvent("contact_form_submission", {
      event_label: "contact_form",
    });

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you for your message! I will get back to you shortly.",
        );
        setData({ name: "", email: "", message: "" });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
        setMessage(
          responseData.error || "Something went wrong. Please try again.",
        );
        captureEvent("contact_form_error", {
          event_label: "error",
          value: responseData.message || "Unknown error",
        });
      }
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setMessage("Network error. Please try again.");
      captureEvent("contact_form_error", {
        event_label: "error",
        value: "message" in error ? error.message : "Network error",
      });
    }
  };

  return (
    <section className="overflow-hidden pt-10" id="contact">
      <div className="relative mx-auto max-w-screen-xl space-y-4 p-8">
        <EnvelopeIcon className="absolute right-12 top-1/3 -z-10 h-[120%] -translate-y-1/2 rotate-12 text-primary/25 max-md:translate-x-1/2" />
        <h2 className="relative flex w-fit flex-col text-5xl font-bold">
          <span>Let's</span>
          <span>connect.</span>
          <ArrowIcon className="absolute bottom-1 start-[4ch] h-4/5" />
        </h2>
        <p className="max-w-prose text-base-content/80">
          Hit me up if you want to talk about your next project or just say hi.
        </p>
      </div>
      <div className="bg-base-200">
        <form
          className="mx-auto grid max-w-screen-xl gap-12 p-8 md:grid-cols-2"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex flex-col gap-4" ref={ref}>
            {message && (
              <div
                className={`alert border-none ${
                  status === "success"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {message}
              </div>
            )}
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered h-auto py-3"
              name="name"
              value={data.name}
              onChange={(e) => setData({ name: e.target.value })}
              onFocus={() =>
                captureEvent("form_field_interaction", {
                  event_label: "name",
                })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered h-auto py-3"
              name="email"
              required
              value={data.email}
              onChange={(e) => setData({ email: e.target.value })}
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered min-h-32"
              name="message"
              required
              value={data.message}
              onChange={(e) => setData({ message: e.target.value })}
            ></textarea>
            {isMounted && (
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
                theme="dark"
              />
            )}
            <button
              type="submit"
              className="btn btn-primary self-start"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner mx-12 text-primary" />
              ) : (
                <>
                  Send message <SendIcon className="size-5" />
                </>
              )}
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <div className="flex gap-3">
                <EnvelopeIcon className="mr-2 size-5" />
                <a
                  ref={(el) => {
                    if (el) {
                      el.href = `mailto:${el?.dataset.user?.split("").reverse().join("")}@gmail.com`;
                    }
                  }}
                  onClick={(e) =>
                    captureEvent("social_media_click", {
                      event_label: "email",
                    })
                  }
                  className="email"
                  data-user="117halledbaiuoala"
                ></a>
              </div>
              <div
                role="separator"
                className="divider before:h-px after:h-px"
              />
            </li>
            {SOCIAL_MEDIA.map((social, index) => (
              <li className="flex gap-3" key={index}>
                <i className={social.icon} />
                <a
                  href={social.url}
                  target="_blank"
                  onClick={() =>
                    captureEvent("social_media_click", {
                      event_label: social.name,
                    })
                  }
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </section>
  );
}
