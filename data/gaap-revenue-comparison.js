window.revenueComparisonData = {
  "standard": {
    "code": "1",
    "slug": "revenue",
    "title": "收入准则",
    "subtitle": "企业会计准则第14号收入 与 IFRS 15 Revenue from Contracts with Customers",
    "frameworks": [
      {
        "framework": "PRC_GAAP",
        "name": "收入",
        "version": null,
        "effectiveDate": null
      },
      {
        "framework": "IFRS",
        "name": "Revenue",
        "version": null,
        "effectiveDate": null
      }
    ]
  },
  "stats": {
    "articleCounts": {
      "IFRS": 223,
      "PRC_GAAP": 45
    },
    "mappingCount": 45,
    "differenceCount": 448,
    "relationshipCounts": {
      "SIMILAR": 30,
      "NO_MATCH": 8,
      "EQUIVALENT": 7
    },
    "differenceTypeCounts": {
      "SCOPE": 89,
      "REQUIREMENT": 180,
      "TERMINOLOGY": 95,
      "OTHER": 53,
      "EXAMPLE": 31
    }
  },
  "mappings": [
    {
      "id": 1,
      "relationship": "SIMILAR",
      "confidence": 0.78,
      "notes": "",
      "source": {
        "id": 1,
        "framework": "PRC_GAAP",
        "number": "第一条",
        "index": 1,
        "content": "为了规范收入的确认、计量和相关信息的披露，根据《企业会计准则——基本准则》，制定本准则。"
      },
      "mappedArticles": [
        {
          "id": 174,
          "framework": "IFRS",
          "number": "Paragraph 1",
          "index": 1,
          "content": "The objective of this Standard is to establish the principles that an entity shall apply to report useful information to users of financial statements about the nature, amount, timing and uncertainty of revenue and cash flows arising from a contract with a customer. Meeting the objective"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 1,
          "sourceText": "为了规范收入的确认、计量和相关信息的披露，根据《企业会计准则——基本准则》，制定本准则。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The objective of this Standard is to establish the principles that an entity shall apply to report useful information to users of financial statements about the nature, amount, timing and uncertainty of revenue and cash flows arising from a contract with a customer."
            }
          ],
          "description": "PRC GAAP focuses on regulating the recognition, measurement, and disclosure of revenue, whereas IFRS focuses on establishing principles to report useful information to financial statement users regarding the nature, amount, timing, and uncertainty of revenue and cash flows from customer contracts. The PRC scope is rule-oriented and procedural, while the IFRS scope is principles-based and decision-usefulness oriented.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 1,
          "sourceText": "根据《企业会计准则——基本准则》，制定本准则。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The objective of this Standard is to establish the principles that an entity shall apply to report useful information to users of financial statements..."
            }
          ],
          "description": "PRC GAAP explicitly references the 'Accounting Standards for Business Enterprises - Basic Standards' as the legal and hierarchical basis for the issuance of this standard. IFRS 15 does not cite an external overarching standard; it directly states its own objective of establishing reporting principles.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 1,
          "sourceText": "收入的确认、计量和相关信息的披露",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the nature, amount, timing and uncertainty of revenue and cash flows arising from a contract with a customer"
            }
          ],
          "description": "PRC GAAP uses the procedural terms 'recognition (确认)', 'measurement (计量)', and 'disclosure (披露)'. IFRS uses the qualitative characteristics of useful information: 'nature, amount, timing and uncertainty' of revenue and cash flows, emphasizing decision-usefulness rather than accounting procedures.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 1,
          "sourceText": "为了规范收入的确认",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "revenue and cash flows arising from a contract with a customer"
            }
          ],
          "description": "PRC GAAP focuses solely on 'revenue (收入)' recognition. IFRS explicitly extends its scope to cover both 'revenue and cash flows' arising specifically from contracts with customers, defining a more specific scope boundary tied to customer contracts.",
          "importance": 4
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 1,
          "sourceText": "制定本准则",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Meeting the objective"
            }
          ],
          "description": "PRC GAAP's first article is a formal promulgation/issuance clause typical of Chinese accounting standards ('this standard is hereby formulated'). IFRS 15 Paragraph 1 is a substantive objective statement that is followed by additional sub-content ('Meeting the objective...'), indicating a different structural and rhetorical style.",
          "importance": 2
        }
      ]
    },
    {
      "id": 2,
      "relationship": "NO_MATCH",
      "confidence": 0.85,
      "notes": "",
      "source": {
        "id": 2,
        "framework": "PRC_GAAP",
        "number": "第二条",
        "index": 2,
        "content": "收入，是指企业在日常活动中形成的、会导致所有者权益增加的、与所有者投入资本无关的经济利益的总流入。"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 3,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 3,
        "framework": "PRC_GAAP",
        "number": "第三条",
        "index": 3,
        "content": "本准则适用于所有与客户之间的合同，但下列各项除外：\n（一） 由《企业会计准则第2号——长期股权投资》、《企业会计准则第22号——金融工具确认和计量》、《企业会计准则第23号——金融资产转移》、《企业会计准则第24号——套期会计》、《企业会计准则第33号——合并财务报表》以及《企业会计准则第40号——合营安排》规范的金融工具及其他合同权利和义务,分别适用《企业会计准则第2号——长期股权投资》、《企业会计准则第22号——金融工具确认和计量》、《企业会计准则第23号——金融资产转移》、《企业会计准则第24号——套期会计》、《企业会计准则第33号——合并财务报表》以及《企业会计准则第40号——合营安排》。\n（二） 由《企业会计准则第21号——租赁》规范的租赁合同，适用《企业会计准则第21号——租赁》。\n（三） 由保险合同相关会计准则规范的保险合同，适用保险合同相关会计准则。 本准则所称客户，是指与企业订立合同以向该企业购买其日常活动产出的商品或服务（以下简称\"商品\"）并支付对价的一方。 本准则所称合同，是指双方或多方之间订立有法律约束力的权利义务的协议。合同有书面形式、口头形式以及其他形式。 第二章 确认"
      },
      "mappedArticles": [
        {
          "id": 179,
          "framework": "IFRS",
          "number": "Paragraph 6",
          "index": 6,
          "content": "An entity shall apply this Standard to a contract (other than a contract listed in paragraph 5) only if the counterparty to the contract is a customer. [Refer:Basis for Conclusions paragraphs BC52–BC57] A customer is a party that has contracted with an entity to obtain goods or services that are an output of the entity’s ordinary activities in exchange for consideration. A counterparty to the contract would not be a customer if, for example, the counterparty has contracted with the entity to participate in an activity or process in which the parties to the contract share in the risks and benefits that result from the activity or process (such as developing an asset in a collaboration arrangement) rather than to obtain the output of the entity’s ordinary activities."
        },
        {
          "id": 180,
          "framework": "IFRS",
          "number": "Paragraph 7",
          "index": 7,
          "content": "A contract with a customer may be partially within the scope of this Standard and partially within the scope of other Standards listed in paragraph 5. (a) If the other Standards specify how to separate and/or initially measure one or more parts of the contract, then an entity shall first apply the separation and/or measurement requirements in those Standards. An entity shall exclude from the transaction price the amount of the part (or parts) of the contract that are initially measured in accordance with other Standards and shall apply paragraphs 73–86 to allocate the amount of the transaction price that remains (if any) to each performance obligation within the scope of this Standard and to any other parts of the contract identified by paragraph 7(b). (b) If the other Standards do not specify how to separate and/or initially measure one or more parts of the contract, then the entity shall apply this Standard to separate and/or initially measure the part (or parts) of the contract."
        },
        {
          "id": 183,
          "framework": "IFRS",
          "number": "Paragraph 10",
          "index": 10,
          "content": "A contract is an agreement between two or more parties that creates enforceable rights and obligations. Enforceability of the rights and obligations in a contract is a matter of law. Contracts can be written, oral or implied by an entity’s customary business practices. The practices and processes for establishing contracts with customers vary across legal jurisdictions, industries and entities. In addition, they may vary within an entity (for example, they may depend on the class of customer or the nature of the promised goods or services). An entity shall consider those practices and processes in determining whether and when an agreement with a customer creates enforceable rights and obligations."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则适用于所有与客户之间的合同，但下列各项除外：",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A contract with a customer may be partially within the scope of this Standard and partially within the scope of other Standards listed in paragraph 5."
            }
          ],
          "description": "PRC GAAP adopts a full-exclusion approach: contracts governed by the listed standards are entirely outside the scope of the revenue standard. IFRS 15 instead allows partial scope overlap, permitting a single contract to be partly within IFRS 15 and partly within other Standards.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "由《企业会计准则第2号——长期股权投资》、《企业会计准则第22号——金融工具确认和计量》……规范的金融工具及其他合同权利和义务,分别适用……",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the other Standards specify how to separate and/or initially measure one or more parts of the contract, then an entity shall first apply the separation and/or measurement requirements in those Standards."
            }
          ],
          "description": "PRC GAAP provides no guidance on how to handle contracts partially in scope of other standards (because they are fully excluded). IFRS 7 explicitly requires entities to first apply separation/measurement rules of other Standards, then apply paragraphs 73–86 to allocate the remaining transaction price to performance obligations within IFRS 15.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则适用于所有与客户之间的合同，但下列各项除外：",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A contract is an agreement between two or more parties that creates enforceable rights and obligations."
            }
          ],
          "description": "PRC GAAP Article 3 establishes the scope of the entire revenue standard by stating it applies to all customer contracts and listing explicit exclusions (financial instruments, leases, insurance contracts), whereas IFRS 15 Paragraph 10 is purely definitional and does not address scope or exclusions.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "（一） 由《企业会计准则第2号——长期股权投资》...规范...（二） 由《企业会计准则第21号——租赁》规范的租赁合同...（三） 由保险合同相关会计准则规范的保险合同",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC GAAP explicitly excludes contracts governed by standards on long-term equity investment, financial instruments, financial asset transfers, hedge accounting, consolidated financial statements, joint arrangements, leases, and insurance contracts. IFRS 15 Paragraph 10 contains no such exclusion list within this paragraph.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则适用于所有与客户之间的合同，但下列各项除外：（一）由《企业会计准则第2号——长期股权投资》、《企业会计准则第22号——金融工具确认和计量》、《企业会计准则第23号——金融资产转移》、《企业会计准则第24号——套期会计》、《企业会计准则第33号——合并财务报表》以及《企业会计准则第40号——合营安排》规范的金融工具及其他合同权利和义务...（二）由《企业会计准则第21号——租赁》规范的租赁合同...（三）由保险合同相关会计准则规范的保险合同...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply this Standard to a contract (other than a contract listed in paragraph 5) only if the counterparty to the contract is a customer."
            }
          ],
          "description": "PRC GAAP Article 3 explicitly enumerates the excluded contracts (financial instruments, leases, insurance contracts) and the specific standards governing them, while IFRS Paragraph 6 merely states the standard applies to contracts other than those listed in paragraph 5, with the detailed scope exclusions placed in a separate paragraph. The substantive exclusions are similar but structured differently.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "PRC GAAP Article 3 does not provide a counter-example of a non-customer arrangement within the customer definition.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A counterparty to the contract would not be a customer if, for example, the counterparty has contracted with the entity to participate in an activity or process in which the parties to the contract share in the risks and benefits that result from the activity or process (such as developing an asset in a collaboration arrangement) rather than to obtain the output of the entity's ordinary activities."
            }
          ],
          "description": "IFRS Paragraph 6 includes an illustrative counter-example clarifying that a counterparty who contracts to share risks and benefits in a collaboration or process (e.g., developing an asset in a collaboration arrangement) is not a customer. PRC GAAP Article 3 does not include such a clarifying example, although application guidance elsewhere may address it.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "（无对应规定）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the other Standards do not specify how to separate and/or initially measure one or more parts of the contract, then the entity shall apply this Standard to separate and/or initially measure the part (or parts) of the contract."
            }
          ],
          "description": "IFRS 7(b) provides a fallback rule: when other Standards do not specify separation/initial measurement, IFRS 15 itself applies to those parts. PRC GAAP has no equivalent provision because such contracts are fully excluded from the standard.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "（无对应规定）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall exclude from the transaction price the amount of the part (or parts) of the contract that are initially measured in accordance with other Standards and shall apply paragraphs 73–86 to allocate the amount of the transaction price that remains (if any) to each performance obligation."
            }
          ],
          "description": "IFRS 7(a) specifies transaction-price allocation mechanics when other Standards govern certain parts, explicitly referencing paragraphs 73–86. PRC GAAP Article 3 contains no allocation mechanics because such contracts are entirely out of scope.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称合同，是指双方或多方之间订立有法律约束力的权利义务的协议。合同有书面形式、口头形式以及其他形式。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A contract is an agreement between two or more parties that creates enforceable rights and obligations. Enforceability of the rights and obligations in a contract is a matter of law. Contracts can be written, oral or implied by an entity's customary business practices."
            }
          ],
          "description": "Both define a contract, but IFRS 15 explicitly identifies 'implied by an entity's customary business practices' as a form of contract, while PRC GAAP only lists 'written, oral, and other forms' (书面形式、口头形式以及其他形式) without specifically referencing customary business practices. IFRS also explicitly states that enforceability is a matter of law.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall consider those practices and processes in determining whether and when an agreement with a customer creates enforceable rights and obligations."
            }
          ],
          "description": "IFRS 15 Paragraph 10 imposes an explicit requirement on the entity to consider its practices and processes when determining whether and when an agreement with a customer creates enforceable rights and obligations. PRC GAAP Article 3 contains no equivalent requirement.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称合同，是指双方或多方之间订立有法律约束力的权利义务的协议。合同有书面形式、口头形式以及其他形式。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 6 of IFRS 15 does not address the form of the contract."
            }
          ],
          "description": "PRC GAAP Article 3 contains a standalone definition of '合同' (contract) specifying that contracts may take written, oral, or other forms, whereas IFRS Paragraph 6 does not provide a definition or description of the contract forms within this paragraph.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称客户，是指与企业订立合同以向该企业购买其日常活动产出的商品或服务（以下简称\"商品\"）并支付对价的一方。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A customer is a party that has contracted with an entity to obtain goods or services that are an output of the entity's ordinary activities in exchange for consideration."
            }
          ],
          "description": "PRC GAAP uses '购买' (purchase) and defines a customer as a party that 'purchases' the output and pays consideration, while IFRS uses the broader term 'obtain' to describe how the counterparty acquires the goods or services. The word 'purchase' may carry a narrower commercial connotation than 'obtain'.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则适用于所有与客户之间的合同，但下列各项除外：...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply this Standard to a contract (other than a contract listed in paragraph 5) only if the counterparty to the contract is a customer."
            }
          ],
          "description": "PRC GAAP frames the scope as applying to 'contracts with customers' with listed exceptions, whereas IFRS frames the scope as a positive condition: the counterparty must be a customer. The logical structure of the scope test is therefore expressed differently even though the underlying substance is comparable.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "（一）……金融工具及其他合同权利和义务……（二）由《企业会计准则第21号——租赁》规范的租赁合同……（三）由保险合同相关会计准则规范的保险合同……",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "other Standards listed in paragraph 5"
            }
          ],
          "description": "PRC GAAP Article 3 explicitly enumerates the specific excluded standards (long-term equity investment, financial instruments, transfers, hedge accounting, consolidation, joint arrangements, leases, insurance). IFRS paragraph 7 cross-references paragraph 5 and does not itself list the Standards, focusing only on the interaction rules.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称客户，是指与企业订立合同以向该企业购买其日常活动产出的商品或服务（以下简称\"商品\"）并支付对价的一方。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC GAAP Article 3 includes a definition of 'customer' (客户) as a party that contracts with the entity to purchase goods or services output from its ordinary activities in exchange for consideration. IFRS 15 Paragraph 10 does not define 'customer'—that definition appears elsewhere in IFRS 15 (e.g., Appendix A).",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称客户，是指与企业订立合同以向该企业购买其日常活动产出的商品或服务...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A customer is a party that has contracted with an entity to obtain goods or services that are an output of the entity's ordinary activities in exchange for consideration."
            }
          ],
          "description": "PRC GAAP refers to '商品或服务' and subsequently uses the abbreviation '商品' (goods) to cover both goods and services collectively, while IFRS refers to 'goods or services' without introducing a unified abbreviated term for the combined concept.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称客户，是指与企业订立合同以向该企业购买其日常活动产出的商品或服务（以下简称\"商品\"）并支付对价的一方。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A contract with a customer…"
            }
          ],
          "description": "PRC GAAP Article 3 provides an in-text definition of \"customer\" (party that purchases daily-activity goods/services and pays consideration). IFRS paragraph 7 uses the term \"customer\" without redefining it (the definition appears in Appendix A).",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "本准则所称合同，是指双方或多方之间订立有法律约束力的权利义务的协议。合同有书面形式、口头形式以及其他形式。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A contract with a customer…"
            }
          ],
          "description": "PRC GAAP Article 3 includes a substantive definition of \"contract\" (legally binding rights/obligations agreement, in written, oral, or other form) and explicitly references the next chapter on recognition. IFRS paragraph 7 contains no contract definition and addresses only the interaction with other Standards.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "合同有书面形式、口头形式以及其他形式。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Contracts can be written, oral or implied by an entity's customary business practices. The practices and processes for establishing contracts with customers vary across legal jurisdictions, industries and entities. In addition, they may vary within an entity (for example, they may depend on the class of customer or the nature of the promised goods or services)."
            }
          ],
          "description": "IFRS 15 provides illustrative examples of how contract practices may vary (across legal jurisdictions, industries, entities, customer classes, or nature of promised goods/services). PRC GAAP Article 3 does not include such illustrative elaboration on contract forms or variations.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "PRC GAAP Article 3 does not contain any reference to the IFRS Basis for Conclusions.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC52–BC57]"
            }
          ],
          "description": "IFRS Paragraph 6 includes a bracketed cross-reference to Basis for Conclusions paragraphs BC52–BC57, which provides interpretive background on the customer concept. The PRC GAAP text contains no equivalent cross-reference, reflecting the different structural conventions between the two frameworks' published standards.",
          "importance": 1
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "第二章 确认",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "paragraph 7"
            }
          ],
          "description": "PRC GAAP Article 3 also serves as a transition marker to Chapter 2 on recognition and bundles scope, customer definition, and contract definition together. IFRS paragraph 7 is a standalone interaction rule within the scope section and does not address recognition principles or definitions.",
          "importance": 1
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 3,
          "sourceText": "第二章 确认",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC GAAP Article 3 transitions into a chapter heading 'Chapter 2 Recognition' (第二章 确认), indicating structural/sectional organization of the standard. IFRS 15 Paragraph 10 is a standalone definitional paragraph without chapter transition reference.",
          "importance": 1
        }
      ]
    },
    {
      "id": 4,
      "relationship": "EQUIVALENT",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 4,
        "framework": "PRC_GAAP",
        "number": "第四条",
        "index": 4,
        "content": "企业应当在履行了合同中的履约义务，即在客户取得相关商品控制权时确认收入。 取得相关商品控制权，是指能够主导该商品的使用并从中获得几乎全部的经济利益。"
      },
      "mappedArticles": [
        {
          "id": 203,
          "framework": "IFRS",
          "number": "Paragraph 31",
          "index": 30,
          "content": "An entity shall recognise revenue when (or as) the entity satisfies a performance obligation by transferring a promised good or service (ie an asset) to a customer. An asset is transferred when (or as) the customer obtains control of that asset."
        }
      ],
      "differences": []
    },
    {
      "id": 5,
      "relationship": "NO_MATCH",
      "confidence": 0.82,
      "notes": "",
      "source": {
        "id": 5,
        "framework": "PRC_GAAP",
        "number": "第五条",
        "index": 5,
        "content": "当企业与客户之间的合同同时满足下列条件时，企业应当在客户取得相关商品控制权时确认收入：\n（一） 合同各方已批准该合同并承诺将履行各自义务；\n（二） 该合同明确了合同各方与所转让商品或提供劳务（以下简称\"转让商品\"）相关的权利和义务；\n（三） 该合同有明确的与所转让商品相关的支付条款；\n（四） 该合同具有商业实质，即履行该合同将改变企业未来现金流量的风险、时间分布或金额；\n（五） 企业因向客户转让商品而有权取得的对价很可能收回。 在合同开始日即满足前款条件的合同，企业在后续期间无需对其进行重新评估，除非有迹象表明相关事实和情况发生重大变化。合同开始日通常是指合同生效日。"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 6,
      "relationship": "SIMILAR",
      "confidence": 0.93,
      "notes": "",
      "source": {
        "id": 6,
        "framework": "PRC_GAAP",
        "number": "第六条",
        "index": 6,
        "content": "在合同开始日不符合本准则第五条规定的合同，企业应当对其进行持续评估，并在其满足本准则第五条规定时按照该条的规定进行会计处理。 对于不符合本准则第五条规定的合同，企业只有在不再负有向客户转让商品的剩余义务，且已向客户收取的对价无需退回时，才能将已收取的对价确认为收入；否则，应当将已收取的对价作为负债进行会计处理。没有商业实质的非货币性资产交换，不确认收入。"
      },
      "mappedArticles": [
        {
          "id": 188,
          "framework": "IFRS",
          "number": "Paragraph 15",
          "index": 15,
          "content": "When a contract with a customer does not meet the criteria in paragraph 9 and an entity receives consideration from the customer, the entity shall recognise the consideration received as revenue only when either of the following events has occurred: (a) the entity has no remaining obligations to transfer goods or services to the customer and all, or substantially all, of the consideration promised by the customer has been received by the entity and is non-refundable; or (b) the contract has been terminated and the consideration received from the customer is non-refundable."
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "企业只有在不再负有向客户转让商品的剩余义务，且已向客户收取的对价无需退回时，才能将已收取的对价确认为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall recognise the consideration received as revenue only when either of the following events has occurred: (a) the entity has no remaining obligations to transfer goods or services to the customer and all, or substantially all, of the consideration promised by the customer has been received by the entity and is non-refundable; or (b) the contract has been terminated and the consideration received from the customer is non-refundable."
            }
          ],
          "description": "PRC GAAP requires BOTH conditions to be met (no remaining obligations AND non-refundable consideration) as a single cumulative test, while IFRS allows revenue recognition under EITHER condition (a) or (b), providing two alternative paths.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "(b) the contract has been terminated and the consideration received from the customer is non-refundable.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "企业只有在不再负有向客户转让商品的剩余义务，且已向客户收取的对价无需退回时"
            }
          ],
          "description": "IFRS condition (b) provides an additional revenue recognition trigger when the contract has been terminated and consideration is non-refundable, which has no equivalent in PRC GAAP Article 6.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "企业只有在不再负有向客户转让商品的剩余义务，且已向客户收取的对价无需退回时",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "all, or substantially all, of the consideration promised by the customer has been received by the entity and is non-refundable"
            }
          ],
          "description": "IFRS condition (a) additionally requires that 'all, or substantially all' of the consideration promised has been received by the entity, whereas PRC GAAP does not include a threshold for the amount of consideration received.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "在合同开始日不符合本准则第五条规定的合同，企业应当对其进行持续评估，并在其满足本准则第五条规定时按照该条的规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When a contract with a customer does not meet the criteria in paragraph 9 and an entity receives consideration from the customer"
            }
          ],
          "description": "PRC GAAP explicitly requires continuous reassessment of the contract until it meets the criteria in Article 5, while IFRS does not contain an equivalent reassessment requirement in this paragraph.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "向客户转让商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "to transfer goods or services to the customer"
            }
          ],
          "description": "IFRS refers to 'goods or services', while PRC GAAP only mentions 'goods' (商品), indicating a narrower scope in PRC GAAP wording.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "没有商业实质的非货币性资产交换，不确认收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When a contract with a customer does not meet the criteria in paragraph 9 and an entity receives consideration from the customer"
            }
          ],
          "description": "PRC GAAP Article 6 explicitly addresses non-monetary asset exchanges without commercial substance, stating no revenue shall be recognized. IFRS Paragraph 15 does not address non-monetary asset exchanges.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "应当将已收取的对价作为负债进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall recognise the consideration received as revenue"
            }
          ],
          "description": "PRC GAAP explicitly states that if the recognition criteria are not met, the consideration received shall be accounted for as a liability. IFRS Paragraph 15 does not explicitly prescribe liability treatment in this paragraph, though other IFRS guidance addresses this.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 6,
          "sourceText": "已向客户收取的对价无需退回",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the consideration received from the customer is non-refundable"
            }
          ],
          "description": "PRC GAAP uses the phrase '已向客户收取的对价无需退回' (consideration collected from customer does not need to be returned), which is similar but not identical to IFRS 'non-refundable'. The emphasis differs slightly between 'not required to return' and 'non-refundable'.",
          "importance": 2
        }
      ]
    },
    {
      "id": 7,
      "relationship": "NO_MATCH",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 7,
        "framework": "PRC_GAAP",
        "number": "第七条",
        "index": 7,
        "content": "企业与同一客户（或该客户的关联方）同时订立或在相近时间内先后订立的两份或多份合同，在满足下列条件之一时，应当合并为一份合同进行会计处理：\n（一） 该两份或多份合同基于同一商业目的而订立并构成一揽子交易。\n（二） 该两份或多份合同中的一份合同的对价金额取决于其他合同的定价或履行情况。\n（三） 该两份或多份合同中所承诺的商品（或每份合同中所承诺的部分商品）构成本准则第九条规定的单项履约义务。"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 8,
      "relationship": "SIMILAR",
      "confidence": 0.85,
      "notes": "",
      "source": {
        "id": 8,
        "framework": "PRC_GAAP",
        "number": "第八条",
        "index": 8,
        "content": "企业应当区分下列三种情形对合同变更分别进行会计处理：\n（一） 合同变更增加了可明确区分的商品及合同价款，且新增合同价款反映了新增商品单独售价的，应当将该合同变更部分作为一份单独的合同进行会计处理。\n（二） 合同变更不属于本条（一）规定的情形，且在合同变更日已转让的商品或已提供的服务（以下简称\"已转让的商品\"）与未转让的商品或未提供的服务（以下简称\"未转让的商品\"）之间可明确区分的，应当视为原合同终止，同时，将原合同未履约部分与合同变更部分合并为新合同进行会计处理。\n（三） 合同变更不属于本条（一）规定的情形，且在合同变更日已转让的商品与未转让的商品之间不可明确区分的，应当将该合同变更部分作为原合同的组成部分进行会计处理，由此产生的对已确认收入的影响，应当在合同变更日调整当期收入。 本准则所称合同变更，是指经合同各方批准对原合同范围或价格作出的变更。"
      },
      "mappedArticles": [
        {
          "id": 193,
          "framework": "IFRS",
          "number": "Paragraph 20",
          "index": 20,
          "content": "An entity shall account for a contract modification as a separate contract if both of the following conditions are present: (a) the scope of the contract increases because of the addition of promised goods or services that are distinct (in accordance with paragraphs 26–30); and (b) the price of the contract increases by an amount of consideration that reflects the entity’s stand-alone selling prices of the additional promised goods or services and any appropriate adjustments to that price to reflect the circumstances of the particular contract. For example, an entity may adjust the stand-alone selling price of an additional good or service for a discount that the customer receives, because it is not necessary for the entity to incur the selling-related costs that it would incur when selling a similar good or service to a new customer. Identifying performance obligations"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "企业应当区分下列三种情形对合同变更分别进行会计处理：（一）合同变更增加了可明确区分的商品及合同价款，且新增合同价款反映了新增商品单独售价的，应当将该合同变更部分作为一份单独的合同进行会计处理。（二）合同变更不属于本条（一）规定的情形，且在合同变更日已转让的商品或已提供的服务与未转让的商品或未提供的服务之间可明确区分的，应当视为原合同终止，同时，将原合同未履约部分与合同变更部分合并为新合同进行会计处理。（三）合同变更不属于本条（一）规定的情形，且在合同变更日已转让的商品与未转让的商品之间不可明确区分的，应当将该合同变更部分作为原合同的组成部分进行会计处理，由此产生的对已确认收入的影响，应当在合同变更日调整当期收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall account for a contract modification as a separate contract if both of the following conditions are present: (a) the scope of the contract increases because of the addition of promised goods or services that are distinct (in accordance with paragraphs 26–30); and (b) the price of the contract increases by an amount of consideration that reflects the entity's stand-alone selling prices of the additional promised goods or services and any appropriate adjustments to that price to reflect the circumstances of the particular contract."
            }
          ],
          "description": "PRC GAAP Article 8 prescribes accounting treatment for THREE distinct scenarios of contract modifications (separate contract, termination plus new contract, or part of original contract). IFRS Paragraph 20 only addresses the FIRST scenario (treatment as a separate contract) and does not in this paragraph cover the other two scenarios.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "（二）应当视为原合同终止，同时，将原合同未履约部分与合同变更部分合并为新合同进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "（未涵盖此情形）"
            }
          ],
          "description": "PRC GAAP scenario (二) requires that, when the modification does not qualify as a separate contract and the remaining goods are distinct from those already transferred, the entity treats the original contract as terminated and combines the unperformed portion with the modification as a new contract. IFRS Paragraph 20 does not address this scenario.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "（三）应当将该合同变更部分作为原合同的组成部分进行会计处理，由此产生的对已确认收入的影响，应当在合同变更日调整当期收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "（未涵盖此情形）"
            }
          ],
          "description": "PRC GAAP scenario (三) requires that, when the modification does not qualify as a separate contract and the remaining goods are not distinct from those already transferred, the entity accounts for the modification as part of the original contract and adjusts current period revenue at the date of modification. IFRS Paragraph 20 does not address this scenario.",
          "importance": 5
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "合同变更增加了可明确区分的商品及合同价款",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the scope of the contract increases because of the addition of promised goods or services that are distinct (in accordance with paragraphs 26–30)"
            }
          ],
          "description": "PRC GAAP uses the term '可明确区分' (clearly distinguishable) for goods, while IFRS uses the term 'distinct' and explicitly cross-references paragraphs 26–30 for its definition. The PRC term is a direct translation but the IFRS standard relies on a defined concept with detailed guidance.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "新增合同价款反映了新增商品单独售价的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the price of the contract increases by an amount of consideration that reflects the entity's stand-alone selling prices of the additional promised goods or services and any appropriate adjustments to that price to reflect the circumstances of the particular contract"
            }
          ],
          "description": "PRC GAAP requires only that the additional price reflects the stand-alone selling price of the additional goods. IFRS additionally requires the price to reflect any appropriate adjustments to that stand-alone selling price to reflect the circumstances of the particular contract (e.g., discount because selling-related costs would not be incurred for a new customer).",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "已转让的商品或已提供的服务（以下简称\"已转让的商品\"）与未转让的商品或未提供的服务（以下简称\"未转让的商品\"）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "promised goods or services"
            }
          ],
          "description": "PRC GAAP introduces defined terms '已转让的商品' (transferred goods) and '未转让的商品' (untransferred goods) to distinguish performance completed versus remaining. IFRS Paragraph 20 uses the broader phrase 'promised goods or services' and does not draw this transferred/untransferred distinction in this paragraph.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "（未提供示例）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For example, an entity may adjust the stand-alone selling price of an additional good or service for a discount that the customer receives, because it is not necessary for the entity to incur the selling-related costs that it would incur when selling a similar good or service to a new customer."
            }
          ],
          "description": "IFRS Paragraph 20 includes an illustrative example of adjusting the stand-alone selling price for a discount when selling-related costs would not be incurred. PRC GAAP Article 8 provides no such example.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 8,
          "sourceText": "本准则所称合同变更，是指经合同各方批准对原合同范围或价格作出的变更。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "（IFRS Paragraph 20 未包含合同变更的定义）"
            }
          ],
          "description": "PRC GAAP Article 8 explicitly defines '合同变更' (contract modification) at the end as a change in scope or price approved by all parties to the contract. IFRS Paragraph 20 does not provide a definition of contract modification in this excerpt.",
          "importance": 3
        }
      ]
    },
    {
      "id": 9,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 9,
        "framework": "PRC_GAAP",
        "number": "第九条",
        "index": 9,
        "content": "合同开始日，企业应当对合同进行评估，识别该合同所包含的各单项履约义务，并确定各单项履约义务是在某一时段内履行，还是在某一时点履行，然后，在履行了各单项履约义务时分别确认收入。 履约义务，是指合同中企业向客户转让可明确区分商品的承诺。履约义务既包括合同中明确的承诺，也包括由于企业已公开宣布的政策、特定声明或以往的习惯做法等导致合同订立时客户合理预期企业将履行的承诺。企业为履行合同而应开展的初始活动，通常不构成履约义务，除非该活动向客户转让了承诺的商品。 企业向客户转让一系列实质相同且转让模式相同的、可明确区分商品的承诺，也应当作为单项履约义务。 转让模式相同，是指每一项可明确区分商品均满足本准则第十一条规定的、在某一时段内履行履约义务的条件，且采用相同方法确定其履约进度。"
      },
      "mappedArticles": [
        {
          "id": 194,
          "framework": "IFRS",
          "number": "Paragraph 22",
          "index": 21,
          "content": "At contract inception, an entity shall assess the goods or services promised in a contract with a customer and shall identify as a performance obligation each promise to transfer to the customer either: (a) a good or service (or a bundle of goods or services) that is distinct; [Refer:Basis for Conclusions paragraph BC95] or (b) a series of distinct goods or services that are substantially the same and that have the same pattern of transfer to the customer (see paragraph 23). [Refer:Basis for Conclusions paragraphs BC113–BC116 and Illustrative Examples, example 7 paragraph IE34 and example 13]"
        },
        {
          "id": 195,
          "framework": "IFRS",
          "number": "Paragraph 23",
          "index": 22,
          "content": "(a) each distinct good or service in the series that the entity promises to transfer to the customer would meet the criteria in paragraph 35 to be a performance obligation satisfied over time; and (b) in accordance with paragraphs 39–40, the same method would be used to measure the entity’s progress towards complete satisfaction of the performance obligation to transfer each distinct good or service in the series to the customer. Promises in contracts with customers"
        },
        {
          "id": 204,
          "framework": "IFRS",
          "number": "Paragraph 32",
          "index": 31,
          "content": "For each performance obligation identified in accordance with paragraphs 22–30, an entity shall determine at contract inception whether it satisfies the performance obligation over time (in accordance with paragraphs 35–37) or satisfies the performance obligation at a point in time (in accordance with paragraph 38). If an entity does not satisfy a performance obligation over time, the performance obligation is satisfied at a point in time."
        }
      ],
      "differences": [
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "（PRC GAAP 第九条, 全部内容）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "（IFRS Paragraph 32, 全部内容）"
            }
          ],
          "description": "PRC GAAP 第九条 is a single, self-contained article that covers identification, definition (including implicit promises and initial activities), the series-of-goods concept, the timing determination, and the revenue recognition trigger. IFRS 32 is narrowly scoped to only the timing determination step for already-identified performance obligations and is part of a longer, cross-referenced structure (paragraphs 22–30 for identification, 35–37 for over-time criteria, 38 for point-in-time criteria, 39–43 for progress measurement). The PRC provision is more consolidated and self-contained; the IFRS provision is modular and relies heavily on cross-references.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "企业应当对合同进行评估，识别该合同所包含的各单项履约义务，并确定各单项履约义务是在某一时段内履行，还是在某一时点履行",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall assess the goods or services promised in a contract with a customer and shall identify as a performance obligation each promise to transfer"
            }
          ],
          "description": "PRC GAAP Article 9 combines the identification of performance obligations with the determination of whether each obligation is satisfied over time or at a point in time within a single paragraph. IFRS 15.22 focuses solely on identification; the over-time vs. point-in-time determination is addressed separately in IFRS 15.35–38.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "履约义务既包括合同中明确的承诺，也包括由于企业已公开宣布的政策、特定声明或以往的习惯做法等导致合同订立时客户合理预期企业将履行的承诺",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall assess the goods or services promised in a contract with a customer and shall identify as a performance obligation each promise to transfer to the customer either: (a) a good or service (or a bundle of goods or services) that is distinct"
            }
          ],
          "description": "PRC GAAP explicitly states within the definition of performance obligation that implied promises arising from public policies, specific statements, or customary business practices form part of performance obligations. IFRS 15.22 does not address implied promises in this paragraph (they are addressed in IFRS 15.24).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "转让模式相同，是指每一项可明确区分商品均满足本准则第十一条规定的、在某一时段内履行履约义务的条件，且采用相同方法确定其履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a series of distinct goods or services that are substantially the same and that have the same pattern of transfer to the customer (see paragraph 23)"
            }
          ],
          "description": "PRC GAAP provides an inline definition of \"same pattern of transfer,\" requiring each distinct good to meet the over-time recognition conditions in Article 11 and use the same method to measure progress. IFRS 15.22 simply cross-references paragraph 23 and incorporates the detailed criteria from IFRS 15.117(b).",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "合同开始日，企业应当对合同进行评估，识别该合同所包含的各单项履约义务，并确定各单项履约义务是在某一时段内履行，还是在某一时点履行，然后，在履行了各单项履约义务时分别确认收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Promises in contracts with customers"
            }
          ],
          "description": "PRC GAAP Article 9 has a much broader scope, covering the full process of contract assessment, identification of performance obligations, determination of timing (over time vs. point in time), and revenue recognition. IFRS Paragraph 23 is narrowly focused only on the conditions for treating a series of distinct goods/services as a single performance obligation.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "履约义务既包括合同中明确的承诺，也包括由于企业已公开宣布的政策、特定声明或以往的习惯做法等导致合同订立时客户合理预期企业将履行的承诺。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Promises in contracts with customers"
            }
          ],
          "description": "PRC GAAP explicitly defines that performance obligations include both explicit contractual promises and implied promises arising from public policies, specific statements, or past practices that customers reasonably expect. IFRS Paragraph 23 only references 'promises in contracts with customers' without elaborating on the scope of what constitutes a promise.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "企业向客户转让一系列实质相同且转让模式相同的、可明确区分商品的承诺，也应当作为单项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "each distinct good or service in the series that the entity promises to transfer to the customer would meet the criteria in paragraph 35"
            }
          ],
          "description": "PRC GAAP requires that goods in the series be '实质相同' (substantially the same), while IFRS uses 'distinct good or service' (可明确区分) for items in the series. The two standards use different conceptual criteria - PRC focuses on homogeneity while IFRS focuses on distinctness within the series concept.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "合同开始日，企业应当对合同进行评估，识别该合同所包含的各单项履约义务，并确定各单项履约义务是在某一时段内履行，还是在某一时点履行，然后，在履行了各单项履约义务时分别确认收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For each performance obligation identified in accordance with paragraphs 22–30, an entity shall determine at contract inception whether it satisfies the performance obligation over time (in accordance with paragraphs 35–37) or satisfies the performance obligation at a point in time (in accordance with paragraph 38). If an entity does not satisfy a performance obligation over time, the performance obligation is satisfied at a point in time."
            }
          ],
          "description": "PRC GAAP bundles three requirements together: (1) assess the contract to identify individual performance obligations, (2) determine whether each is satisfied over time or at a point in time, and (3) recognize revenue when each performance obligation is satisfied. IFRS Paragraph 32 only addresses the timing determination step and references other paragraphs (22–30) for identification and (35–38) for the over-time/point-in-time criteria; revenue recognition upon satisfaction is not reiterated in this paragraph.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "履约义务既包括合同中明确的承诺，也包括由于企业已公开宣布的政策、特定声明或以往的习惯做法等导致合同订立时客户合理预期企业将履行的承诺。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For each performance obligation identified in accordance with paragraphs 22–30..."
            }
          ],
          "description": "PRC GAAP explicitly expands the scope of performance obligations to include implicit promises arising from publicly announced policies, specific statements, or established past practices that the customer would reasonably expect the entity to fulfill. IFRS Paragraph 32 does not address the inclusion of such implied promises; this guidance is contained elsewhere in IFRS 15 (paragraph 24).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "企业向客户转让一系列实质相同且转让模式相同的、可明确区分商品的承诺，也应当作为单项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For each performance obligation identified in accordance with paragraphs 22–30..."
            }
          ],
          "description": "PRC GAAP introduces the concept that a promise to transfer a series of distinct goods that are substantially the same and have the same pattern of transfer shall be treated as a single performance obligation. IFRS Paragraph 32 does not include this series-of-distinct-goods treatment; equivalent guidance is found in IFRS 15 paragraph 22(b) and B7, outside the scope of paragraph 32.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "企业为履行合同而应开展的初始活动，通常不构成履约义务，除非该活动向客户转让了承诺的商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "At contract inception, an entity shall assess the goods or services promised in a contract with a customer and shall identify as a performance obligation each promise to transfer to the customer either: (a) a good or service (or a bundle of goods or services) that is distinct; or (b) a series of distinct goods or services that are substantially the same and that have the same pattern of transfer to the customer"
            }
          ],
          "description": "PRC GAAP explicitly addresses that preliminary/initial activities undertaken to fulfill a contract generally do not constitute performance obligations unless they transfer promised goods to the customer. IFRS 15.22 does not include this guidance (it is contained in IFRS 15.25).",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "可明确区分商品的承诺",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a good or service (or a bundle of goods or services) that is distinct"
            }
          ],
          "description": "PRC GAAP refers only to \"goods\" (商品) in identifying performance obligations, while IFRS 15.22 explicitly uses the broader term \"goods or services\" and also explicitly mentions \"a bundle of goods or services.\" The IFRS formulation is more explicit about the bundle concept.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "履约义务，是指合同中企业向客户转让可明确区分商品的承诺。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "distinct good or service"
            }
          ],
          "description": "PRC GAAP uses the term '可明确区分商品' (distinct goods) while IFRS uses 'distinct good or service'. The Chinese standard emphasizes 'goods' (商品) whereas IFRS explicitly includes both goods and services.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "企业为履行合同而应开展的初始活动，通常不构成履约义务，除非该活动向客户转让了承诺的商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Promises in contracts with customers"
            }
          ],
          "description": "PRC GAAP provides a specific guidance that preliminary/initial activities undertaken to fulfill a contract do not constitute performance obligations unless they transfer promised goods to the customer. This clarification is not present in IFRS Paragraph 23.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "（整段第九条）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 23"
            }
          ],
          "description": "PRC GAAP Article 9 is structured as a comprehensive provision covering definition, scope, and series treatment in one article, while IFRS treats these topics across multiple paragraphs (separate definitions, criteria, and series treatment in Paragraph 23).",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "履约义务，是指合同中企业向客户转让可明确区分商品的承诺。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For each performance obligation identified in accordance with paragraphs 22–30..."
            }
          ],
          "description": "PRC GAAP explicitly defines a performance obligation within this article as a promise to transfer a distinct good to the customer. IFRS Paragraph 32 does not provide a definition; it presupposes the definition and identification of performance obligations have already been completed under paragraphs 22–30.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "企业为履行合同而应开展的初始活动，通常不构成履约义务，除非该活动向客户转让了承诺的商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For each performance obligation identified in accordance with paragraphs 22–30..."
            }
          ],
          "description": "PRC GAAP explicitly states that preliminary/initial activities undertaken to fulfill a contract generally do not constitute a performance obligation unless they transfer a promised good to the customer. IFRS Paragraph 32 contains no such guidance; this clarification is provided in IFRS 15 paragraph 25 (and related implementation guidance), not in paragraph 32.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "转让模式相同，是指每一项可明确区分商品均满足本准则第十一条规定的、在某一时段内履行履约义务的条件，且采用相同方法确定其履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity does not satisfy a performance obligation over time, the performance obligation is satisfied at a point in time."
            }
          ],
          "description": "PRC GAAP specifically defines 'same pattern of transfer' to mean that each distinct good meets the over-time satisfaction criteria and the entity uses the same method to measure progress. IFRS Paragraph 32 contains no such elaboration on transfer patterns; the underlying over-time criteria and progress measurement are addressed separately in paragraphs 35–37 and 39–43.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "（无对应指引性引用）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraph BC95] and [Refer:Basis for Conclusions paragraphs BC113–BC116 and Illustrative Examples, example 7 paragraph IE34 and example 13]"
            }
          ],
          "description": "IFRS 15.22 includes direct cross-references to the Basis for Conclusions (BC95, BC113–BC116) and Illustrative Examples (IE34, example 13) to support its interpretation, whereas PRC GAAP Article 9 contains no such cross-references.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "满足本准则第十一条规定的、在某一时段内履行履约义务的条件",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "meet the criteria in paragraph 35 to be a performance obligation satisfied over time"
            }
          ],
          "description": "PRC GAAP references Article 11 for the over-time satisfaction criteria, while IFRS references Paragraph 35. These are parallel cross-references within each standard's own structure but point to different article/paragraph numbers.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "采用相同方法确定其履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "in accordance with paragraphs 39–40, the same method would be used to measure the entity's progress towards complete satisfaction"
            }
          ],
          "description": "PRC GAAP references using the same method to determine progress (履约进度) while IFRS references paragraphs 39-40 for measuring progress towards complete satisfaction. The IFRS version is more specific by referencing the measurement paragraphs, while PRC GAAP simply states 'the same method' without explicit cross-reference.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "在某一时段内履行，还是在某一时点履行",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "satisfies the performance obligation over time ... or satisfies the performance obligation at a point in time"
            }
          ],
          "description": "Both frameworks use the same two-timing concept (over time vs. at a point in time), but the wording differs. PRC GAAP uses '在某一时段内履行' (fulfilled within a period of time) and '在某一时点履行' (fulfilled at a point in time), while IFRS uses 'satisfies ... over time' and 'satisfies ... at a point in time.' The IFRS wording is action-oriented ('satisfies'), while PRC GAAP wording is process-oriented ('履行').",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 9,
          "sourceText": "合同开始日",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "At contract inception"
            }
          ],
          "description": "Different terminology used for the same concept: PRC GAAP uses 合同开始日 (contract start date) while IFRS uses \"contract inception.\" This is a translation/terminology difference but the underlying concept is consistent.",
          "importance": 1
        }
      ]
    },
    {
      "id": 10,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 10,
        "framework": "PRC_GAAP",
        "number": "第十条",
        "index": 10,
        "content": "企业向客户承诺的商品同时满足下列条件的，应当作为可明确区分商品：\n（一） 客户能够从该商品本身或从该商品与其他易于获得资源一起使用中受益；\n（二） 企业向客户转让该商品的承诺与合同中其他承诺可单独区分。 下列情形通常表明企业向客户转让该商品的承诺与合同中其他承诺不可单独区分：\n1． 企业需提供重大的服务以将该商品与合同中承诺的其他商品整合成合同约定的组合产出转让给客户。\n2． 该商品将对合同中承诺的其他商品予以重大修改或定制。\n3． 该商品与合同中承诺的其他商品具有高度关联性。"
      },
      "mappedArticles": [
        {
          "id": 199,
          "framework": "IFRS",
          "number": "Paragraph 27",
          "index": 26,
          "content": "(a) the customer can benefit from the good or service either on its own or together with other resources that are readily available to the customer (ie the good or service is capable of being distinct); [Refer:Basis for Conclusions paragraphs BC97–BC101] and (b) the entity’s promise to transfer the good or service to the customer is separately identifiable from other promises in the contract (ie the promise to transfer the good or service is distinct within the context of the contract). [Refer:Basis for Conclusions paragraphs BC102–BC105 and BC116 F–BC116 Q]"
        }
      ],
      "differences": [
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 10,
          "sourceText": "下列情形通常表明企业向客户转让该商品的承诺与合同中其他承诺不可单独区分：1．企业需提供重大的服务以将该商品与合同中承诺的其他商品整合成合同约定的组合产出转让给客户。2．该商品将对合同中承诺的其他商品予以重大修改或定制。3．该商品与合同中承诺的其他商品具有高度关联性。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity's promise to transfer the good or service to the customer is separately identifiable from other promises in the contract (ie the promise to transfer the good or service is distinct within the context of the contract)."
            }
          ],
          "description": "PRC_GAAP explicitly lists three indicators that a promise is NOT separately identifiable (significant integration services, significant modification/customization, and high interrelation), while IFRS 15 Paragraph 27 itself does not include these examples within the main criterion text.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 10,
          "sourceText": "企业向客户承诺的商品同时满足下列条件的，应当作为可明确区分商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the customer can benefit from the good or service either on its own or together with other resources that are readily available to the customer"
            }
          ],
          "description": "PRC_GAAP uses '商品' (goods only) while IFRS 15 covers 'good or service' (商品或服务), resulting in a narrower scope in the PRC standard.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 10,
          "sourceText": "应当作为可明确区分商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the good or service is capable of being distinct"
            }
          ],
          "description": "PRC_GAAP uses the term '可明确区分商品' (distinct goods), while IFRS uses 'capable of being distinct' and 'distinct within the context of the contract', reflecting different but corresponding terminology.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 10,
          "sourceText": "客户能够从该商品本身或从该商品与其他易于获得资源一起使用中受益；企业向客户转让该商品的承诺与合同中其他承诺可单独区分。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) the customer can benefit from the good or service either on its own or together with other resources that are readily available to the customer (ie the good or service is capable of being distinct); and (b) the entity's promise to transfer the good or service to the customer is separately identifiable from other promises in the contract"
            }
          ],
          "description": "Both frameworks require satisfaction of two conditions (capable of being distinct and distinct within the context of the contract), but PRC_GAAP expresses these as cumulative conditions using semicolons, while IFRS uses 'and' to connect them as cumulative requirements with parenthetical clarifications.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 10,
          "sourceText": "（无对应引用）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC97–BC101] and [Refer:Basis for Conclusions paragraphs BC102–BC105 and BC116 F–BC116 Q]"
            }
          ],
          "description": "IFRS 15 includes cross-references to the Basis for Conclusions (BC97–BC101 and BC102–BC105, BC116 F–BC116 Q), whereas PRC_GAAP Article 10 contains no such cross-references.",
          "importance": 2
        }
      ]
    },
    {
      "id": 21,
      "relationship": "EQUIVALENT",
      "confidence": 0.97,
      "notes": "",
      "source": {
        "id": 11,
        "framework": "PRC_GAAP",
        "number": "第十一条",
        "index": 11,
        "content": "满足下列条件之一的，属于在某一时段内履行履约义务；否则，属于在某一时点履行履约义务：\n（一） 客户在企业履约的同时即取得并消耗企业履约所带来的经济利益。\n（二） 客户能够控制企业履约过程中在建的商品。\n（三） 企业履约过程中所产出的商品具有不可替代用途，且该企业在整个合同期间内有权就累计至今已完成的履约部分收取款项。 具有不可替代用途，是指因合同限制或实际可行性限制，企业不能轻易地将商品用于其他用途。 有权就累计至今已完成的履约部分收取款项，是指在由于客户或其他方原因终止合同的情况下，企业有权就累计至今已完成的履约部分收取能够补偿其已发生成本和合理利润的款项，并且该权利具有法律约束力。"
      },
      "mappedArticles": [
        {
          "id": 302,
          "framework": "IFRS",
          "number": "Paragraph B2",
          "index": 129,
          "content": "In accordance with paragraph 35, a performance obligation is satisfied over time if one of the following criteria is met: (a) the customer simultaneously receives and consumes the benefits provided by the entity’s performance as the entity performs (see paragraphs B3–B4); (b) the entity’s performance creates or enhances an asset (for example, work in progress) that the customer controls as the asset is created or enhanced (see paragraph B5); or (c) the entity’s performance does not create an asset with an alternative use to the entity (see paragraphs B6–B8) and the entity has an enforceable right to payment for performance completed to date (see paragraphs B9–B13). Simultaneous receipt and consumption of the benefits of the entity’s performance (paragraph 35(a))"
        }
      ],
      "differences": []
    },
    {
      "id": 22,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 12,
        "framework": "PRC_GAAP",
        "number": "第十二条",
        "index": 12,
        "content": "对于在某一时段内履行的履约义务，企业应当在该段时间内按照履约进度确认收入，但是，履约进度不能合理确定的除外。企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度。其中，产出法是根据已转移给客户的商品对于客户的价值确定履约进度；投入法是根据企业为履行履约义务的投入确定履约进度。对于类似情况下的类似履约义务，企业应当采用相同的方法确定履约进度。 当履约进度不能合理确定时，企业已经发生的成本预计能够得到补偿的，应当按照已经发生的成本金额确认收入，直到履约进度能够合理确定为止。"
      },
      "mappedArticles": [
        {
          "id": 210,
          "framework": "IFRS",
          "number": "Paragraph 39",
          "index": 37,
          "content": "For each performance obligation satisfied over time in accordance with paragraphs 35–37, an entity shall recognise revenue over time by measuring the progress towards complete satisfaction of that performance obligation. The objective when measuring progress is to depict an entity’s performance in transferring control of goods or services promised to a customer (ie the satisfaction of an entity’s performance obligation).E7"
        },
        {
          "id": 212,
          "framework": "IFRS",
          "number": "Paragraph 41",
          "index": 39,
          "content": "Appropriate methods of measuring progress include output methods and input methods. [Refer:Basis for Conclusions paragraph BC162 and Illustrative Examples, examples 18, 19, 31 and 57] Paragraphs B14–B19 provide guidance for using output methods and input methods to measure an entity’s progress towards complete satisfaction of a performance obligation. In determining the appropriate method for measuring progress, an entity shall consider the nature of the good or service that the entity promised to transfer to the customer."
        },
        {
          "id": 215,
          "framework": "IFRS",
          "number": "Paragraph 44",
          "index": 42,
          "content": "An entity shall recognise revenue for a performance obligation satisfied over time only if the entity can reasonably measure its progress towards complete satisfaction of the performance obligation. An entity would not be able to reasonably measure its progress towards complete satisfaction of a performance obligation if it lacks reliable information that would be required to apply an appropriate method of measuring progress."
        },
        {
          "id": 216,
          "framework": "IFRS",
          "number": "Paragraph 45",
          "index": 43,
          "content": "In some circumstances (for example, in the early stages of a contract), an entity may not be able to reasonably measure the outcome of a performance obligation, but the entity expects to recover the costs incurred in satisfying the performance obligation. In those circumstances, the entity shall recognise revenue only to the extent of the costs incurred until such time that it can reasonably measure the outcome of the performance obligation. Measurement"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "当履约进度不能合理确定时，企业已经发生的成本预计能够得到补偿的，应当按照已经发生的成本金额确认收入，直到履约进度能够合理确定为止。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC provides a specific practical expedient/recovery rule: when progress cannot be reasonably determined but costs already incurred are expected to be recoverable, revenue should be recognized to the extent of costs incurred until progress can be reasonably determined. IFRS paragraph 39 does not address this scenario; it only references paragraphs 35-37 for determining when over-time recognition applies.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于在某一时段内履行的履约义务，企业应当在该段时间内按照履约进度确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Appropriate methods of measuring progress include output methods and input methods."
            }
          ],
          "description": "PRC_GAAP Article 12 establishes the foundational requirement to recognize revenue over time based on progress for performance obligations satisfied over time, while IFRS paragraph 41 addresses only the measurement methods without restating the overarching revenue recognition principle in this specific paragraph.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "当履约进度不能合理确定时，企业已经发生的成本预计能够得到补偿的，应当按照已经发生的成本金额确认收入，直到履约进度能够合理确定为止。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC_GAAP provides specific guidance for the situation when progress cannot be reasonably determined, requiring revenue recognition based on costs incurred (to the extent recoverable) until progress can be reasonably determined. IFRS paragraph 41 does not address this situation.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "当履约进度不能合理确定时，企业已经发生的成本预计能够得到补偿的，应当按照已经发生的成本金额确认收入，直到履约进度能够合理确定为止",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise revenue for a performance obligation satisfied over time only if the entity can reasonably measure its progress towards complete satisfaction of the performance obligation."
            }
          ],
          "description": "PRC GAAP provides a practical expedient: when progress cannot be reasonably determined but costs are expected to be recovered, revenue is recognized to the extent of costs incurred; IFRS Paragraph 44 contains no such cost-recovery fallback and only states the general inability to recognize revenue when progress cannot be reasonably measured.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于在某一时段内履行的履约义务，企业应当在该段时间内按照履约进度确认收入，但是，履约进度不能合理确定的除外。企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度。其中，产出法是根据已转移给客户的商品对于客户的价值确定履约进度；投入法是根据企业为履行履约义务的投入确定履约进度。对于类似情况下的类似履约义务，企业应当采用相同的方法确定履约进度。 当履约进度不能合理确定时，企业已经发生的成本预计能够得到补偿的，应当按照已经发生的成本金额确认收入，直到履约进度能够合理确定为止。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In some circumstances (for example, in the early stages of a contract), an entity may not be able to reasonably measure the outcome of a performance obligation, but the entity expects to recover the costs incurred in satisfying the performance obligation. In those circumstances, the entity shall recognise revenue only to the extent of the costs incurred until such time that it can reasonably measure the outcome of the performance obligation. Measurement"
            }
          ],
          "description": "PRC_GAAP Article 12 covers a broader scope: the general principle of revenue recognition over time using performance progress, methods to determine progress (output/input methods), consistency requirements, and the fallback rule. IFRS Paragraph 45 only addresses the narrow fallback scenario where the outcome cannot be reasonably measured, not the general over-time recognition principle or measurement methods.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度。其中，产出法是根据已转移给客户的商品对于客户的价值确定履约进度；投入法是根据企业为履行履约义务的投入确定履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The objective when measuring progress is to depict an entity's performance in transferring control of goods or services promised to a customer (ie the satisfaction of an entity's performance obligation)."
            }
          ],
          "description": "PRC explicitly prescribes two specific methods (output method and input method) and provides definitions for each, and requires entities to consider the nature of the goods. IFRS paragraph 39 does not prescribe specific methods; it only states the overarching objective of measuring progress, which is to depict the entity's performance in transferring control.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The objective when measuring progress is to depict an entity's performance in transferring control of goods or services promised to a customer (ie the satisfaction of an entity's performance obligation)."
            }
          ],
          "description": "IFRS paragraph 39 explicitly articulates the measurement objective (to depict the entity's performance in transferring control of goods or services), which is a conceptual anchor for applying the standard. PRC GAAP article 12 does not state an explicit measurement objective in the corresponding text.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于类似情况下的类似履约义务，企业应当采用相同的方法确定履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC_GAAP explicitly requires that entities use the same method to determine progress for similar performance obligations under similar circumstances. IFRS paragraph 41 contains no such consistency requirement.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "产出法是根据已转移给客户的商品对于客户的价值确定履约进度；投入法是根据企业为履行履约义务的投入确定履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraphs B14–B19 provide guidance for using output methods and input methods to measure an entity’s progress towards complete satisfaction of a performance obligation."
            }
          ],
          "description": "PRC_GAAP defines output and input methods inline within Article 12, while IFRS paragraph 41 references separate application guidance in paragraphs B14–B19 rather than including the definitions directly.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "其中，产出法是根据已转移给客户的商品对于客户的价值确定履约进度；投入法是根据企业为履行履约义务的投入确定履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "if it lacks reliable information that would be required to apply an appropriate method of measuring progress."
            }
          ],
          "description": "PRC GAAP provides detailed definitions of output and input methods; IFRS only provides a general condition regarding the availability of reliable information, without defining specific measurement approaches.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度。其中，产出法是根据已转移给客户的商品对于客户的价值确定履约进度；投入法是根据企业为履行履约义务的投入确定履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In those circumstances, the entity shall recognise revenue only to the extent of the costs incurred until such time that it can reasonably measure the outcome of the performance obligation."
            }
          ],
          "description": "PRC_GAAP explicitly prescribes two methods to determine performance progress: the output method (based on the value of goods transferred to the customer) and the input method (based on the entity's input toward fulfilling the obligation). IFRS Paragraph 45 does not address or prescribe any method for measuring progress or outcome.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "已转移给客户的商品对于客户的价值",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "transferring control of goods or services promised to a customer"
            }
          ],
          "description": "PRC's output method refers to 'goods transferred to the customer' and their 'value to the customer', while IFRS uses the more precise concept of 'transferring control of goods or services'. The IFRS concept of 'control' is the foundational principle, which PRC also adopts in its general principles but the specific wording here differs.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于类似情况下的类似履约义务，企业应当采用相同的方法确定履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC explicitly requires that for similar performance obligations under similar circumstances, the same method should be used to determine progress (consistency requirement). IFRS paragraph 39 contains no such consistency requirement.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "但是，履约进度不能合理确定的除外。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "in accordance with paragraphs 35–37"
            }
          ],
          "description": "PRC includes an explicit exception clause 'except when progress cannot be reasonably determined' directly within the article, and addresses the consequence of that exception. IFRS instead cross-references paragraphs 35-37 which set out the criteria for when performance obligations are satisfied over time, without the same inline exception structure.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraph BC162 and Illustrative Examples, examples 18, 19, 31 and 57]"
            }
          ],
          "description": "IFRS paragraph 41 cross-references specific illustrative examples (18, 19, 31, 57) and Basis for Conclusions paragraph BC162 to support the guidance. PRC_GAAP Article 12 contains no such illustrative example references.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "但是，履约进度不能合理确定的除外",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC_GAAP explicitly carves out an exception to the progress-based revenue recognition requirement when progress cannot be reasonably determined. IFRS paragraph 41 does not state this exception in this paragraph.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity would not be able to reasonably measure its progress towards complete satisfaction of a performance obligation if it lacks reliable information that would be required to apply an appropriate method of measuring progress."
            }
          ],
          "description": "PRC GAAP explicitly names two methods (output method 产出法 and input method 投入法) for measuring progress, while IFRS only refers generically to 'an appropriate method of measuring progress' without specifying particular methods.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于类似情况下的类似履约义务，企业应当采用相同的方法确定履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise revenue for a performance obligation satisfied over time only if the entity can reasonably measure its progress towards complete satisfaction of the performance obligation."
            }
          ],
          "description": "PRC GAAP requires consistent use of the same method for similar performance obligations in similar circumstances; IFRS contains no equivalent requirement for consistency of measurement methods.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "履约进度不能合理确定的除外",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "only if the entity can reasonably measure its progress towards complete satisfaction of the performance obligation"
            }
          ],
          "description": "Both address the condition when progress cannot be reasonably determined, but PRC GAAP's exception is followed by detailed guidance on the cost-recovery method, whereas IFRS Paragraph 44 simply states the general limitation without prescribing alternative treatment.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于类似情况下的类似履约义务，企业应当采用相同的方法确定履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In some circumstances (for example, in the early stages of a contract), an entity may not be able to reasonably measure the outcome of a performance obligation, but the entity expects to recover the costs incurred in satisfying the performance obligation. In those circumstances, the entity shall recognise revenue only to the extent of the costs incurred until such time that it can reasonably measure the outcome of the performance obligation."
            }
          ],
          "description": "PRC_GAAP requires consistent application of the same progress-determination method for similar performance obligations under similar circumstances. IFRS Paragraph 45 contains no such consistency requirement.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "对于在某一时段内履行的履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In some circumstances (for example, in the early stages of a contract)"
            }
          ],
          "description": "PRC_GAAP explicitly conditions the rule on performance obligations 'performed over a period of time' (在某一时段内履行), establishing a prerequisite scope. IFRS Paragraph 45 does not explicitly limit the scenario to over-time obligations, though the context implies similar applicability.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业应当在该段时间内按照履约进度确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall recognise revenue over time by measuring the progress towards complete satisfaction of that performance obligation"
            }
          ],
          "description": "PRC uses the term '履约进度' (progress of performance) while IFRS uses 'progress towards complete satisfaction of that performance obligation', which is a slightly broader and more complete phrase that emphasizes 'complete satisfaction'.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "good or service"
            }
          ],
          "description": "PRC_GAAP refers only to 商品 (goods) when discussing consideration of the nature of what is transferred, while IFRS uses the broader term 'good or service'.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In determining the appropriate method for measuring progress, an entity shall consider the nature of the good or service that the entity promised to transfer to the customer."
            }
          ],
          "description": "Both standards share the principle of considering the nature of the promised good or service when selecting the measurement method, though PRC_GAAP expresses it more concisely. This is a substantive alignment with only minor wording differences.",
          "importance": 2
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业应当考虑商品的性质，采用产出法或投入法确定恰当的履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise revenue for a performance obligation satisfied over time only if the entity can reasonably measure its progress towards complete satisfaction of the performance obligation."
            }
          ],
          "description": "PRC GAAP requires the entity to consider the nature of the goods in selecting the appropriate method; IFRS Paragraph 44 does not include a similar 'nature of goods' consideration requirement.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "outcome of the performance obligation"
            }
          ],
          "description": "PRC_GAAP uses '履约进度' (performance progress), referring to the progress/stage of fulfilling the obligation. IFRS uses 'outcome of the performance obligation', which focuses on the result rather than progress. The two terms reflect subtly different conceptual emphases.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "已经发生的成本预计能够得到补偿",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "expects to recover the costs incurred in satisfying the performance obligation"
            }
          ],
          "description": "PRC_GAAP frames the condition as 'costs already incurred are expected to be compensated (得到补偿)', while IFRS uses 'expects to recover the costs incurred'. The terms 'compensated' and 'recover' have similar meanings but may carry slightly different nuances in application.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "当履约进度不能合理确定时，企业已经发生的成本预计能够得到补偿的，应当按照已经发生的成本金额确认收入，直到履约进度能够合理确定为止。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In some circumstances (for example, in the early stages of a contract), an entity may not be able to reasonably measure the outcome of a performance obligation"
            }
          ],
          "description": "IFRS Paragraph 45 provides an illustrative example ('in the early stages of a contract') of when the outcome cannot be reasonably measured. PRC_GAAP Article 12 does not provide any specific example for this scenario.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "performance obligation"
            }
          ],
          "description": "Both use the same underlying concept, but PRC uses the Chinese translation '履约义务' which is consistent across the standard; the IFRS text uses the English term 'performance obligation' directly. This is a translation/labeling difference rather than a substantive one.",
          "importance": 1
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "企业",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity"
            }
          ],
          "description": "PRC_GAAP uses the term 企业 (enterprise/company) to refer to the reporting entity, while IFRS uses the term 'entity'.",
          "importance": 1
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "履约进度",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "measuring progress"
            }
          ],
          "description": "PRC_GAAP uses 履约进度 (performance progress) consistently, while IFRS uses the term 'progress' in the context of 'measuring progress towards complete satisfaction of a performance obligation'.",
          "importance": 1
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 12,
          "sourceText": "在某一时段内履行的履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "performance obligation satisfied over time"
            }
          ],
          "description": "Both refer to the same concept, but PRC GAAP uses the Chinese term '在某一时段内履行的履约义务' (performance obligation satisfied over a period of time) while IFRS uses 'performance obligation satisfied over time'. Minor stylistic/translation difference.",
          "importance": 1
        }
      ]
    },
    {
      "id": 23,
      "relationship": "SIMILAR",
      "confidence": 0.82,
      "notes": "",
      "source": {
        "id": 13,
        "framework": "PRC_GAAP",
        "number": "第十三条",
        "index": 13,
        "content": "对于在某一时点履行的履约义务，企业应当在客户取得相关商品控制权时点确认收入。在判断客户是否已取得商品控制权时，企业应当考虑下列迹象：\n（一） 企业就该商品享有现时收款权利，即客户就该商品负有现时付款义务。\n（二） 企业已将该商品的法定所有权转移给客户，即客户已拥有该商品的法定所有权。\n（三） 企业已将该商品实物转移给客户，即客户已实物占有该商品。\n（四） 企业已将该商品所有权上的主要风险和报酬转移给客户，即客户已取得该商品所有权上的主要风险和报酬。\n（五） 客户已接受该商品。\n（六） 其他表明客户已取得商品控制权的迹象。 第三章 计量"
      },
      "mappedArticles": [
        {
          "id": 203,
          "framework": "IFRS",
          "number": "Paragraph 31",
          "index": 30,
          "content": "An entity shall recognise revenue when (or as) the entity satisfies a performance obligation by transferring a promised good or service (ie an asset) to a customer. An asset is transferred when (or as) the customer obtains control of that asset."
        },
        {
          "id": 382,
          "framework": "IFRS",
          "number": "Paragraph B84",
          "index": 209,
          "content": "If an entity can objectively determine that control of a good or service has been transferred to the customer in accordance with the agreed-upon specifications in the contract, then customer acceptance is a formality that would not affect the entity’s determination of when the customer has obtained control of the good or service. For example, if the customer acceptance clause is based on meeting specified size and weight characteristics, an entity would be able to determine whether those criteria have been met before receiving confirmation of the customer’s acceptance. The entity’s experience with contracts for similar goods or services may provide evidence that a good or service provided to the customer is in accordance with the agreed-upon specifications in the contract. If revenue is recognised before customer acceptance, the entity still must consider whether there are any remaining performance obligations (for example, installation of equipment) and evaluate whether to account for them separately."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "对于在某一时点履行的履约义务，企业应当在客户取得相关商品控制权时点确认收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise revenue when (or as) the entity satisfies a performance obligation by transferring a promised good or service (ie an asset) to a customer."
            }
          ],
          "description": "PRC GAAP Article 13 specifically addresses only performance obligations satisfied at a point in time, whereas IFRS 15 paragraph 31 establishes the general principle covering both point-in-time and over-time satisfaction of performance obligations (indicated by 'when (or as)').",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "在判断客户是否已取得商品控制权时，企业应当考虑下列迹象：（一）企业就该商品享有现时收款权利...（二）企业已将该商品的法定所有权转移给客户...（三）企业已将该商品实物转移给客户...（四）企业已将该商品所有权上的主要风险和报酬转移给客户...（五）客户已接受该商品...（六）其他表明客户已取得商品控制权的迹象。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An asset is transferred when (or as) the customer obtains control of that asset."
            }
          ],
          "description": "PRC GAAP explicitly lists six specific indicators to assess control transfer (right to payment, legal title, physical possession, transfer of significant risks and rewards, customer acceptance, and other indicators), while IFRS 15 paragraph 31 does not enumerate indicators but rather leaves the detailed indicators to paragraphs 33-38 and IFRS 15 Appendix A.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "对于在某一时点履行的履约义务，企业应当在客户取得相关商品控制权时点确认收入。在判断客户是否已取得商品控制权时，企业应当考虑下列迹象：（一）企业就该商品享有现时收款权利...（六）其他表明客户已取得商品控制权的迹象。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity can objectively determine that control of a good or service has been transferred to the customer in accordance with the agreed-upon specifications in the contract, then customer acceptance is a formality that would not affect the entity's determination of when the customer has obtained control of the good or service."
            }
          ],
          "description": "PRC GAAP Article 13 provides a comprehensive, non-exhaustive list of six indicators for determining when control of goods has transferred (right to payment, legal title, physical possession, risks and rewards, acceptance, and other indicators). IFRS B84 is narrowly scoped, addressing only the customer-acceptance indicator and when it is a formality versus a substantive condition.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（四）企业已将该商品所有权上的主要风险和报酬转移给客户，即客户已取得该商品所有权上的主要风险和报酬。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "IFRS Paragraph B84 does not mention risks and rewards; the IFRS 15 control framework deliberately removed risks-and-rewards transfer as a primary indicator."
            }
          ],
          "description": "PRC GAAP retains the legacy 'significant risks and rewards of ownership' transfer as an indicator of control, reflecting influence from IAS 18-era guidance. IFRS 15 (B84's parent standard) intentionally abandoned the risks-and-rewards concept in favor of a pure control-based model.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（五）客户已接受该商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity can objectively determine that control of a good or service has been transferred to the customer in accordance with the agreed-upon specifications in the contract, then customer acceptance is a formality that would not affect the entity's determination of when the customer has obtained control of the good or service."
            }
          ],
          "description": "PRC GAAP treats customer acceptance as a flat indicator among the six. IFRS B84 adds nuance: it distinguishes between substantive acceptance (which affects control) and acceptance that is merely a formality (which does not), based on whether the entity can objectively determine conformance to specifications.",
          "importance": 5
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "客户取得相关商品控制权",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the customer obtains control of that asset"
            }
          ],
          "description": "PRC GAAP uses '商品' (goods/merchandise), while IFRS uses 'asset' (good or service treated as an asset), giving IFRS a broader conceptual framing of what is transferred.",
          "importance": 4
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（四）企业已将该商品所有权上的主要风险和报酬转移给客户，即客户已取得该商品所有权上的主要风险和报酬。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An asset is transferred when (or as) the customer obtains control of that asset."
            }
          ],
          "description": "PRC GAAP retains the legacy 'transfer of significant risks and rewards' indicator, a concept from IAS 18 that IFRS 15 deliberately removed in favor of a pure control-based model. This reflects a substantive conceptual difference in the underlying revenue recognition model.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（未提及剩余履约义务的单独处理）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If revenue is recognised before customer acceptance, the entity still must consider whether there are any remaining performance obligations (for example, installation of equipment) and evaluate whether to account for them separately."
            }
          ],
          "description": "IFRS B84 imposes an additional requirement: even when control (and thus revenue) is recognized before acceptance, the entity must still identify and separately account for any remaining performance obligations such as installation. PRC GAAP Article 13 does not address the separate treatment of remaining obligations in this context.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（一）企业就该商品享有现时收款权利，即客户就该商品负有现时付款义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An asset is transferred when (or as) the customer obtains control of that asset."
            }
          ],
          "description": "PRC GAAP provides concrete illustrative indicators such as right to payment and legal title transfer, while IFRS 15 paragraph 31 contains no such examples, relying instead on the application guidance and illustrative examples elsewhere in the standard.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（未提供具体示例）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For example, if the customer acceptance clause is based on meeting specified size and weight characteristics, an entity would be able to determine whether those criteria have been met before receiving confirmation of the customer's acceptance."
            }
          ],
          "description": "IFRS B84 provides a concrete illustrative example (size and weight characteristics as objective acceptance criteria). PRC GAAP Article 13 lists the six indicators in abstract terms without any illustrative examples.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "（未提及过往经验作为证据）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The entity's experience with contracts for similar goods or services may provide evidence that a good or service provided to the customer is in accordance with the agreed-upon specifications in the contract."
            }
          ],
          "description": "IFRS B84 expressly allows the entity's historical experience with similar contracts to serve as evidence that performance meets specifications. PRC GAAP Article 13 does not reference prior experience as a basis for assessing the control indicators.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "在某一时点履行的履约义务...客户取得相关商品控制权时点确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "control of a good or service has been transferred to the customer...customer has obtained control of the good or service"
            }
          ],
          "description": "PRC GAAP explicitly frames the timing as 'point in time' performance obligations (在某一时点履行的履约义务), aligning structurally with IFRS 15's 'at a point in time' satisfaction concept. Both use 'control' (控制权) as the determinant, but the IFRS excerpt refers to 'good or service' while PRC GAAP here refers to 'goods' (商品) only, suggesting PRC GAAP's snippet is narrower in product scope.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 13,
          "sourceText": "第三章 计量",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "IFRS 15 illustrative examples / Application guidance (B84)"
            }
          ],
          "description": "PRC GAAP Article 13 is positioned within Chapter 3 'Measurement' (计量), suggesting it is part of the measurement provisions of the revenue standard. IFRS B84 appears in the Application Guidance / illustrative examples section of IFRS 15, which is supplementary rather than core measurement guidance. The structural placement differs.",
          "importance": 2
        }
      ]
    },
    {
      "id": 24,
      "relationship": "SIMILAR",
      "confidence": 0.78,
      "notes": "",
      "source": {
        "id": 14,
        "framework": "PRC_GAAP",
        "number": "第十四条",
        "index": 14,
        "content": "企业应当按照分摊至各单项履约义务的交易价格计量收入。 交易价格，是指企业因向客户转让商品而预期有权收取的对价金额。企业代第三方收取的款项以及企业预期将退还给客户的款项，应当作为负债进行会计处理，不计入交易价格。"
      },
      "mappedArticles": [
        {
          "id": 175,
          "framework": "IFRS",
          "number": "Paragraph 2",
          "index": 2,
          "content": "To meet the objective in paragraph 1, the core principle of this Standard is that an entity shall recognise revenue to depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled in exchange for those goods or services. [Refer:Basis for Conclusions paragraphs BC12, BC19–BC21 and BC25–BC27] Paragraph IN7 of the Introduction that accompanied the issue of IFRS 15 in May 2014 summarised the five steps that an entity applies when recognising revenue in accordance with the Standard’s core principle. The steps are: Step 1: Identify the contract(s) with a customer. Step 2: Identify the performance obligations in the contract. Step 3: Determine the transaction price. Step 4: Allocate the transaction price to the performance obligations in the contract. Step 5: Recognise revenue when (or as) the entity satisfies a performance obligation.]"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "企业因向客户转让商品而预期有权收取的对价金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled in exchange for those goods or services"
            }
          ],
          "description": "PRC_GAAP only refers to the transfer of 'goods' (商品) to customers when defining the transaction price, whereas IFRS 15 explicitly covers both 'goods or services' (商品或服务). The PRC provision is narrower in scope as it omits services.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "企业应当按照分摊至各单项履约义务的交易价格计量收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall recognise revenue to depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled in exchange for those goods or services"
            }
          ],
          "description": "PRC_GAAP Article 14 explicitly requires that revenue be measured at the transaction price allocated to each individual performance obligation, which is Step 4 of the IFRS 15 five-step model. IFRS 15 paragraph 2 states only the core principle of recognition, while the allocation requirement is presented separately as part of the five-step framework rather than embedded in the core principle sentence.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "企业代第三方收取的款项以及企业预期将退还给客户的款项，应当作为负债进行会计处理，不计入交易价格",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the consideration to which the entity expects to be entitled in exchange for those goods or services"
            }
          ],
          "description": "PRC_GAAP Article 14 explicitly states that amounts collected on behalf of third parties and amounts expected to be refunded to customers shall be accounted for as liabilities and shall not be included in the transaction price. IFRS 15 paragraph 2 does not address this specific treatment; it is covered elsewhere in IFRS 15 (e.g., in the transaction price guidance paragraphs 47–72).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "企业应当按照分摊至各单项履约义务的交易价格计量收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall recognise revenue to depict the transfer of promised goods or services to customers"
            }
          ],
          "description": "PRC_GAAP Article 14 frames the principle as one of 'measurement' of revenue (计量收入) at the transaction price, whereas IFRS 15 paragraph 2 frames the principle as one of 'recognition' (recognise revenue) of the amount of consideration. This is a difference in how the core obligation is articulated.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "（无对应内容）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Step 1: Identify the contract(s) with a customer. Step 2: Identify the performance obligations in the contract. Step 3: Determine the transaction price. Step 4: Allocate the transaction price to the performance obligations in the contract. Step 5: Recognise revenue when (or as) the entity satisfies a performance obligation."
            }
          ],
          "description": "IFRS 15 paragraph 2 includes a reference to the five-step revenue recognition framework, whereas the PRC_GAAP Article 14 excerpt does not reference any equivalent step-based framework; it only addresses the transaction price allocation and excludes third-party/refund amounts.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "对价金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the consideration to which the entity expects to be entitled"
            }
          ],
          "description": "PRC_GAAP uses '对价金额' (amount of consideration), whereas IFRS 15 uses 'the consideration to which the entity expects to be entitled'. IFRS phrasing explicitly emphasizes the 'entitlement' expectation, which is reflected only implicitly in the PRC text through '预期有权收取' (expects to be entitled to collect).",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 14,
          "sourceText": "企业",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "entity"
            }
          ],
          "description": "PRC_GAAP uses the term '企业' (enterprise/undertaking), while IFRS 15 uses the more general term 'entity'. The Chinese term typically maps to 'entity' in translation, but the original wording differs.",
          "importance": 1
        }
      ]
    },
    {
      "id": 25,
      "relationship": "SIMILAR",
      "confidence": 0.92,
      "notes": "",
      "source": {
        "id": 15,
        "framework": "PRC_GAAP",
        "number": "第十五条",
        "index": 15,
        "content": "企业应当根据合同条款，并结合其以往的习惯做法确定交易价格。在确定交易价格时，企业应当考虑可变对价、合同中存在的重大融资成分、非现金对价、应付客户对价等因素的影响。"
      },
      "mappedArticles": [
        {
          "id": 219,
          "framework": "IFRS",
          "number": "Paragraph 48",
          "index": 46,
          "content": "The nature, timing and amount of consideration promised by a customer affect the estimate of the transaction price. When determining the transaction price, an entity shall consider the effects of all of the following: (a) variable consideration (see paragraphs 50–55 and 59); (b) constraining estimates of variable consideration (see paragraphs 56–58); (c) the existence of a significant financing component in the contract (see paragraphs 60–65); (d) non-cash consideration (see paragraphs 66–69); and (e) consideration payable to a customer (see paragraphs 70–72)."
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 15,
          "sourceText": "constraining estimates of variable consideration (see paragraphs 56–58)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "可变对价"
            }
          ],
          "description": "IFRS treats 'constraining estimates of variable consideration' as a separate, distinct factor to consider when determining the transaction price (cross-referenced to paragraphs 56-58). PRC GAAP only mentions 'variable consideration' (可变对价) without explicitly requiring the entity to consider the constraint on estimates of variable consideration as a separate step.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 15,
          "sourceText": "企业应当根据合同条款，并结合其以往的习惯做法确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The nature, timing and amount of consideration promised by a customer affect the estimate of the transaction price."
            }
          ],
          "description": "PRC GAAP requires determining the transaction price based on contract terms combined with past customary practices (以往的习惯做法), while IFRS does not reference past customary practices. IFRS instead introduces the concept that the nature, timing, and amount of consideration promised by the customer affect the estimate.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 15,
          "sourceText": "The nature, timing and amount of consideration promised by a customer affect the estimate of the transaction price.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "企业应当根据合同条款，并结合其以往的习惯做法确定交易价格。"
            }
          ],
          "description": "IFRS explicitly requires consideration of the nature, timing, and amount of consideration promised by the customer as a factor affecting the transaction price estimate. PRC GAAP's Article 15 does not include this explicit requirement.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 15,
          "sourceText": "可变对价、合同中存在的重大融资成分、非现金对价、应付客户对价等因素",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "all of the following: (a) variable consideration... (b) constraining estimates... (c) the existence of a significant financing component... (d) non-cash consideration... (e) consideration payable to a customer"
            }
          ],
          "description": "PRC GAAP uses '等因素' (and other factors), suggesting a non-exhaustive, open-ended list. IFRS uses 'all of the following' with a closed enumeration (a) through (e), indicating an exhaustive list of factors to consider.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 15,
          "sourceText": "see paragraphs 50–55 and 59... see paragraphs 56–58... see paragraphs 60–65... see paragraphs 66–69... see paragraphs 70–72",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "可变对价、合同中存在的重大融资成分、非现金对价、应付客户对价等因素的影响"
            }
          ],
          "description": "IFRS provides detailed cross-references to specific paragraphs (50-55, 59, 56-58, 60-65, 66-69, 70-72) for each factor, while PRC GAAP Article 15 provides no such paragraph-level cross-references within the article itself.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 15,
          "sourceText": "an entity shall consider the effects of all of the following",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "企业应当考虑可变对价、合同中存在的重大融资成分、非现金对价、应付客户对价等因素的影响"
            }
          ],
          "description": "IFRS requires the entity to 'consider the effects' (plural, comprehensive effects) of the listed factors, while PRC GAAP requires consideration of the factors' '影响' (impact/influence). This is a minor wording difference but reflects the breadth of analysis required.",
          "importance": 2
        }
      ]
    },
    {
      "id": 36,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 16,
        "framework": "PRC_GAAP",
        "number": "第十六条",
        "index": 16,
        "content": "合同中存在可变对价的，企业应当按照期望值或最可能发生金额确定可变对价的最佳估计数，但包含可变对价的交易价格，应当不超过在相关不确定性消除时累计已确认收入极可能不会发生重大转回的金额。企业在评估累计已确认收入是否极可能不会发生重大转回时，应当同时考虑收入转回的可能性及其比重。 每一资产负债表日，企业应当重新估计应计入交易价格的可变对价金额。可变对价金额发生变动的，按照本准则第二十四条和第二十五条规定进行会计处理。"
      },
      "mappedArticles": [
        {
          "id": 227,
          "framework": "IFRS",
          "number": "Paragraph 56",
          "index": 54,
          "content": "An entity shall include in the transaction price some or all of an amount of variable consideration estimated in accordance with paragraph 53 only to the extent that it is highly probable that a significant reversal in the amount of cumulative revenue recognised will not occur when the uncertainty associated with the variable consideration is subsequently resolved. Illustrative Examples, examples 6, 8, 22–26]"
        },
        {
          "id": 228,
          "framework": "IFRS",
          "number": "Paragraph 57",
          "index": 55,
          "content": "In assessing whether it is highly probable [Refer:Basis for Conclusions paragraphs BC208–BC211] that a significant reversal in the amount of cumulative revenue recognised will not occur once the uncertainty related to the variable consideration is subsequently resolved, an entity shall consider both the likelihood and the magnitude of the revenue reversal. Factors that could increase the likelihood or the magnitude of a revenue reversal include, but are not limited to, any of the following: (a) the amount of consideration is highly susceptible to factors outside the entity’s influence. Those factors may include volatility in a market, the judgement or actions of third parties, weather conditions and a high risk of obsolescence of the promised good or service. (b) the uncertainty about the amount of consideration is not expected to be resolved for a long period of time. (c) the entity’s experience (or other evidence) with similar types of contracts is limited, or that experience (or other evidence) has limited predictive value. (d) the entity has a practice of either offering a broad range of price concessions or changing the payment terms and conditions of similar contracts in similar circumstances. (e) the contract has a large number and broad range of possible consideration amounts."
        },
        {
          "id": 230,
          "framework": "IFRS",
          "number": "Paragraph 59",
          "index": 57,
          "content": "At the end of each reporting period, an entity shall update the estimated transaction price (including updating its assessment of whether an estimate of variable consideration is constrained) to represent faithfully the circumstances present at the end of the reporting period and the changes in circumstances during the reporting period. The entity shall account for changes in the transaction price in accordance with paragraphs 87–90. The existence of a significant financing component in the contract"
        }
      ],
      "differences": [
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "Factors that could increase the likelihood or the magnitude of a revenue reversal include, but are not limited to, any of the following: (a) the amount of consideration is highly susceptible to factors outside the entity's influence... (b) the uncertainty about the amount of consideration is not expected to be resolved for a long period of time. (c) the entity's experience... is limited... (d) the entity has a practice of either offering a broad range of price concessions... (e) the contract has a large number and broad range of possible consideration amounts.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[No factors listed in PRC GAAP 第十六条]"
            }
          ],
          "description": "IFRS paragraph 57 enumerates five specific factors (a)–(e) that could increase the likelihood or magnitude of a revenue reversal (e.g., market volatility, third-party judgement, weather, obsolescence, long resolution period, limited experience, price concessions, broad range of consideration). PRC GAAP 第十六条 contains no such illustrative list of factors.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "企业在评估累计已确认收入是否极可能不会发生重大转回时，应当同时考虑收入转回的可能性及其比重",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "only to the extent that it is highly probable that a significant reversal in the amount of cumulative revenue recognised will not occur"
            }
          ],
          "description": "PRC GAAP explicitly requires enterprises to consider both the likelihood and the magnitude/proportion of the revenue reversal when assessing whether a significant reversal is highly unlikely. IFRS does not include this additional guidance on the dual consideration of possibility and proportion in this paragraph.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "每一资产负债表日，企业应当重新估计应计入交易价格的可变对价金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(no corresponding requirement)"
            }
          ],
          "description": "PRC GAAP explicitly requires enterprises to re-estimate the amount of variable consideration to be included in the transaction price at each balance sheet date. IFRS Paragraph 56 does not contain this re-estimation requirement, although re-estimation is required elsewhere in IFRS 15.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "合同中存在可变对价的，企业应当按照期望值或最可能发生金额确定可变对价的最佳估计数",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In assessing whether it is highly probable that a significant reversal in the amount of cumulative revenue recognised will not occur once the uncertainty related to the variable consideration is subsequently resolved, an entity shall consider both the likelihood and the magnitude of the revenue reversal."
            }
          ],
          "description": "PRC GAAP paragraph 16 covers multiple topics (estimation method, reversal threshold, re-estimation at each balance sheet date, reference to other articles), while IFRS paragraph 57 is narrowly scoped to only the reversal-assessment criteria and indicative factors.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "每一资产负债表日，企业应当重新估计应计入交易价格的可变对价金额。可变对价金额发生变动的，按照本准则第二十四条和第二十五条规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Not addressed in IFRS 15 paragraph 57]"
            }
          ],
          "description": "PRC GAAP explicitly requires the entity to re-estimate the variable consideration amount at every balance sheet date and to account for changes per Articles 24 and 25. IFRS paragraph 57 does not include a re-estimation requirement (it is addressed elsewhere in IFRS 15, e.g., paragraphs 56 and 59).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "企业应当按照期望值或最可能发生金额确定可变对价的最佳估计数",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall update the estimated transaction price (including updating its assessment of whether an estimate of variable consideration is constrained)"
            }
          ],
          "description": "PRC GAAP explicitly prescribes two methods for estimating variable consideration: the expected value method or the most likely amount method. IFRS 15 paragraph 59 does not specify which estimation method to use; it only requires updating the estimate and the constraint assessment.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "包含可变对价的交易价格，应当不超过在相关不确定性消除时累计已确认收入极可能不会发生重大转回的金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "including updating its assessment of whether an estimate of variable consideration is constrained"
            }
          ],
          "description": "PRC GAAP contains an explicit standalone cap/constraint: the transaction price including variable consideration must not exceed the amount for which it is highly probable that a significant reversal will not occur. IFRS paragraph 59 only references the constraint as part of the update requirement without restating the constraint rule itself.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "每一资产负债表日，企业应当重新估计应计入交易价格的可变对价金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall update the estimated transaction price (including updating its assessment of whether an estimate of variable consideration is constrained)"
            }
          ],
          "description": "PRC GAAP limits the re-estimation requirement to the variable consideration amount within the transaction price. IFRS has a broader scope, requiring the entire estimated transaction price to be updated, of which the variable consideration constraint is only one component.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "企业应当按照期望值或最可能发生金额确定可变对价的最佳估计数",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "variable consideration estimated in accordance with paragraph 53"
            }
          ],
          "description": "PRC GAAP directly specifies that enterprises should use the expected value method or the most likely amount method to determine the best estimate of variable consideration. IFRS does not describe the methods in this paragraph but cross-references paragraph 53 where these methods are defined.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "可变对价金额发生变动的，按照本准则第二十四条和第二十五条规定进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(no corresponding requirement)"
            }
          ],
          "description": "PRC GAAP requires that changes in variable consideration be accounted for in accordance with Articles 24 and 25 of the standard. IFRS Paragraph 56 does not include a cross-reference to specific paragraphs on accounting treatment for changes in variable consideration.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "极可能",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "highly probable"
            }
          ],
          "description": "PRC GAAP uses the Chinese term '极可能' which is the standard translation of 'highly probable'. While conceptually similar, the practical threshold and interpretation of '极可能' under PRC GAAP may differ in application from 'highly probable' under IFRS, where 'highly probable' is typically interpreted as a higher threshold than 'more likely than not' but lower than 'virtually certain'.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "企业应当按照期望值或最可能发生金额确定可变对价的最佳估计数",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Not addressed in IFRS 15 paragraph 57]"
            }
          ],
          "description": "PRC GAAP specifies two acceptable methods for estimating variable consideration (expected value or most likely amount). IFRS paragraph 57 does not prescribe the estimation method; this requirement is located in IFRS 15 paragraph 53.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "累计已确认收入极可能不会发生重大转回",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "highly probable that a significant reversal in the amount of cumulative revenue recognised will not occur"
            }
          ],
          "description": "Both use 'highly probable / 极可能' as the threshold and 'significant reversal / 重大转回' for the qualitative threshold, but PRC GAAP additionally caps the transaction price itself at this amount ('交易价格...不超过...金额'), whereas IFRS 15 paragraph 57 frames the test only as a constraint on recognised revenue, with the price-cap language in paragraph 56.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "企业在评估累计已确认收入是否极可能不会发生重大转回时，应当同时考虑收入转回的可能性及其比重",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "updating its assessment of whether an estimate of variable consideration is constrained"
            }
          ],
          "description": "PRC GAAP explicitly requires entities to consider both the likelihood (可能性) and the magnitude/weight (比重) of revenue reversal when assessing the constraint. IFRS 15 paragraph 59 does not detail these factors, although they are described elsewhere in IFRS 15 (paragraphs 57–58).",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "每一资产负债表日，企业应当重新估计应计入交易价格的可变对价金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "to represent faithfully the circumstances present at the end of the reporting period and the changes in circumstances during the reporting period"
            }
          ],
          "description": "PRC GAAP does not articulate the underlying purpose of the re-estimation. IFRS explicitly states the objective: to faithfully represent the circumstances at the end of the reporting period and the changes in circumstances during the period.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "合同中存在可变对价的，企业应当按照期望值或最可能发生金额确定可变对价的最佳估计数，但包含可变对价的交易价格，应当不超过在相关不确定性消除时累计已确认收入极可能不会发生重大转回的金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The existence of a significant financing component in the contract"
            }
          ],
          "description": "IFRS paragraph 59 also introduces/mentions the topic of a significant financing component in the contract, which is not addressed in PRC GAAP Article 16. This indicates IFRS paragraph 59 covers additional topics beyond variable consideration constraint updates.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "企业",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity"
            }
          ],
          "description": "PRC GAAP uses the term '企业' (enterprise), while IFRS uses the more general term 'entity' (主体). The IFRS term is broader in scope than the PRC term.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "(no corresponding reference)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Illustrative Examples, examples 6, 8, 22–26"
            }
          ],
          "description": "IFRS Paragraph 56 includes a reference to specific illustrative examples (examples 6, 8, and 22–26) that demonstrate the application of the variable consideration constraint. PRC GAAP Article 16 does not reference any illustrative examples.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "应当同时考虑收入转回的可能性及其比重",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall consider both the likelihood and the magnitude of the revenue reversal"
            }
          ],
          "description": "PRC GAAP uses '可能性及其比重' (likelihood and proportion/weight), while IFRS uses 'likelihood and the magnitude' (likelihood and amount/size). The concepts align but the wording differs — PRC emphasises proportional share, IFRS emphasises size/magnitude.",
          "importance": 2
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "可变对价金额发生变动的，按照本准则第二十四条和第二十五条规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[No reference to other paragraphs in IFRS 15 paragraph 57]"
            }
          ],
          "description": "PRC GAAP 第十六条 explicitly cross-references its own Articles 24 and 25 for the accounting treatment of changes in variable consideration. IFRS paragraph 57 does not cross-reference any other paragraph for subsequent accounting treatment.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "每一资产负债表日",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "At the end of each reporting period"
            }
          ],
          "description": "PRC GAAP uses '资产负债表日' (balance sheet date) whereas IFRS uses 'reporting period'. These are functionally similar but terminologically distinct, with IFRS being broader (covering interim and annual reporting periods).",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "极可能不会发生重大转回",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "whether an estimate of variable consideration is constrained"
            }
          ],
          "description": "PRC GAAP uses the term '极可能' (highly probable) as the threshold for the constraint, whereas IFRS paragraph 59 refers simply to the variable consideration being 'constrained' without restating the 'highly probable' threshold in this paragraph.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "可变对价金额发生变动的，按照本准则第二十四条和第二十五条规定进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The entity shall account for changes in the transaction price in accordance with paragraphs 87–90."
            }
          ],
          "description": "Both standards require changes to be accounted for using specific other provisions, but they reference different paragraphs: PRC GAAP refers to its Articles 24 and 25, whereas IFRS refers to paragraphs 87–90 (which address contract modifications and changes in transaction price).",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 16,
          "sourceText": "In assessing whether it is highly probable [Refer:Basis for Conclusions paragraphs BC208–BC211]...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[No Basis for Conclusions cross-reference in PRC GAAP 第十六条]"
            }
          ],
          "description": "IFRS paragraph 57 includes a cross-reference to the Basis for Conclusions (BC208–BC211) explaining the 'highly probable' threshold. PRC GAAP 第十六条 contains no equivalent cross-reference.",
          "importance": 1
        }
      ]
    },
    {
      "id": 37,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 17,
        "framework": "PRC_GAAP",
        "number": "第十七条",
        "index": 17,
        "content": "合同中存在重大融资成分的，企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格。该交易价格与合同对价之间的差额，应当在合同期间内采用实际利率法摊销。 合同开始日，企业预计客户取得商品控制权与客户支付价款间隔不超过一年的，可以不考虑合同中存在的重大融资成分。"
      },
      "mappedArticles": [
        {
          "id": 231,
          "framework": "IFRS",
          "number": "Paragraph 60",
          "index": 58,
          "content": "In determining the transaction price, an entity shall adjust the promised amount of consideration for the effects of the time value of money if the timing of payments agreed to by the parties to the contract (either explicitly or implicitly) provides the customer or the entity with a significant benefit of financing the transfer of goods or services to the customer. In those circumstances, the contract contains a significant financing component. A significant financing component may exist regardless of whether the promise of financing is explicitly stated in the contract or implied by the payment terms agreed to by the parties to the contract."
        },
        {
          "id": 234,
          "framework": "IFRS",
          "number": "Paragraph 63",
          "index": 61,
          "content": "As a practical expedient, an entity need not adjust the promised amount of consideration for the effects of a significant financing component if the entity expects, at contract inception, that the period between when the entity transfers a promised good or service to a customer and when the customer pays for that good or service will be one year or less. [Refer:Basis for Conclusions paragraphs BC235–BC236]"
        },
        {
          "id": 235,
          "framework": "IFRS",
          "number": "Paragraph 64",
          "index": 62,
          "content": "To meet the objective in paragraph 61 when adjusting the promised amount of consideration for a significant financing component, an entity shall use the discount rate that would be reflected in a separate financing transaction between the entity and its customer at contract inception. That rate would reflect the credit characteristics of the party receiving financing in the contract, as well as any collateral or security provided by the customer or the entity, including assets transferred in the contract. An entity may be able to determine that rate by identifying the rate that discounts the nominal amount of the promised consideration to the price that the customer would pay in cash for the goods or services when (or as) they transfer to the customer. [Refer:Basis for Conclusions paragraphs BC239–BC241] After contract inception, an entity shall not update the discount rate for changes in interest rates or other circumstances (such as a change in the assessment of the customer’s credit risk). [Refer:Basis for Conclusions paragraphs BC242–BC243]"
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同开始日，企业预计客户取得商品控制权与客户支付价款间隔不超过一年的，可以不考虑合同中存在的重大融资成分。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In determining the transaction price, an entity shall adjust the promised amount of consideration for the effects of the time value of money..."
            }
          ],
          "description": "PRC GAAP contains an explicit practical expedient: if at the contract commencement date the expected interval between the customer obtaining control of the goods and the customer paying the consideration does not exceed one year, the entity need not consider the significant financing component. IFRS 15 Paragraph 60 itself does not include this one-year practical expedient (it appears in IFRS 15 Paragraph 63 instead), so the content is absent from the IFRS excerpt being compared.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "该交易价格与合同对价之间的差额，应当在合同期间内采用实际利率法摊销。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In determining the transaction price, an entity shall adjust the promised amount of consideration for the effects of the time value of money..."
            }
          ],
          "description": "PRC GAAP explicitly requires that the difference between the transaction price and the contract consideration be amortized over the contract period using the effective interest method (\"实际利率法摊销\"). IFRS 15 Paragraph 60 does not address the subsequent amortization of the financing component (this guidance is located in IFRS 15 Paragraph 65), so it is absent from the IFRS excerpt.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的，企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格。该交易价格与合同对价之间的差额，应当在合同期间内采用实际利率法摊销。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "As a practical expedient, an entity need not adjust the promised amount of consideration for the effects of a significant financing component if the entity expects, at contract inception, that the period between when the entity transfers a promised good or service to a customer and when the customer pays for that good or service will be one year or less."
            }
          ],
          "description": "PRC GAAP Article 17 covers the full treatment of significant financing components (determining transaction price based on assumed cash payment and amortizing the difference), while IFRS Paragraph 63 only addresses the practical expedient for the one-year-or-less case, without specifying the general accounting treatment.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格。该交易价格与合同对价之间的差额，应当在合同期间内采用实际利率法摊销。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity need not adjust the promised amount of consideration for the effects of a significant financing component"
            }
          ],
          "description": "PRC GAAP explicitly requires entities to determine the transaction price based on the cash payment amount the customer would pay upon obtaining control of the goods, and to amortize the difference between the transaction price and contract consideration using the effective interest method. IFRS Paragraph 63 does not specify the general measurement requirement, only the exception.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的，企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "provides the customer or the entity with a significant benefit of financing the transfer of goods or services to the customer"
            }
          ],
          "description": "IFRS explicitly states that the significant financing benefit may accrue to either the customer or the entity itself (i.e., financing may be provided by either party). PRC GAAP does not address who is the beneficiary of the financing component.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A significant financing component may exist regardless of whether the promise of financing is explicitly stated in the contract or implied by the payment terms agreed to by the parties to the contract."
            }
          ],
          "description": "IFRS explicitly clarifies that a significant financing component can exist whether the financing is explicitly stated in the contract or merely implied by the agreed payment terms. PRC GAAP does not contain this explicit clarification on explicit vs. implicit financing arrangements.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall adjust the promised amount of consideration for the effects of the time value of money"
            }
          ],
          "description": "PRC GAAP prescribes a specific measurement basis: the transaction price equals the cash-payable amount assumed to be paid at the moment the customer obtains control of the goods. IFRS instead frames the requirement more generally as adjusting the promised consideration for the time value of money, without mandating this specific cash-payment-at-control measurement formulation.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的，企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "To meet the objective in paragraph 61 when adjusting the promised amount of consideration for a significant financing component, an entity shall use the discount rate that would be reflected in a separate financing transaction between the entity and its customer at contract inception."
            }
          ],
          "description": "PRC_GAAP prescribes the transaction price as the cash selling price when control transfers, whereas IFRS requires using a discount rate reflective of a separate financing transaction between the entity and customer at contract inception. The two standards approach the same concept through different mechanics.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同开始日，企业预计客户取得商品控制权与客户支付价款间隔不超过一年的，可以不考虑合同中存在的重大融资成分。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(No direct equivalent in IFRS 15 paragraph 64)"
            }
          ],
          "description": "PRC_GAAP provides a practical expedient: if the expected interval between the customer obtaining control and payment is no more than one year, the significant financing component need not be considered. IFRS paragraph 64 does not contain this practical expedient; the similar one-year expedient is located in paragraph 63 of IFRS 15, not paragraph 64.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "(No equivalent in PRC_GAAP Article 17)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "That rate would reflect the credit characteristics of the party receiving financing in the contract, as well as any collateral or security provided by the customer or the entity, including assets transferred in the contract."
            }
          ],
          "description": "IFRS explicitly requires that the discount rate reflect the credit characteristics of the party receiving financing and any collateral or security provided (including assets transferred in the contract). PRC_GAAP Article 17 does not specify these factors for determining the appropriate rate.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "(No equivalent in PRC_GAAP Article 17)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "After contract inception, an entity shall not update the discount rate for changes in interest rates or other circumstances (such as a change in the assessment of the customer’s credit risk)."
            }
          ],
          "description": "IFRS explicitly prohibits updating the discount rate after contract inception for changes in interest rates or other circumstances, including changes in credit risk assessment. PRC_GAAP Article 17 does not contain this restriction.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的，企业应当按照假定客户在取得商品控制权时即以现金支付的应付金额确定交易价格。该交易价格与合同对价之间的差额，应当在合同期间内采用实际利率法摊销。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall adjust the promised amount of consideration for the effects of the time value of money if the timing of payments agreed to by the parties to the contract (either explicitly or implicitly) provides the customer or the entity with a significant benefit of financing the transfer of goods or services to the customer"
            }
          ],
          "description": "IFRS explicitly references the \"effects of the time value of money\" as the underlying economic phenomenon, whereas PRC GAAP describes the same effect indirectly through the cash-payment assumption without using the explicit term \"time value of money.\"",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "采用实际利率法摊销",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC235–BC236]"
            }
          ],
          "description": "PRC GAAP explicitly specifies the use of the 'effective interest method' (实际利率法) for amortization, while IFRS Paragraph 63 itself does not mention the effective interest method, referring instead to the Basis for Conclusions for additional context.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "该交易价格与合同对价之间的差额，应当在合同期间内采用实际利率法摊销。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(No direct equivalent in IFRS 15 paragraph 64)"
            }
          ],
          "description": "PRC_GAAP explicitly requires amortization of the difference between transaction price and contract consideration using the effective interest method over the contract period. IFRS paragraph 64 does not describe an amortization method in this paragraph; the effective interest method is addressed elsewhere in IFRS 15.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "(No equivalent in PRC_GAAP Article 17)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity may be able to determine that rate by identifying the rate that discounts the nominal amount of the promised consideration to the price that the customer would pay in cash for the goods or services when (or as) they transfer to the customer."
            }
          ],
          "description": "IFRS provides a practical method to determine the discount rate by discounting the nominal promised consideration to the cash selling price, which PRC_GAAP Article 17 does not explicitly describe.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同开始日，企业预计客户取得商品控制权与客户支付价款间隔不超过一年的，可以不考虑合同中存在的重大融资成分。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "at contract inception, that the period between when the entity transfers a promised good or service to a customer and when the customer pays for that good or service will be one year or less"
            }
          ],
          "description": "Both standards allow ignoring the significant financing component when the period is one year or less, but PRC GAAP uses permissive language '可以不考虑' (may not consider) while IFRS frames it explicitly as a 'practical expedient', giving it a more defined accounting policy status.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "for the effects of a significant financing component"
            }
          ],
          "description": "PRC GAAP frames the entire provision conditionally on 'if a significant financing component exists in the contract', implying a threshold assessment is needed. IFRS Paragraph 63 assumes the existence of a significant financing component and only addresses whether to adjust for its effects, without restating the existence condition.",
          "importance": 2
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 17,
          "sourceText": "合同中存在重大融资成分的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "when adjusting the promised amount of consideration for a significant financing component"
            }
          ],
          "description": "Both articles address a significant financing component, but IFRS ties the requirement to the objective in paragraph 61 (adjusting the promised amount of consideration), while PRC_GAAP frames the requirement around determining the transaction price. The conceptual framing differs.",
          "importance": 2
        }
      ]
    },
    {
      "id": 38,
      "relationship": "SIMILAR",
      "confidence": 0.72,
      "notes": "",
      "source": {
        "id": 18,
        "framework": "PRC_GAAP",
        "number": "第十八条",
        "index": 18,
        "content": "客户支付非现金对价的，企业应当按照非现金对价的公允价值确定交易价格。非现金对价的公允价值不能合理估计的，企业应当参照其承诺向客户转让商品的单独售价间接确定交易价格。非现金对价的公允价值因对价形式以外的原因而发生变动的，应当作为可变对价，按照本准则第十六条规定进行会计处理。 单独售价，是指企业向客户单独销售商品的价格。"
      },
      "mappedArticles": [
        {
          "id": 219,
          "framework": "IFRS",
          "number": "Paragraph 48",
          "index": 46,
          "content": "The nature, timing and amount of consideration promised by a customer affect the estimate of the transaction price. When determining the transaction price, an entity shall consider the effects of all of the following: (a) variable consideration (see paragraphs 50–55 and 59); (b) constraining estimates of variable consideration (see paragraphs 56–58); (c) the existence of a significant financing component in the contract (see paragraphs 60–65); (d) non-cash consideration (see paragraphs 66–69); and (e) consideration payable to a customer (see paragraphs 70–72)."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "客户支付非现金对价的，企业应当按照非现金对价的公允价值确定交易价格。非现金对价的公允价值不能合理估计的，企业应当参照其承诺向客户转让商品的单独售价间接确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(d) non-cash consideration (see paragraphs 66–69)"
            }
          ],
          "description": "PRC GAAP Article 18 provides detailed, substantive guidance specifically on non-cash consideration, including measurement hierarchy (fair value first, then standalone selling price as a fallback). IFRS 15 Paragraph 48 only lists non-cash consideration as one of several factors to consider and cross-references paragraphs 66-69 for the actual requirements. The PRC provision is a self-contained rule; the IFRS provision is merely a scoping/overview paragraph.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "客户支付非现金对价的，企业应当按照非现金对价的公允价值确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The nature, timing and amount of consideration promised by a customer affect the estimate of the transaction price. When determining the transaction price, an entity shall consider the effects of all of the following:"
            }
          ],
          "description": "PRC GAAP Article 18 is narrowly focused on the single topic of non-cash consideration. IFRS 15 Paragraph 48 has a much broader scope, introducing five different factors (variable consideration, constraint on variable consideration, significant financing component, non-cash consideration, and consideration payable to a customer) that affect the transaction price estimate.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "非现金对价的公允价值因对价形式以外的原因而发生变动的，应当作为可变对价，按照本准则第十六条规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) variable consideration (see paragraphs 50–55 and 59); (b) constraining estimates of variable consideration (see paragraphs 56–58)"
            }
          ],
          "description": "PRC GAAP explicitly requires that changes in the fair value of non-cash consideration caused by reasons other than the form of the consideration be treated as variable consideration and accounted for under Article 16. IFRS 15 Paragraph 48 separately lists variable consideration and its constraint as items (a) and (b) but does not specifically address the interaction between non-cash consideration fair value changes and variable consideration within Paragraph 48 itself.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "非现金对价的公允价值不能合理估计的，企业应当参照其承诺向客户转让商品的单独售价间接确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(d) non-cash consideration (see paragraphs 66–69)"
            }
          ],
          "description": "PRC GAAP establishes an explicit fallback measurement approach: if the fair value of non-cash consideration cannot be reasonably estimated, the entity must indirectly determine the transaction price by reference to the standalone selling price of the goods promised to the customer. IFRS 15 Paragraph 48 does not include this fallback rule; any such guidance would be contained in the cross-referenced paragraphs 66-69, not in the overview paragraph.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "客户支付非现金对价的，企业应当按照非现金对价的公允价值确定交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) variable consideration (see paragraphs 50–55 and 59); (b) constraining estimates of variable consideration (see paragraphs 56–58); (c) the existence of a significant financing component in the contract (see paragraphs 60–65); (e) consideration payable to a customer (see paragraphs 70–72)"
            }
          ],
          "description": "IFRS 15 Paragraph 48 explicitly requires consideration of four additional elements that are outside the scope of PRC GAAP Article 18: variable consideration, constraining estimates of variable consideration, significant financing components, and consideration payable to a customer. PRC GAAP Article 18 does not address these elements in the same paragraph.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "单独售价，是指企业向客户单独销售商品的价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(see paragraphs 66–69)"
            }
          ],
          "description": "PRC GAAP Article 18 includes a definitional clause for 'standalone selling price' (单独售价), defining it as the price at which an entity sells a good separately to a customer. IFRS 15 Paragraph 48 contains no definitions; it only provides cross-references to other paragraphs where the relevant terminology would be developed.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 18,
          "sourceText": "第十八条 (Article 18)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 48"
            }
          ],
          "description": "Structural and functional difference: PRC GAAP Article 18 is a substantive operative provision containing actual measurement and accounting rules. IFRS 15 Paragraph 48 is a framework/overview paragraph that provides only a list of topics and cross-references to detailed operative paragraphs. The two serve fundamentally different roles in their respective standards.",
          "importance": 3
        }
      ]
    },
    {
      "id": 39,
      "relationship": "EQUIVALENT",
      "confidence": 0.97,
      "notes": "",
      "source": {
        "id": 19,
        "framework": "PRC_GAAP",
        "number": "第十九条",
        "index": 19,
        "content": "企业应付客户（或向客户购买本企业商品的第三方，本条下同）对价的，应当将该应付对价冲减交易价格，并在确认相关收入与支付（或承诺支付）客户对价二者孰晚的时点冲减当期收入，但应付客户对价是为了向客户取得其他可明确区分商品的除外。 企业应付客户对价是为了向客户取得其他可明确区分商品的，应当采用与本企业其他采购相一致的方式确认所购买的商品。企业应付客户对价超过向客户取得可明确区分商品公允价值的，超过金额应当冲减交易价格。向客户取得的可明确区分商品公允价值不能合理估计的，企业应当将应付客户对价全额冲减交易价格。"
      },
      "mappedArticles": [
        {
          "id": 241,
          "framework": "IFRS",
          "number": "Paragraph 70",
          "index": 68,
          "content": "Consideration payable to a customer includes cash amounts that an entity pays, or expects to pay, to the customer (or to other parties that purchase the entity’s goods or services from the customer). Consideration payable to a customer also includes credit or other items (for example, a coupon or voucher) that can be applied against amounts owed to the entity (or to other parties that purchase the entity’s goods or services from the customer). An entity shall account for consideration payable to a customer as a reduction of the transaction price and, therefore, of revenue unless the payment to the customer is in exchange for a distinct good or service (as described in paragraphs 26–30) that the customer transfers to the entity. If the consideration payable to a customer includes a variable amount, an entity shall estimate the transaction price (including assessing whether the estimate of variable consideration is constrained) in accordance with paragraphs 50–58."
        },
        {
          "id": 242,
          "framework": "IFRS",
          "number": "Paragraph 71",
          "index": 69,
          "content": "If consideration payable to a customer is a payment for a distinct good or service from the customer, then an entity shall account for the purchase of the good or service in the same way that it accounts for other purchases from suppliers. [Refer:Basis for Conclusions paragraph BC256] If the amount of consideration payable to the customer exceeds the fair value of the distinct good or service that the entity receives from the customer, then the entity shall account for such an excess as a reduction of the transaction price. [Refer:Basis for Conclusions paragraph BC257] If the entity cannot reasonably estimate the fair value of the good or service received from the customer, it shall account for all of the consideration payable to the customer as a reduction of the transaction price."
        },
        {
          "id": 243,
          "framework": "IFRS",
          "number": "Paragraph 72",
          "index": 70,
          "content": "Accordingly, if consideration payable to a customer is accounted for as a reduction of the transaction price, an entity shall recognise the reduction of revenue when (or as) the later of either of the following events occurs: (a) the entity recognises revenue for the transfer of the related goods or services to the customer; and (b) the entity pays or promises to pay the consideration (even if the payment is conditional on a future event). That promise might be implied by the entity’s customary business practices. Allocating the transaction price to performance obligations"
        }
      ],
      "differences": []
    },
    {
      "id": 40,
      "relationship": "SIMILAR",
      "confidence": 0.93,
      "notes": "",
      "source": {
        "id": 20,
        "framework": "PRC_GAAP",
        "number": "第二十条",
        "index": 20,
        "content": "合同中包含两项或多项履约义务的，企业应当在合同开始日，按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务。企业不得因合同开始日之后单独售价的变动而重新分摊交易价格。"
      },
      "mappedArticles": [
        {
          "id": 245,
          "framework": "IFRS",
          "number": "Paragraph 74",
          "index": 72,
          "content": "To meet the allocation objective, an entity shall allocate the transaction price to each performance obligation identified in the contract on a relative stand-alone selling price basis [Refer:Basis for Conclusions paragraph BC266] in accordance with paragraphs 76–80, except as specified in paragraphs 81–83 (for allocating discounts) and paragraphs 84–86 (for allocating consideration that includes variable amounts)."
        },
        {
          "id": 259,
          "framework": "IFRS",
          "number": "Paragraph 88",
          "index": 86,
          "content": "An entity shall allocate to the performance obligations in the contract any subsequent changes in the transaction price on the same basis as at contract inception. [Refer:Basis for Conclusions paragraph BC286] Consequently, an entity shall not reallocate the transaction price to reflect changes in stand-alone selling prices after contract inception. Amounts allocated to a satisfied performance obligation shall be recognised as revenue, or as a reduction of revenue, in the period in which the transaction price changes."
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "企业不得因合同开始日之后单独售价的变动而重新分摊交易价格",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall allocate the transaction price to each performance obligation identified in the contract on a relative stand-alone selling price basis in accordance with paragraphs 76–80"
            }
          ],
          "description": "PRC GAAP explicitly prohibits reallocation of the transaction price due to changes in stand-alone selling prices after the contract commencement date. IFRS Paragraph 74 does not contain this explicit prohibition in the snippet shown; instead it defers to paragraphs 76-80 for the detailed allocation methodology.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "合同中包含两项或多项履约义务的，企业应当在合同开始日，按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall allocate to the performance obligations in the contract any subsequent changes in the transaction price on the same basis as at contract inception."
            }
          ],
          "description": "PRC GAAP Article 20 addresses only the initial allocation of the transaction price at the contract commencement date, whereas IFRS 15 Paragraph 88 explicitly addresses the allocation of subsequent changes in the transaction price to performance obligations. The IFRS scope is broader, covering both initial and subsequent allocations.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "企业不得因合同开始日之后单独售价的变动而重新分摊交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Amounts allocated to a satisfied performance obligation shall be recognised as revenue, or as a reduction of revenue, in the period in which the transaction price changes."
            }
          ],
          "description": "IFRS 15 explicitly requires that amounts allocated to a satisfied (already performed) performance obligation be recognized as revenue, or as a reduction of revenue, in the period in which the transaction price changes. PRC GAAP Article 20 does not contain any corresponding guidance on the accounting treatment for changes in transaction price that affect already-satisfied performance obligations.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "合同中包含两项或多项履约义务的，企业应当在合同开始日，按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "except as specified in paragraphs 81–83 (for allocating discounts) and paragraphs 84–86 (for allocating consideration that includes variable amounts)"
            }
          ],
          "description": "IFRS Paragraph 74 explicitly carves out exceptions for allocating discounts (paragraphs 81-83) and variable consideration (paragraphs 84-86). The PRC GAAP Article 20 does not mention any such exceptions within the snippet, presenting only the general rule.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "企业不得因合同开始日之后单独售价的变动而重新分摊交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall allocate to the performance obligations in the contract any subsequent changes in the transaction price on the same basis as at contract inception."
            }
          ],
          "description": "Both standards prohibit reallocation due to changes in stand-alone selling prices, but IFRS additionally establishes the positive requirement to allocate subsequent changes in the transaction price itself on the same basis as at contract inception. PRC GAAP only states the prohibition and does not prescribe a positive allocation methodology for transaction price changes.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "allocate the transaction price to each performance obligation identified in the contract on a relative stand-alone selling price basis in accordance with paragraphs 76–80"
            }
          ],
          "description": "PRC GAAP describes the allocation basis directly within the article itself (relative proportion of stand-alone selling prices), while IFRS prescribes the same principle but defers the detailed allocation methodology to paragraphs 76-80, making the PRC rule more self-contained in a single article.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "on the same basis as at contract inception"
            }
          ],
          "description": "PRC GAAP explicitly prescribes the use of the relative stand-alone selling price method (\"按照各单项履约义务所承诺商品的单独售价的相对比例\") as the basis for initial allocation. IFRS Paragraph 88 does not restate this allocation methodology in the paragraph itself (it is covered in IFRS 15 Paragraph 74) but rather refers to the basis used at contract inception, implying the same method applies to subsequent changes.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "企业应当在合同开始日，按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall allocate the transaction price to each performance obligation identified in the contract on a relative stand-alone selling price basis in accordance with paragraphs 76–80"
            }
          ],
          "description": "PRC uses '企业' (enterprise) while IFRS uses 'entity'. PRC refers to '合同开始日' (contract commencement date) as the timing for allocation, while IFRS does not specify timing in this paragraph but instead references paragraphs 76-80 for detailed methodology.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "合同中包含两项或多项履约义务的，企业应当在合同开始日...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "To meet the allocation objective [Refer:Basis for Conclusions paragraph BC266]"
            }
          ],
          "description": "IFRS Paragraph 74 explicitly states an 'allocation objective' and includes a cross-reference to the Basis for Conclusions paragraph BC266, providing interpretive context. PRC GAAP Article 20 does not reference any underlying objective or basis for conclusions.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "所承诺商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "performance obligation identified in the contract"
            }
          ],
          "description": "PRC specifies allocation based on '所承诺商品' (promised goods) within each performance obligation, while IFRS more broadly refers to 'performance obligation' without narrowing to 'goods' in this paragraph, implicitly covering both goods and services.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "合同中包含两项或多项履约义务的，企业应当在合同开始日，按照各单项履约义务所承诺商品的单独售价的相对比例，将交易价格分摊至各单项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraph BC286]"
            }
          ],
          "description": "IFRS 15 Paragraph 88 contains a cross-reference to the Basis for Conclusions paragraph BC286, providing additional interpretive context for the requirements. PRC GAAP Article 20 does not contain any cross-reference or supplementary guidance.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "企业",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "entity"
            }
          ],
          "description": "PRC GAAP uses the term \"企业\" (enterprise), while IFRS uses the term \"entity.\" Although substantively similar, this is a terminology difference.",
          "importance": 1
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 20,
          "sourceText": "合同开始日",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "contract inception"
            }
          ],
          "description": "PRC GAAP uses \"合同开始日\" (contract commencement date), while IFRS uses \"contract inception.\" The two terms refer to the same point in time but are expressed differently.",
          "importance": 1
        }
      ]
    },
    {
      "id": 11,
      "relationship": "EQUIVALENT",
      "confidence": 0.96,
      "notes": "",
      "source": {
        "id": 21,
        "framework": "PRC_GAAP",
        "number": "第二十一条",
        "index": 21,
        "content": "企业在类似环境下向类似客户单独销售商品的价格，应作为确定该商品单独售价的最佳证据。单独售价无法直接观察的，企业应当综合考虑其能够合理取得的全部相关信息，采用市场调整法、成本加成法、余值法等方法合理估计单独售价。在估计单独售价时，企业应当最大限度地采用可观察的输入值，并对类似的情况采用一致的估计方法。 市场调整法，是指企业根据某商品或类似商品的市场售价考虑本企业的成本和毛利等进行适当调整后，确定其单独售价的方法。 成本加成法，是指企业根据某商品的预计成本加上其合理毛利后的价格，确定其单独售价的方法。 余值法，是指企业根据合同交易价格减去合同中其他商品可观察的单独售价后的余值，确定某商品单独售价的方法。"
      },
      "mappedArticles": [
        {
          "id": 249,
          "framework": "IFRS",
          "number": "Paragraph 78",
          "index": 76,
          "content": "If a stand-alone selling price is not directly observable, an entity shall estimate the stand-alone selling price at an amount that would result in the allocation of the transaction price meeting the allocation objective in paragraph 73. When estimating a stand-alone selling price, an entity shall consider all information (including market conditions, entity-specific factors and information about the customer or class of customer) that is reasonably available to the entity. In doing so, an entity shall maximise the use of observable inputs and apply estimation methods consistently in similar circumstances."
        },
        {
          "id": 250,
          "framework": "IFRS",
          "number": "Paragraph 79",
          "index": 77,
          "content": "Suitable methods for estimating the stand-alone selling price of a good or service include, but are not limited to, the following: (a) Adjusted market assessment approach—an entity could evaluate the market in which it sells goods or services and estimate the price that a customer in that market would be willing to pay for those goods or services. That approach might also include referring to prices from the entity’s competitors for similar goods or services and adjusting those prices as necessary to reflect the entity’s costs and margins. (b) Expected cost plus a margin approach—an entity could forecast its expected costs of satisfying a performance obligation and then add an appropriate margin for that good or service. (c) Residual approach—an entity may estimate the stand-alone selling price by reference to the total transaction price less the sum of the observable stand-alone selling prices of other goods or services promised in the contract. However, an entity may use a residual approach to estimate, in accordance with paragraph 78, the stand-alone selling price of a good or service only if one of the following criteria is met: [Refer:Basis for Conclusions paragraphs BC270–BC273] the entity sells the same good or service to different customers (at or near the same time) for a broad range of amounts (ie the selling price is highly variable because a representative stand-alone selling price is not discernible from past transactions or other observable evidence); or (ii) the entity has not yet established a price for that good or service and the good or service has not previously been sold on a stand-alone basis (ie the selling price is uncertain)."
        }
      ],
      "differences": []
    },
    {
      "id": 12,
      "relationship": "SIMILAR",
      "confidence": 0.92,
      "notes": "",
      "source": {
        "id": 22,
        "framework": "PRC_GAAP",
        "number": "第二十二条",
        "index": 22,
        "content": "企业在商品近期售价波动幅度巨大，或者因未定价且未曾单独销售而使售价无法可靠确定时，可采用余值法估计其单独售价。"
      },
      "mappedArticles": [
        {
          "id": 250,
          "framework": "IFRS",
          "number": "Paragraph 79",
          "index": 77,
          "content": "Suitable methods for estimating the stand-alone selling price of a good or service include, but are not limited to, the following: (a) Adjusted market assessment approach—an entity could evaluate the market in which it sells goods or services and estimate the price that a customer in that market would be willing to pay for those goods or services. That approach might also include referring to prices from the entity’s competitors for similar goods or services and adjusting those prices as necessary to reflect the entity’s costs and margins. (b) Expected cost plus a margin approach—an entity could forecast its expected costs of satisfying a performance obligation and then add an appropriate margin for that good or service. (c) Residual approach—an entity may estimate the stand-alone selling price by reference to the total transaction price less the sum of the observable stand-alone selling prices of other goods or services promised in the contract. However, an entity may use a residual approach to estimate, in accordance with paragraph 78, the stand-alone selling price of a good or service only if one of the following criteria is met: [Refer:Basis for Conclusions paragraphs BC270–BC273] the entity sells the same good or service to different customers (at or near the same time) for a broad range of amounts (ie the selling price is highly variable because a representative stand-alone selling price is not discernible from past transactions or other observable evidence); or (ii) the entity has not yet established a price for that good or service and the good or service has not previously been sold on a stand-alone basis (ie the selling price is uncertain)."
        },
        {
          "id": 251,
          "framework": "IFRS",
          "number": "Paragraph 80",
          "index": 78,
          "content": "A combination of methods may need to be used to estimate the stand-alone selling prices of the goods or services promised in the contract if two or more of those goods or services have highly variable or uncertain stand-alone selling prices. For example, an entity may use a residual approach to estimate the aggregate stand-alone selling price for those promised goods or services with highly variable or uncertain stand-alone selling prices and then use another method to estimate the stand-alone selling prices of the individual goods or services relative to that estimated aggregate stand-alone selling price determined by the residual approach. When an entity uses a combination of methods to estimate the stand-alone selling price of each promised good or service in the contract, the entity shall evaluate whether allocating the transaction price at those estimated stand-alone selling prices would be consistent with the allocation objective in paragraph 73 and the requirements for estimating stand-alone selling prices in paragraph 78. Allocation of a discount"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "企业在商品近期售价波动幅度巨大，或者因未定价且未曾单独销售而使售价无法可靠确定时，可采用余值法估计其单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Suitable methods for estimating the stand-alone selling price of a good or service include, but are not limited to, the following: (a) Adjusted market assessment approach...(b) Expected cost plus a margin approach...(c) Residual approach..."
            }
          ],
          "description": "PRC GAAP Article 22 addresses only the residual approach for estimating stand-alone selling price, whereas IFRS Paragraph 79 lists three permissible methods (adjusted market assessment, expected cost plus a margin, and residual approach). IFRS explicitly provides a broader enumeration of estimation methods, while PRC GAAP scopes the article narrowly to the residual approach.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "可采用余值法估计其单独售价",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity may use a residual approach to estimate, in accordance with paragraph 78, the stand-alone selling price of a good or service only if one of the following criteria is met"
            }
          ],
          "description": "PRC GAAP states the residual approach \"may be used\" (可采用) as a permissive rule, whereas IFRS imposes a stricter conditional requirement (\"only if one of the following criteria is met\") that the residual approach may be applied only when the specified conditions are satisfied. IFRS is more restrictive.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "可采用余值法估计其单独售价",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity may use a residual approach to estimate the aggregate stand-alone selling price for those promised goods or services with highly variable or uncertain stand-alone selling prices and then use another method to estimate the stand-alone selling prices of the individual goods or services relative to that estimated aggregate stand-alone selling price determined by the residual approach"
            }
          ],
          "description": "PRC GAAP simply permits use of the residual method (余值法) to estimate the standalone selling price. IFRS specifies a more structured two-step procedure: use the residual approach to estimate the aggregate standalone selling price, then apply another method to allocate that aggregate among individual goods or services. PRC GAAP does not describe this two-step combined-method procedure.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "企业在商品近期售价波动幅度巨大，或者因未定价且未曾单独销售而使售价无法可靠确定时，可采用余值法估计其单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall evaluate whether allocating the transaction price at those estimated stand-alone selling prices would be consistent with the allocation objective in paragraph 73 and the requirements for estimating stand-alone selling prices in paragraph 78."
            }
          ],
          "description": "IFRS imposes an additional explicit requirement: when a combination of methods is used, the entity must evaluate whether the resulting allocation is consistent with the allocation objective in paragraph 73 and the requirements in paragraph 78. PRC GAAP does not include any equivalent cross-reference or consistency evaluation requirement.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "商品近期售价波动幅度巨大",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity sells the same good or service to different customers (at or near the same time) for a broad range of amounts (ie the selling price is highly variable because a representative stand-alone selling price is not discernible from past transactions or other observable evidence)"
            }
          ],
          "description": "PRC GAAP's first condition uses the brief phrasing \"recent selling prices fluctuate wildly\" (近期售价波动幅度巨大), while IFRS provides more detailed conditions: the entity must sell the same good/service to different customers at or near the same time, the price range must be broad, and a representative stand-alone selling price must not be discernible from past transactions or other observable evidence. IFRS provides significantly more operational detail.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "企业在商品近期售价波动幅度巨大，或者因未定价且未曾单独销售而使售价无法可靠确定时，可采用余值法估计其单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A combination of methods may need to be used to estimate the stand-alone selling prices of the goods or services promised in the contract if two or more of those goods or services have highly variable or uncertain stand-alone selling prices."
            }
          ],
          "description": "PRC GAAP presents the residual method as a single direct option when standalone selling prices are highly variable or cannot be reliably determined. IFRS 15 Paragraph 80 has a broader scope, addressing the situation where a combination of methods may be needed when two or more goods or services have highly variable or uncertain prices, not just the use of the residual method alone.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "因未定价且未曾单独销售而使售价无法可靠确定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity has not yet established a price for that good or service and the good or service has not previously been sold on a stand-alone basis (ie the selling price is uncertain)"
            }
          ],
          "description": "PRC GAAP's second condition (\"not yet priced and not previously sold separately, making the price unable to be reliably determined\") aligns conceptually with IFRS criterion (ii), but PRC GAAP includes the additional qualifier that the price \"cannot be reliably determined\" (售价无法可靠确定), which is a reliability threshold not explicitly stated in IFRS. The IFRS phrasing emphasizes price uncertainty (\"selling price is uncertain\") rather than unreliability.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a good or service"
            }
          ],
          "description": "PRC GAAP Article 22 refers only to \"商品\" (goods/products) when discussing the residual approach, whereas IFRS Paragraph 79 applies to both \"goods\" and \"services\" (good or service). The PRC wording is narrower in scope by omitting explicit reference to services.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "企业在商品近期售价波动幅度巨大，或者因未定价且未曾单独销售而使售价无法可靠确定时，可采用余值法估计其单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For example, an entity may use a residual approach to estimate the aggregate stand-alone selling price for those promised goods or services with highly variable or uncertain stand-alone selling prices and then use another method to estimate the stand-alone selling prices of the individual goods or services relative to that estimated aggregate stand-alone selling price determined by the residual approach."
            }
          ],
          "description": "IFRS 15 provides a specific illustrative example showing how the residual approach can be combined with another method to derive individual standalone selling prices from an estimated aggregate. PRC GAAP Article 22 contains no example or illustration.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "或者因未定价且未曾单独销售而使售价无法可靠确定时",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "highly variable or uncertain stand-alone selling prices"
            }
          ],
          "description": "PRC GAAP specifies a particular reason for unreliable pricing—being unpriced and never previously sold separately ('未定价且未曾单独销售'). IFRS more broadly covers standalone selling prices that are 'highly variable or uncertain', without specifying the unpriced/never-sold-separately scenario.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "余值法",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Residual approach"
            }
          ],
          "description": "PRC GAAP uses the Chinese term \"余值法\" (residual value method/approach) to refer to the residual technique, while IFRS uses the English term \"Residual approach.\" The PRC term emphasizes \"value\" (值) while IFRS emphasizes the method/approach nature.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "企业在商品近期售价波动幅度巨大，或者因未定价且未曾单独销售而使售价无法可靠确定时，可采用余值法估计其单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC270–BC273]"
            }
          ],
          "description": "IFRS includes a cross-reference to the Basis for Conclusions paragraphs BC270–BC273 explaining the rationale for the residual approach criteria, while PRC GAAP Article 22 contains no such reference to underlying basis or interpretive guidance.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "余值法",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "residual approach"
            }
          ],
          "description": "The Chinese term used in PRC GAAP is '余值法' (residual value method), whereas IFRS 15 uses the English term 'residual approach'. The wording differs slightly, with PRC GAAP framing it as a 'method' (法) while IFRS frames it as an 'approach'.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 22,
          "sourceText": "（无对应内容）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Allocation of a discount"
            }
          ],
          "description": "The IFRS snippet is truncated and continues with guidance on the allocation of a discount, which has no corresponding content in the PRC GAAP Article 22 snippet provided.",
          "importance": 2
        }
      ]
    },
    {
      "id": 13,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 23,
        "framework": "PRC_GAAP",
        "number": "第二十三条",
        "index": 23,
        "content": "对于合同折扣，企业应当在各单项履约义务之间按比例分摊。 有确凿证据表明合同折扣仅与合同中一项或多项（而非全部）履约义务相关的，企业应当将该合同折扣分摊至相关一项或多项履约义务。 合同折扣仅与合同中一项或多项（而非全部）履约义务相关，且企业采用余值法估计单独售价的，应当首先按照前款规定在该一项或多项（而非全部）履约义务之间分摊合同折扣，然后采用余值法估计单独售价。 合同折扣，是指合同中各单项履约义务所承诺商品的单独售价之和高于合同交易价格的金额。"
      },
      "mappedArticles": [
        {
          "id": 252,
          "framework": "IFRS",
          "number": "Paragraph 81",
          "index": 79,
          "content": "A customer receives a discount for purchasing a bundle of goods or services if the sum of the stand-alone selling prices of those promised goods or services in the contract exceeds the promised consideration in a contract. Except when an entity has observable evidence in accordance with paragraph 82 that the entire discount relates to only one or more, but not all, performance obligations in a contract, the entity shall allocate a discount proportionately to all performance obligations in the contract. [Refer:Basis for Conclusions paragraph BC280] The proportionate allocation of the discount in those circumstances is a consequence of the entity allocating the transaction price to each performance obligation on the basis of the relative stand-alone selling prices of the underlying distinct goods or services."
        },
        {
          "id": 250,
          "framework": "IFRS",
          "number": "Paragraph 79",
          "index": 77,
          "content": "Suitable methods for estimating the stand-alone selling price of a good or service include, but are not limited to, the following: (a) Adjusted market assessment approach—an entity could evaluate the market in which it sells goods or services and estimate the price that a customer in that market would be willing to pay for those goods or services. That approach might also include referring to prices from the entity’s competitors for similar goods or services and adjusting those prices as necessary to reflect the entity’s costs and margins. (b) Expected cost plus a margin approach—an entity could forecast its expected costs of satisfying a performance obligation and then add an appropriate margin for that good or service. (c) Residual approach—an entity may estimate the stand-alone selling price by reference to the total transaction price less the sum of the observable stand-alone selling prices of other goods or services promised in the contract. However, an entity may use a residual approach to estimate, in accordance with paragraph 78, the stand-alone selling price of a good or service only if one of the following criteria is met: [Refer:Basis for Conclusions paragraphs BC270–BC273] the entity sells the same good or service to different customers (at or near the same time) for a broad range of amounts (ie the selling price is highly variable because a representative stand-alone selling price is not discernible from past transactions or other observable evidence); or (ii) the entity has not yet established a price for that good or service and the good or service has not previously been sold on a stand-alone basis (ie the selling price is uncertain)."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "合同折扣仅与合同中一项或多项（而非全部）履约义务相关，且企业采用余值法估计单独售价的，应当首先按照前款规定在该一项或多项（而非全部）履约义务之间分摊合同折扣，然后采用余值法估计单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Except when an entity has observable evidence in accordance with paragraph 82 that the entire discount relates to only one or more, but not all, performance obligations in a contract, the entity shall allocate a discount proportionately to all performance obligations in the contract."
            }
          ],
          "description": "PRC GAAP Article 23 contains an additional provision specifically addressing the interaction between contract discount allocation and the residual method (余值法) for estimating stand-alone selling prices, requiring that the discount be allocated first before applying the residual method. IFRS Paragraph 81 does not address the residual method; this guidance is covered elsewhere in IFRS 15.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "对于合同折扣，企业应当在各单项履约义务之间按比例分摊。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Suitable methods for estimating the stand-alone selling price of a good or service include, but are not limited to, the following:"
            }
          ],
          "description": "PRC Article 23 focuses on the allocation of contract discounts across performance obligations, while IFRS Paragraph 79 focuses on methods for estimating the stand-alone selling price of goods or services. The two provisions address different topics.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "企业应当在各单项履约义务之间按比例分摊。 有确凿证据表明合同折扣仅与合同中一项或多项（而非全部）履约义务相关的，企业应当将该合同折扣分摊至相关一项或多项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity may estimate the stand-alone selling price by reference to the total transaction price less the sum of the observable stand-alone selling prices of other goods or services promised in the contract."
            }
          ],
          "description": "PRC establishes a default rule of proportional allocation of the contract discount across all performance obligations, with an exception when conclusive evidence shows the discount relates only to specific obligations. IFRS Paragraph 79 does not prescribe any specific allocation rule for contract discounts; it only addresses the residual approach mechanics.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "合同折扣仅与合同中一项或多项（而非全部）履约义务相关，且企业采用余值法估计单独售价的，应当首先按照前款规定在该一项或多项（而非全部）履约义务之间分摊合同折扣，然后采用余值法估计单独售价。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "However, an entity may use a residual approach to estimate, in accordance with paragraph 78, the stand-alone selling price of a good or service only if one of the following criteria is met: (i) the entity sells the same good or service to different customers (at or near the same time) for a broad range of amounts; or (ii) the entity has not yet established a price for that good or service and the good or service has not previously been sold on a stand-alone basis."
            }
          ],
          "description": "PRC specifies an ordering rule: when the discount is linked to only some obligations and the residual method is used, the discount must first be allocated to those specific obligations before applying the residual method. IFRS does not impose such an ordering rule; instead, it sets eligibility criteria (highly variable prices or unpriced/new goods) that must be met before the residual approach can be used at all.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "合同折扣，是指合同中各单项履约义务所承诺商品的单独售价之和高于合同交易价格的金额。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) Adjusted market assessment approach... (b) Expected cost plus a margin approach... (c) Residual approach..."
            }
          ],
          "description": "PRC provides a definition of 'contract discount' as the amount by which the sum of stand-alone selling prices of promised goods exceeds the contract transaction price. IFRS Paragraph 79 does not define contract discount; rather, it enumerates three estimation approaches (adjusted market assessment, expected cost plus margin, and residual) that are not enumerated in the PRC excerpt.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "合同折扣，是指合同中各单项履约义务所承诺商品的单独售价之和高于合同交易价格的金额。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A customer receives a discount for purchasing a bundle of goods or services if the sum of the stand-alone selling prices of those promised goods or services in the contract exceeds the promised consideration in a contract."
            }
          ],
          "description": "PRC GAAP defines '合同折扣' (contract discount) as a standalone definition clause at the end and uses '合同交易价格' (contract transaction price), while IFRS describes the concept within the first sentence using 'promised consideration in a contract' without providing a separately numbered or labeled definition.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "有确凿证据表明合同折扣仅与合同中一项或多项（而非全部）履约义务相关的，企业应当将该合同折扣分摊至相关一项或多项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Except when an entity has observable evidence in accordance with paragraph 82 that the entire discount relates to only one or more, but not all, performance obligations in a contract"
            }
          ],
          "description": "PRC GAAP refers to '确凿证据' (conclusive/definitive evidence) without cross-referencing another paragraph, while IFRS specifies 'observable evidence in accordance with paragraph 82', explicitly cross-referencing the criteria for what constitutes such evidence.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "（PRC Article 23, 余值法/合同折扣相关）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) Adjusted market assessment approach... (b) Expected cost plus a margin approach..."
            }
          ],
          "description": "IFRS Paragraph 79 describes three estimation methods (adjusted market assessment, expected cost plus margin, and residual) and detailed conditions for the residual approach. The PRC excerpt does not list or describe the adjusted market assessment approach or the expected cost plus a margin approach, focusing only on residual in the context of discount allocation.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "余值法估计单独售价",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Residual approach—an entity may estimate the stand-alone selling price by reference to the total transaction price less the sum of the observable stand-alone selling prices of other goods or services promised in the contract."
            }
          ],
          "description": "Both frameworks use the concept of a 'residual' (余值) approach to estimate stand-alone selling price by reference to the total transaction price less observable stand-alone selling prices of other promised goods/services, but PRC discusses it only as a step after discount allocation, while IFRS provides a full standalone description with eligibility conditions.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "performance obligations"
            }
          ],
          "description": "PRC GAAP uses '单项履约义务' (individual performance obligations) while IFRS uses the simpler 'performance obligations'. The PRC term emphasizes the individual/unitary nature of the obligations.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "对于合同折扣，企业应当在各单项履约义务之间按比例分摊。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall allocate a discount proportionately to all performance obligations in the contract."
            }
          ],
          "description": "Both require proportionate allocation as the default rule, but PRC GAAP does not include the IFRS clarification that 'The proportionate allocation of the discount in those circumstances is a consequence of the entity allocating the transaction price to each performance obligation on the basis of the relative stand-alone selling prices of the underlying distinct goods or services.'",
          "importance": 2
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "（未提及购买捆绑商品或服务的场景）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "A customer receives a discount for purchasing a bundle of goods or services"
            }
          ],
          "description": "IFRS explicitly frames the discount context as applying when 'a customer receives a discount for purchasing a bundle of goods or services', whereas PRC GAAP does not use this framing and instead directly defines the discount arithmetically.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "企业应当在各单项履约义务之间按比例分摊 / 企业应当将该合同折扣分摊至相关一项或多项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall allocate a discount proportionately to all performance obligations"
            }
          ],
          "description": "PRC GAAP uses '应当' (shall) twice, and the discount allocation is structured across multiple sentences. IFRS uses a single 'shall' in the main allocation rule and frames the exception differently with 'Except when'. The structural presentation of the requirement differs but the substantive obligation is largely equivalent.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 23,
          "sourceText": "（无对应引用）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraph BC280]"
            }
          ],
          "description": "IFRS Paragraph 81 includes a reference to the Basis for Conclusions (paragraph BC280) to provide additional rationale, which has no corresponding reference in PRC GAAP Article 23.",
          "importance": 1
        }
      ]
    },
    {
      "id": 14,
      "relationship": "SIMILAR",
      "confidence": 0.88,
      "notes": "",
      "source": {
        "id": 24,
        "framework": "PRC_GAAP",
        "number": "第二十四条",
        "index": 24,
        "content": "对于可变对价及可变对价的后续变动额，企业应当按照本准则第二十条至第二十三条规定，将其分摊至与之相关的一项或多项履约义务，或者分摊至构成单项履约义务的一系列可明确区分商品中的一项或多项商品。 对于已履行的履约义务，其分摊的可变对价后续变动额应当调整变动当期的收入。"
      },
      "mappedArticles": [
        {
          "id": 255,
          "framework": "IFRS",
          "number": "Paragraph 84",
          "index": 82,
          "content": "Variable consideration that is promised in a contract may be attributable to the entire contract or to a specific part of the contract, such as either of the following: (a) one or more, but not all, performance obligations in the contract (for example, a bonus may be contingent on an entity transferring a promised good or service within a specified period of time); or (b) one or more, but not all, distinct goods or services promised in a series of distinct goods or services that forms part of a single performance obligation in accordance with paragraph 22(b) (for example, the consideration promised for the second year of a two-year cleaning service contract will increase on the basis of movements in a specified inflation index)."
        },
        {
          "id": 260,
          "framework": "IFRS",
          "number": "Paragraph 89",
          "index": 87,
          "content": "An entity shall allocate a change in the transaction price entirely to one or more, but not all, performance obligations or distinct goods or services promised in a series that forms part of a single performance obligation in accordance with paragraph 22(b) only if the criteria in paragraph 85 on allocating variable consideration are met."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "对于可变对价及可变对价的后续变动额，企业应当按照本准则第二十条至第二十三条规定，将其分摊至与之相关的一项或多项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Variable consideration that is promised in a contract may be attributable to the entire contract or to a specific part of the contract"
            }
          ],
          "description": "PRC_GAAP Article 24 explicitly covers both the initial allocation of variable consideration AND the subsequent changes ('可变对价的后续变动额'), whereas IFRS Paragraph 84 only addresses the initial allocation of variable consideration promised in a contract and does not address subsequent changes.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "对于已履行的履约义务，其分摊的可变对价后续变动额应当调整变动当期的收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Variable consideration that is promised in a contract may be attributable to the entire contract or to a specific part of the contract, such as either of the following:"
            }
          ],
          "description": "PRC_GAAP requires a specific accounting treatment: for already-performed performance obligations, subsequent changes in allocated variable consideration must be adjusted against revenue in the period of change. IFRS Paragraph 84 contains no equivalent requirement regarding the accounting for subsequent changes.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "对于已履行的履约义务，其分摊的可变对价后续变动额应当调整变动当期的收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(No equivalent provision in IFRS Paragraph 89)"
            }
          ],
          "description": "PRC GAAP explicitly requires that, for performance obligations already performed, the subsequent change in the allocated variable consideration must be used to adjust revenue in the period of the change. IFRS Paragraph 89 does not contain an equivalent explicit requirement about adjusting revenue for already satisfied performance obligations.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "对于可变对价及可变对价的后续变动额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall allocate a change in the transaction price"
            }
          ],
          "description": "PRC GAAP Article 24 covers both the initial allocation of variable consideration and the allocation of subsequent changes in variable consideration, while IFRS Paragraph 89 addresses only the allocation of a change in the transaction price (i.e., subsequent changes), not the initial variable consideration allocation.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "企业应当按照本准则第二十条至第二十三条规定，将其分摊至与之相关的一项或多项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall allocate a change in the transaction price entirely to one or more, but not all, performance obligations... only if the criteria in paragraph 85 on allocating variable consideration are met."
            }
          ],
          "description": "IFRS requires that the change be allocated 'entirely' to one or more, but not all, performance obligations, and only if the criteria in paragraph 85 are met. PRC GAAP does not include the 'entirely' qualifier, the 'but not all' restriction, or the conditional 'only if' gate based on separate criteria; it instead directs allocation in accordance with Articles 20–23.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "(a) one or more, but not all, performance obligations in the contract (for example, a bonus may be contingent on an entity transferring a promised good or service within a specified period of time)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "对于可变对价及可变对价的后续变动额，企业应当按照本准则第二十条至第二十三条规定"
            }
          ],
          "description": "IFRS Paragraph 84 provides illustrative examples (a bonus contingent on transfer within a specified time period), whereas PRC_GAAP Article 24 contains no illustrative examples, referring instead to Articles 20-23 for the allocation rules.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "(b) one or more, but not all, distinct goods or services promised in a series of distinct goods or services that forms part of a single performance obligation in accordance with paragraph 22(b) (for example, the consideration promised for the second year of a two-year cleaning service contract will increase on the basis of movements in a specified inflation index)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "或者分摊至构成单项履约义务的一系列可明确区分商品中的一项或多项商品"
            }
          ],
          "description": "IFRS provides a second illustrative example (a two-year cleaning service contract with consideration increasing based on a specified inflation index), while PRC_GAAP Article 24 provides no such example.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "Variable consideration that is promised in a contract may be attributable to the entire contract",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "将其分摊至与之相关的一项或多项履约义务，或者分摊至构成单项履约义务的一系列可明确区分商品中的一项或多项商品"
            }
          ],
          "description": "IFRS Paragraph 84 explicitly states that variable consideration may be attributable to 'the entire contract', whereas PRC_GAAP Article 24 only describes allocation to 'one or more performance obligations' or to goods in a series forming a single performance obligation, without explicitly addressing the entire-contract case.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "分摊至",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "attributable to"
            }
          ],
          "description": "PRC_GAAP uses the verb '分摊' (allocate/distribute) for assigning variable consideration, whereas IFRS uses 'attributable to' (归属). The underlying concepts are similar but the terminology differs.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "按照本准则第二十条至第二十三条规定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "in accordance with paragraph 22(b)"
            }
          ],
          "description": "PRC_GAAP Article 24 cross-references Articles 20-23 for the allocation methodology, whereas IFRS Paragraph 84 cross-references only paragraph 22(b) for the 'series of distinct goods or services' concept, reflecting different internal cross-referencing structures.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "可明确区分商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "distinct goods or services"
            }
          ],
          "description": "PRC GAAP uses '可明确区分商品' (clearly distinguishable goods), while IFRS uses 'distinct goods or services', reflecting a slight difference in the wording of an essentially equivalent concept.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "构成单项履约义务的一系列可明确区分商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "distinct goods or services promised in a series that forms part of a single performance obligation"
            }
          ],
          "description": "PRC GAAP refers to a series of clearly distinguishable goods that 'constitute' a single performance obligation, whereas IFRS refers to goods or services 'promised in a series that forms part of' a single performance obligation. The IFRS wording uses 'promised' and 'forms part of', which differ in nuance.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "按照本准则第二十条至第二十三条规定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "in accordance with paragraph 22(b) only if the criteria in paragraph 85 on allocating variable consideration are met"
            }
          ],
          "description": "The two frameworks cross-reference different paragraphs of their respective standards. PRC GAAP refers to Articles 20–23, while IFRS refers to paragraph 22(b) and makes the allocation conditional on the criteria in paragraph 85.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 24,
          "sourceText": "企业",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity"
            }
          ],
          "description": "PRC GAAP uses '企业' (enterprise), whereas IFRS uses 'An entity' to refer to the reporting party.",
          "importance": 1
        }
      ]
    },
    {
      "id": 15,
      "relationship": "SIMILAR",
      "confidence": 0.94,
      "notes": "",
      "source": {
        "id": 25,
        "framework": "PRC_GAAP",
        "number": "第二十五条",
        "index": 25,
        "content": "合同变更之后发生可变对价后续变动的，企业应当区分下列三种情形分别进行会计处理：\n（一） 合同变更属于本准则第八条（一）规定情形的，企业应当判断可变对价后续变动与哪一项合同相关，并按照本准则第二十四条规定进行会计处理。\n（二） 合同变更属于本准则第八条（二）规定情形，且可变对价后续变动与合同变更前已承诺可变对价相关的，企业应当首先将该可变对价后续变动额以原合同开始日确定的基础进行分摊，然后再将分摊至合同变更日尚未履行履约义务的该可变对价后续变动额以新合同开始日确定的基础进行二次分摊。\n（三） 合同变更之后发生除本条（一）、（二）规定情形以外的可变对价后续变动的，企业应当将该可变对价后续变动额分摊至合同变更日尚未履行的履约义务。 第四章 合同成本"
      },
      "mappedArticles": [
        {
          "id": 261,
          "framework": "IFRS",
          "number": "Paragraph 90",
          "index": 88,
          "content": "An entity shall account for a change in the transaction price that arises as a result of a contract modification in accordance with paragraphs 18–21. [Refer:Basis for Conclusions paragraph BC82] However, for a change in the transaction price that occurs after a contract modification, an entity shall apply paragraphs 87–89 to allocate the change in the transaction price in whichever of the following ways is applicable: (a) An entity shall allocate the change in the transaction price to the performance obligations identified in the contract before the modification if, and to the extent that, the change in the transaction price is attributable to an amount of variable consideration promised before the modification and the modification is accounted for in accordance with paragraph 21(a). [Refer:Basis for Conclusions paragraph BC83 and Illustrative Examples, example 6 paragraph IE30] (b) In all other cases in which the modification was not accounted for as a separate contract in accordance with paragraph 20, an entity shall allocate the change in the transaction price to the performance obligations in the modified contract (ie the performance obligations that were unsatisfied or partially unsatisfied immediately after the modification). Contract costs Incremental costs of obtaining a contract"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "合同变更之后发生可变对价后续变动的，企业应当区分下列三种情形分别进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "for a change in the transaction price that occurs after a contract modification, an entity shall apply paragraphs 87–89 to allocate the change in the transaction price in whichever of the following ways is applicable"
            }
          ],
          "description": "PRC GAAP categorizes subsequent variable consideration changes into three distinct scenarios (一, 二, 三), whereas IFRS Paragraph 90 only sets out two applicable methods (a) and (b). The PRC framework includes an additional middle scenario that IFRS does not separately address.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "企业应当首先将该可变对价后续变动额以原合同开始日确定的基础进行分摊，然后再将分摊至合同变更日尚未履行履约义务的该可变对价后续变动额以新合同开始日确定的基础进行二次分摊",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall allocate the change in the transaction price to the performance obligations identified in the contract before the modification if, and to the extent that, the change in the transaction price is attributable to an amount of variable consideration promised before the modification"
            }
          ],
          "description": "PRC GAAP scenario (二) requires a unique two-step (double) allocation: first allocating the subsequent change using the basis determined at the original contract's commencement date, then re-allocating the portion attributable to unsatisfied performance obligations as of the modification date using the basis determined at the new contract's commencement date. IFRS approach (a) does not prescribe this double allocation; it simply allocates to performance obligations identified before the modification, to the extent the change is attributable to variable consideration promised before the modification.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "合同变更属于本准则第八条（一）规定情形的，企业应当判断可变对价后续变动与哪一项合同相关，并按照本准则第二十四条规定进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the modification is accounted for in accordance with paragraph 21(a)"
            }
          ],
          "description": "PRC scenario (一) applies when the contract modification falls under Article 8(1) and requires the entity to determine which contract the subsequent variable consideration change relates to, then apply Article 24. IFRS (a) instead conditions the allocation on whether the modification is accounted for as a separate contract under paragraph 21(a), and limits the allocation to variable consideration promised before the modification. The two rules use different cross-reference conditions.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "合同变更属于本准则第八条（二）规定情形，且可变对价后续变动与合同变更前已承诺可变对价相关的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the change in the transaction price is attributable to an amount of variable consideration promised before the modification"
            }
          ],
          "description": "PRC GAAP's scenario (二) is specifically limited to contract modifications falling under Article 8(2) where the subsequent variable consideration change relates to variable consideration already promised before the modification. IFRS (a) covers the broader case of any modification accounted for under paragraph 21(a) with a subsequent change attributable to variable consideration promised before the modification, without the Article 8(2) restriction.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "合同变更之后发生除本条（一）、（二）规定情形以外的可变对价后续变动的，企业应当将该可变对价后续变动额分摊至合同变更日尚未履行的履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In all other cases in which the modification was not accounted for as a separate contract in accordance with paragraph 20, an entity shall allocate the change in the transaction price to the performance obligations in the modified contract (ie the performance obligations that were unsatisfied or partially unsatisfied immediately after the modification)"
            }
          ],
          "description": "PRC scenario (三) is a residual category covering any situation not falling under (一) or (二), and requires allocation to unsatisfied performance obligations as of the modification date. IFRS (b) is also a residual category but is explicitly limited to modifications not accounted for as a separate contract under paragraph 20, and explicitly references 'unsatisfied or partially unsatisfied' performance obligations. The trigger conditions for the residual category differ.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "可变对价后续变动",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "change in the transaction price"
            }
          ],
          "description": "PRC GAAP uses the term 可变对价后续变动 (subsequent changes in variable consideration), whereas IFRS uses the broader term 'change in the transaction price', which encompasses variable consideration changes as well as other transaction price adjustments.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "performance obligations"
            }
          ],
          "description": "PRC GAAP uses 履约义务 which is the Chinese equivalent of 'performance obligations', but PRC scenario (三) refers to '尚未履行的履约义务' (unsatisfied performance obligations) while IFRS (b) explicitly states 'unsatisfied or partially unsatisfied immediately after the modification', slightly more precise in describing the state at the modification date.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "本准则第八条（一）、第八条（二）、第二十四条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "paragraphs 18–21, 87–89, paragraph 21(a), paragraph 20"
            }
          ],
          "description": "PRC GAAP cross-references its own Article 8(1), Article 8(2), and Article 24 to determine applicable treatment, while IFRS cross-references its own paragraphs 18-21, 87-89, 20, and 21(a). The cross-reference structures are internal to each standard and reflect differences in numbering and structure between the two frameworks.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 25,
          "sourceText": "第四章 合同成本",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Contract costs Incremental costs of obtaining a contract"
            }
          ],
          "description": "PRC GAAP Article 25 is followed by a chapter heading 第四章 合同成本 (Chapter 4: Contract Costs), and IFRS Paragraph 90 is followed by the section heading 'Contract costs Incremental costs of obtaining a contract'. Both signal the transition to the contract costs topic, but PRC explicitly labels it as a chapter (第四章) while IFRS uses a section heading.",
          "importance": 1
        }
      ]
    },
    {
      "id": 16,
      "relationship": "NO_MATCH",
      "confidence": 0.9,
      "notes": "",
      "source": {
        "id": 26,
        "framework": "PRC_GAAP",
        "number": "第二十六条",
        "index": 26,
        "content": "企业为履行合同发生的成本，不属于其他企业会计准则规范范围且同时满足下列条件的，应当作为合同履约成本确认为一项资产：\n（一） 该成本与一份当前或预期取得的合同直接相关，包括直接人工、直接材料、制造费用（或类似费用）、明确由客户承担的成本以及仅因该合同而发生的其他成本；\n（二） 该成本增加了企业未来用于履行履约义务的资源；\n（三） 该成本预期能够收回。"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 17,
      "relationship": "NO_MATCH",
      "confidence": 0.92,
      "notes": "",
      "source": {
        "id": 27,
        "framework": "PRC_GAAP",
        "number": "第二十七条",
        "index": 27,
        "content": "企业应当在下列支出发生时，将其计入当期损益：\n（一） 管理费用。\n（二） 非正常消耗的直接材料、直接人工和制造费用（或类似费用），这些支出为履行合同发生，但未反映在合同价格中。\n（三） 与履约义务中已履行部分相关的支出。\n（四） 无法在尚未履行的与已履行的履约义务之间区分的相关支出。"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 18,
      "relationship": "EQUIVALENT",
      "confidence": 0.97,
      "notes": "",
      "source": {
        "id": 28,
        "framework": "PRC_GAAP",
        "number": "第二十八条",
        "index": 28,
        "content": "企业为取得合同发生的增量成本预期能够收回的，应当作为合同取得成本确认为一项资产；但是，该资产摊销期限不超过一年的，可以在发生时计入当期损益。 增量成本，是指企业不取得合同就不会发生的成本（如销售佣金等）。 企业为取得合同发生的、除预期能够收回的增量成本之外的其他支出（如无论是否取得合同均会发生的差旅费等），应当在发生时计入当期损益，但是，明确由客户承担的除外。"
      },
      "mappedArticles": [
        {
          "id": 262,
          "framework": "IFRS",
          "number": "Paragraph 91",
          "index": 89,
          "content": "An entity shall recognise as an asset the incremental costs of obtaining a contract with a customer if the entity expects to recover those costs."
        },
        {
          "id": 263,
          "framework": "IFRS",
          "number": "Paragraph 92",
          "index": 90,
          "content": "The incremental costs of obtaining a contract are those costs that an entity incurs to obtain a contract with a customer that it would not have incurred if the contract had not been obtained (for example, a sales commission)."
        },
        {
          "id": 265,
          "framework": "IFRS",
          "number": "Paragraph 94",
          "index": 92,
          "content": "As a practical expedient, an entity may recognise the incremental costs of obtaining a contract as an expense when incurred if the amortisation period of the asset that the entity otherwise would have recognised is one year or less. Costs to fulfil a contract"
        }
      ],
      "differences": []
    },
    {
      "id": 19,
      "relationship": "NO_MATCH",
      "confidence": 0.9,
      "notes": "",
      "source": {
        "id": 29,
        "framework": "PRC_GAAP",
        "number": "第二十九条",
        "index": 29,
        "content": "按照本准则第二十六条和第二十八条规定确认的资产（以下简称\"与合同成本有关的资产\"），应当采用与该资产相关的商品收入确认相同的基础进行摊销，计入当期损益。"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 20,
      "relationship": "EQUIVALENT",
      "confidence": 0.96,
      "notes": "",
      "source": {
        "id": 30,
        "framework": "PRC_GAAP",
        "number": "第三十条",
        "index": 30,
        "content": "与合同成本有关的资产，其账面价值高于下列两项的差额的，超出部分应当计提减值准备，并确认为资产减值损失：\n（一） 企业因转让与该资产相关的商品预期能够取得的剩余对价；\n（二） 为转让该相关商品估计将要发生的成本。 以前期间减值的因素之后发生变化，使得前款（一）减（二）的差额高于该资产账面价值的，应当转回原已计提的资产减值准备，并计入当期损益，但转回后的资产账面价值不应超过假定不计提减值准备情况下该资产在转回日的账面价值。"
      },
      "mappedArticles": [
        {
          "id": 272,
          "framework": "IFRS",
          "number": "Paragraph 101",
          "index": 99,
          "content": "An entity shall recognise an impairment loss in profit or loss to the extent that the carrying amount of an asset recognised in accordance with paragraph 91 or 95 exceeds: (a) the remaining amount of consideration that the entity expects to receive in exchange for the goods or services to which the asset relates; less (b) the costs that relate directly to providing those goods or services and that have not been recognised as expenses (see paragraph 97)."
        },
        {
          "id": 275,
          "framework": "IFRS",
          "number": "Paragraph 104",
          "index": 102,
          "content": "An entity shall recognise in profit or loss a reversal of some or all of an impairment loss previously recognised in accordance with paragraph 101 when the impairment conditions no longer exist or have improved. The increased carrying amount of the asset shall not exceed the amount that would have been determined (net of amortisation) if no impairment loss had been recognised previously. Presentation"
        }
      ],
      "differences": []
    },
    {
      "id": 26,
      "relationship": "NO_MATCH",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 31,
        "framework": "PRC_GAAP",
        "number": "第三十一条",
        "index": 31,
        "content": "在确定与合同成本有关的资产的减值损失时，企业应当首先对按照其他相关企业会计准则确认的、与合同有关的其他资产确定减值损失；然后，按照本准则第三十条规定确定与合同成本有关的资产的减值损失。 企业按照《企业会计准则第８号——资产减值》测试相关资产组的减值情况时，应当将按照前款规定确定与合同成本有关的资产减值后的新账面价值计入相关资产组的账面价值。 第五章 特定交易的会计处理"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 27,
      "relationship": "SIMILAR",
      "confidence": 0.96,
      "notes": "",
      "source": {
        "id": 32,
        "framework": "PRC_GAAP",
        "number": "第三十二条",
        "index": 32,
        "content": "对于附有销售退回条款的销售，企业应当在客户取得相关商品控制权时，按照因向客户转让商品而预期有权收取的对价金额（即，不包含预期因销售退回将退还的金额）确认收入，按照预期因销售退回将退还的金额确认负债；同时，按照预期将退回商品转让时的账面价值，扣除收回该商品预计发生的成本（包括退回商品的价值减损）后的余额，确认为一项资产，按照所转让商品转让时的账面价值，扣除上述资产成本的净额结转成本。 每一资产负债表日，企业应当重新估计未来销售退回情况，如有变化，应当作为会计估计变更进行会计处理。"
      },
      "mappedArticles": [
        {
          "id": 320,
          "framework": "IFRS",
          "number": "Paragraph B21",
          "index": 147,
          "content": "To account for the transfer of products with a right of return (and for some services that are provided subject to a refund), an entity shall recognise all of the following: (a) revenue for the transferred products in the amount of consideration to which the entity expects to be entitled (therefore, revenue would not be recognised for the products expected to be returned); (b) a refund liability; and (c) an asset (and corresponding adjustment to cost of sales) for its right to recover products from customers on settling the refund liability."
        },
        {
          "id": 323,
          "framework": "IFRS",
          "number": "Paragraph B24",
          "index": 150,
          "content": "An entity shall update the measurement of the refund liability at the end of each reporting period for changes in expectations about the amount of refunds. An entity shall recognise corresponding adjustments as revenue (or reductions of revenue)."
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "每一资产负债表日，企业应当重新估计未来销售退回情况，如有变化，应当作为会计估计变更进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "To account for the transfer of products with a right of return (and for some services that are provided subject to a refund), an entity shall recognise all of the following:"
            }
          ],
          "description": "PRC GAAP explicitly requires entities to re-estimate future sales return situations at each balance sheet date and to treat any changes as accounting estimate changes. IFRS Paragraph B21 contains no such re-estimation or accounting estimate change requirement.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "对于附有销售退回条款的销售，企业应当在客户取得相关商品控制权时，按照因向客户转让商品而预期有权收取的对价金额（即，不包含预期因销售退回将退还的金额）确认收入，按照预期因销售退回将退还的金额确认负债；同时，按照预期将退回商品转让时的账面价值，扣除收回该商品预计发生的成本（包括退回商品的价值减损）后的余额，确认为一项资产，按照所转让商品转让时的账面价值，扣除上述资产成本的净额结转成本。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall update the measurement of the refund liability at the end of each reporting period for changes in expectations about the amount of refunds."
            }
          ],
          "description": "PRC GAAP covers the full initial recognition requirements for sales with return clauses (revenue, refund liability, right-of-return asset, and corresponding cost of goods sold), while IFRS B24 only addresses the subsequent remeasurement of the refund liability at each reporting date.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "每一资产负债表日，企业应当重新估计未来销售退回情况，如有变化，应当作为会计估计变更进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise corresponding adjustments as revenue (or reductions of revenue)."
            }
          ],
          "description": "PRC GAAP requires that changes in estimated sales returns be treated as a change in accounting estimate (会计估计变更), implying the use of the cumulative catch-up / prospective adjustment approach. IFRS B24 requires the corresponding adjustment from updating the refund liability to be recognized directly as revenue or a reduction of revenue.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "按照预期将退回商品转让时的账面价值，扣除收回该商品预计发生的成本（包括退回商品的价值减损）后的余额，确认为一项资产",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an asset (and corresponding adjustment to cost of sales) for its right to recover products from customers on settling the refund liability"
            }
          ],
          "description": "PRC GAAP specifies in detail how to measure the right-to-recover asset: the book value of the goods expected to be returned at the time of transfer, minus the estimated costs of recovering the goods (including any impairment in value of the returned goods). IFRS Paragraph B21 only requires recognition of an asset for the right to recover products without specifying the measurement basis.",
          "importance": 4
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "按照预期将退回商品转让时的账面价值，扣除收回该商品预计发生的成本（包括退回商品的价值减损）后的余额，确认为一项资产",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise corresponding adjustments as revenue (or reductions of revenue)."
            }
          ],
          "description": "PRC GAAP separately prescribes recognition of a right-of-return asset measured at the carrying amount of the expected returned goods less expected costs of recovery (including impairment). IFRS B24 does not address the right-of-return asset in this paragraph.",
          "importance": 4
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "按照所转让商品转让时的账面价值，扣除上述资产成本的净额结转成本",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise corresponding adjustments as revenue (or reductions of revenue)."
            }
          ],
          "description": "PRC GAAP explicitly requires the cost of goods sold to be recognized at the net amount (carrying value of goods transferred less the cost component of the right-of-return asset), whereas IFRS B24 does not address cost recognition mechanics in this paragraph.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "对于附有销售退回条款的销售",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the transfer of products with a right of return (and for some services that are provided subject to a refund)"
            }
          ],
          "description": "IFRS Paragraph B21 explicitly extends its scope to cover 'some services that are provided subject to a refund' in addition to product transfers. PRC GAAP Article 32 limits the scope to 'sales with sales return clauses,' referring only to goods.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "按照所转让商品转让时的账面价值，扣除上述资产成本的净额结转成本",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a corresponding adjustment to cost of sales"
            }
          ],
          "description": "PRC GAAP provides explicit detail on how to determine the cost of sales: carrying over the book value of the transferred goods at the time of transfer, net of the cost of the right-to-recover asset. IFRS Paragraph B21 only refers in general terms to a 'corresponding adjustment to cost of sales' without detailing the calculation.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "按照预期因销售退回将退还的金额确认负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "measurement of the refund liability"
            }
          ],
          "description": "PRC GAAP refers to the obligation as '预计负债' / '预期因销售退回将退还的金额' (expected refund amount recognized as a liability), while IFRS uses the specific term 'refund liability'.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "按照因向客户转让商品而预期有权收取的对价金额（即，不包含预期因销售退回将退还的金额）确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall recognise corresponding adjustments as revenue (or reductions of revenue)."
            }
          ],
          "description": "PRC GAAP specifies that initial revenue should exclude the expected refund amount, while IFRS B24 implicitly addresses revenue only through subsequent adjustments (recognizing the difference as revenue or reduction of revenue), without restating the initial revenue measurement principle.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "确认负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a refund liability"
            }
          ],
          "description": "PRC GAAP uses a generic term 'recognize a liability' (确认负债) for the obligation to refund, while IFRS uses the specific term 'refund liability' (退款负债). The IFRS terminology is more descriptive of the nature of the obligation.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "对于附有销售退回条款的销售，企业应当在客户取得相关商品控制权时",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "To account for the transfer of products with a right of return"
            }
          ],
          "description": "PRC GAAP specifies the recognition trigger as 'when the customer obtains control of the related goods' (客户取得相关商品控制权时), which is consistent with its general revenue recognition principle tied to control transfer. IFRS Paragraph B21 uses a more general phrasing tied to the transfer of products and does not reiterate the control concept.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 32,
          "sourceText": "每一资产负债表日",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "at the end of each reporting period"
            }
          ],
          "description": "PRC GAAP uses '资产负债表日' (balance sheet date), while IFRS uses 'reporting period'. These are generally equivalent in concept but use different terminology.",
          "importance": 2
        }
      ]
    },
    {
      "id": 28,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 33,
        "framework": "PRC_GAAP",
        "number": "第三十三条",
        "index": 33,
        "content": "对于附有质量保证条款的销售，企业应当评估该质量保证是否在向客户保证所销售商品符合既定标准之外提供了一项单独的服务。企业提供额外服务的，应当作为单项履约义务，按照本准则规定进行会计处理；否则，质量保证责任应当按照《企业会计准则第13号——或有事项》规定进行会计处理。在评估质量保证是否在向客户保证所销售商品符合既定标准之外提供了一项单独的服务时，企业应当考虑该质量保证是否为法定要求、质量保证期限以及企业承诺履行任务的性质等因素。客户能够选择单独购买质量保证的，该质量保证构成单项履约义务。"
      },
      "mappedArticles": [
        {
          "id": 331,
          "framework": "IFRS",
          "number": "Paragraph B32",
          "index": 158,
          "content": "If a warranty, or a part of a warranty, provides a customer with a service in addition to the assurance that the product complies with agreed-upon specifications, the promised service is a performance obligation. Therefore, an entity shall allocate the transaction price to the product and the service. If an entity promises both an assurance-type warranty and a service-type warranty but cannot reasonably account for them separately, the entity shall account for both of the warranties together as a single performance obligation."
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "质量保证责任应当按照《企业会计准则第13号——或有事项》规定进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity promises both an assurance-type warranty and a service-type warranty but cannot reasonably account for them separately, the entity shall account for both of the warranties together as a single performance obligation."
            }
          ],
          "description": "PRC GAAP explicitly directs entities to account for assurance-type warranty liabilities under Accounting Standards for Business Enterprises No. 13 - Contingencies, while IFRS 15 does not reference any other standard and instead provides its own guidance on bundling warranties together as a single performance obligation when they cannot be separated.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "If an entity promises both an assurance-type warranty and a service-type warranty but cannot reasonably account for them separately, the entity shall account for both of the warranties together as a single performance obligation.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "客户能够选择单独购买质量保证的，该质量保证构成单项履约义务。"
            }
          ],
          "description": "IFRS 15 contains a specific rule that when an entity cannot reasonably separate assurance-type and service-type warranties, both must be accounted for together as a single performance obligation. PRC GAAP has no equivalent inseparability provision in this paragraph.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "企业提供额外服务的，应当作为单项履约义务，按照本准则规定进行会计处理",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Therefore, an entity shall allocate the transaction price to the product and the service."
            }
          ],
          "description": "IFRS 15 explicitly requires the entity to allocate the transaction price between the product and the service warranty, whereas PRC GAAP states only that the service should be treated as a separate performance obligation and accounted for under the standard, without explicitly mandating transaction price allocation in this paragraph.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "在评估质量保证是否在向客户保证所销售商品符合既定标准之外提供了一项单独的服务时，企业应当考虑该质量保证是否为法定要求、质量保证期限以及企业承诺履行任务的性质等因素。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If a warranty, or a part of a warranty, provides a customer with a service in addition to the assurance that the product complies with agreed-upon specifications, the promised service is a performance obligation."
            }
          ],
          "description": "PRC GAAP provides specific assessment factors for evaluating whether a warranty is a separate performance obligation: legal requirement, warranty period, and nature of promised tasks. IFRS 15 does not list such factors in this paragraph, leaving the assessment to general judgment.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "客户能够选择单独购买质量保证的，该质量保证构成单项履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If a warranty, or a part of a warranty, provides a customer with a service in addition to the assurance that the product complies with agreed-upon specifications, the promised service is a performance obligation."
            }
          ],
          "description": "PRC GAAP contains an explicit rule that if the customer can choose to purchase the warranty separately, it constitutes a single performance obligation. IFRS 15 does not include a comparable separate-purchase indicator in this paragraph, though application guidance addresses similar indicators elsewhere.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "对于附有质量保证条款的销售，企业应当评估该质量保证是否在向客户保证所销售商品符合既定标准之外提供了一项单独的服务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If a warranty, or a part of a warranty, provides a customer with a service in addition to the assurance that the product complies with agreed-upon specifications, the promised service is a performance obligation."
            }
          ],
          "description": "PRC GAAP scopes the rule to all sales with warranty clauses and frames the analysis as an entity evaluation, whereas IFRS 15 explicitly contemplates that only a part of a warranty may provide the additional service, allowing for bifurcation within a single warranty.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "质量保证 / 单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "warranty / performance obligation"
            }
          ],
          "description": "PRC GAAP uses '质量保证' (quality assurance/warranty) and '单项履约义务' (single performance obligation), while IFRS 15 uses 'warranty' with the sub-categorization of 'assurance-type' and 'service-type' warranties. PRC GAAP does not introduce the 'assurance-type' and 'service-type' taxonomy explicitly in this paragraph.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 33,
          "sourceText": "第三十三条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph B32"
            }
          ],
          "description": "PRC GAAP locates this guidance in the main body (Article 33) of the revenue standard, while IFRS 15 places equivalent guidance in the Application Guidance (Paragraph B32) rather than the main body of the standard.",
          "importance": 1
        }
      ]
    },
    {
      "id": 29,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 34,
        "framework": "PRC_GAAP",
        "number": "第三十四条",
        "index": 34,
        "content": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权，来判断其从事交易时的身份是主要责任人还是代理人。企业在向客户转让商品前能够控制该商品的，该企业为主要责任人，应当按照已收或应收对价总额确认收入；否则，该企业为代理人，应当按照预期有权收取的佣金或手续费的金额确认收入，该金额应当按照已收或应收对价总额扣除应支付给其他相关方的价款后的净额，或者按照既定的佣金金额或比例等确定。 企业向客户转让商品前能够控制该商品的情形包括：\n（一） 企业自第三方取得商品或其他资产控制权后，再转让给客户。\n（二） 企业能够主导第三方代表本企业向客户提供服务。\n（三） 企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。 在具体判断向客户转让商品前是否拥有对该商品的控制权时，企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况，这些事实和情况包括：\n（一） 企业承担向客户转让商品的主要责任。\n（二） 企业在转让商品之前或之后承担了该商品的存货风险。\n（三） 企业有权自主决定所交易商品的价格。\n（四） 其他相关事实和情况。"
      },
      "mappedArticles": [
        {
          "id": 333,
          "framework": "IFRS",
          "number": "Paragraph B34",
          "index": 160,
          "content": "When another party is involved in providing goods or services to a customer, the entity shall determine whether the nature of its promise is a performance obligation to provide the specified goods or services itself (ie the entity is a principal) or to arrange for those goods or services to be provided by the other party (ie the entity is an agent). An entity determines whether it is a principal or an agent for each specified good or service promised to the customer. A specified good or service is a distinct good or service (or a distinct bundle of goods or services) to be provided to the customer (see paragraphs 27–30). If a contract with a customer includes more than one specified good or service, an entity could be a principal for some specified goods or services and an agent for others [Refer:Illustrative Examples, example 48 A]."
        },
        {
          "id": 334,
          "framework": "IFRS",
          "number": "Paragraph B35",
          "index": 161,
          "content": "An entity is a principal if it controls the specified good or service before that good or service is transferred to a customer. However, an entity does not necessarily control a specified good if the entity obtains legal title to that good only momentarily before legal title is transferred to a customer. An entity that is a principal may satisfy its performance obligation to provide the specified good or service itself or it may engage another party (for example, a subcontractor) to satisfy some or all of the performance obligation on its behalf."
        },
        {
          "id": 335,
          "framework": "IFRS",
          "number": "Paragraph B36",
          "index": 162,
          "content": "An entity is an agent if the entity’s performance obligation is to arrange for the provision of the specified good or service by another party. An entity that is an agent does not control the specified good or service provided by another party before that good or service is transferred to the customer. When (or as) an entity that is an agent satisfies a performance obligation, the entity recognises revenue in the amount of any fee or commission to which it expects to be entitled in exchange for arranging for the specified goods or services to be provided by the other party. An entity’s fee or commission might be the net amount of consideration that the entity retains after paying the other party the consideration received in exchange for the goods or services to be provided by that party."
        },
        {
          "id": 336,
          "framework": "IFRS",
          "number": "Paragraph B37",
          "index": 163,
          "content": "Indicators that an entity controls the specified good or service before it is transferred to the customer (and is therefore a principal (see paragraph B35)) include, but are not limited to, the following: (a) the entity is primarily responsible for fulfilling the promise to provide the specified good or service. This typically includes responsibility for the acceptability of the specified good or service (for example, primary responsibility for the good or service meeting customer specifications). If the entity is primarily responsible for fulfilling the promise to provide the specified good or service, this may indicate that the other party involved in providing the specified good or service is acting on the entity’s behalf. (b) the entity has inventory risk before the specified good or service has been transferred to a customer or after transfer of control to the customer (for example, if the customer has a right of return). For example, if the entity obtains, or commits itself to obtain, the specified good or service before obtaining a contract with a customer, that may indicate that the entity has the ability to direct the use of, and obtain substantially all of the remaining benefits from, the good or service before it is transferred to the customer. (c) the entity has discretion in establishing the price for the specified good or service. Establishing the price that the customer pays for the specified good or service may indicate that the entity has the ability to direct the use of that good or service and obtain substantially all of the remaining benefits. However, an agent can have discretion in establishing prices in some cases. For example, an agent may have some flexibility in setting prices in order to generate additional revenue from its service of arranging for goods or services to be provided by other parties to customers."
        },
        {
          "id": 337,
          "framework": "IFRS",
          "number": "Paragraph B38",
          "index": 164,
          "content": "If another entity assumes the entity’s performance obligations and contractual rights in the contract so that the entity is no longer obliged to satisfy the performance obligation to transfer the specified good or service to the customer (ie the entity is no longer acting as the principal), the entity shall not recognise revenue for that performance obligation. Instead, the entity shall evaluate whether to recognise revenue for satisfying a performance obligation to obtain a contract for the other party (ie whether the entity is acting as an agent). B34 A To determine the nature of its promise (as described in paragraph B34), the entity shall:E11 (a) identify the specified goods or services to be provided to the customer (which, for example, could be a right to a good or service to be provided by another party (see paragraph 26)); and (b) assess whether it controls (as described in paragraph 33) each specified good or service before that good or service is transferred to the customer. B35 A (a) a good or another asset from the other party that it then transfers to the customer. [Refer:Illustrative Examples, example 47] (b) a right to a service to be performed by the other party, which gives the entity the ability to direct that party to provide the service to the customer on the entity’s behalf. [Refer:Illustrative Examples, example 46 A] (c) a good or service from the other party that it then combines with other goods or services in providing the specified good or service to the customer. For example, if an entity provides a significant service of integrating goods or services (see paragraph 29(a)) provided by another party into the specified good or service for which the customer has contracted, the entity controls the specified good or service before that good or service is transferred to the customer. [Refer:Illustrative Examples, example 46] This is because the entity first obtains control of the inputs to the specified good or service (which includes goods or services from other parties) and directs their use to create the combined output that is the specified good or service. B35 B When (or as) an entity that is a principal satisfies a performance obligation, the entity recognises revenue in the gross amount of consideration to which it expects to be entitled in exchange for the specified good or service transferred. B37 A The indicators in paragraph B37 may be more or less relevant to the assessment of control depending on the nature of the specified good or service and the terms and conditions of the contract. In addition, different indicators may provide more persuasive evidence in different contracts. Customer options for additional goods or services"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权，来判断其从事交易时的身份是主要责任人还是代理人。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When another party is involved in providing goods or services to a customer, the entity shall determine whether the nature of its promise is a performance obligation to provide the specified goods or services itself (ie the entity is a principal) or to arrange for those goods or services to be provided by the other party (ie the entity is an agent)."
            }
          ],
          "description": "PRC GAAP focuses on 'control of goods' (商品控制权) before transfer to the customer, whereas IFRS 15 focuses on the 'nature of the promise' as a performance obligation to provide the goods/services itself or to arrange for them. The conceptual lens is different: PRC is control-based; IFRS is promise/performance-obligation-based.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "（一）企业承担向客户转让商品的主要责任。（二）企业在转让商品之前或之后承担了该商品的存货风险。（三）企业有权自主决定所交易商品的价格。（四）其他相关事实和情况。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "However, an entity does not necessarily control a specified good if the entity obtains legal title to that good only momentarily before legal title is transferred to a customer."
            }
          ],
          "description": "PRC GAAP enumerates four specific factors to consider when determining control: primary responsibility, inventory risk, pricing autonomy, and other relevant facts. IFRS B35 does not list these indicators; instead it addresses the specific 'momentary legal title' exception, which PRC GAAP does not explicitly mention.",
          "importance": 5
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业向客户转让商品前能够控制该商品的情形包括：（一）企业自第三方取得商品或其他资产控制权后，再转让给客户。（二）企业能够主导第三方代表本企业向客户提供服务。（三）企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC_GAAP explicitly enumerates three specific situations in which the entity controls the goods before transfer to the customer (purchase-and-resell, directing third-party service providers, and integration of goods with significant services). IFRS Paragraph B36 does not provide these illustrative scenarios in this paragraph.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业向客户转让商品前能够控制该商品的情形包括：（一）企业自第三方取得商品或其他资产控制权后，再转让给客户。（二）企业能够主导第三方代表本企业向客户提供服务。（三）企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Indicators that an entity controls the specified good or service before it is transferred to the customer (and is therefore a principal (see paragraph B35)) include, but are not limited to, the following:"
            }
          ],
          "description": "PRC_GAAP explicitly enumerates three specific situations in which the entity controls the good before transfer (including a special case of integration of goods with significant services). IFRS does not enumerate such explicit situations; it relies on broader 'indicators' that are not limited to a specific list.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "providing goods or services to a customer"
            }
          ],
          "description": "PRC GAAP Article 34 scope is limited to 'goods' (商品), while IFRS B34 explicitly applies to both 'goods or services.' PRC GAAP's principal/agent guidance for services is not contained in this provision.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业向客户转让商品前能够控制该商品的情形包括：（一）企业自第三方取得商品或其他资产控制权后，再转让给客户。（二）企业能够主导第三方代表本企业向客户提供服务。（三）企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Not present in IFRS B34]"
            }
          ],
          "description": "PRC GAAP explicitly enumerates three specific situations in which the entity controls the goods before transfer to the customer (purchase-and-resell, directing a third party to provide services, and integration through significant services). IFRS B34 contains no comparable enumeration; detailed indicators appear instead in IFRS 15 paragraphs B35–B37.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业承担向客户转让商品的主要责任。企业在转让商品之前或之后承担了该商品的存货风险。企业有权自主决定所交易商品的价格。其他相关事实和情况。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Not present in IFRS B34]"
            }
          ],
          "description": "PRC GAAP lists four specific indicators to consider when assessing control: (1) primary responsibility for transfer, (2) inventory risk before or after transfer, (3) discretion over price, and (4) other relevant facts. IFRS B34 itself does not enumerate these factors; they appear later in IFRS 15 paragraphs B35–B37.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当按照已收或应收对价总额确认收入；否则，该企业为代理人，应当按照预期有权收取的佣金或手续费的金额确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[IFRS B34 does not address the revenue measurement step]"
            }
          ],
          "description": "PRC GAAP Article 34 combines the principal/agent determination with the revenue measurement consequence (gross vs. net/commission). IFRS B34 is limited to the identification step; revenue measurement consequences for principals vs. agents are addressed in IFRS 15 paragraph B36 and B5–B7, not in B34.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "[Implicit in PRC GAAP Article 34 — single identity per transaction; no carve-out for multiple goods in a single contract]",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If a contract with a customer includes more than one specified good or service, an entity could be a principal for some specified goods or services and an agent for others."
            }
          ],
          "description": "IFRS B34 explicitly allows an entity to be a principal for some specified goods/services and an agent for others within the same contract. PRC GAAP Article 34, as written, does not address the possibility of mixed principal/agent treatment of multiple goods within one contract.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业在向客户转让商品前能够控制该商品的，该企业为主要责任人",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity determines whether it is a principal or an agent for each specified good or service promised to the customer. A specified good or service is a distinct good or service (or a distinct bundle of goods or services) to be provided to the customer (see paragraphs 27–30)."
            }
          ],
          "description": "PRC GAAP determines principal/agent status for the overall transaction. IFRS B34 requires the determination to be made at the level of each 'specified good or service,' which is a distinct good, service, or distinct bundle (with cross-reference to the distinct criteria in paragraphs 27–30).",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权，来判断其从事交易时的身份是主要责任人还是代理人。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity is a principal if it controls the specified good or service before that good or service is transferred to a customer."
            }
          ],
          "description": "PRC GAAP Article 34 focuses solely on '商品' (goods), while IFRS Paragraph B35 applies to both 'goods or services'. IFRS has a broader scope covering services in addition to goods.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "在具体判断向客户转让商品前是否拥有对该商品的控制权时，企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity is a principal if it controls the specified good or service before that good or service is transferred to a customer."
            }
          ],
          "description": "PRC GAAP explicitly requires that judgment should not be limited to the legal form of the contract, and all relevant facts and circumstances must be considered. IFRS B35 does not include this specific directive (though IFRS 15.B37 contains related indicators).",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "（一）企业自第三方取得商品或其他资产控制权后，再转让给客户。（二）企业能够主导第三方代表本企业向客户提供服务。（三）企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity that is a principal may satisfy its performance obligation to provide the specified good or service itself or it may engage another party (for example, a subcontractor) to satisfy some or all of the performance obligation on its behalf."
            }
          ],
          "description": "PRC GAAP provides three specific situations indicating control of goods before transfer (obtaining control from third party, directing third party to provide services, integration through significant services). IFRS B35 only provides one general example (engaging a subcontractor), without the detailed control scenarios.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "该企业为主要责任人，应当按照已收或应收对价总额确认收入；否则，该企业为代理人，应当按照预期有权收取的佣金或手续费的金额确认收入，该金额应当按照已收或应收对价总额扣除应支付给其他相关方的价款后的净额，或者按照既定的佣金金额或比例等确定。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity is a principal if it controls the specified good or service before that good or service is transferred to a customer."
            }
          ],
          "description": "PRC GAAP Article 34 specifies the revenue recognition outcomes within the same article: principal recognizes gross consideration, agent recognizes commission/fee (net of amounts paid to other parties or at a fixed rate). IFRS B35 focuses solely on the control test and does not address the revenue measurement consequences (gross vs. net), which are addressed in other IFRS 15 paragraphs (B34, B36).",
          "importance": 4
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "However, an entity does not necessarily control a specified good if the entity obtains legal title to that good only momentarily before legal title is transferred to a customer.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "企业向客户转让商品前能够控制该商品的情形包括...在具体判断向客户转让商品前是否拥有对该商品的控制权时..."
            }
          ],
          "description": "IFRS B35 contains a specific anti-form-over-substance provision regarding momentary legal title—clarifying that momentary title alone does not constitute control. PRC GAAP Article 34 does not contain an equivalent explicit provision on momentary legal title; it only provides a general directive not to limit analysis to the legal form of the contract.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权，来判断其从事交易时的身份是主要责任人还是代理人。企业在向客户转让商品前能够控制该商品的，该企业为主要责任人，应当按照已收或应收对价总额确认收入；否则，该企业为代理人，应当按照预期有权收取的佣金或手续费的金额确认收入，该金额应当按照已收或应收对价总额扣除应支付给其他相关方的价款后的净额，或者按照既定的佣金金额或比例等确定。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity is an agent if the entity's performance obligation is to arrange for the provision of the specified good or service by another party. An entity that is an agent does not control the specified good or service provided by another party before that good or service is transferred to the customer."
            }
          ],
          "description": "PRC_GAAP provides a complete two-sided framework covering both principal (主要责任人) and agent (代理人) determinations with corresponding revenue recognition treatments (gross vs. net), whereas IFRS Paragraph B36 only addresses the agent scenario in this specific paragraph.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "在具体判断向客户转让商品前是否拥有对该商品的控制权时，企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况，这些事实和情况包括：（一）企业承担向客户转让商品的主要责任。（二）企业在转让商品之前或之后承担了该商品的存货风险。（三）企业有权自主决定所交易商品的价格。（四）其他相关事实和情况。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC_GAAP provides four specific indicators/factors to consider when assessing control: primary responsibility for transfer, inventory risk before or after transfer, price discretion, and other relevant facts. IFRS Paragraph B36 does not list these specific indicators in this paragraph, though they appear elsewhere in IFRS 15 (paragraphs B37A-B37B).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当按照已收或应收对价总额确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity recognises revenue in the amount of any fee or commission to which it expects to be entitled in exchange for arranging for the specified goods or services to be provided by the other party"
            }
          ],
          "description": "PRC_GAAP explicitly requires principal recognition of revenue at the gross amount of consideration received or receivable (已收或应收对价总额). IFRS Paragraph B36 only addresses agent revenue recognition at the fee/commission amount and does not discuss the principal's gross recognition treatment in this paragraph.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权，来判断其从事交易时的身份是主要责任人还是代理人。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Indicators that an entity controls the specified good or service before it is transferred to the customer (and is therefore a principal (see paragraph B35))"
            }
          ],
          "description": "PRC_GAAP uses the term '商品' (goods/merchandise) throughout, while IFRS uses the broader term 'good or service', indicating a wider scope of application in IFRS.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业有权自主决定所交易商品的价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity has discretion in establishing the price for the specified good or service... However, an agent can have discretion in establishing prices in some cases. For example, an agent may have some flexibility in setting prices in order to generate additional revenue from its service of arranging for goods or services to be provided by other parties to customers."
            }
          ],
          "description": "IFRS explicitly acknowledges that an agent can also have discretion in setting prices in some cases and provides an illustrative example, adding nuance to the pricing indicator. PRC_GAAP's statement is more absolute, stating only that the entity has the right to autonomously determine the price without addressing this counter-consideration.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业在向客户转让商品前能够控制该商品的，该企业为主要责任人",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall not recognise revenue for that performance obligation. Instead, the entity shall evaluate whether to recognise revenue for satisfying a performance obligation to obtain a contract for the other party (ie whether the entity is acting as an agent)"
            }
          ],
          "description": "PRC GAAP frames the principal/agent determination directly through control of goods. IFRS B38 first addresses the scenario where another entity assumes the entity's performance obligations, requiring the entity to evaluate whether it is now acting as an agent — a scenario not explicitly addressed in PRC GAAP Article 34.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业承担向客户转让商品的主要责任",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The indicators in paragraph B37 may be more or less relevant to the assessment of control depending on the nature of the specified good or service and the terms and conditions of the contract"
            }
          ],
          "description": "PRC GAAP lists 'bearing primary responsibility for transferring goods to customer' as one of four specific indicators, with no weighting guidance. IFRS B37A (not fully shown in the snippet) introduces indicators but explicitly states that indicators may be more or less relevant depending on the nature of the specified good or service and the terms and conditions of the contract, and that different indicators may provide more persuasive evidence in different contracts.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "应当按照预期有权收取的佣金或手续费的金额确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "whether the entity is acting as an agent"
            }
          ],
          "description": "PRC GAAP explicitly uses the terms '佣金或手续费' (commission or fee) and specifies two calculation methods: net of amounts paid to other related parties, or a fixed commission amount or ratio. The IFRS snippet only refers to acting as an agent without detailing the measurement approach for the agent's revenue.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "在具体判断向客户转让商品前是否拥有对该商品的控制权时，企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Not present in IFRS B34]"
            }
          ],
          "description": "PRC GAAP includes an explicit anti-form-over-substance directive requiring the entity to consider all relevant facts and circumstances and not limit its analysis to the legal form of the contract. IFRS B34 does not contain this directive within the paragraph itself.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "该金额应当按照已收或应收对价总额扣除应支付给其他相关方的价款后的净额，或者按照既定的佣金金额或比例等确定。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[IFRS B34 does not address how the agent's amount is determined]"
            }
          ],
          "description": "PRC GAAP specifies the methodology for determining an agent's revenue: either (a) the net amount (total consideration minus amounts payable to other parties) or (b) a predetermined commission amount or rate. IFRS B34 contains no equivalent measurement guidance.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "it may engage another party (for example, a subcontractor) to satisfy some or all of the performance obligation on its behalf",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "企业自第三方取得商品或其他资产控制权后，再转让给客户。"
            }
          ],
          "description": "IFRS B35 explicitly notes that a principal may engage a subcontractor to satisfy the performance obligation, implying the principal can outsource delivery. PRC GAAP's first control scenario covers obtaining control from a third party then transferring, but does not explicitly mention subcontracting as a way for the principal to perform its obligation.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "该金额应当按照已收或应收对价总额扣除应支付给其他相关方的价款后的净额，或者按照既定的佣金金额或比例等确定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity's fee or commission might be the net amount of consideration that the entity retains after paying the other party the consideration received in exchange for the goods or services to be provided by that party."
            }
          ],
          "description": "Both standards describe net amount measurement for agent revenue, but PRC_GAAP explicitly provides two calculation methods: (1) gross consideration minus amounts paid to other related parties, or (2) a predetermined commission amount or ratio. IFRS uses 'might be' (suggesting one possible method) and does not enumerate the alternative predetermined commission approach.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC_GAAP explicitly emphasizes that the assessment of control should not be limited to the legal form of the contract but should consider all relevant facts and circumstances. IFRS Paragraph B36 does not include this explicit anti-form-over-substance directive in this paragraph.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "在具体判断向客户转让商品前是否拥有对该商品的控制权时，企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Indicators that an entity controls the specified good or service before it is transferred to the customer... include, but are not limited to, the following:"
            }
          ],
          "description": "PRC_GAAP explicitly states that the entity should not be limited to the legal form of the contract and must consider all relevant facts and circumstances. IFRS B37 does not include this explicit principle in this paragraph, though a similar substance-over-form concept exists elsewhere in IFRS 15.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业在转让商品之前或之后承担了该商品的存货风险。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity has inventory risk before the specified good or service has been transferred to a customer or after transfer of control to the customer (for example, if the customer has a right of return)."
            }
          ],
          "description": "IFRS provides a specific illustrative example ('for example, if the customer has a right of return') that is absent from the corresponding PRC_GAAP provision.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "（三）企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For example, if the entity obtains, or commits itself to obtain, the specified good or service before obtaining a contract with a customer, that may indicate that the entity has the ability to direct the use of, and obtain substantially all of the remaining benefits from, the good or service before it is transferred to the customer."
            }
          ],
          "description": "IFRS provides a detailed example related to obtaining or committing to obtain the good/service before obtaining a customer contract, linking it to directing use and obtaining remaining benefits. PRC_GAAP does not include this specific example, although it covers a similar concept in its enumerated control situations.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "该金额应当按照已收或应收对价总额扣除应支付给其他相关方的价款后的净额，或者按照既定的佣金金额或比例等确定。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(paragraph B37 is limited to indicators of control and does not address agent revenue measurement methods)"
            }
          ],
          "description": "PRC_GAAP, in the same article, specifies two methods for an agent to determine its revenue (net amount after deducting amounts payable to other parties, or a predetermined commission amount or rate). IFRS B37 focuses only on control indicators; the corresponding revenue measurement guidance for agents is in other paragraphs (e.g., B36, B35).",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业向客户转让商品前能够控制该商品的情形包括：（二）企业能够主导第三方代表本企业向客户提供服务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(no equivalent explicit enumeration in IFRS B37)"
            }
          ],
          "description": "PRC_GAAP explicitly includes a situation where the entity directs a third party to provide services to the customer on the entity's behalf as a listed control situation. IFRS addresses this concept through the 'primarily responsible' indicator and accompanying commentary, but does not enumerate it as a distinct situation.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业应当根据其在向客户转让商品前是否拥有对该商品的控制权，来判断其从事交易时的身份是主要责任人还是代理人",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "identify the specified goods or services to be provided to the customer ... and assess whether it controls ... each specified good or service before that good or service is transferred to the customer"
            }
          ],
          "description": "IFRS B34 establishes a two-step process: first identify the specified goods or services, then assess control over each. PRC GAAP Article 34 does not include the explicit preliminary step of identifying the specified goods or services to be provided to the customer.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业自第三方取得商品或其他资产控制权后，再转让给客户",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a good or another asset from the other party that it then transfers to the customer"
            }
          ],
          "description": "PRC GAAP explicitly includes '其他资产' (other assets) in addition to goods, while IFRS in B35A(a) refers to 'a good or another asset from the other party'. The scope is similar, but the PRC wording is positioned as one of three listed situations for control, whereas IFRS positions it as one indicator of control.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业能够主导第三方代表本企业向客户提供服务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a right to a service to be performed by the other party, which gives the entity the ability to direct that party to provide the service to the customer on the entity's behalf"
            }
          ],
          "description": "Both describe directing a third party to provide a service to the customer, but IFRS uses the term 'right to a service' as the specified good or service, while PRC GAAP uses the term '主导第三方' (dominate the third party). IFRS provides cross-references to Illustrative Example 46A, while PRC GAAP has no such illustrative example.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a good or service from the other party that it then combines with other goods or services in providing the specified good or service to the customer. For example, if an entity provides a significant service of integrating goods or services ... provided by another party into the specified good or service for which the customer has contracted, the entity controls the specified good or service before that good or service is transferred to the customer"
            }
          ],
          "description": "Both describe integration through significant service, but IFRS provides explicit reasoning: the entity first obtains control of the inputs and directs their use to create the combined output. PRC GAAP does not include this explanatory reasoning. IFRS also cross-references Illustrative Example 46, which is absent in PRC GAAP.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业在转让商品之前或之后承担了该商品的存货风险",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC GAAP explicitly lists 'bearing inventory risk before or after transfer' as a control indicator. The IFRS snippet does not explicitly mention inventory risk as an indicator; the IFRS indicators in B37 are referenced but the full list is not provided in the comparison text.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业有权自主决定所交易商品的价格",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC GAAP explicitly lists 'right to independently determine the price of the goods' as a control indicator. The IFRS snippet does not include this specific indicator; IFRS indicators in B37 are referenced but not detailed in the comparison text.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业不应仅局限于合同的法律形式，而应当综合考虑所有相关事实和情况",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC GAAP Article 34 explicitly states that the assessment should not be limited to the legal form of the contract and should consider all relevant facts and circumstances. The IFRS snippet does not contain an equivalent explicit statement in the provided text.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业向客户转让商品前能够控制该商品的情形包括",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a good or another asset from the other party that it then transfers to the customer"
            }
          ],
          "description": "PRC GAAP structures the three control situations as an exhaustive or indicative list (情形包括) of when control exists. IFRS B35A structures these same scenarios as indicators/examples of control without the same list format, and they are part of a broader control assessment framework.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "主要责任人",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "principal"
            }
          ],
          "description": "PRC GAAP uses the term '主要责任人' (primary responsible person/principal) for the principal role, whereas IFRS uses the single English term 'principal.' The Chinese term emphasizes responsibility rather than the IFRS term which stems from the principal-agent agency framework.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业自第三方取得商品或其他资产控制权后，再转让给客户；企业能够主导第三方代表本企业向客户提供服务；企业自第三方取得商品控制权后，通过提供重大的服务将该商品与其他商品整合成某组合产出转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer: Illustrative Examples, example 48 A]"
            }
          ],
          "description": "PRC GAAP provides three illustrative control scenarios inline within the standard. IFRS 15 incorporates its illustrative examples (including example 48A) as a separate appendix, with B34 only cross-referencing them rather than embedding them.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "主要责任人还是代理人",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "principal"
            }
          ],
          "description": "PRC GAAP uses the terms '主要责任人' (principal) and '代理人' (agent). IFRS uses 'principal' without explicitly mentioning the 'agent' term in this paragraph.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "主要责任人还是代理人",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "agent"
            }
          ],
          "description": "PRC_GAAP uses the Chinese terms '主要责任人' (principal) and '代理人' (agent), while IFRS uses 'principal' (implied) and 'agent' in English. The Chinese '责任人' literally means 'responsible person' which carries a slightly different connotation than 'principal' in IFRS.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "商品或其他资产控制权",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "specified good or service"
            }
          ],
          "description": "PRC_GAAP refers to 'goods or other assets' (商品或其他资产), suggesting a broader scope. IFRS specifically refers to 'good or service' (商品或服务), which is a slightly different scope, as IFRS language aligns with the performance obligation framework while PRC_GAAP includes 'other assets'.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "企业自第三方取得商品或其他资产控制权后，再转让给客户。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity is primarily responsible for fulfilling the promise to provide the specified good or service. This typically includes responsibility for the acceptability of the specified good or service"
            }
          ],
          "description": "IFRS elaborates that primary responsibility typically includes responsibility for the acceptability of the good or service (e.g., meeting customer specifications), and notes that this may indicate the other party is acting on the entity's behalf. PRC_GAAP's first situation and the related indicator do not contain this detailed elaboration regarding acceptability/specifications.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "（四）其他相关事实和情况。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "include, but are not limited to, the following: (a)... (b)... (c)..."
            }
          ],
          "description": "Both frameworks adopt a non-exhaustive approach (PRC_GAAP adds 'other relevant facts and circumstances' as item (iv); IFRS uses 'include, but are not limited to'). The framing is conceptually aligned but worded differently.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "specified goods or services"
            }
          ],
          "description": "PRC GAAP uses the term '商品' (goods/commodity), while IFRS uses the broader term 'specified goods or services', explicitly including services within the scope of the control assessment.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "应当按照已收或应收对价总额确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity recognises revenue in the gross amount of consideration to which it expects to be entitled in exchange for the specified good or service transferred"
            }
          ],
          "description": "PRC GAAP refers to '已收或应收对价总额' (total consideration received or receivable), while IFRS refers to 'gross amount of consideration to which it expects to be entitled'. The IFRS formulation is forward-looking (expected), while the PRC formulation references actual or accrued amounts.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Illustrative Examples, example 47] [Refer:Illustrative Examples, example 46 A] [Refer:Illustrative Examples, example 46]"
            }
          ],
          "description": "IFRS B35A includes explicit cross-references to Illustrative Examples 46, 46A, and 47. PRC GAAP Article 34 does not include any illustrative examples or cross-references within the article text.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "佣金或手续费",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[IFRS B34 uses 'agent' but does not in this paragraph refer to 'commission or fee']"
            }
          ],
          "description": "PRC GAAP refers to the agent's consideration as '佣金或手续费' (commission or fee/handling charge), a term not used in IFRS B34; IFRS discusses this conceptually in paragraph B36.",
          "importance": 1
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 34,
          "sourceText": "",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Customer options for additional goods or services"
            }
          ],
          "description": "The IFRS text includes a heading 'Customer options for additional goods or services' at the end, which is not addressed in PRC GAAP Article 34. This suggests IFRS provides additional guidance on this topic in surrounding paragraphs not mirrored in the PRC GAAP article.",
          "importance": 1
        }
      ]
    },
    {
      "id": 30,
      "relationship": "SIMILAR",
      "confidence": 0.88,
      "notes": "",
      "source": {
        "id": 35,
        "framework": "PRC_GAAP",
        "number": "第三十五条",
        "index": 35,
        "content": "对于附有客户额外购买选择权的销售，企业应当评估该选择权是否向客户提供了一项重大权利。企业提供重大权利的，应当作为单项履约义务，按照本准则第二十条至第二十四条规定将交易价格分摊至该履约义务，在客户未来行使购买选择权取得相关商品控制权时，或者该选择权失效时，确认相应的收入。客户额外购买选择权的单独售价无法直接观察的，企业应当综合考虑客户行使和不行使该选择权所能获得的折扣的差异、客户行使该选择权的可能性等全部相关信息后，予以合理估计。 客户虽然有额外购买商品选择权，但客户行使该选择权购买商品时的价格反映了这些商品单独售价的，不应被视为企业向该客户提供了一项重大权利。"
      },
      "mappedArticles": [
        {
          "id": 341,
          "framework": "IFRS",
          "number": "Paragraph B42",
          "index": 168,
          "content": "Paragraph 74 requires an entity to allocate the transaction price to performance obligations on a relative stand-alone selling price basis. If the stand-alone selling price for a customer’s option to acquire additional goods or services is not directly observable, an entity shall estimate it. That estimate shall reflect the discount that the customer would obtain when exercising the option, adjusted for both of the following: (a) any discount that the customer could receive without exercising the option; and (b) the likelihood that the option will be exercised."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "对于附有客户额外购买选择权的销售，企业应当评估该选择权是否向客户提供了一项重大权利。企业提供重大权利的，应当作为单项履约义务，按照本准则第二十条至第二十四条规定将交易价格分摊至该履约义务，在客户未来行使购买选择权取得相关商品控制权时，或者该选择权失效时，确认相应的收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 74 requires an entity to allocate the transaction price to performance obligations on a relative stand-alone selling price basis. If the stand-alone selling price for a customer's option to acquire additional goods or services is not directly observable, an entity shall estimate it."
            }
          ],
          "description": "PRC GAAP Article 35 is a comprehensive article covering the full accounting treatment for customer options (assessment of significant right, treatment as separate performance obligation, transaction price allocation, and revenue recognition timing). IFRS B42 is a narrow implementation paragraph that only addresses how to estimate the stand-alone selling price of the option, not the broader recognition and allocation framework.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "企业应当评估该选择权是否向客户提供了一项重大权利",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the stand-alone selling price for a customer's option to acquire additional goods or services is not directly observable, an entity shall estimate it."
            }
          ],
          "description": "PRC GAAP explicitly requires the entity to first assess whether the option provides a 'significant right' (重大权利) to the customer before treating it as a separate performance obligation. IFRS B42 does not contain this assessment step; it presupposes the option is already a performance obligation.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "在客户未来行使购买选择权取得相关商品控制权时，或者该选择权失效时，确认相应的收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 74 requires an entity to allocate the transaction price to performance obligations on a relative stand-alone selling price basis."
            }
          ],
          "description": "PRC GAAP specifies the revenue recognition timing for the option: revenue is recognized when the customer exercises the option and obtains control of the related goods, or when the option lapses/expires. IFRS B42 does not address revenue recognition timing; it only addresses transaction price allocation.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "客户额外购买选择权的单独售价无法直接观察的，企业应当综合考虑客户行使和不行使该选择权所能获得的折扣的差异、客户行使该选择权的可能性等全部相关信息后，予以合理估计。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "That estimate shall reflect the discount that the customer would obtain when exercising the option, adjusted for both of the following: (a) any discount that the customer could receive without exercising the option; and (b) the likelihood that the option will be exercised."
            }
          ],
          "description": "Both standards require estimating the stand-alone selling price based on the discount obtainable on exercise, the discount obtainable without exercise, and exercise likelihood. However, the PRC GAAP uses more general/narrative language ('考虑…差异…等全部相关信息'), while IFRS B42 provides a precise, structured two-part adjustment (subtract the discount available without exercise, then reflect exercise probability).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "客户虽然有额外购买商品选择权，但客户行使该选择权购买商品时的价格反映了这些商品单独售价的，不应被视为企业向该客户提供了一项重大权利。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the stand-alone selling price for a customer's option to acquire additional goods or services is not directly observable, an entity shall estimate it."
            }
          ],
          "description": "PRC GAAP contains an explicit carve-out: if the price the customer pays upon exercising the option reflects the standalone selling price of the underlying goods, the option is NOT considered a significant right and no separate performance obligation is recognized. IFRS B42 contains no equivalent guidance—it operates downstream of the significant-right assessment.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "客户行使和不行使该选择权所能获得的折扣的差异",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the discount that the customer would obtain when exercising the option, adjusted for…(a) any discount that the customer could receive without exercising the option"
            }
          ],
          "description": "The PRC GAAP expresses the concept as 'the difference in discounts between exercising and not exercising the option' (单一 combined concept). IFRS articulates it as starting with the exercise discount and then making an explicit adjustment for the non-exercise discount, which is a more procedural formulation of essentially the same economic concept.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "等全部相关信息后，予以合理估计",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "adjusted for both of the following: (a) any discount that the customer could receive without exercising the option; and (b) the likelihood that the option will be exercised."
            }
          ],
          "description": "PRC GAAP includes an open-ended requirement to consider 'all other relevant information' (全部相关信息) when estimating the stand-alone selling price, giving broader judgmental latitude. IFRS B42 restricts the adjustments to two specifically enumerated factors (non-exercise discount and exercise probability), without an explicit catch-all.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "重大权利 (significant right)",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "material right (implied context)"
            }
          ],
          "description": "PRC GAAP uses the term '重大权利' (significant right), whereas the corresponding IFRS concept is 'material right' (a term defined and used in IFRS 15 paragraphs B40–B41, to which B42 relates). This is a translation/terminology difference reflecting the two standards' own defined terms.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 35,
          "sourceText": "按照本准则第二十条至第二十四条规定将交易价格分摊至该履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 74 requires an entity to allocate the transaction price to performance obligations on a relative stand-alone selling price basis."
            }
          ],
          "description": "PRC GAAP references its own domestic Articles 20–24 for the transaction price allocation rules. IFRS references its own Paragraph 74 (relative stand-alone selling price basis). Both indicate the same underlying principle, but they cross-reference different provisions within their respective standards.",
          "importance": 2
        }
      ]
    },
    {
      "id": 31,
      "relationship": "SIMILAR",
      "confidence": 0.92,
      "notes": "",
      "source": {
        "id": 36,
        "framework": "PRC_GAAP",
        "number": "第三十六条",
        "index": 36,
        "content": "企业向客户授予知识产权许可的，应当按照本准则第九条和第十条规定评估该知识产权许可是否构成单项履约义务，构成单项履约义务的，应当进一步确定其是在某一时段内履行还是在某一时点履行。 企业向客户授予知识产权许可，同时满足下列条件时，应当作为在某一时段内履行的履约义务确认相关收入；否则，应当作为在某一时点履行的履约义务确认相关收入：\n（一） 合同要求或客户能够合理预期企业将从事对该项知识产权有重大影响的活动；\n（二） 该活动对客户将产生有利或不利影响；\n（三） 该活动不会导致向客户转让某项商品。"
      },
      "mappedArticles": [
        {
          "id": 358,
          "framework": "IFRS",
          "number": "Paragraph B60",
          "index": 185,
          "content": "If the criteria in paragraph B58 are met, an entity shall account for the promise to grant a licence as a performance obligation satisfied over time because the customer will simultaneously receive and consume the benefit from the entity’s performance of providing access to its intellectual property as the performance occurs (see paragraph 35(a)). An entity shall apply paragraphs 39–45 to select an appropriate method to measure its progress towards complete satisfaction of that performance obligation to provide access."
        },
        {
          "id": 359,
          "framework": "IFRS",
          "number": "Paragraph B61",
          "index": 186,
          "content": "If the criteria in paragraph B58 are not met, the nature of an entity’s promise is to provide a right to use the entity’s intellectual property as that intellectual property exists (in terms of form and functionality) at the point in time at which the licence is granted to the customer. This means that the customer can direct the use of, and obtain substantially all of the remaining benefits from, the licence at the point in time at which the licence transfers. An entity shall account for the promise to provide a right to use the entity’s intellectual property as a performance obligation satisfied at a point in time. [Refer:Illustrative Examples, examples 54, 56 Case B and 59] An entity shall apply paragraph 38 to determine the point in time at which the licence transfers to the customer. However, revenue cannot be recognised for a licence that provides a right to use the entity’s intellectual property before the beginning of the period during which the customer is able to use and benefit from the licence. For example, if a software licence period begins before an entity provides (or otherwise makes available) to the customer a code that enables the customer to immediately use the software, the entity would not recognise revenue before that code has been provided (or otherwise made available). [Refer:Basis for Conclusions paragraphs BC414 and BC414 S–BC414 U]"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "企业向客户授予知识产权许可，同时满足下列条件时，应当作为在某一时段内履行的履约义务确认相关收入；否则，应当作为在某一时点履行的履约义务确认相关收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the criteria in paragraph B58 are met, an entity shall account for the promise to grant a licence as a performance obligation satisfied over time because the customer will simultaneously receive and consume the benefit from the entity's performance of providing access to its intellectual property as the performance occurs (see paragraph 35(a))."
            }
          ],
          "description": "PRC GAAP sets out the three-condition test for over-time recognition directly within Article 36, and provides a default rule (point in time) when conditions are not met. IFRS instead incorporates the conditions by cross-reference to paragraph B58 and provides the conceptual rationale (simultaneous receipt and consumption of benefits per paragraph 35(a)) directly in paragraph B60, without restating the alternative point-in-time outcome here.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "（一） 合同要求或客户能够合理预期企业将从事对该项知识产权有重大影响的活动；（二） 该活动对客户将产生有利或不利影响；（三） 该活动不会导致向客户转让某项商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the customer will simultaneously receive and consume the benefit from the entity’s performance of providing access to its intellectual property as the performance occurs (see paragraph 35(a))"
            }
          ],
          "description": "The substantive criteria for over-time recognition differ: PRC GAAP's three-part test focuses on (1) significant-impact activities, (2) positive/negative effect on the customer, and (3) no transfer of a good. IFRS criterion (B58) is framed around the customer simultaneously receiving and consuming the benefit of access (paragraph 35(a) criterion), which is a different conceptual basis rather than a verbatim equivalent.",
          "importance": 5
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "企业向客户授予知识产权许可的，应当按照本准则第九条和第十条规定评估该知识产权许可是否构成单项履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the criteria in paragraph B58 are met, an entity shall account for the promise to grant a licence as a performance obligation satisfied over time"
            }
          ],
          "description": "PRC GAAP requires an explicit assessment under Articles 9 and 10 to determine whether the IP license constitutes a single performance obligation, whereas IFRS assumes the criteria in paragraph B58 have already been met and directly addresses the timing of satisfaction. The frameworks differ in where and how the performance obligation identification step is performed relative to this paragraph.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "（三） 该活动不会导致向客户转让某项商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the customer will simultaneously receive and consume the benefit from the entity’s performance of providing access to its intellectual property as the performance occurs (see paragraph 35(a))"
            }
          ],
          "description": "PRC GAAP explicitly requires that the activities not result in the transfer of a good to the customer as a separate condition. IFRS does not include an equivalent explicit 'no transfer of a good' condition within paragraph B60's stated rationale; instead, the no-transfer-of-goods notion is typically captured separately through other IFRS requirements.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "（无对应条款）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply paragraphs 39–45 to select an appropriate method to measure its progress towards complete satisfaction of that performance obligation to provide access."
            }
          ],
          "description": "IFRS paragraph B60 explicitly requires the entity to apply paragraphs 39–45 to select an appropriate method for measuring progress toward complete satisfaction of the over-time performance obligation. PRC GAAP Article 36 does not include an equivalent instruction for selecting a progress measurement method for over-time IP license obligations.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "企业向客户授予知识产权许可的，应当按照本准则第九条和第十条规定评估该知识产权许可是否构成单项履约义务，构成单项履约义务的，应当进一步确定其是在某一时段内履行还是在某一时点履行。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the criteria in paragraph B58 are not met, the nature of an entity's promise is to provide a right to use the entity's intellectual property..."
            }
          ],
          "description": "PRC_GAAP provides a complete framework covering the assessment of whether an IP license constitutes a single performance obligation and the determination of over-time vs. point-in-time satisfaction. IFRS B61 only addresses the specific scenario when the over-time criteria in B58 are not met, assuming the prior assessments have already been completed.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "Not addressed in 第三十六条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "However, revenue cannot be recognised for a licence that provides a right to use the entity's intellectual property before the beginning of the period during which the customer is able to use and benefit from the licence."
            }
          ],
          "description": "IFRS B61 contains an additional restriction that revenue cannot be recognized before the customer is able to use and benefit from the licence, even if the licence has technically been granted. This timing restriction is not present in PRC_GAAP 第三十六条.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "Not provided in 第三十六条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For example, if a software licence period begins before an entity provides (or otherwise makes available) to the customer a code that enables the customer to immediately use the software, the entity would not recognise revenue before that code has been provided (or otherwise made available)."
            }
          ],
          "description": "IFRS B61 provides a specific illustrative example about software licences where the licence period begins before the code is made available, requiring revenue to be deferred. PRC_GAAP 第三十六条 does not include this example.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "对该项知识产权有重大影响的活动",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "providing access to its intellectual property"
            }
          ],
          "description": "PRC GAAP frames the license in terms of activities that have a significant impact on the IP itself, emphasizing the entity's continuing involvement with the IP. IFRS describes the performance as 'providing access to its intellectual property', emphasizing the customer's access benefit rather than impact on the IP. The wording reflects a different conceptual focus.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "构成单项履约义务的，应当进一步确定其是在某一时段内履行还是在某一时点履行",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the criteria in paragraph B58 are met, an entity shall account for the promise to grant a licence as a performance obligation satisfied over time"
            }
          ],
          "description": "PRC GAAP explicitly leaves open the determination between over-time and point-in-time satisfaction once the IP license is identified as a single performance obligation, applying conditions to choose. IFRS paragraph B60 only addresses the outcome when B58 criteria are met (over-time) and does not in B60 itself address the point-in-time alternative; the point-in-time treatment for licenses is addressed in a separate IFRS paragraph (B61/B62).",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "企业向客户授予知识产权许可，同时满足下列条件时，应当作为在某一时段内履行的履约义务确认相关收入；否则，应当作为在某一时点履行的履约义务确认相关收入：\n（一） 合同要求或客户能够合理预期企业将从事对该项知识产权有重大影响的活动；\n（二） 该活动对客户将产生有利或不利影响；\n（三） 该活动不会导致向客户转让某项商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If the criteria in paragraph B58 are not met..."
            }
          ],
          "description": "PRC_GAAP explicitly lists the three conditions that must be met for over-time recognition of revenue from IP licenses (contractual requirement or reasonable expectation of significant-impact activities, customer impact, and no transfer of goods). IFRS B61 does not list these conditions but refers to paragraph B58, which contains the equivalent criteria.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "（三） 该活动不会导致向客户转让某项商品。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Not directly addressed in B61"
            }
          ],
          "description": "PRC_GAAP includes as a condition for over-time treatment that the activity does not result in the transfer of a good to the customer. This is part of the B58 criteria referenced by IFRS, but the specific condition is not restated in B61.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "Not explicitly addressed in 第三十六条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply paragraph 38 to determine the point in time at which the licence transfers to the customer."
            }
          ],
          "description": "IFRS B61 specifically requires applying paragraph 38 to determine the point in time at which the licence transfers, which is not explicitly referenced in PRC_GAAP 第三十六条.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "企业向客户授予知识产权许可",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "right to use the entity's intellectual property as that intellectual property exists (in terms of form and functionality) at the point in time at which the licence is granted to the customer"
            }
          ],
          "description": "IFRS B61 specifically characterizes the 'right to use' nature of the licence, describing that the IP exists in its form and functionality at the grant date. PRC_GAAP does not provide this characterization in 第三十六条.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "Not addressed in 第三十六条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the customer can direct the use of, and obtain substantially all of the remaining benefits from, the licence at the point in time at which the licence transfers"
            }
          ],
          "description": "IFRS B61 includes the principle that the customer can direct the use of and obtain substantially all remaining benefits from the licence at the transfer point. PRC_GAAP 第三十六条 does not contain this customer-control characterization.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 36,
          "sourceText": "构成单项履约义务的，应当进一步确定其是在某一时段内履行还是在某一时点履行",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a performance obligation satisfied at a point in time"
            }
          ],
          "description": "PRC_GAAP uses the terms '在某一时段内履行' (satisfied over time) and '在某一时点履行' (satisfied at a point in time), while IFRS uses 'performance obligation satisfied at a point in time'. The conceptual meaning is equivalent but the terminology and expression differ slightly.",
          "importance": 2
        }
      ]
    },
    {
      "id": 32,
      "relationship": "SIMILAR",
      "confidence": 0.97,
      "notes": "",
      "source": {
        "id": 37,
        "framework": "PRC_GAAP",
        "number": "第三十七条",
        "index": 37,
        "content": "企业向客户授予知识产权许可，并约定按客户实际销售或使用情况收取特许权使用费的，应当在下列两项孰晚的时点确认收入：\n（一） 客户后续销售或使用行为实际发生；\n（二） 企业履行相关履约义务。"
      },
      "mappedArticles": [
        {
          "id": 361,
          "framework": "IFRS",
          "number": "Paragraph B63",
          "index": 188,
          "content": "Notwithstanding the requirements in paragraphs 56–59, an entity shall recognise revenue for a sales-based or usage-based royalty promised in exchange for a licence of intellectual property only when (or as) the later of the following events occurs: (a) the subsequent sale or usage occurs; and (b) the performance obligation to which some or all of the sales-based or usage-based royalty has been allocated has been satisfied (or partially satisfied). B63 A The requirement for a sales-based or usage-based royalty in paragraph B63 applies when the royalty relates only to a licence of intellectual property or when a licence of intellectual property is the predominant item to which the royalty relates (for example, the licence of intellectual property may be the predominant item to which the royalty relates when the entity has a reasonable expectation that the customer would ascribe significantly more value to the licence than to the other goods or services to which the royalty relates). B63 B When the requirement in paragraph B63 A is met, revenue from a sales-based or usage-based royalty shall be recognised wholly in accordance with paragraph B63. When the requirement in paragraph B63 A is not met, the requirements on variable consideration in paragraphs 50–59 apply to the sales-based or usage-based royalty. Repurchase agreements"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "企业向客户授予知识产权许可，并约定按客户实际销售或使用情况收取特许权使用费的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "B63 A The requirement for a sales-based or usage-based royalty in paragraph B63 applies when the royalty relates only to a licence of intellectual property or when a licence of intellectual property is the predominant item to which the royalty relates"
            }
          ],
          "description": "IFRS includes additional application guidance (B63 A) limiting this royalty recognition method to situations where the IP license is the sole or predominant item; PRC GAAP has no such 'predominant item' limitation in this article.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "（无对应条款）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "B63 B When the requirement in paragraph B63 A is not met, the requirements on variable consideration in paragraphs 50–59 apply to the sales-based or usage-based royalty."
            }
          ],
          "description": "IFRS (B63 B) explicitly provides a fallback: if B63 A is not met, the variable consideration guidance in paragraphs 50–59 applies. PRC GAAP has no equivalent fallback rule, implying the article may apply more broadly without specifying alternative treatment.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "企业向客户授予知识产权许可，并约定按客户实际销售或使用情况收取特许权使用费的，应当在下列两项孰晚的时点确认收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Notwithstanding the requirements in paragraphs 56–59, an entity shall recognise revenue for a sales-based or usage-based royalty promised in exchange for a licence of intellectual property only when (or as) the later of the following events occurs"
            }
          ],
          "description": "IFRS explicitly states this requirement is an exception 'notwithstanding' the variable consideration guidance in paragraphs 56–59, while PRC GAAP does not reference or carve out from any other paragraphs.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "（一） 客户后续销售或使用行为实际发生；（二） 企业履行相关履约义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) the subsequent sale or usage occurs; and (b) the performance obligation to which some or all of the sales-based or usage-based royalty has been allocated has been satisfied (or partially satisfied)."
            }
          ],
          "description": "IFRS specifies that the performance obligation need only be 'satisfied (or partially satisfied)', allowing revenue recognition even when only partially performed. PRC GAAP requires full 'fulfillment' (履行) of the performance obligation with no partial satisfaction option.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "企业履行相关履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the performance obligation to which some or all of the sales-based or usage-based royalty has been allocated has been satisfied"
            }
          ],
          "description": "PRC GAAP refers to the entity fulfilling 'the relevant performance obligation' generally, while IFRS specifies it is the performance obligation 'to which some or all of the sales-based or usage-based royalty has been allocated', emphasizing allocation among possibly multiple obligations.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "（无示例）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(for example, the licence of intellectual property may be the predominant item to which the royalty relates when the entity has a reasonable expectation that the customer would ascribe significantly more value to the licence than to the other goods or services to which the royalty relates)"
            }
          ],
          "description": "IFRS B63 A includes a clarifying example for the 'predominant item' test (customer ascribes significantly more value to the licence); PRC GAAP contains no illustrative example.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "特许权使用费",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "sales-based or usage-based royalty"
            }
          ],
          "description": "PRC GAAP uses the single term '特许权使用费' (royalty), while IFRS uses the more specific compound term 'sales-based or usage-based royalty', making the variable nature explicit.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 37,
          "sourceText": "第三十七条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Repurchase agreements"
            }
          ],
          "description": "IFRS B63 is followed by a new topic 'Repurchase agreements', indicating IFRS places this royalty guidance within a broader sequence of IP-related topics; PRC GAAP's Article 37 is standalone with no such adjacent topic context given.",
          "importance": 1
        }
      ]
    },
    {
      "id": 33,
      "relationship": "SIMILAR",
      "confidence": 0.52,
      "notes": "",
      "source": {
        "id": 38,
        "framework": "PRC_GAAP",
        "number": "第三十八条",
        "index": 38,
        "content": "对于售后回购交易，企业应当区分下列两种情形分别进行会计处理：\n（一） 企业因存在与客户的远期安排而负有回购义务或企业享有回购权利的，表明客户在销售时点并未取得相关商品控制权，企业应当作为租赁交易或融资交易进行相应的会计处理。其中，回购价格低于原售价的，应当视为租赁交易，按照《企业会计准则第21号——租赁》的相关规定进行会计处理；回购价格不低于原售价的，应当视为融资交易，在收到客户款项时确认金融负债，并将该款项和回购价格的差额在回购期间内确认为利息费用等。企业到期未行使回购权利的，应当在该回购权利到期时终止确认金融负债，同时确认收入。\n（二） 企业负有应客户要求回购商品义务的，应当在合同开始日评估客户是否具有行使该要求权的重大经济动因。客户具有行使该要求权重大经济动因的，企业应当将售后回购作为租赁交易或融资交易，按照本条（一）规定进行会计处理；否则，企业应当将其作为附有销售退回条款的销售交易，按照本准则第三十二条规定进行会计处理。 售后回购，是指企业销售商品的同时承诺或有权选择日后再将该商品（包括相同或几乎相同的商品，或以该商品作为组成部分的商品）购回的销售方式。"
      },
      "mappedArticles": [
        {
          "id": 375,
          "framework": "IFRS",
          "number": "Paragraph B77",
          "index": 202,
          "content": "When an entity delivers a product to another party (such as a dealer or a distributor) for sale to end customers, the entity shall evaluate whether that other party has obtained control of the product at that point in time. A product that has been delivered to another party may be held in a consignment arrangement if that other party has not obtained control of the product. Accordingly, an entity shall not recognise revenue upon delivery of a product to another party if the delivered product is held on consignment."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "对于售后回购交易，企业应当区分下列两种情形分别进行会计处理：（一）企业因存在与客户的远期安排而负有回购义务或企业享有回购权利的...（二）企业负有应客户要求回购商品义务的...售后回购，是指企业销售商品的同时承诺或有权选择日后再将该商品（包括相同或几乎相同的商品，或以该商品作为组成部分的商品）购回的销售方式。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When an entity delivers a product to another party (such as a dealer or a distributor) for sale to end customers, the entity shall evaluate whether that other party has obtained control of the product at that point in time...a product that has been delivered to another party may be held in a consignment arrangement if that other party has not obtained control of the product."
            }
          ],
          "description": "PRC GAAP Article 38 addresses sale-and-repurchase transactions (售后回购) involving the original seller/customer relationship with a forward repurchase obligation or right. IFRS B77 addresses consignment arrangements where goods are delivered to an intermediary (dealer/distributor) for resale to end customers. The two provisions govern fundamentally different transaction structures.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "回购价格低于原售价的，应当视为租赁交易，按照《企业会计准则第21号——租赁》的相关规定进行会计处理；回购价格不低于原售价的，应当视为融资交易，在收到客户款项时确认金融负债，并将该款项和回购价格的差额在回购期间内确认为利息费用等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall not recognise revenue upon delivery of a product to another party if the delivered product is held on consignment."
            }
          ],
          "description": "PRC GAAP prescribes detailed bifurcated accounting based on the relationship between repurchase price and original selling price: lease treatment (CAS 21) when repurchase price is lower; financing treatment with recognition of a financial liability and interest expense when repurchase price is at or above original price. IFRS B77 provides a single rule: do not recognize revenue upon delivery if the product is held on consignment.",
          "importance": 5
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "售后回购...回购义务...回购权利...融资交易...租赁交易",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "consignment arrangement...control of the product...delivered product is held on consignment"
            }
          ],
          "description": "PRC uses the concept of \"售后回购\" (sale-and-repurchase) and references resulting classification as either \"租赁交易\" (lease transaction) or \"融资交易\" (financing transaction). IFRS B77 uses the term \"consignment arrangement\" and focuses purely on whether control of the product has transferred.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "企业到期未行使回购权利的，应当在该回购权利到期时终止确认金融负债，同时确认收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall not recognise revenue upon delivery of a product to another party if the delivered product is held on consignment."
            }
          ],
          "description": "PRC GAAP specifies the accounting consequence when the repurchase right expires unexercised: derecognize the financial liability and recognize revenue at that point. IFRS B77 contains no equivalent guidance on subsequent revenue recognition or derecognition events.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "企业负有应客户要求回购商品义务的，应当在合同开始日评估客户是否具有行使该要求权重大经济动因。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity shall evaluate whether that other party has obtained control of the product at that point in time."
            }
          ],
          "description": "PRC GAAP requires a specific assessment of whether the customer has significant economic incentive (重大经济动因) to exercise a repurchase request right, at contract commencement. IFRS B77 requires an evaluation of whether the dealer/distributor has obtained control of the product at the time of delivery. The two standards focus on different indicators (economic incentive vs. control) and different counterparties.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "企业因存在与客户的远期安排而负有回购义务或企业享有回购权利的...企业负有应客户要求回购商品义务的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "for sale to end customers...such as a dealer or a distributor"
            }
          ],
          "description": "PRC GAAP distinguishes two illustrative situations: (1) forward repurchase obligations/rights existing with the customer, and (2) repurchase obligations triggered at the customer's request. IFRS B77 provides a single illustrative context: delivery to a dealer or distributor for sale to end customers under a consignment arrangement.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 38,
          "sourceText": "包括相同或几乎相同的商品，或以该商品作为组成部分的商品",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When an entity delivers a product to another party (such as a dealer or a distributor) for sale to end customers"
            }
          ],
          "description": "PRC GAAP explicitly defines the scope of repurchased goods to include identical or substantially identical goods, or goods of which the original item forms a component. IFRS B77 addresses the delivered product itself as delivered to an intermediary, without analogous guidance on substituted or component goods.",
          "importance": 2
        }
      ]
    },
    {
      "id": 34,
      "relationship": "SIMILAR",
      "confidence": 0.9,
      "notes": "",
      "source": {
        "id": 39,
        "framework": "PRC_GAAP",
        "number": "第三十九条",
        "index": 39,
        "content": "企业向客户预收销售商品款项的，应当首先将该款项确认为负债，待履行了相关履约义务时再转为收入。当企业预收款项无需退回，且客户可能会放弃其全部或部分合同权利时，企业预期将有权获得与客户所放弃的合同权利相关的金额的，应当按照客户行使合同权利的模式按比例将上述金额确认为收入；否则，企业只有在客户要求其履行剩余履约义务的可能性极低时，才能将上述负债的相关余额转为收入。"
      },
      "mappedArticles": [
        {
          "id": 343,
          "framework": "IFRS",
          "number": "Paragraph B44",
          "index": 170,
          "content": "In accordance with paragraph 106, upon receipt of a prepayment from a customer, an entity shall recognise a contract liability in the amount of the prepayment for its performance obligation to transfer, or to stand ready to transfer, goods or services in the future. An entity shall derecognise that contract liability (and recognise revenue) when it transfers those goods or services and, therefore, satisfies its performance obligation."
        },
        {
          "id": 348,
          "framework": "IFRS",
          "number": "Paragraph B49",
          "index": 175,
          "content": "To identify performance obligations in such contracts, an entity shall assess whether the fee relates to the transfer of a promised good or service. In many cases, even though a non-refundable upfront fee relates to an activity that the entity is required to undertake at or near contract inception to fulfil the contract, that activity does not result in the transfer of a promised good or service to the customer (see paragraph 25). Instead, the upfront fee is an advance payment for future goods or services and, therefore, would be recognised as revenue when those future goods or services are provided. [Refer:Illustrative Examples, examples 53 and 16] The revenue recognition period would extend beyond the initial contractual period if the entity grants the customer the option to renew the contract and that option provides the customer with a material right as described in paragraph B40."
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "当企业预收款项无需退回，且客户可能会放弃其全部或部分合同权利时，企业预期将有权获得与客户所放弃的合同权利相关的金额的，应当按照客户行使合同权利的模式按比例将上述金额确认为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall derecognise that contract liability (and recognise revenue) when it transfers those goods or services and, therefore, satisfies its performance obligation."
            }
          ],
          "description": "PRC GAAP includes a special rule allowing proportional revenue recognition based on the customer's pattern of exercising contract rights when prepayments are non-refundable and the customer may waive rights, with the entity expecting to retain related amounts. IFRS B44 contains no equivalent guidance; derecognition occurs only upon transfer of goods/services.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "企业预期将有权获得与客户所放弃的合同权利相关的金额的，应当按照客户行使合同权利的模式按比例将上述金额确认为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "The revenue recognition period would extend beyond the initial contractual period if the entity grants the customer the option to renew the contract and that option provides the customer with a material right as described in paragraph B40."
            }
          ],
          "description": "PRC GAAP provides a specific proportional revenue recognition rule based on the customer's pattern of exercising contract rights when the customer abandons those rights. IFRS B49 instead addresses a related but distinct scenario—an option to renew that constitutes a material right—and does not include an abandonment-based proportional recognition rule.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "企业只有在客户要求其履行剩余履约义务的可能性极低时，才能将上述负债的相关余额转为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "recognised as revenue when those future goods or services are provided"
            }
          ],
          "description": "PRC GAAP imposes a strict threshold ('极低' / extremely low) for converting the remaining liability balance to revenue when the customer is not expected to exercise the right. IFRS B49 sets no such probability threshold; revenue is recognized when the future goods or services are provided.",
          "importance": 5
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "应当首先将该款项确认为负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "shall recognise a contract liability in the amount of the prepayment"
            }
          ],
          "description": "PRC uses the general term '负债' (liability), whereas IFRS uses the specific term 'contract liability' (合同负债), reflecting IFRS 15's narrower defined concept tied to contracts with customers.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "企业只有在客户要求其履行剩余履约义务的可能性极低时，才能将上述负债的相关余额转为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall derecognise that contract liability (and recognise revenue) when it transfers those goods or services and, therefore, satisfies its performance obligation."
            }
          ],
          "description": "PRC GAAP provides an alternative condition allowing the liability balance to be converted to revenue when the likelihood that the customer will require performance of the remaining obligation is 'extremely low' (极低). IFRS B44 has no such low-probability fallback, requiring derecognition only at the point of goods/services transfer.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "企业向客户预收销售商品款项的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "non-refundable upfront fee"
            }
          ],
          "description": "PRC GAAP Article 39 applies specifically to advance receipts for the sale of goods (销售商品), whereas IFRS B49 applies more broadly to any non-refundable upfront fee relating to the transfer of a promised good or service.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "客户可能会放弃其全部或部分合同权利时",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the entity grants the customer the option to renew the contract and that option provides the customer with a material right"
            }
          ],
          "description": "PRC GAAP addresses situations where the customer may abandon (forfeit) contract rights, whereas IFRS B49 addresses renewal options that give the customer a material right. The triggers for special treatment are different.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "企业向客户预收销售商品款项的",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "for its performance obligation to transfer, or to stand ready to transfer, goods or services"
            }
          ],
          "description": "PRC GAAP Article 39 explicitly limits its scope to prepayments for '销售商品' (sales of goods), whereas IFRS B44 covers prepayments relating to both goods and services, including obligations to 'stand ready to transfer'.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "待履行了相关履约义务时再转为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "when it transfers those goods or services and, therefore, satisfies its performance obligation"
            }
          ],
          "description": "PRC refers to '履行相关履约义务' (fulfill the related performance obligation), while IFRS explicitly uses the performance obligation satisfaction concept ('satisfies its performance obligation') linked to the transfer of goods or services, which is the precise IFRS 15 vocabulary.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "将该款项确认为负债，待履行了相关履约义务时再转为收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the upfront fee is an advance payment for future goods or services and, therefore, would be recognised as revenue when those future goods or services are provided"
            }
          ],
          "description": "PRC GAAP explicitly frames the initial treatment as recognizing a liability that is later converted to revenue, while IFRS B49 frames it as an advance payment for future goods or services recognized as revenue when those items are provided. The conceptual framing differs (liability-to-revenue vs. advance payment).",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "企业向客户预收销售商品款项的，应当首先将该款项确认为负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall assess whether the fee relates to the transfer of a promised good or service"
            }
          ],
          "description": "IFRS B49 begins with a required assessment of whether the fee relates to a transfer of a promised good or service, whereas PRC GAAP Article 39 presumes liability treatment without requiring such an upfront assessment.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "无需退回，且客户可能会放弃其全部或部分合同权利",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In many cases, even though a non-refundable upfront fee relates to an activity that the entity is required to undertake at or near contract inception to fulfil the contract, that activity does not result in the transfer of a promised good or service to the customer (see paragraph 25)."
            }
          ],
          "description": "IFRS B49 specifically addresses setup activities performed at or near contract inception that do not transfer a promised good or service, a concept not explicitly addressed in PRC GAAP Article 39.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "第三十九条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "In accordance with paragraph 106"
            }
          ],
          "description": "IFRS B44 explicitly cross-references paragraph 106 of IFRS 15, which contains the core recognition principle, while PRC GAAP Article 39 is a standalone provision without an equivalent cross-reference.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 39,
          "sourceText": "（无示例引用）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer: Illustrative Examples, examples 53 and 16]"
            }
          ],
          "description": "IFRS B49 explicitly references Illustrative Examples 53 and 16 to illustrate the application of the principle, while PRC GAAP Article 39 does not cite any illustrative examples.",
          "importance": 2
        }
      ]
    },
    {
      "id": 35,
      "relationship": "SIMILAR",
      "confidence": 0.55,
      "notes": "",
      "source": {
        "id": 40,
        "framework": "PRC_GAAP",
        "number": "第四十条",
        "index": 40,
        "content": "企业在合同开始（或接近合同开始）日向客户收取的无需退回的初始费（如俱乐部的入会费等）应当计入交易价格。企业应当评估该初始费是否与向客户转让已承诺的商品相关。该初始费与向客户转让已承诺的商品相关，并且该商品构成单项履约义务的，企业应当在转让该商品时，按照分摊至该商品的交易价格确认收入；该初始费与向客户转让已承诺的商品相关，但该商品不构成单项履约义务的，企业应当在包含该商品的单项履约义务履行时，按照分摊至该单项履约义务的交易价格确认收入；该初始费与向客户转让已承诺的商品不相关的，该初始费应当作为未来将转让商品的预收款，在未来转让该商品时确认为收入。 企业收取了无需退回的初始费且为履行合同应开展初始活动，但这些活动本身并没有向客户转让已承诺的商品的，该初始费与未来将转让的已承诺商品相关，应当在未来转让该商品时确认为收入，企业在确定履约进度时不应考虑这些初始活动；企业为该初始活动发生的支出应当按照本准则第二十六条和第二十七条规定确认为一项资产或计入当期损益。 第六章 列报"
      },
      "mappedArticles": [
        {
          "id": 259,
          "framework": "IFRS",
          "number": "Paragraph 88",
          "index": 86,
          "content": "An entity shall allocate to the performance obligations in the contract any subsequent changes in the transaction price on the same basis as at contract inception. [Refer:Basis for Conclusions paragraph BC286] Consequently, an entity shall not reallocate the transaction price to reflect changes in stand-alone selling prices after contract inception. Amounts allocated to a satisfied performance obligation shall be recognised as revenue, or as a reduction of revenue, in the period in which the transaction price changes."
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "企业在合同开始（或接近合同开始）日向客户收取的无需退回的初始费（如俱乐部的入会费等）应当计入交易价格。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall allocate to the performance obligations in the contract any subsequent changes in the transaction price on the same basis as at contract inception."
            }
          ],
          "description": "PRC GAAP Article 40 addresses the treatment of non-refundable upfront fees collected at or near contract inception (e.g., club membership fees), whereas IFRS 15 Paragraph 88 addresses the allocation of subsequent changes in the transaction price after contract inception. The two provisions cover fundamentally different events in the contract lifecycle.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "该初始费与向客户转让已承诺的商品相关，并且该商品构成单项履约义务的，企业应当在转让该商品时，按照分摊至该商品的交易价格确认收入；该初始费与向客户转让已承诺的商品相关，但该商品不构成单项履约义务的，企业应当在包含该商品的单项履约义务履行时，按照分摊至该单项履约义务的交易价格确认收入；该初始费与向客户转让已承诺的商品不相关的，该初始费应当作为未来将转让商品的预收款，在未来转让该商品时确认为收入。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Amounts allocated to a satisfied performance obligation shall be recognised as revenue, or as a reduction of revenue, in the period in which the transaction price changes."
            }
          ],
          "description": "PRC GAAP establishes a three-branch test for revenue recognition of upfront fees based on whether the fee relates to promised goods and whether those goods constitute a separate performance obligation. IFRS 15 Paragraph 88, by contrast, only addresses that amounts allocated to an already-satisfied performance obligation must be recognized as revenue or a reduction of revenue in the period the transaction price changes, without providing the detailed upfront-fee analysis.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "企业为该初始活动发生的支出应当按照本准则第二十六条和第二十七条规定确认为一项资产或计入当期损益。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Consequently, an entity shall not reallocate the transaction price to reflect changes in stand-alone selling prices after contract inception."
            }
          ],
          "description": "PRC GAAP Article 40 contains an explicit requirement that costs incurred for initial set-up activities (which do not transfer promised goods) shall be recognized as an asset or expensed in current profit or loss in accordance with Articles 26 and 27. IFRS 15 Paragraph 88 contains no equivalent guidance on the accounting for related costs of activities; it only restricts reallocation based on stand-alone selling price changes.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "企业在确定履约进度时不应考虑这些初始活动",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "No corresponding requirement in the comparison snippet."
            }
          ],
          "description": "PRC GAAP specifically requires that initial set-up activities (which do not transfer promised goods) shall not be considered in determining the progress toward satisfaction of a performance obligation. IFRS 15 Paragraph 88 does not contain a corresponding prohibition, as it deals solely with transaction price reallocation.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "No corresponding requirement in the source snippet.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "an entity shall not reallocate the transaction price to reflect changes in stand-alone selling prices after contract inception."
            }
          ],
          "description": "IFRS 15 Paragraph 88 explicitly prohibits reallocating the transaction price to reflect changes in stand-alone selling prices after contract inception. PRC GAAP Article 40 contains no such prohibition, as its focus is on initial fee recognition rather than on constraining reallocation due to selling price changes.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "初始费（无需退回的初始费，如俱乐部的入会费）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "subsequent changes in the transaction price"
            }
          ],
          "description": "PRC GAAP uses the specific term '初始费' (upfront/non-refundable fee, with the example of a club membership fee), while IFRS 15 Paragraph 88 uses the term 'subsequent changes in the transaction price'. The terminology targets entirely different economic events.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "第六章 列报",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "No corresponding content in the comparison snippet."
            }
          ],
          "description": "The PRC GAAP snippet is positioned at the end of a chapter and references 'Chapter 6 Presentation' (第六章 列报), indicating it appears within a broader chapter structure. The IFRS 15 Paragraph 88 snippet is presented as a standalone paragraph within the Disclosure section of IFRS 15, with no equivalent chapter-heading context shown.",
          "importance": 1
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 40,
          "sourceText": "No corresponding cross-reference in the source snippet.",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraph BC286]"
            }
          ],
          "description": "IFRS 15 Paragraph 88 includes an explicit cross-reference to the Basis for Conclusions paragraph BC286, supporting the rationale for the allocation rule. The PRC GAAP Article 40 snippet contains no equivalent cross-reference to supporting interpretive material.",
          "importance": 1
        }
      ]
    },
    {
      "id": 41,
      "relationship": "SIMILAR",
      "confidence": 0.93,
      "notes": "",
      "source": {
        "id": 41,
        "framework": "PRC_GAAP",
        "number": "第四十一条",
        "index": 41,
        "content": "企业应当根据本企业履行履约义务与客户付款之间的关系在资产负债表中列示合同资产或合同负债。企业拥有的、无条件（即，仅取决于时间流逝）向客户收取对价的权利应当作为应收款项单独列示。 合同资产，是指企业已向客户转让商品而有权收取对价的权利，且该权利取决于时间流逝之外的其他因素。如企业向客户销售两项可明确区分的商品，企业因已交付其中一项商品而有权收取款项，但收取该款项还取决于企业交付另一项商品的，企业应当将该收款权利作为合同资产。 合同负债，是指企业已收或应收客户对价而应向客户转让商品的义务。如企业在转让承诺的商品之前已收取的款项。 按照本准则确认的合同资产的减值的计量和列报应当按照《企业会计准则第22号——金融工具确认和计量》和《企业会计准则第37号——金融工具列报》的规定进行会计处理。"
      },
      "mappedArticles": [
        {
          "id": 276,
          "framework": "IFRS",
          "number": "Paragraph 105",
          "index": 103,
          "content": "When either party to a contract has performed, an entity shall present the contract in the statement of financial position as a contract asset or a contract liability, depending on the relationship between the entity’s performance and the customer’s payment. An entity shall present any unconditional rights to consideration separately as a receivable."
        },
        {
          "id": 280,
          "framework": "IFRS",
          "number": "Paragraph 109",
          "index": 107,
          "content": "This Standard uses the terms ‘contract asset’ and ‘contract liability’ but does not prohibit an entity from using alternative descriptions in the statement of financial position for those items. If an entity uses an alternative description for a contract asset, the entity shall provide sufficient information for a user of the financial statements to distinguish between receivables and contract assets. [Refer:Basis for Conclusions paragraphs BC320] Disclosure"
        }
      ],
      "differences": [
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "按照本准则确认的合同资产的减值的计量和列报应当按照《企业会计准则第22号——金融工具确认和计量》和《企业会计准则第37号——金融工具列报》的规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC Article 41 explicitly requires that impairment of contract assets be measured and presented in accordance with CAS 22 (Financial Instruments: Recognition and Measurement) and CAS 37 (Financial Instruments: Presentation). IFRS 15 paragraph 105 contains no impairment requirement; the corresponding guidance in IFRS is found in IFRS 9 and is referenced elsewhere in IFRS 15.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "企业应当根据本企业履行履约义务与客户付款之间的关系在资产负债表中列示合同资产或合同负债。企业拥有的、无条件（即，仅取决于时间流逝）向客户收取对价的权利应当作为应收款项单独列示。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity uses an alternative description for a contract asset, the entity shall provide sufficient information for a user of the financial statements to distinguish between receivables and contract assets."
            }
          ],
          "description": "PRC GAAP Article 41 focuses on balance sheet presentation and classification rules (how to present contract assets, contract liabilities, and receivables), while IFRS 15 Paragraph 109 focuses narrowly on disclosure naming flexibility, allowing alternative labels provided users can distinguish the items.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "企业应当根据本企业履行履约义务与客户付款之间的关系在资产负债表中列示合同资产或合同负债。企业拥有的、无条件（即，仅取决于时间流逝）向客户收取对价的权利应当作为应收款项单独列示。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "This Standard uses the terms ‘contract asset’ and ‘contract liability’ but does not prohibit an entity from using alternative descriptions in the statement of financial position for those items."
            }
          ],
          "description": "PRC GAAP mandates that contract assets, contract liabilities, and unconditional receivables be presented as separate line items on the balance sheet, whereas IFRS 15 permits the use of alternative descriptions for these items, subject only to a requirement to provide sufficient information to distinguish receivables from contract assets.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "合同资产，是指企业已向客户转让商品而有权收取对价的权利，且该权利取决于时间流逝之外的其他因素。……合同负债，是指企业已收或应收客户对价而应向客户转让商品的义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When either party to a contract has performed, an entity shall present the contract in the statement of financial position as a contract asset or a contract liability"
            }
          ],
          "description": "PRC Article 41 includes full definitions of '合同资产' (contract asset) and '合同负债' (contract liability) within the same paragraph. IFRS 15 paragraph 105 contains only the presentation principle and does not include the definitions of contract assets and contract liabilities (those appear in other paragraphs of IFRS 15).",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "如企业向客户销售两项可明确区分的商品，企业因已交付其中一项商品而有权收取款项，但收取该款项还取决于企业交付另一项商品的，企业应当将该收款权利作为合同资产。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC provides a specific illustrative example: when an enterprise sells two clearly distinguishable goods, the right to consideration for the first delivered good is conditional on delivery of the second good and is therefore a contract asset. IFRS paragraph 105 contains no such example.",
          "importance": 4
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "按照本准则确认的合同资产的减值的计量和列报应当按照《企业会计准则第22号——金融工具确认和计量》和《企业会计准则第37号——金融工具列报》的规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "present any unconditional rights to consideration separately as a receivable"
            }
          ],
          "description": "PRC ties contract-asset impairment to specific Chinese accounting standards (CAS 22 and CAS 37), which are the equivalents of IFRS 9. IFRS 15 paragraph 105 does not cross-reference any other IFRS standard for impairment; the issue is addressed through IFRS 9 application guidance rather than within the revenue standard paragraph itself.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "合同资产，是指企业已向客户转让商品而有权收取对价的权利，且该权利取决于时间流逝之外的其他因素。 合同负债，是指企业已收或应收客户对价而应向客户转让商品的义务。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "This Standard uses the terms ‘contract asset’ and ‘contract liability’ but does not prohibit an entity from using alternative descriptions in the statement of financial position for those items."
            }
          ],
          "description": "PRC GAAP provides formal, substantive definitions of contract assets and contract liabilities within the article itself, whereas IFRS 15 Paragraph 109 does not define the terms but merely references them and addresses naming conventions used in financial statements.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "按照本准则确认的合同资产的减值的计量和列报应当按照《企业会计准则第22号——金融工具确认和计量》和《企业会计准则第37号——金融工具列报》的规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity uses an alternative description for a contract asset, the entity shall provide sufficient information for a user of the financial statements to distinguish between receivables and contract assets."
            }
          ],
          "description": "PRC GAAP explicitly requires that impairment measurement and presentation of contract assets be accounted for in accordance with CAS 22 (Financial Instruments: Recognition and Measurement) and CAS 37 (Financial Instruments: Presentation), while IFRS 15 Paragraph 109 does not address impairment, leaving it to other IFRS standards (e.g., IFRS 9) without restating the requirement in this paragraph.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "企业应当根据本企业履行履约义务与客户付款之间的关系在资产负债表中列示合同资产或合同负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When either party to a contract has performed, an entity shall present the contract in the statement of financial position as a contract asset or a contract liability, depending on the relationship between the entity’s performance and the customer’s payment."
            }
          ],
          "description": "PRC uses '履约义务' (performance obligations) as a noun concept tied to a specific defined term in the standard, while IFRS uses the past-tense verb 'performed' referring to actual performance. The PRC wording is more technical/definitional; IFRS wording is more general.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "企业拥有的、无条件（即，仅取决于时间流逝）向客户收取对价的权利",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "any unconditional rights to consideration"
            }
          ],
          "description": "PRC provides an inline clarification that 'unconditional' means 'depending only on the passage of time', explicitly defining the criterion. IFRS simply uses 'unconditional rights to consideration' without spelling out that the time-passage test is the determining condition.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "如企业在转让承诺的商品之前已收取的款项。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": ""
            }
          ],
          "description": "PRC provides a second illustrative example: payments received before the promised goods are transferred constitute contract liabilities. IFRS paragraph 105 contains no such example.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "企业应当根据本企业履行履约义务与客户付款之间的关系在资产负债表中列示合同资产或合同负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "When either party to a contract has performed, an entity shall present the contract in the statement of financial position as a contract asset or a contract liability, depending on the relationship between the entity’s performance and the customer’s payment."
            }
          ],
          "description": "IFRS adds the qualifier 'When either party to a contract has performed', establishing a precondition (performance by either party) before the presentation requirement applies. PRC's version focuses directly on the entity's relationship between its performance obligations and customer payment without explicitly stating the either-party precondition.",
          "importance": 3
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "如企业向客户销售两项可明确区分的商品，企业因已交付其中一项商品而有权收取款项，但收取该款项还取决于企业交付另一项商品的，企业应当将该收款权利作为合同资产。 如企业在转让承诺的商品之前已收取的款项。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC320]"
            }
          ],
          "description": "PRC GAAP Article 41 includes two illustrative examples: (1) sale of two distinct goods where collection depends on delivery of the other (contract asset), and (2) payment received before goods are transferred (contract liability). IFRS 15 Paragraph 109 contains no examples and only cross-references the Basis for Conclusions.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "按照本准则确认的合同资产的减值的计量和列报应当按照《企业会计准则第22号——金融工具确认和计量》和《企业会计准则第37号——金融工具列报》的规定进行会计处理。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC320]"
            }
          ],
          "description": "PRC GAAP cross-references two other domestic standards (CAS 22 and CAS 37) for impairment treatment, while IFRS 15 cross-references the Basis for Conclusions (paragraph BC320) which addresses the rationale for the disclosure-only requirement regarding alternative descriptions.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "在资产负债表中列示",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "present the contract in the statement of financial position"
            }
          ],
          "description": "PRC refers to '资产负债表' (balance sheet) while IFRS uses 'statement of financial position'. These terms are functionally equivalent but use different labels.",
          "importance": 1
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 41,
          "sourceText": "应收款项",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "receivable"
            }
          ],
          "description": "PRC uses '应收款项' (receivables), while IFRS uses the singular 'receivable'. The PRC term may imply a broader category of receivables rather than a single right.",
          "importance": 1
        }
      ]
    },
    {
      "id": 42,
      "relationship": "SIMILAR",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 42,
        "framework": "PRC_GAAP",
        "number": "第四十二条",
        "index": 42,
        "content": "企业应当在附注中披露与收入有关的下列信息：\n（一） 收入确认和计量所采用的会计政策、对于确定收入确认的时点和金额具有重大影响的判断以及这些判断的变更，包括确定履约进度的方法及采用该方法的原因、评估客户取得所转让商品控制权时点的相关判断，在确定交易价格、估计计入交易价格的可变对价、分摊交易价格以及计量预期将退还给客户的款项等类似义务时所采用的方法、输入值和假设等。\n（二） 与合同相关的下列信息： 1.与本期确认收入相关的信息，包括与客户之间的合同产生的收入、该收入按主要类别（如商品类型、经营地区、市场或客户类型、合同类型、商品转让的时间、合同期限、销售渠道等）分解的信息以及该分解信息与每一报告分部的收入之间的关系等。 2.与应收款项、合同资产和合同负债的账面价值相关的信息，包括与客户之间的合同产生的应收款项、合同资产和合同负债的期初和期末账面价值、对上述应收款项和合同资产确认的减值损失、在本期确认的包括在合同负债期初账面价值中的收入、前期已经履行（或部分履行）的履约义务在本期调整的收入、履行履约义务的时间与通常的付款时间之间的关系以及此类因素对合同资产和合同负债账面价值的影响的定量或定性信息、合同资产和合同负债的账面价值在本期内发生的重大变动情况等。 3.与履约义务相关的信息，包括履约义务通常的履行时间、重要的支付条款、企业承诺转让的商品的性质（包括说明企业是否作为代理人）、企业承担的预期将退还给客户的款项等类似义务、质量保证的类型及相关义务等。 4.与分摊至剩余履约义务的交易价格相关的信息，包括分摊至本期末尚未履行（或部分未履行）履约义务的交易价格总额、上述金额确认为收入的预计时间的定量或定性信息、未包括在交易价格的对价金额（如可变对价）等。\n（三） 与合同成本有关的资产相关的信息，包括确定该资产金额所做的判断、该资产的摊销方法、按该资产主要类别（如为取得合同发生的成本、为履行合同开展的初始活动发生的成本等）披露的期末账面价值以及本期确认的摊销及减值损失金额等。\n（四） 企业根据本准则第十七条规定因预计客户取得商品控制权与客户支付价款间隔未超过一年而未考虑合同中存在的重大融资成分，或者根据本准则第二十八条规定因合同取得成本的摊销期限未超过一年而将其在发生时计入当期损益的，应当披露该事实。 第七章 衔接规定"
      },
      "mappedArticles": [
        {
          "id": 287,
          "framework": "IFRS",
          "number": "Paragraph 116",
          "index": 114,
          "content": "An entity shall disclose all of the following: (a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
        },
        {
          "id": 289,
          "framework": "IFRS",
          "number": "Paragraph 118",
          "index": 116,
          "content": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period. The explanation shall include qualitative and quantitative information. Examples of changes in the entity’s balances of contract assets and contract liabilities include any of the following: (a) changes due to business combinations; (b) cumulative catch-up adjustments to revenue that affect the corresponding contract asset or contract liability, including adjustments arising from a change in the measure of progress, a change in an estimate of the transaction price (including any changes in the assessment of whether an estimate of variable consideration is constrained) or a contract modification; (c) impairment of a contract asset; (d) a change in the time frame for a right to consideration to become unconditional (ie for a contract asset to be reclassified to a receivable); and (e) a change in the time frame for a performance obligation to be satisfied (ie for the recognition of revenue arising from a contract liability). Performance obligations"
        },
        {
          "id": 290,
          "framework": "IFRS",
          "number": "Paragraph 119",
          "index": 117,
          "content": "(a) when the entity typically satisfies its performance obligations (for example, upon shipment, upon delivery, as services are rendered or upon completion of service), including when performance obligations are satisfied in a bill-and-hold arrangement; (b) the significant payment terms (for example, when payment is typically due, whether the contract has a significant financing component, whether the consideration amount is variable and whether the estimate of variable consideration is typically constrained in accordance with paragraphs 56–58); (c) the nature of the goods or services that the entity has promised to transfer, highlighting any performance obligations to arrange for another party to transfer goods or services (ie if the entity is acting as an agent); (d) obligations for returns, refunds and other similar obligations; and (e) types of warranties and related obligations. Transaction price allocated to the remaining performance obligations"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业应当在附注中披露与收入有关的下列信息：（一） 收入确认和计量所采用的会计政策、对于确定收入确认的时点和金额具有重大影响的判断以及这些判断的变更，包括确定履约进度的方法及采用该方法的原因、评估客户取得所转让商品控制权时点的相关判断，在确定交易价格、估计计入交易价格的可变对价、分摊交易价格以及计量预期将退还给客户的款项等类似义务时所采用的方法、输入值和假设等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall disclose all of the following: (a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP Article 42 covers the full scope of revenue-related disclosures including accounting policies, significant judgments, methods, inputs and assumptions used in determining performance progress, timing of control transfer, transaction price, variable consideration, and similar obligations. IFRS paragraph 116 does not include any requirements regarding disclosure of accounting policies, significant judgments, or the estimation methods/inputs/assumptions used in revenue recognition.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与本期确认收入相关的信息，包括与客户之间的合同产生的收入、该收入按主要类别（如商品类型、经营地区、市场或客户类型、合同类型、商品转让的时间、合同期限、销售渠道等）分解的信息以及该分解信息与每一报告分部的收入之间的关系等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall disclose all of the following: (a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers... (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP explicitly requires disaggregation of revenue by major categories (e.g., type of goods, geographical region, market or customer type, contract type, timing of transfer, contract term, distribution channel) and reconciliation of disaggregated revenue with each reporting segment's revenue. IFRS paragraph 116 contains no corresponding disaggregation requirement.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业应当在附注中披露与收入有关的下列信息：（一） 收入确认和计量所采用的会计政策、对于确定收入确认的时点和金额具有重大影响的判断以及这些判断的变更...（二） 与合同相关的下列信息...（三） 与合同成本有关的资产相关的信息...（四） ...因预计客户取得商品控制权与客户支付价款间隔未超过一年而未考虑合同中存在的重大融资成分...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP Article 42 establishes a comprehensive set of revenue-related disclosure requirements covering accounting policies, judgments, contract-related information, contract cost assets, and practical expedients. IFRS Paragraph 118 is narrowly scoped only to explanations of significant changes in contract asset and contract liability balances, and does not address any of the other disclosure topics included in PRC GAAP Article 42.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与本期确认收入相关的信息，包括与客户之间的合同产生的收入、该收入按主要类别（如商品类型、经营地区、市场或客户类型、合同类型、商品转让的时间、合同期限、销售渠道等）分解的信息以及该分解信息与每一报告分部的收入之间的关系等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP requires disaggregation of revenue by major categories (product type, region, market/customer type, contract type, timing of transfer, contract period, sales channel) and reconciliation to reportable segment revenue. IFRS Paragraph 118 contains no revenue disaggregation requirement.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "收入确认和计量所采用的会计政策、对于确定收入确认的时点和金额具有重大影响的判断以及这些判断的变更，包括确定履约进度的方法及采用该方法的原因、评估客户取得所转让商品控制权时点的相关判断，在确定交易价格、估计计入交易价格的可变对价、分摊交易价格以及计量预期将退还给客户的款项等类似义务时所采用的方法、输入值和假设等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP requires disclosure of accounting policies, significant judgments and changes in judgments for revenue recognition and measurement, including methods for determining performance progress, evaluating transfer of control, determining transaction price, estimating variable consideration, allocating transaction price, and measuring expected refunds, along with the inputs and assumptions used. IFRS Paragraph 118 does not address disclosure of accounting policies or judgments.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与履约义务相关的信息，包括履约义务通常的履行时间、重要的支付条款、企业承诺转让的商品的性质（包括说明企业是否作为代理人）、企业承担的预期将退还给客户的款项等类似义务、质量保证的类型及相关义务等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP requires detailed disclosure on performance obligations, including typical timing of satisfaction, significant payment terms, nature of promised goods (including principal vs. agent indication), expected refunds and similar obligations, and types of quality assurance. IFRS Paragraph 118 does not address performance obligation disclosures.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与分摊至剩余履约义务的交易价格相关的信息，包括分摊至本期末尚未履行（或部分未履行）履约义务的交易价格总额、上述金额确认为收入的预计时间的定量或定性信息、未包括在交易价格的对价金额（如可变对价）等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP requires disclosure of the transaction price allocated to remaining performance obligations, including the total amount, expected timing of recognition as revenue (quantitative or qualitative), and amounts of consideration excluded from transaction price (e.g., variable consideration). IFRS Paragraph 118 does not address remaining performance obligation disclosures.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业应当在附注中披露与收入有关的下列信息：（一） 收入确认和计量所采用的会计政策、对于确定收入确认的时点和金额具有重大影响的判断以及这些判断的变更……（二） 与合同相关的下列信息……（三） 与合同成本有关的资产相关的信息……（四）……因预计客户取得商品控制权与客户支付价款间隔未超过一年而未考虑合同中存在的重大融资成分……",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) when the entity typically satisfies its performance obligations (for example, upon shipment, upon delivery, as services are rendered or upon completion of service), including when performance obligations are satisfied in a bill-and-hold arrangement; (b) the significant payment terms……(c) the nature of the goods or services……(d) obligations for returns, refunds and other similar obligations; and (e) types of warranties and related obligations."
            }
          ],
          "description": "PRC GAAP Article 42 is a comprehensive revenue disclosure provision covering accounting policies, significant judgments, contract-related information (revenue disaggregation, contract assets/liabilities, performance obligations, remaining performance obligations), contract cost assets, and practical expedient disclosures. IFRS 119 is a narrower provision focused specifically on performance obligation disclosures (satisfaction timing, payment terms, nature of promised goods/services, return/refund obligations, warranties). PRC GAAP has a significantly broader scope within a single article.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与应收款项、合同资产和合同负债的账面价值相关的信息，包括与客户之间的合同产生的应收款项、合同资产和合同负债的期初和期末账面价值、对上述应收款项和合同资产确认的减值损失、在本期确认的包括在合同负债期初账面价值中的收入、前期已经履行（或部分履行）的履约义务在本期调整的收入、履行履约义务的时间与通常的付款时间之间的关系以及此类因素对合同资产和合同负债账面价值的影响的定量或定性信息、合同资产和合同负债的账面价值在本期内发生的重大变动情况等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP requires additional information beyond IFRS paragraph 116 regarding receivables, contract assets and contract liabilities, including: impairment losses recognized, the relationship between performance obligation timing and typical payment timing, quantitative or qualitative information on how such factors affect the carrying amounts of contract assets and contract liabilities, and significant changes during the period. IFRS 116(a) only requires opening/closing balances (and only if not separately presented).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与履约义务相关的信息，包括履约义务通常的履行时间、重要的支付条款、企业承诺转让的商品的性质（包括说明企业是否作为代理人）、企业承担的预期将退还给客户的款项等类似义务、质量保证的类型及相关义务等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP requires detailed information about performance obligations, including typical timing of satisfaction, significant payment terms, nature of goods promised (including whether the entity acts as principal or agent), expected refunds and similar obligations, and types/obligations of quality warranties. IFRS paragraph 116 does not contain these performance obligation disclosure requirements.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与分摊至剩余履约义务的交易价格相关的信息，包括分摊至本期末尚未履行（或部分未履行）履约义务的交易价格总额、上述金额确认为收入的预计时间的定量或定性信息、未包括在交易价格的对价金额（如可变对价）等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP requires disclosure of the transaction price allocated to remaining performance obligations, including the total amount allocated to unsatisfied (or partially unsatisfied) performance obligations at period end, quantitative or qualitative information about when these amounts are expected to be recognized as revenue, and consideration amounts not included in the transaction price (such as variable consideration). IFRS paragraph 116 has no corresponding requirement.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与合同成本有关的资产相关的信息，包括确定该资产金额所做的判断、该资产的摊销方法、按该资产主要类别（如为取得合同发生的成本、为履行合同开展的初始活动发生的成本等）披露的期末账面价值以及本期确认的摊销及减值损失金额等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall disclose all of the following: (a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP requires disclosure of contract cost assets, including judgments made in determining the asset amount, amortization methods, ending carrying amounts by major category (e.g., costs to obtain contracts, costs of initial activities to fulfill contracts), and amortization and impairment losses recognized during the period. IFRS paragraph 116 contains no requirements for disclosure of contract cost assets.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与应收款项、合同资产和合同负债的账面价值相关的信息，包括与客户之间的合同产生的应收款项、合同资产和合同负债的期初和期末账面价值...",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP specifically requires disclosure of the opening and closing book values of receivables, contract assets, and contract liabilities. IFRS Paragraph 118 focuses only on explanations of significant changes in balances, without mandating opening/closing book value disclosure in this paragraph.",
          "importance": 4
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "合同资产和合同负债的账面价值在本期内发生的重大变动情况等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Examples of changes in the entity’s balances of contract assets and contract liabilities include any of the following: (a) changes due to business combinations; (b) cumulative catch-up adjustments to revenue that affect the corresponding contract asset or contract liability, including adjustments arising from a change in the measure of progress, a change in an estimate of the transaction price (including any changes in the assessment of whether an estimate of variable consideration is constrained) or a contract modification; (c) impairment of a contract asset; (d) a change in the time frame for a right to consideration to become unconditional (ie for a contract asset to be reclassified to a receivable); and (e) a change in the time frame for a performance obligation to be satisfied (ie for the recognition of revenue arising from a contract liability)."
            }
          ],
          "description": "IFRS Paragraph 118 provides a specific enumerated list of examples of changes in contract asset/liability balances (business combinations, cumulative catch-up adjustments, impairment, changes in time frames). PRC GAAP only generally references 'significant changes' in book values without providing an illustrative enumerated list of change types.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与合同成本有关的资产相关的信息，包括确定该资产金额所做的判断、该资产的摊销方法、按该资产主要类别（如为取得合同发生的成本、为履行合同开展的初始活动发生的成本等）披露的期末账面价值以及本期确认的摊销及减值损失金额等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP requires disclosure of contract cost assets, including judgments made in determining the amount, amortization method, ending book value by major category (e.g., costs to obtain contracts, costs to fulfil contracts), and amortization/impairment recognized. IFRS Paragraph 118 does not address contract cost asset disclosures.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业根据本准则第十七条规定因预计客户取得商品控制权与客户支付价款间隔未超过一年而未考虑合同中存在的重大融资成分，或者根据本准则第二十八条规定因合同取得成本的摊销期限未超过一年而将其在发生时计入当期损益的，应当披露该事实。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation of the significant changes in the contract asset and the contract liability balances during the reporting period."
            }
          ],
          "description": "PRC GAAP requires disclosure of the use of practical expedients — specifically when an entity does not consider a significant financing component because the interval between transfer of control and payment does not exceed one year, or when contract acquisition costs are expensed as incurred because the amortization period does not exceed one year. IFRS Paragraph 118 does not address practical expedient disclosures.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "对上述应收款项和合同资产确认的减值损失、在本期确认的包括在合同负债期初账面价值中的收入、前期已经履行（或部分履行）的履约义务在本期调整的收入、履行履约义务的时间与通常的付款时间之间的关系以及此类因素对合同资产和合同负债账面价值的影响的定量或定性信息",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(c) impairment of a contract asset; (b) cumulative catch-up adjustments to revenue that affect the corresponding contract asset or contract liability... (d) a change in the time frame for a right to consideration to become unconditional... (e) a change in the time frame for a performance obligation to be satisfied..."
            }
          ],
          "description": "PRC GAAP explicitly requires disclosure of impairment losses recognized on receivables and contract assets, revenue recognized in the current period that was included in the opening balance of contract liabilities, revenue adjustments in the current period from obligations satisfied in prior (or partial prior) periods, and the relationship between performance timing and typical payment timing. While IFRS mentions impairment and cumulative catch-up adjustments as examples of changes, the PRC GAAP items are presented as standalone mandatory disclosures rather than illustrative examples.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "（一） 收入确认和计量所采用的会计政策、对于确定收入确认的时点和金额具有重大影响的判断以及这些判断的变更，包括确定履约进度的方法及采用该方法的原因、评估客户取得所转让商品控制权时点的相关判断，在确定交易价格、估计计入交易价格的可变对价、分摊交易价格以及计量预期将退还给客户的款项等类似义务时所采用的方法、输入值和假设等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) when the entity typically satisfies its performance obligations……(b) the significant payment terms……"
            }
          ],
          "description": "PRC GAAP explicitly requires disclosure of accounting policies for revenue recognition and measurement, significant judgments (including method for determining progress, transfer of control, estimating variable consideration, allocating transaction price, measuring refund obligations), inputs and assumptions used. IFRS 119 does not require disclosure of accounting policies or significant judgments in this paragraph (such requirements exist elsewhere in IFRS 15).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与本期确认收入相关的信息，包括与客户之间的合同产生的收入、该收入按主要类别（如商品类型、经营地区、市场或客户类型、合同类型、商品转让的时间、合同期限、销售渠道等）分解的信息以及该分解信息与每一报告分部的收入之间的关系等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) when the entity typically satisfies its performance obligations……"
            }
          ],
          "description": "PRC GAAP requires disaggregation of revenue by major categories (goods type, geographic region, market or customer type, contract type, timing of transfer, contract term, distribution channel) and reconciliation to segment revenue. IFRS 119 does not cover revenue disaggregation, which is addressed in a separate IFRS 15 paragraph (paragraph 114).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "与应收款项、合同资产和合同负债的账面价值相关的信息，包括与客户之间的合同产生的应收款项、合同资产和合同负债的期初和期末账面价值、对上述应收款项和合同资产确认的减值损失、在本期确认的包括在合同负债期初账面价值中的收入、前期已经履行（或部分履行）的履约义务在本期调整的收入……",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) when the entity typically satisfies its performance obligations……(d) obligations for returns, refunds and other similar obligations"
            }
          ],
          "description": "PRC GAAP requires detailed opening/closing reconciliation of receivables, contract assets, and contract liabilities, impairment losses recognized, revenue recognized from opening contract liability balances, and adjustments to previously satisfied performance obligations. IFRS 119 does not contain these contract balance disclosure requirements.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "（三） 与合同成本有关的资产相关的信息，包括确定该资产金额所做的判断、该资产的摊销方法、按该资产主要类别（如为取得合同发生的成本、为履行合同开展的初始活动发生的成本等）披露的期末账面价值以及本期确认的摊销及减值损失金额等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) when the entity typically satisfies its performance obligations……(e) types of warranties and related obligations."
            }
          ],
          "description": "PRC GAAP Article 42 requires specific disclosure of contract cost assets: judgments in determining amounts, amortization method, carrying amount by category (incremental costs of obtaining a contract, costs to fulfill a contract), and amortization/impairment recognized. IFRS 119 does not address contract cost asset disclosures.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业根据本准则第十七条规定因预计客户取得商品控制权与客户支付价款间隔未超过一年而未考虑合同中存在的重大融资成分，或者根据本准则第二十八条规定因合同取得成本的摊销期限未超过一年而将其在发生时计入当期损益的，应当披露该事实。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) the opening and closing balances of receivables, contract assets and contract liabilities from contracts with customers, if not otherwise separately presented or disclosed; (b) revenue recognised in the reporting period that was included in the contract liability balance at the beginning of the period; and (c) revenue recognised in the reporting period from performance obligations satisfied (or partially satisfied) in previous periods (for example, changes in transaction price)."
            }
          ],
          "description": "PRC GAAP requires disclosure of the fact that the entity applied the practical expedient for not considering significant financing components (when the interval between transfer of control and payment is expected to be less than one year) and for expensing contract acquisition costs as incurred (when the amortization period would be less than one year). IFRS paragraph 116 has no corresponding practical expedient disclosure requirement.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "合同资产和合同负债的账面价值在本期内发生的重大变动情况",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "if not otherwise separately presented or disclosed"
            }
          ],
          "description": "PRC GAAP specifically requires disclosure of significant changes in the carrying amounts of contract assets and contract liabilities during the period, and the opening and closing balances are required without an 'if not otherwise separately presented' qualifier. IFRS paragraph 116(a) only requires opening/closing balances if they are not already separately presented or disclosed elsewhere. This is a conditional requirement in IFRS versus a direct requirement in PRC GAAP for the changes disclosure.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "第四十二条... 第七章 衔接规定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Paragraph 116"
            }
          ],
          "description": "PRC GAAP Article 42 is the primary and comprehensive revenue disclosure article within a chapter that also includes transition provisions (Chapter 7). The IFRS text is paragraph 116 which is a single paragraph within IFRS 15 and represents only a subset of the disclosure requirements (which span paragraphs 110-129). The comparison scope is therefore inherently asymmetric—IFRS paragraph 116 covers only a portion of what PRC GAAP Article 42 addresses.",
          "importance": 3
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业应当在附注中披露与收入有关的下列信息",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall provide an explanation"
            }
          ],
          "description": "PRC GAAP uses a prescriptive, structured disclosure list with four numbered sub-paragraphs specifying required information. IFRS Paragraph 118 uses a single, principle-based requirement about explaining significant changes, supplemented by illustrative examples. The two standards use different drafting approaches (rule-based enumeration vs. principle-based with examples).",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "分摊至本期末尚未履行（或部分未履行）履约义务的交易价格总额、上述金额确认为收入的预计时间的定量或定性信息、未包括在交易价格的对价金额（如可变对价）等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Transaction price allocated to the remaining performance obligations"
            }
          ],
          "description": "PRC GAAP includes in Article 42 the requirement to disclose transaction price allocated to remaining performance obligations, expected timing of revenue recognition (quantitative or qualitative), and consideration excluded from transaction price (e.g., variable consideration). IFRS 119 references 'Transaction price allocated to the remaining performance obligations' as a separate subsequent section header, indicating it is covered in a different paragraph (IFRS 15 paragraph 120).",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "（四） 企业根据本准则第十七条规定因预计客户取得商品控制权与客户支付价款间隔未超过一年而未考虑合同中存在的重大融资成分，或者根据本准则第二十八条规定因合同取得成本的摊销期限未超过一年而将其在发生时计入当期损益的，应当披露该事实。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(b) the significant payment terms (for example, when payment is typically due, whether the contract has a significant financing component, whether the consideration amount is variable and whether the estimate of variable consideration is typically constrained in accordance with paragraphs 56–58)"
            }
          ],
          "description": "PRC GAAP explicitly requires disclosure when the practical expedient is applied for not considering a significant financing component (when transfer of control and payment are within one year) and when incremental contract costs are expensed (amortization period within one year). IFRS 119 mentions whether the contract has a significant financing component and the constraint on variable consideration estimates, but does not require disclosure of the use of the one-year practical expedient.",
          "importance": 3
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "合同资产和合同负债的账面价值在本期内发生的重大变动情况等。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(a) when the entity typically satisfies its performance obligations……(d) obligations for returns, refunds and other similar obligations"
            }
          ],
          "description": "PRC GAAP requires explanation of significant changes in contract assets and contract liabilities carrying amounts during the period, and qualitative/quantitative information on the relationship between timing of satisfying performance obligations and typical payment timing. IFRS 119 does not contain these disclosure requirements.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "合同负债期初账面价值中的收入",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "contract liability balance at the beginning of the period"
            }
          ],
          "description": "Both frameworks use essentially equivalent terminology for contract liabilities and the opening balance concept, though PRC GAAP uses the more literal phrasing 'opening carrying amount of contract liability' (期初账面价值) while IFRS uses 'contract liability balance at the beginning of the period'. The meaning is equivalent but wording differs.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "履约义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "performance obligations"
            }
          ],
          "description": "Both standards use the concept of 'performance obligation' (履约义务 / performance obligations), but terminology and supporting definitions are anchored in their respective conceptual frameworks with different detailed guidance.",
          "importance": 2
        },
        {
          "type": "EXAMPLE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "（一） 收入确认和计量所采用的会计政策……评估客户取得所转让商品控制权时点的相关判断",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "including when performance obligations are satisfied in a bill-and-hold arrangement"
            }
          ],
          "description": "IFRS 119 explicitly includes 'bill-and-hold arrangement' as an example of when performance obligations are typically satisfied. PRC GAAP Article 42 does not specifically mention bill-and-hold arrangements as a disclosure example.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "质量保证的类型及相关义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(e) types of warranties and related obligations."
            }
          ],
          "description": "Both standards require disclosure of types of warranties and related obligations, but PRC GAAP presents this within a broader bundle of performance obligation information, while IFRS 119 lists it as a discrete required disclosure item (e).",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业承诺转让的商品的性质（包括说明企业是否作为代理人）",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(c) the nature of the goods or services that the entity has promised to transfer, highlighting any performance obligations to arrange for another party to transfer goods or services (ie if the entity is acting as an agent)"
            }
          ],
          "description": "Both standards require disclosure about the nature of promised goods/services and the entity's role as principal or agent. IFRS 119 uses the term 'goods or services' while PRC GAAP uses 'goods' (商品) only, potentially indicating a narrower scope in PRC GAAP wording.",
          "importance": 2
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "企业承担的预期将退还给客户的款项等类似义务",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "(d) obligations for returns, refunds and other similar obligations"
            }
          ],
          "description": "Both standards require disclosure of obligations for returns and refunds, but PRC GAAP specifies 'expected refunds to customers and similar obligations' (预期将退还给客户的款项等类似义务), while IFRS 119 uses the broader term 'obligations for returns, refunds and other similar obligations'. The PRC formulation emphasizes expected customer refunds specifically.",
          "importance": 2
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "合同资产和合同负债",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "contract asset and the contract liability"
            }
          ],
          "description": "Both standards use the same concept names ('合同资产' / '合同负债' and 'contract asset' / 'contract liability'), with consistent terminology. No substantive terminology difference for these core terms.",
          "importance": 1
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 42,
          "sourceText": "第七章 衔接规定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Transaction price allocated to the remaining performance obligations"
            }
          ],
          "description": "PRC GAAP Article 42 is positioned at the end of a chapter that transitions into 'Chapter 7 Transition Provisions' (第七章 衔接规定), indicating it serves as a transition/bridge to the next chapter. IFRS 119 appears as part of a structured disclosure section with a separate heading for remaining performance obligations, reflecting IFRS 15's structured organization.",
          "importance": 1
        }
      ]
    },
    {
      "id": 43,
      "relationship": "SIMILAR",
      "confidence": 0.88,
      "notes": "",
      "source": {
        "id": 43,
        "framework": "PRC_GAAP",
        "number": "第四十三条",
        "index": 43,
        "content": "首次执行本准则的企业，应当根据首次执行本准则的累积影响数，调整首次执行本准则当年年初留存收益及财务报表其他相关项目金额，对可比期间信息不予调整。企业可以仅对在首次执行日尚未完成的合同的累积影响数进行调整。同时，企业应当在附注中披露，与收入相关会计准则制度的原规定相比，执行本准则对当期财务报表相关项目的影响金额，如有重大影响的，还需披露其原因。 已完成的合同，是指企业按照与收入相关会计准则制度的原规定已完成合同中全部商品的转让的合同。尚未完成的合同，是指除已完成的合同之外的其他合同。"
      },
      "mappedArticles": [
        {
          "id": 388,
          "framework": "IFRS",
          "number": "Paragraph C1",
          "index": 215,
          "content": "An entity shall apply this Standard for annual reporting periods beginning on or after 1 January 2018. [Refer:Basis for Conclusions paragraphs BC446–BC451 and BC453 A–BC453 H] Earlier application is permitted. [Refer:Basis for Conclusions paragraphs BC452, BC453 and BC453 G–BC453 H] If an entity applies this Standard earlier, it shall disclose that fact. C1 B Clarifications to IFRS 15 Revenue from Contracts with Customers, issued in April 2016, amended paragraphs 26, 27, 29, B1, B34–B38, B52–B53, B58, C2, C5 and C7, deleted paragraph B57 and added paragraphs B34 A, B35 A, B35 B, B37 A, B59 A, B63 A, B63 B, C7 A and C8 A. An entity shall apply those amendments for annual reporting periods beginning on or after 1 January 2018. [Refer:Basis for Conclusions paragraph BC453 I] Earlier application is permitted. [Refer:Basis for Conclusions paragraph BC453 J] If an entity applies those amendments for an earlier period, it shall disclose that fact. C1 C IFRS 17, issued in May 2017, amended paragraph 5. An entity shall apply that amendment when it applies IFRS 17. Transition"
        },
        {
          "id": 389,
          "framework": "IFRS",
          "number": "Paragraph C2",
          "index": 216,
          "content": "For the purposes of the transition requirements in paragraphs C3–C8 A: (a) the date of initial application is the start of the reporting period in which an entity first applies this Standard; and (b) a completed contract is a contract for which the entity has transferred all of the goods or services identified in accordance with IAS 11 Construction Contracts, IAS 18 Revenue and related Interpretations. [Refer:Basis for Conclusions paragraphs BC445 A–BC445 I]"
        }
      ],
      "differences": [
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "首次执行本准则的企业，应当根据首次执行本准则的累积影响数，调整首次执行本准则当年年初留存收益及财务报表其他相关项目金额，对可比期间信息不予调整。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply this Standard for annual reporting periods beginning on or after 1 January 2018. Earlier application is permitted."
            }
          ],
          "description": "PRC_GAAP specifies the transition method (cumulative effect adjustment to opening retained earnings without restating comparatives), while IFRS C1 only states the effective date and permits earlier application without prescribing the transition method itself.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "企业可以仅对在首次执行日尚未完成的合同的累积影响数进行调整。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply this Standard for annual reporting periods beginning on or after 1 January 2018."
            }
          ],
          "description": "PRC_GAAP provides a specific transition relief allowing adjustment only for incomplete contracts at the date of initial application; IFRS C1 does not address this transition relief at the paragraph level shown.",
          "importance": 5
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "首次执行本准则的企业，应当根据首次执行本准则的累积影响数，调整首次执行本准则当年年初留存收益及财务报表其他相关项目金额，对可比期间信息不予调整。企业可以仅对在首次执行日尚未完成的合同的累积影响数进行调整。同时，企业应当在附注中披露，与收入相关会计准则制度的原规定相比，执行本准则对当期财务报表相关项目的影响金额，如有重大影响的，还需披露其原因。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For the purposes of the transition requirements in paragraphs C3–C8 A: (a) the date of initial application is the start of the reporting period in which an entity first applies this Standard; and (b) a completed contract is a contract for which the entity has transferred all of the goods or services identified in accordance with IAS 11 Construction Contracts, IAS 18 Revenue and related Interpretations."
            }
          ],
          "description": "PRC GAAP Article 43 contains both substantive transition requirements (cumulative effect adjustment, no restatement of comparatives, optional modification for incomplete contracts, and disclosure obligations) within a single article, while IFRS Paragraph C2 only contains definitional provisions that support transition requirements set out elsewhere in paragraphs C3–C8A.",
          "importance": 5
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "企业应当在附注中披露，与收入相关会计准则制度的原规定相比，执行本准则对当期财务报表相关项目的影响金额，如有重大影响的，还需披露其原因。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "If an entity applies this Standard earlier, it shall disclose that fact."
            }
          ],
          "description": "PRC_GAAP requires disclosure of the impact on current period financial statement items compared to previous revenue standards, plus reasons for material impacts. IFRS C1 only requires disclosure of the fact of earlier application, not detailed impact analysis.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "已完成的合同，是指企业按照与收入相关会计准则制度的原规定已完成合同中全部商品的转让的合同。尚未完成的合同，是指除已完成的合同之外的其他合同。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "C1 B Clarifications to IFRS 15 Revenue from Contracts with Customers, issued in April 2016, amended paragraphs 26, 27, 29, B1, B34–B38, B52–B53, B58, C2, C5 and C7, deleted paragraph B57 and added paragraphs B34 A, B35 A, B35 B, B37 A, B59 A, B63 A, B63 B, C7 A and C8 A."
            }
          ],
          "description": "PRC_GAAP defines 'completed contracts' and 'incomplete contracts' based on whether all goods under the contract have been transferred under the previous revenue standard. IFRS C1 makes no such definitions and instead references subsequent amendments to the Standard.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "对比期间信息不予调整",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "Earlier application is permitted. If an entity applies this Standard earlier, it shall disclose that fact."
            }
          ],
          "description": "PRC_GAAP explicitly states that comparable period information shall not be adjusted (prospective approach). IFRS C1 does not address comparative restatement in this paragraph.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "调整首次执行本准则当年年初留存收益及财务报表其他相关项目金额",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply those amendments for annual reporting periods beginning on or after 1 January 2018."
            }
          ],
          "description": "PRC_GAAP specifies which financial statement items must be adjusted (opening retained earnings and other related items), whereas IFRS C1 only mandates the application date without specifying the financial statement line items affected.",
          "importance": 4
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "已完成的合同，是指企业按照与收入相关会计准则制度的原规定已完成合同中全部商品的转让的合同。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a completed contract is a contract for which the entity has transferred all of the goods or services identified in accordance with IAS 11 Construction Contracts, IAS 18 Revenue and related Interpretations."
            }
          ],
          "description": "PRC GAAP defines a completed contract as one where 'all of the goods' (全部商品) have been transferred, while IFRS refers to 'all of the goods or services' (all goods or services identified). IFRS explicitly includes 'services' whereas PRC GAAP only mentions 'goods' (商品).",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "企业应当根据首次执行本准则的累积影响数，调整首次执行本准则当年年初留存收益及财务报表其他相关项目金额，对可比期间信息不予调整。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For the purposes of the transition requirements in paragraphs C3–C8 A:"
            }
          ],
          "description": "PRC GAAP explicitly mandates the cumulative effect adjustment to beginning retained earnings and other financial statement items, and explicitly prohibits restatement of comparable period information. The IFRS snippet does not contain these substantive requirements, which are located in paragraphs C3–C8A.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "企业可以仅对在首次执行日尚未完成的合同的累积影响数进行调整。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For the purposes of the transition requirements in paragraphs C3–C8 A"
            }
          ],
          "description": "PRC GAAP provides an explicit option allowing entities to limit the cumulative effect adjustment to only contracts that are not yet completed at the date of initial application. This practical expedient is not addressed in the IFRS snippet, although it may be contained in the referenced C3–C8A paragraphs.",
          "importance": 4
        },
        {
          "type": "REQUIREMENT",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "企业应当在附注中披露，与收入相关会计准则制度的原规定相比，执行本准则对当期财务报表相关项目的影响金额，如有重大影响的，还需披露其原因。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "For the purposes of the transition requirements in paragraphs C3–C8 A"
            }
          ],
          "description": "PRC GAAP explicitly requires disclosure in the notes comparing the impact of the new standard on current period financial statement items against the previous revenue-related accounting standards, and additionally requires disclosure of the reasons when the impact is material. The IFRS snippet does not contain any disclosure requirements.",
          "importance": 4
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "首次执行本准则的企业",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "An entity shall apply this Standard for annual reporting periods beginning on or after 1 January 2018."
            }
          ],
          "description": "PRC_GAAP specifically addresses first-time adopters of the standard, whereas IFRS C1 applies to all entities applying the standard regardless of whether it is their first-time adoption.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "首次执行日",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "the date of initial application is the start of the reporting period in which an entity first applies this Standard"
            }
          ],
          "description": "IFRS Paragraph C2(a) explicitly defines 'date of initial application' as the start of the reporting period in which an entity first applies the Standard, while PRC GAAP Article 43 uses the term '首次执行日' (date of first execution) without providing an explicit definition.",
          "importance": 3
        },
        {
          "type": "TERMINOLOGY",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "与收入相关会计准则制度的原规定",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "IAS 11 Construction Contracts, IAS 18 Revenue and related Interpretations"
            }
          ],
          "description": "PRC GAAP references 'the original provisions of revenue-related accounting standards' (与收入相关会计准则制度的原规定) generically, whereas IFRS specifically identifies the predecessor standards: IAS 11 Construction Contracts, IAS 18 Revenue, and the related Interpretations.",
          "importance": 3
        },
        {
          "type": "SCOPE",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "第四十三条",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "C1 B Clarifications to IFRS 15 Revenue from Contracts with Customers, issued in April 2016"
            }
          ],
          "description": "PRC_GAAP does not reference any subsequent amendments or clarifications within this paragraph. IFRS C1 includes references to April 2016 Clarifications and May 2017 IFRS 17 amendments affecting the standard.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "本准则",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "this Standard"
            }
          ],
          "description": "PRC_GAAP uses '本准则' (this Standard) without naming the specific standard, while IFRS refers explicitly to 'IFRS 15 Revenue from Contracts with Customers' in the context of the 2016 Clarifications.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "已完成的合同，是指企业按照与收入相关会计准则制度的原规定已完成合同中全部商品的转让的合同。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "[Refer:Basis for Conclusions paragraphs BC445 A–BC445 I]"
            }
          ],
          "description": "IFRS Paragraph C2 includes a cross-reference to the Basis for Conclusions (paragraphs BC445A–BC445I), which provides the rationale for the completed contract practical expedient. PRC GAAP Article 43 contains no equivalent reference to basis-for-conclusions or supplementary explanatory material.",
          "importance": 2
        },
        {
          "type": "OTHER",
          "sourceFramework": "PRC_GAAP",
          "sourceArticleId": 43,
          "sourceText": "尚未完成的合同，是指除已完成的合同之外的其他合同。",
          "comparisonFrameworks": [
            "IFRS"
          ],
          "comparisonSnippets": [
            {
              "framework": "IFRS",
              "snippet": "a completed contract is a contract for which the entity has transferred all of the goods or services identified in accordance with IAS 11 Construction Contracts, IAS 18 Revenue and related Interpretations."
            }
          ],
          "description": "PRC GAAP Article 43 explicitly defines 'incomplete contract' (尚未完成的合同) as any contract other than a completed contract, providing a residual definition. The IFRS snippet does not contain an equivalent explicit definition of incomplete contracts.",
          "importance": 2
        }
      ]
    },
    {
      "id": 44,
      "relationship": "NO_MATCH",
      "confidence": 0.95,
      "notes": "",
      "source": {
        "id": 44,
        "framework": "PRC_GAAP",
        "number": "第四十四条",
        "index": 44,
        "content": "对于最早可比期间期初之前或首次执行本准则当年年初之前发生的合同变更，企业可予以简化处理，即无需按照本准则第八条规定进行追溯调整，而是根据合同变更的最终安排，识别已履行的和尚未履行的履约义务、确定交易价格以及在已履行的和尚未履行的履约义务之间分摊交易价格。 企业采用该简化处理方法的，应当对所有合同一致采用，并且在附注中披露该事实以及在合理范围内对采用该简化处理方法的影响所作的定性分析。 第八章 附则"
      },
      "mappedArticles": [],
      "differences": []
    },
    {
      "id": 45,
      "relationship": "EQUIVALENT",
      "confidence": 0.99,
      "notes": "",
      "source": {
        "id": 45,
        "framework": "PRC_GAAP",
        "number": "第四十五条",
        "index": 45,
        "content": "本准则自2018年1月1日起施行。"
      },
      "mappedArticles": [
        {
          "id": 388,
          "framework": "IFRS",
          "number": "Paragraph C1",
          "index": 215,
          "content": "An entity shall apply this Standard for annual reporting periods beginning on or after 1 January 2018. [Refer:Basis for Conclusions paragraphs BC446–BC451 and BC453 A–BC453 H] Earlier application is permitted. [Refer:Basis for Conclusions paragraphs BC452, BC453 and BC453 G–BC453 H] If an entity applies this Standard earlier, it shall disclose that fact. C1 B Clarifications to IFRS 15 Revenue from Contracts with Customers, issued in April 2016, amended paragraphs 26, 27, 29, B1, B34–B38, B52–B53, B58, C2, C5 and C7, deleted paragraph B57 and added paragraphs B34 A, B35 A, B35 B, B37 A, B59 A, B63 A, B63 B, C7 A and C8 A. An entity shall apply those amendments for annual reporting periods beginning on or after 1 January 2018. [Refer:Basis for Conclusions paragraph BC453 I] Earlier application is permitted. [Refer:Basis for Conclusions paragraph BC453 J] If an entity applies those amendments for an earlier period, it shall disclose that fact. C1 C IFRS 17, issued in May 2017, amended paragraph 5. An entity shall apply that amendment when it applies IFRS 17. Transition"
        }
      ],
      "differences": []
    }
  ]
};
