from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
	context = {
		# "leagues": League.objects.all(),
		# "teams": Team.objects.all(),
		# "players": Player.objects.all(),
		# "leagues":League.objects.filter(sport = "Baseball")	#...all baseball leagues
		#"leagues":League.objects.filter(name__contains = "Womens'")
		#"leagues":League.objects.filter(sport__contains = "hockey")
		#"leagues":League.objects.exclude(sport__contains = "football")
		#"leagues":League.objects.filter(name__contains = "conference")
		#"leagues" : League.objects.filter(name__contains = "atlantic")
		#"teams":Team.objects.filter(location = "Dallas")
		#"teams" : Team.objects.filter(team_name__contains = "raptor")
		#"teams" : Team.objects.filter(location__contains = "city")
		#"teams" : Team.objects.all().order_by('location')
		#"teams" : Team.objects.all().order_by('team_name').reverse()
		#"players":Player.objects.filter(last_name = "Cooper")
		#"players":Player.objects.filter(first_name = "Joshua")
		#"players":Player.objects.filter(last_name = "Cooper").exclude(first_name="Joshua")
		#players":Player.objects.filter(first_name = "Wyatt")|Player.objects.filter(first_name = "Alexander")



	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
