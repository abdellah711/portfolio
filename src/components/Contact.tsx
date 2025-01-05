import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SendIcon } from "lucide-react";
import ArrowIcon from "../assets/icons/arrow-icon";
import { useReducer, useState, type FormEventHandler } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SOCIAL_MEDIA } from "../utils/constants";

const SUBMIT_URL = import.meta.env.PUBLIC_CONTACT_US_URL as string;

type FormType = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [data, setData] = useReducer(
    (prev: FormType, state: Partial<FormType>) => ({ ...prev, ...state }),
    { name: "", email: "", message: "" },
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [ref] = useAutoAnimate();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    let hasError = false;
    gtag("event", "contact_form_submission", {
      event_category: "form",
      event_label: "contact_form",
      value: 1,
    });
    try {
      const resp = await fetch(SUBMIT_URL, {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) {
        hasError = true;
        return;
      }
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsSent(!hasError);
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
          action={SUBMIT_URL}
          className="mx-auto grid max-w-screen-xl gap-12 p-8 md:grid-cols-2"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex flex-col gap-4" ref={ref}>
            {isSent && (
              <div className="alert border-none bg-emerald-500/10 text-emerald-500">
                Thank you for your message! I will get back to you shortly
              </div>
            )}
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered h-auto py-3"
              name="entry.1370387352"
              value={data.name}
              onChange={(e) => setData({ name: e.target.value })}
              onFocus={() =>
                gtag("event", "form_field_interaction", {
                  event_category: "form interaction",
                  event_label: "name",
                })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered h-auto py-3"
              name="entry.835906970"
              required
              value={data.email}
              onChange={(e) => setData({ email: e.target.value })}
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered min-h-32"
              name="entry.1941532850"
              required
              value={data.message}
              onChange={(e) => setData({ message: e.target.value })}
            ></textarea>
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
                  href="mailto:alaouiabdellah711@gmail.com"
                  onClick={(e) =>
                    gtag("event", "social_media_click", {
                      event_category: "social",
                      event_label: "email",
                    })
                  }
                >
                  alaouiabdellah711@gmail.com
                </a>
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
                    gtag("event", "social_media_click", {
                      event_category: "social",
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
