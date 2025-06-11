import type { Category } from "../types/types";


export const questionnaireData: Category[] = [
  {
    id: "network_security",
    title: "Network Security",
    questions: [
      { id: "ns1", text: "Are firewalls properly configured and maintained?" },
      { id: "ns2", text: "Is network segmentation used to isolate sensitive data?" },
      { id: "ns3", text: "Are intrusion detection/prevention systems in place?" },
      { id: "ns4", text: "Is network traffic actively monitored for anomalies?" },
      { id: "ns5", text: "Are remote access methods secured and logged?" }
    ],
  },
  {
    id: "access_controls",
    title: "Access Controls",
    questions: [
      { id: "ac1", text: "Is MFA implemented for all critical accounts?" },
      { id: "ac2", text: "Are permissions based on the principle of least privilege?" },
      { id: "ac3", text: "Are inactive user accounts reviewed and removed regularly?" },
      { id: "ac4", text: "Is strong password policy enforced organization-wide?" },
      { id: "ac5", text: "Is access to sensitive systems logged and reviewed?" }
    ],
  },
  // Add more categories later
];
