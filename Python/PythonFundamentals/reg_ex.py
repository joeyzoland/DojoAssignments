# string = "velo"
# if re.search(r"v.*v", string):
#     print "Yes"
# else:
#     print "No"

import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches

print (get_matching_words(r"v"))
print (get_matching_words(r"ss"))
print (get_matching_words(r"e\b"))
print (get_matching_words(r"b.b"))
print (get_matching_words(r"b..*b"))
print (get_matching_words(r"b.*b"))
print (get_matching_words(r"a.*e.*i.*o.*u"))
print (get_matching_words(r"^[regularexpression]*$"))
print (get_matching_words(r"([a-zA-Z])\1"))
